'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDriver extends Homey.Driver {

    onInit() {
        Meteoalarm.driverInit(this, 'ie');
    }

    onPair( socket ) {
        Meteoalarm.driverPair(socket, 'ie')
    }

}

module.exports = MeteoalarmDriver;
