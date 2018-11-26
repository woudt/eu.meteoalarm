'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDriver extends Homey.Driver {

    onInit() {
        Meteoalarm.driverInit(this, 'dk');
    }

    onPair( socket ) {
        Meteoalarm.driverPair(socket, 'dk')
    }

}

module.exports = MeteoalarmDriver;
