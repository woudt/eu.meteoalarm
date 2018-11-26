'use strict';

const Homey = require('homey');

class MeteoalarmApp extends Homey.App {
	
	onInit() {
		this.log('Meteoalarm is running...');
		let cond;
		['at', 'ba', 'be', 'bg', 'ch', 'cy', 'cz', 'de', 'dk', 'ee',
		 'es', 'fi', 'fr', 'gr', 'hr', 'hu', 'ie', 'il', 'is', 'it',
		 'lt', 'lu', 'lv', 'md', 'me', 'mk', 'mt', 'nl', 'no', 'pl',
		 'pt', 'ro', 'rs', 'se', 'si', 'sk', 'uk'].forEach(country => {

			cond = new Homey.FlowCardCondition('overall_today_'+country);
			cond.register().registerRunListener(( args, state ) => {
				if (args.device.state) {
					if (args.device.state.today.overall == args.state) {
						return Promise.resolve( true );
					}
				}
				return Promise.resolve( false );
			})
			cond = new Homey.FlowCardCondition('overall_tomorrow_'+country);
			cond.register().registerRunListener(( args, state ) => {
				if (args.device.state) {
					if (args.device.state.tomorrow.overall == args.state) {
						return Promise.resolve( true );
					}
				}
				return Promise.resolve( false );
			})
			cond = new Homey.FlowCardCondition('specific_today_'+country);
			cond.register().registerRunListener(( args, state ) => {
				if (args.device.state) {
					if (args.device.state.today[args.type] == args.state) {
						return Promise.resolve( true );
					}
				}
				return Promise.resolve( false );
			})
			cond = new Homey.FlowCardCondition('specific_tomorrow_'+country);
			cond.register().registerRunListener(( args, state ) => {
				if (args.device.state) {
					if (args.device.state.tomorrow[args.type] == args.state) {
						return Promise.resolve( true );
					}
				}
				return Promise.resolve( false );
			})
		})
	}

}

module.exports = MeteoalarmApp;