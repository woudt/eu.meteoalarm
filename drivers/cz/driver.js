'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDriver extends Homey.Driver {

    onInit() {
        Meteoalarm.driverInit(this, 'cz');
    }

    onPair( socket ) {
        Meteoalarm.driverPair(socket, 'cz')
    }

}

module.exports = MeteoalarmDriver;
