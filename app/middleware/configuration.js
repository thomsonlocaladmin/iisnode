"use strict";

var nconf = require('nconf');

function Config(){
    nconf.argv().env('_');
    var environment = nconf.get('NODE:ENV') || 'development';
    console.log("test env:  " + environment);
}

Config.prototype.get = function(key) {
    return nconf.get(key);
};

module.exports = new Config();
