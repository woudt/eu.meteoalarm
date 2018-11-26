'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDriver extends Homey.Driver {

    onInit() {
        Meteoalarm.driverInit(this, 'lt');
    }

    onPair( socket ) {
        Meteoalarm.driverPair(socket, 'lt')
    }

}

module.exports = MeteoalarmDriver;
