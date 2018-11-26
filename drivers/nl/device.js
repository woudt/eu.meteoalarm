'use strict';

const Homey = require('homey');
const Meteoalarm = require('../../lib/meteoalarm.js');

class MeteoalarmDevice extends Homey.Device {

    onInit() {
        Meteoalarm.deviceInit(this);
    }

    onDeleted() {
        Meteoalarm.deviceDelete(this);
    }

}

module.exports = MeteoalarmDevice;