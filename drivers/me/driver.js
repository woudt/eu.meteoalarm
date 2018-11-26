'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDriver extends Homey.Driver {

    onInit() {
        Meteoalarm.driverInit(this, 'me');
    }

    onPair( socket ) {
        Meteoalarm.driverPair(socket, 'me')
    }

}

module.exports = MeteoalarmDriver;
