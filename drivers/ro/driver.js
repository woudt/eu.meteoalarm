'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDriver extends Homey.Driver {

    onInit() {
        Meteoalarm.driverInit(this, 'ro');
    }

    onPair( socket ) {
        Meteoalarm.driverPair(socket, 'ro')
    }

}

module.exports = MeteoalarmDriver;
