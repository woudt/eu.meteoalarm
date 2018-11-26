#!/bin/sh
for a in at ba be bg ch cy cz de dk ee es fi fr gr hr hu ie il is it lt lu lv md me mk mt no pl pt ro rs se si sk uk
do
cat drivers/nl/driver.js | sed s/nl/$a/ > drivers/$a/driver.js
cat drivers/nl/device.js | sed s/nl/$a/ > drivers/$a/device.js
done
