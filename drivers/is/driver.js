'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDriver extends Homey.Driver {

    onInit() {
        Meteoalarm.driverInit(this, 'is');
    }

    onPair( socket ) {
        Meteoalarm.driverPair(socket, 'is')
    }

}

module.exports = MeteoalarmDriver;
