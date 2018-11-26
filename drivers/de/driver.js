'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDriver extends Homey.Driver {

    onInit() {
        Meteoalarm.driverInit(this, 'de');
    }

    onPair( socket ) {
        Meteoalarm.driverPair(socket, 'de')
    }

}

module.exports = MeteoalarmDriver;
