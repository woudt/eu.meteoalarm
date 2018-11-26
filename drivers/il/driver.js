'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDriver extends Homey.Driver {

    onInit() {
        Meteoalarm.driverInit(this, 'il');
    }

    onPair( socket ) {
        Meteoalarm.driverPair(socket, 'il')
    }

}

module.exports = MeteoalarmDriver;
