'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDriver extends Homey.Driver {

    onInit() {
        Meteoalarm.driverInit(this, 'lu');
    }

    onPair( socket ) {
        Meteoalarm.driverPair(socket, 'lu')
    }

}

module.exports = MeteoalarmDriver;
