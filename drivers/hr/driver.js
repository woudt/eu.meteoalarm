'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDriver extends Homey.Driver {

    onInit() {
        Meteoalarm.driverInit(this, 'hr');
    }

    onPair( socket ) {
        Meteoalarm.driverPair(socket, 'hr')
    }

}

module.exports = MeteoalarmDriver;
