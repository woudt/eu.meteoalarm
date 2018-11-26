'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDriver extends Homey.Driver {

    onInit() {
        Meteoalarm.driverInit(this, 'gr');
    }

    onPair( socket ) {
        Meteoalarm.driverPair(socket, 'gr')
    }

}

module.exports = MeteoalarmDriver;
