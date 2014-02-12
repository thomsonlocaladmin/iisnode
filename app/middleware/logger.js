"use strict";

var winston = require('winston'),
    config = require('../middleware/configuration');

function Logger(){
    return winston.add(winston.transports.File, {
        filename: config.get('logger:filename'),
        maxsize: 1048576,   //1MB
        maxFiles: 100,
        level: config.get('logger:level'),
        handleExceptions: true
    });
}

module.exports = new Logger();