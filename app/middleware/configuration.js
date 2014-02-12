"use strict";

var nconf = require('nconf');

function Config(){
    nconf.argv().env('_');
    var environment = nconf.get('NODE:ENV') || 'development';
    environment = environment.toLowerCase();
    var path = "";
    if (isIISNodeEnvironment()) {
        path = 'D:/';
    }
    nconf.file(environment, path + 'config/' + environment + '.json');
}

Config.prototype.get = function(key) {
    if (key === "iisnode") {
        return isIISNodeEnvironment();
    }
    return nconf.get(key);
};

function isIISNodeEnvironment() {
    var environment = nconf.get('NODE:ENV') || 'development';
    environment = environment.toLowerCase();
    if (environment === "staging" || environment === "production") {
        return true;
    }
    return false;
};

module.exports = new Config();
