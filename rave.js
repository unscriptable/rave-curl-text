/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

var text = require('curl/plugin/text');

exports.create = create;

function create (context) {
	if (!context.amdPluginMap) context.amdPluginMap = {};
	context.amdPluginMap.text = 'curl/plugin/text';
}
