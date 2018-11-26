'use strict';

const Homey = require('homey');
const Parser = require('rss-parser');
const parser = new Parser();
const patternRegular = /[A-Z][A-Z][0-7][0-9][0-9]/;
const patternCoast = /[A-Z][A-Z][8-9][0-9][0-9]/;
const patternToday = /.*Tomorrow/;
const patternTomorrow = /Tomorrow.*/;
const patternFlag = /wflag-l[0-9]+-t[0-9]+.jpg/g;
const patternNumber = /[0-9]+/g;

exports.deviceInit = function (obj) {

    obj.log('device init');
    obj.log('name:', obj.getName());

    obj.myid = obj.getData()['id'];
    obj.url = 'http://meteoalarm.eu/documents/rss/' + 
                obj.myid.substring(0,2).toLowerCase() + 
                '/' + obj.myid + '.rss'
    obj.log('url:', obj.url);

    trigger_update();
    obj.interval = setInterval(trigger_update.bind(obj), 5 * 60 * 1000);

    function trigger_update() {

        let driver = obj.getDriver();
        driver.ready(() => {

            (async () => {

                let feed = await parser.parseURL(obj.url);
                let state = {
                    today: {
                        overall: '1',
                        1: '1',
                        2: '1',
                        3: '1',
                        4: '1',
                        5: '1',
                        6: '1',
                        7: '1',
                        8: '1',
                        9: '1',
                        10: '1',
                        12: '1',
                        13: '1'
                    },
                    tomorrow: {
                        overall: '1',
                        1: '1',
                        2: '1',
                        3: '1',
                        4: '1',
                        5: '1',
                        6: '1',
                        7: '1',
                        8: '1',
                        9: '1',
                        10: '1',
                        12: '1',
                        13: '1'
                    }
                }
    
                feed.items.forEach(item => {
                    let today = item.content.match(patternToday);
                    let tomorrow = item.content.match(patternTomorrow);
                    today.forEach(desc => {
                        let flags = desc.match(patternFlag);
                        flags.forEach(flag => {
                            let numbers = flag.match(patternNumber);
                            if (numbers[0] > state.today.overall) {
                                state.today.overall = numbers[0];
                            }
                            if (numbers[0] > state.today[numbers[1]]) {
                                state.today[numbers[1]] = numbers[0];
                            }
                        })
                    });
                    tomorrow.forEach(desc => {
                        let flags = desc.match(patternFlag);
                        flags.forEach(flag => {
                            let numbers = flag.match(patternNumber);
                            if (numbers[0] > state.tomorrow.overall) {
                                state.tomorrow.overall = numbers[0];
                            }
                            if (numbers[0] > state.tomorrow[numbers[1]]) {
                                state.tomorrow[numbers[1]] = numbers[0];
                            }
                        })
                    });
                });
                if (obj.state) {
                    if (JSON.stringify(obj.state) !== JSON.stringify(state)) {
                        obj.state = state;
                        driver.triggerStateChanged( obj, {}, {} );
                        obj.log(obj.myid, "Changed", JSON.stringify(state));
                    } else {
                        obj.log(obj.myid, "Unchanged");
                    }
                } else {
                    obj.state = state;
                    driver.triggerStateChanged( obj, {}, {} );
                    obj.log(obj.myid, "Started", JSON.stringify(state));
                }
    
            })();

        });
    }

}

exports.deviceDelete = function (obj) {

    obj.log('device deleted');
    clearInterval(obj.interval);

}

exports.driverInit = function (obj, country) {

    obj._flowTriggerStateChanged = 
        new Homey.FlowCardTriggerDevice('state_changed_'+country).register()

    obj.triggerStateChanged = function ( device, tokens, state ) {
        obj._flowTriggerStateChanged
            .trigger( device, tokens, state )
                .then( )
                .catch( obj.error )
    }

}

exports.driverPair = function(socket, country) {

    socket.on('list_devices', function( data, callback ) {

        (async () => {

            let devices = [];
            let url = 'http://meteoalarm.eu/documents/rss/' + country + '.rss'
            let feed = await parser.parseURL(url);

            feed.items.forEach(item => {
                let found = item.link.match(patternRegular);
                if (found) {
                    devices.push({
                        "name": item.title,
                        "data": {"id": found[0]},
                        "icon": "meteoalarm.svg"
                    })
                }
            });

            feed.items.forEach(item => {
                let found = item.link.match(patternCoast);
                if (found) {
                    devices.push({
                        "name": item.title + ' (' + Homey.__('driver.coast') + ')',
                        "data": {"id": found[0]},
                        "icon": "meteoalarm.svg"
                    })
                }
            });

            callback( null, devices );

        })();

    });

}
