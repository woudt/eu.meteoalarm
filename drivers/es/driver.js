'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDriver extends Homey.Driver {

    onInit() {
        Meteoalarm.driverInit(this, 'es');
    }

    onPair( socket ) {
        Meteoalarm.driverPair(socket, 'es')
    }

}

module.exports = MeteoalarmDriver;
