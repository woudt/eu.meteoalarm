'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDriver extends Homey.Driver {

    onInit() {
        Meteoalarm.driverInit(this, 'mk');
    }

    onPair( socket ) {
        Meteoalarm.driverPair(socket, 'mk')
    }

}

module.exports = MeteoalarmDriver;
