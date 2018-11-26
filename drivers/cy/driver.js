'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDriver extends Homey.Driver {

    onInit() {
        Meteoalarm.driverInit(this, 'cy');
    }

    onPair( socket ) {
        Meteoalarm.driverPair(socket, 'cy')
    }

}

module.exports = MeteoalarmDriver;
