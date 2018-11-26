'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDriver extends Homey.Driver {

    onInit() {
        Meteoalarm.driverInit(this, 'ch');
    }

    onPair( socket ) {
        Meteoalarm.driverPair(socket, 'ch')
    }

}

module.exports = MeteoalarmDriver;
