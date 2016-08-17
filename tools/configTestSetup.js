/* eslint-disable no-var */

process.env.NODE_ENV = 'test'; // Hot Reloading are disable in test mode

require('babel-register'); // Transpile all the ES6 test files to ES5

// Disable webpack features in test mode
require.extensions['.css'] = function () { return null; };
require.extensions['.png'] = function () { return null; };
require.extensions['.jpg'] = function () { return null; };

// jsdom will allow us to test the React Components without having to open the browser.
var jsdom = require('jsdom').jsdom;

// These Global variables are useful for DOM-based testing in React
var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
	if(typeof global[property] === 'undefined') {
		exposedProperties.push(property);
		global[property] = document.defaultView[property];
	}
});

global.navigator = {
	userAgent: 'node.js'
};

/* eslint-disable no-undef*/

documentRef = document;