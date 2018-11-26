#!/bin/bash

cat > app.json << END
{
  "id": "eu.meteoalarm",
  "version": "0.1.0",
  "compatibility": ">=1.5.0",
  "sdk": 2,
  "brandColor": "#003C73",
  "name": {
    "en": "Meteoalarm",
    "nl": "Meteoalarm"
  },
  "description": {
    "en": "Weather alerts from european countries from EUMETNET - Meteoalarm",
    "nl": "Weerswaarschuwingen van het KNMI en andere europese landen via EUMETNET - Meteoalarm"
  },
  "category": [
    "internet",
    "climate"
  ],
  "tags": {
    "en": [ "weather", "alert", "eumetnet", "meteoalarm", 
            "zamg", "rmi", "dhmz", "cymet", "chmi", "dmi", "estea", "fmi",
            "meteo-france", "dwd", "hnms", "omsz", "imo", "met eireann",
            "itaf-remet", "legmc", "meteolux", "ihms", "knmi", "mamo", 
            "met norway", "imgw-pib", "ipma", "rhmss", "shmu", "arso", "aemet",
            "smhi", "meteoswiss", "hms", "mo", "met office" ],
    "nl": [ "weer", "waarschuwing", "eumetnet", "meteoalarm",
            "zamg", "rmi", "dhmz", "cymet", "chmi", "dmi", "estea", "fmi",
            "meteo-france", "dwd", "hnms", "omsz", "imo", "met eireann",
            "itaf-remet", "legmc", "meteolux", "ihms", "knmi", "mamo", 
            "met norway", "imgw-pib", "ipma", "rhmss", "shmu", "arso", "aemet",
            "smhi", "meteoswiss", "hms", "mo", "met office" ]
  },
  "images": {
    "large": "assets/images/large.png",
    "small": "assets/images/small.png"
  },
  "permissions": [],
  "author": {
    "name": "Edwin Woudt",
    "email": "edwin@woudt.nl"
  },
  "contributing": {
    "donate": {
      "paypal": {
        "username": "edwinwoudt"
      }
    }
  },
  "drivers": [
END

id[1]="at"
en[1]="AT - Austria"
nl[1]="AT - Oostenrijk"
id[2]="ba"
en[2]="BA - Bosnia and Herzegovina"
nl[2]="BA - Bosnië en Herzegovina"
id[3]="be"
en[3]="BE - Belgium"
nl[3]="BE - België"
id[4]="bg"
en[4]="BG - Bulgaria"
nl[4]="BG - Bulgarije"
id[5]="ch"
en[5]="CH - Switzerland"
nl[5]="CH - Zwitserland"
id[6]="cy"
en[6]="CY - Cyprus"
nl[6]="CY - Cyprus"
id[7]="cz"
en[7]="CZ - Czech Republic"
nl[7]="CZ - Tsjechië"
id[8]="de"
en[8]="DE - Germany"
nl[8]="DE - Duitsland"
id[9]="dk"
en[9]="DK - Denmark"
nl[9]="DK - Denemarken"
id[10]="ee"
en[10]="EE - Estonia"
nl[10]="EE - Estland"
id[11]="es"
en[11]="ES - Spain"
nl[11]="ES - Spanje"
id[12]="fi"
en[12]="FI - Finland"
nl[12]="FI - Finland"
id[13]="fr"
en[13]="FR - France"
nl[13]="FR - Frankrijk"
id[14]="gr"
en[14]="GR - Greece"
nl[14]="GR - Griekenland"
id[15]="hr"
en[15]="HR - Croatia"
nl[15]="HR - Kroatië"
id[16]="hu"
en[16]="HU - Hungary"
nl[16]="HU - Hongarije"
id[17]="ie"
en[17]="IE - Ireland"
nl[17]="IE - Ierland"
id[18]="il"
en[18]="IL - Israel"
nl[18]="IL - Israël"
id[19]="is"
en[19]="IS - Iceland"
nl[19]="IS - IJsland"
id[20]="it"
en[20]="IT - Italy"
nl[20]="IT - Italië"
id[21]="lt"
en[21]="LT - Lithuania"
nl[21]="LT - Litouwen"
id[22]="lu"
en[22]="LU - Luxembourg"
nl[22]="LU - Luxemburg"
id[23]="lv"
en[23]="LV - Latvia"
nl[23]="LV - Letland"
id[24]="md"
en[24]="MD - Moldova"
nl[24]="MD - Moldavië"
id[25]="me"
en[25]="ME - Montenegro"
nl[25]="ME - Montenegro"
id[26]="mk"
en[26]="MK - Macedonia (FYROM)"
nl[26]="MK - Macedonië"
id[27]="mt"
en[27]="MT - Malta"
nl[27]="MT - Malta"
id[28]="nl"
en[28]="NL - Netherlands"
nl[28]="NL - Nederland"
id[29]="no"
en[29]="NO - Norway"
nl[29]="NO - Noorwegen"
id[30]="pl"
en[30]="PL - Poland"
nl[30]="PL - Polen"
id[31]="pt"
en[31]="PT - Portugal"
nl[31]="PT - Portugal"
id[32]="ro"
en[32]="RO - Romania"
nl[32]="RO - Roemenië"
id[33]="rs"
en[33]="RS - Serbia"
nl[33]="RS - Servië"
id[34]="se"
en[34]="SE - Sweden"
nl[34]="SE - Zweden"
id[35]="si"
en[35]="SI - Slovenia"
nl[35]="SI - Slovenië"
id[36]="sk"
en[36]="SK - Slovakia"
nl[36]="SK - Slowakije"
id[37]="uk"
en[37]="UK - United Kingdom"
nl[37]="UK - Verenigd Koninkrijk"

for index in 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37
do

if [ "$index" != "1" ]
then
echo "    ," >> app.json
fi

cat >> app.json << END
    {
      "id": "${id[index]}",
      "name": {
        "en": "${en[index]}",
        "nl": "${nl[index]}"
      },
      "images": {
        "large": "drivers/${id[index]}/assets/images/large.png",
        "small": "drivers/${id[index]}/assets/images/small.png"
      },
      "class": "sensor",
      "capabilities": [
      ],
      "pair": [
        {
          "id": "list_devices",
          "template": "list_devices",
          "navigation": {
              "next": "add_my_devices"
          },
          "options": {
            "singular": true
          }
        },
        {
          "id": "add_my_devices",
          "template": "add_devices"
        }
      ]
    }
END

done

cat >> app.json << END
  ],
  "flow": {
    "triggers": [
END

for index in 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37
do

if [ "$index" != "1" ]
then
echo "      ," >> app.json
fi

cat >> app.json << END
      {
        "id": "state_changed_${id[index]}",
        "title": {
          "en": "The alert state changed",
          "nl": "De toestand is veranderd"
        },
        "args": [
          {
            "name": "device",
            "type": "device",
            "filter": "driver_id=${id[index]}"
          }
        ]
      }
END

done

cat >> app.json << END
    ],
    "conditions": [
END

for index in 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37
do

if [ "$index" != "1" ]
then
echo "      ," >> app.json
fi

cat >> app.json << END
      {
        "id": "overall_today_${id[index]}",
        "title": {
          "en": "Maximum today !{{is|is not}}:",
          "nl": "Maximum vandaag !{{is|is niet}}:"
        },
        "args": [
          {
            "name": "device",
            "type": "device",
            "filter": "driver_id=${id[index]}"
          },
          {
            "name": "state",
            "type": "dropdown",
            "values": [
              {
                "id": "1",
                "label": {
                  "en": "green",
                  "nl": "groen"
                }
              },
              {
                "id": "2",
                "label": {
                  "en": "yellow",
                  "nl": "geel"
                }
              },
              {
                "id": "3",
                "label": {
                  "en": "orange",
                  "nl": "oranje"
                }
              },
              {
                "id": "4",
                "label": {
                  "en": "red",
                  "nl": "rood"
                }
END
if [ "${id[index]}" == "de" ]
then
cat >> app.json << END
              },
              {
                "id": "5",
                "label": {
                  "en": "magenta",
                  "nl": "magenta"
                }
END
fi
cat >> app.json << END
              }
            ]
          }
        ]
      },
      {
        "id": "specific_today_${id[index]}",
        "title": {
          "en": "Maximum today !{{is|is not}}:",
          "nl": "Maximum vandaag !{{is|is niet}}:"
        },
        "args": [
          {
            "name": "device",
            "type": "device",
            "filter": "driver_id=${id[index]}"
          },
          {
            "name": "type",
            "type": "dropdown",
            "values": [
              {
                "id": "1",
                "label": {
                  "en": "wind",
                  "nl": "wind"
                }
              },
              {
                "id": "2",
                "label": {
                  "en": "snow/ice",
                  "nl": "sneeuw/ijzel/bevriezing"
                }
              },
              {
                "id": "3",
                "label": {
                  "en": "thunderstorms",
                  "nl": "onweer"
                }
              },
              {
                "id": "4",
                "label": {
                  "en": "fog",
                  "nl": "mist"
                }
              },
              {
                "id": "5",
                "label": {
                  "en": "high temperature",
                  "nl": "hitte"
                }
              },
              {
                "id": "6",
                "label": {
                  "en": "low temperature",
                  "nl": "koude"
                }
              },
              {
                "id": "7",
                "label": {
                  "en": "coastal event",
                  "nl": "kustbedreiging"
                }
              },
              {
                "id": "8",
                "label": {
                  "en": "forest fire",
                  "nl": "bos- en heidebranden "
                }
              },
              {
                "id": "9",
                "label": {
                  "en": "avalanches",
                  "nl": "lawines"
                }
              },
              {
                "id": "10",
                "label": {
                  "en": "rain",
                  "nl": "regen"
                }
              },
              {
                "id": "12",
                "label": {
                  "en": "flood",
                  "nl": "overstroming"
                }
              },
              {
                "id": "13",
                "label": {
                  "en": "rain-flood",
                  "nl": "regen-overstroming"
                }
              }
            ]
          },
          {
            "name": "state",
            "type": "dropdown",
            "values": [
              {
                "id": "1",
                "label": {
                  "en": "green",
                  "nl": "groen"
                }
              },
              {
                "id": "2",
                "label": {
                  "en": "yellow",
                  "nl": "geel"
                }
              },
              {
                "id": "3",
                "label": {
                  "en": "orange",
                  "nl": "oranje"
                }
              },
              {
                "id": "4",
                "label": {
                  "en": "red",
                  "nl": "rood"
                }
END
if [ "${id[index]}" == "de" ]
then
cat >> app.json << END
              },
              {
                "id": "5",
                "label": {
                  "en": "magenta",
                  "nl": "magenta"
                }
END
fi
cat >> app.json << END
              }
            ]
          }
        ]
      },
      {
        "id": "overall_tomorrow_${id[index]}",
        "title": {
          "en": "Maximum tomorrow !{{is|is not}}:",
          "nl": "Maximum morgen !{{is|is niet}}:"
        },
        "args": [
          {
            "name": "device",
            "type": "device",
            "filter": "driver_id=${id[index]}"
          },
          {
            "name": "state",
            "type": "dropdown",
            "values": [
              {
                "id": "1",
                "label": {
                  "en": "green",
                  "nl": "groen"
                }
              },
              {
                "id": "2",
                "label": {
                  "en": "yellow",
                  "nl": "geel"
                }
              },
              {
                "id": "3",
                "label": {
                  "en": "orange",
                  "nl": "oranje"
                }
              },
              {
                "id": "4",
                "label": {
                  "en": "red",
                  "nl": "rood"
                }
END
if [ "${id[index]}" == "de" ]
then
cat >> app.json << END
              },
              {
                "id": "5",
                "label": {
                  "en": "magenta",
                  "nl": "magenta"
                }
END
fi
cat >> app.json << END
              }
            ]
          }
        ]
      },
      {
        "id": "specific_tomorrow_${id[index]}",
        "title": {
          "en": "Maximum tomorrow !{{is|is not}}:",
          "nl": "Maximum morgen !{{is|is niet}}:"
        },
        "args": [
          {
            "name": "device",
            "type": "device",
            "filter": "driver_id=${id[index]}"
          },
          {
            "name": "type",
            "type": "dropdown",
            "values": [
              {
                "id": "1",
                "label": {
                  "en": "wind",
                  "nl": "wind"
                }
              },
              {
                "id": "2",
                "label": {
                  "en": "snow/ice",
                  "nl": "sneeuw/ijzel/bevriezing"
                }
              },
              {
                "id": "3",
                "label": {
                  "en": "thunderstorms",
                  "nl": "onweer"
                }
              },
              {
                "id": "4",
                "label": {
                  "en": "fog",
                  "nl": "mist"
                }
              },
              {
                "id": "5",
                "label": {
                  "en": "high temperature",
                  "nl": "hitte"
                }
              },
              {
                "id": "6",
                "label": {
                  "en": "low temperature",
                  "nl": "koude"
                }
              },
              {
                "id": "7",
                "label": {
                  "en": "coastal event",
                  "nl": "kustbedreiging"
                }
              },
              {
                "id": "8",
                "label": {
                  "en": "forest fire",
                  "nl": "bos- en heidebranden "
                }
              },
              {
                "id": "9",
                "label": {
                  "en": "avalanches",
                  "nl": "lawines"
                }
              },
              {
                "id": "10",
                "label": {
                  "en": "rain",
                  "nl": "regen"
                }
              },
              {
                "id": "12",
                "label": {
                  "en": "flood",
                  "nl": "overstroming"
                }
              },
              {
                "id": "13",
                "label": {
                  "en": "rain-flood",
                  "nl": "regen-overstroming"
                }
              }
            ]
          },
          {
            "name": "state",
            "type": "dropdown",
            "values": [
              {
                "id": "1",
                "label": {
                  "en": "green",
                  "nl": "groen"
                }
              },
              {
                "id": "2",
                "label": {
                  "en": "yellow",
                  "nl": "geel"
                }
              },
              {
                "id": "3",
                "label": {
                  "en": "orange",
                  "nl": "oranje"
                }
              },
              {
                "id": "4",
                "label": {
                  "en": "red",
                  "nl": "rood"
                }
END
if [ "${id[index]}" == "de" ]
then
cat >> app.json << END
              },
              {
                "id": "5",
                "label": {
                  "en": "magenta",
                  "nl": "magenta"
                }
END
fi
cat >> app.json << END
              }
            ]
          }
        ]
      }
END

done

cat >> app.json << END
    ]
  }
}
END