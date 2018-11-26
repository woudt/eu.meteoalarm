'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDriver extends Homey.Driver {

    onInit() {
        Meteoalarm.driverInit(this, 'lv');
    }

    onPair( socket ) {
        Meteoalarm.driverPair(socket, 'lv')
    }

}

module.exports = MeteoalarmDriver;
