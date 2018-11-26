'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDriver extends Homey.Driver {

    onInit() {
        Meteoalarm.driverInit(this, 'rs');
    }

    onPair( socket ) {
        Meteoalarm.driverPair(socket, 'rs')
    }

}

module.exports = MeteoalarmDriver;
