'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDriver extends Homey.Driver {

    onInit() {
        Meteoalarm.driverInit(this, 'it');
    }

    onPair( socket ) {
        Meteoalarm.driverPair(socket, 'it')
    }

}

module.exports = MeteoalarmDriver;
