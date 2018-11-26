'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDriver extends Homey.Driver {

    onInit() {
        Meteoalarm.driverInit(this, 'si');
    }

    onPair( socket ) {
        Meteoalarm.driverPair(socket, 'si')
    }

}

module.exports = MeteoalarmDriver;
