'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDriver extends Homey.Driver {

    onInit() {
        Meteoalarm.driverInit(this, 'hu');
    }

    onPair( socket ) {
        Meteoalarm.driverPair(socket, 'hu')
    }

}

module.exports = MeteoalarmDriver;
