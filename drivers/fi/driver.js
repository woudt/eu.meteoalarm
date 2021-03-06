'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDriver extends Homey.Driver {

    onInit() {
        Meteoalarm.driverInit(this, 'fi');
    }

    onPair( socket ) {
        Meteoalarm.driverPair(socket, 'fi')
    }

}

module.exports = MeteoalarmDriver;
