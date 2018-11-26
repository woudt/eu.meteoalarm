'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDriver extends Homey.Driver {

    onInit() {
        Meteoalarm.driverInit(this, 'ba');
    }

    onPair( socket ) {
        Meteoalarm.driverPair(socket, 'ba')
    }

}

module.exports = MeteoalarmDriver;
