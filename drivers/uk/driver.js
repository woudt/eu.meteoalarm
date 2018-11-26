'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDriver extends Homey.Driver {

    onInit() {
        Meteoalarm.driverInit(this, 'uk');
    }

    onPair( socket ) {
        Meteoalarm.driverPair(socket, 'uk')
    }

}

module.exports = MeteoalarmDriver;
