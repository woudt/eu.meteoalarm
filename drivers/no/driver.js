'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDriver extends Homey.Driver {

    onInit() {
        Meteoalarm.driverInit(this, 'no');
    }

    onPair( socket ) {
        Meteoalarm.driverPair(socket, 'no')
    }

}

module.exports = MeteoalarmDriver;
