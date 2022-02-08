const extend = require('../lib/extend');
const fz = require('../converters/fromZigbee');
const exposes = require('../lib/exposes');
const e = exposes.presets;

module.exports = [
    {
        zigbeeModel: ['PROLIGHT E27 WHITE AND COLOUR'],
        model: '5412748727388',
        vendor: 'Prolight',
        description: 'E27 white and colour bulb',
        extend: extend.light_onoff_brightness_colortemp_color(),
    },
    {
        zigbeeModel: ['PROLIGHT E27 WARM WHITE CLEAR'],
        model: '5412748727432',
        vendor: 'Prolight',
        description: 'E27 filament bulb dimmable',
        extend: extend.light_onoff_brightness(),
    },
    {
        zigbeeModel: ['PROLIGHT E27 WARM WHITE'],
        model: '5412748727364',
        vendor: 'Prolight',
        description: 'E27 bulb dimmable',
        extend: extend.light_onoff_brightness(),
    },
    {
        zigbeeModel: ['PROLIGHT GU10 WHITE AND COLOUR'],
        model: '5412748727401',
        vendor: 'Prolight',
        description: 'GU10 white and colour spot',
        extend: extend.light_onoff_brightness_colortemp_color({colorTempRange: [153, 555]}),
    },
    {
        zigbeeModel: ['PROLIGHT REMOTE CONTROL'],
        model: 'PROLIGHT_REMOTE_CONTROL',
        vendor: 'Prolight',
        description: 'Remote control',
        toZigbee: [],
        fromZigbee: [fz.command_on, fz.command_off, fz.command_move_to_level],
        exposes: [e.action(['on', 'off', 'brightness_move_up', 'brightness_move_down'])],
    },
];
