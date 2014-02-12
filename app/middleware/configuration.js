"use strict";

var nconf = require('nconf');

function Config(){
    nconf.argv().env('_');
    var environment = getEnvironment();
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
    if (key === "environment") {
        return getEnvironment();
    }
    return nconf.get(key);
};

function getEnvironment() {
    var environment = nconf.get('NODE:ENV') || 'development';
    return environment.toLowerCase();
};

function isIISNodeEnvironment() {
    var environment = getEnvironment();
    if (environment === "staging" || environment === "production") {
        return true;
    }
    return false;
};

module.exports = new Config();
