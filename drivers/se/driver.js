'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDriver extends Homey.Driver {

    onInit() {
        Meteoalarm.driverInit(this, 'se');
    }

    onPair( socket ) {
        Meteoalarm.driverPair(socket, 'se')
    }

}

module.exports = MeteoalarmDriver;
