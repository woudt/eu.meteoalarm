'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDriver extends Homey.Driver {

    onInit() {
        Meteoalarm.driverInit(this, 'md');
    }

    onPair( socket ) {
        Meteoalarm.driverPair(socket, 'md')
    }

}

module.exports = MeteoalarmDriver;
