'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDriver extends Homey.Driver {

    onInit() {
        Meteoalarm.driverInit(this, 'nl');
    }

    onPair( socket ) {
        Meteoalarm.driverPair(socket, 'nl')
    }

}

module.exports = MeteoalarmDriver;