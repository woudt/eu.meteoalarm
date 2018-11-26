'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDriver extends Homey.Driver {

    onInit() {
        Meteoalarm.driverInit(this, 'at');
    }

    onPair( socket ) {
        Meteoalarm.driverPair(socket, 'at')
    }

}

module.exports = MeteoalarmDriver;
