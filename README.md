### Meteoalarm app for homey
This app allows you to work with weather alerts from 37 European countries.

For example, you could:
- Put a yellow, orange or red color on the led ring in case of an alert
- Open your outside sunblinds in case of a wind alert
- Send yourself a message in case extreme weather is forecast

Data is updated every five minutes. Please read the disclaimers below!

##### Documentation
Triggers:
- I have been a bit lazy and inplemented only one trigger, which fires every
  time something has changed. You can then use conditions to check for the
  specific alert level you are looking for.
- Beware that this trigger may also fire in case of only a change in a
  specific awareness type (e.g. wind or fog) and that the overall level or
  specific level you are checking for may not have changed at all!

Conditions are available for different timeframes:
- The maximum level for today: includes also future alerts, but no past alerts
- The maximum level for tomorrow

The conditions check for these levels:
- Green: No particular awareness of the weather is required.
- Yellow: The weather is potentially dangerous. The weather phenomena that 
  have been forecast are not unusual, but be attentive if you intend to 
  practice activities exposed to meteorological risks. Keep informed about 
  the expected meteorological conditions and do not take any avoidable risk.
- Orange: The weather is dangerous. Unusual meteorological phenomena have been 
  forecast. Damage and casualties are likely to happen. Be very vigilant and 
  keep regularly informed about the detailed expected meteorological 
  conditions. Be aware of the risks that might be unavoidable. Follow any 
  advice given by your authorities.
- Red: The weather is very dangerous. Exceptionally intense meteorological 
  phenomena have been forecast. Major damage and accidents are likely, in many
  cases with threat to life and limb, over a wide area. Keep frequently
  informed about detailed expected meteorological conditions and risks. 
  Follow orders and any advice given by your authorities under all 
  circumstances, be prepared for extraordinary measures.
- Magenta: This level is available in Germany only, who use a more detailed
  scale where magenta is even above red: from least to most dangerous:
  Green -> Yellow -> Orange -> Red -> Magenta.

Conditions are available for the following awareness types:
- Overall: this is the maximum of all of the below types
- Wind
- Snow/Ice
- Thunderstorms
- Fog
- Extreme high temperature
- Extreme low temperature
- Coastal event
- Forest fire
- Avalanches
- Rain
- Flood
- Rain-flood
Note that not all conditions work in all countries. Once you navigate to a
country page on <https://www.meteoalarm.eu>, you will see which conditions are
available in that country.

Speech:
- Is not supported yet. Any volunteers?

##### Disclaimers
You should not rely on this app for any critical activity. There can be many
reasons why this app will not alert you in a timely and/or proper matter:
- issues with your internet connectivity
- issues with the www.meteoalarm.eu website
- issues with your Homey
- issues with my programming

The author is not liable for any damage that results while using this app or 
when this app does not work as advertised. 

Time delays between this app and the www.meteoalarm.eu website are possible
(alerts are updated every five minutes, but delays are possible e.g. in case of
connection issues). For the most up to date information about alert levels 
as published by the participating National Meteorological Services please use 
<https://www.meteoalarm.eu>

##### Credits
* Alert data from EUMETNET – MeteoAlarm - <https://www.meteoalarm.eu/>
* App icon made from <https://www.onlinewebfonts.com/icon> is licensed by CC BY 3.0
* Free map icons from <https://github.com/djaiss/mapsicon>
