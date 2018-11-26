'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDriver extends Homey.Driver {

    onInit() {
        Meteoalarm.driverInit(this, 'pt');
    }

    onPair( socket ) {
        Meteoalarm.driverPair(socket, 'pt')
    }

}

module.exports = MeteoalarmDriver;
