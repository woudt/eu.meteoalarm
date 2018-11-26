'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDriver extends Homey.Driver {

    onInit() {
        Meteoalarm.driverInit(this, 'be');
    }

    onPair( socket ) {
        Meteoalarm.driverPair(socket, 'be')
    }

}

module.exports = MeteoalarmDriver;
