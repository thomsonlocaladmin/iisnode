"use strict";

var express = require('express'),
    http = require('http'),
    routes = require('./routes'),
    config = require('./middleware/configuration'),
    notFound = require('./middleware/notFound'),
    logger = require("./middleware/logger");

var app = express();

var port = null;
if (config.get("iisnode")) {
    port = process.env.PORT;
} else {
    port = config.get('express:port');
}

//MIDDLEWARE
app.set('port', port);
app.use(express.json());
app.use(express.urlencoded());
app.use(app.router);
app.use(notFound.index);

//ROUTES
var path = config.get("path:routes");
app.get(path + '/healthcheck', routes.healthcheck.index);

//START
var server = http.createServer(app);
server.listen(app.get('port'), function(){
    if (config.get("iisnode")) {
        logger.info('Express server running on iisnode under: ' + path + '   configured for environment:  ' + config.get('environment'));
    } else {
        logger.info('Express server listening on port ' + app.get('port') + '   configured for environment:  ' + config.get('environment'));
    }
});

module.exports = app;