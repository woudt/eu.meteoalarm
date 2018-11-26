'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDriver extends Homey.Driver {

    onInit() {
        Meteoalarm.driverInit(this, 'ee');
    }

    onPair( socket ) {
        Meteoalarm.driverPair(socket, 'ee')
    }

}

module.exports = MeteoalarmDriver;
