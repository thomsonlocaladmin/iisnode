"use strict";

var express = require('express'),
    http = require('http'),
    routes = require('./routes'),
    config = require('./middleware/configuration');

var app = express();

var port = null;
//if (config.get("iisnode")) {
    port = process.env.PORT;
//    console.log("running on iisnode");
//} else {
//    port = config.get('express:port');
//    console.log("running without iisnode");
//}

//MIDDLEWARE
app.set('port', port);
app.use(express.json());
app.use(express.urlencoded());
app.use(app.router);

//ROUTES
var path = "";
//if (config.get("iisnode")) {
    path = '/node/iisnode/api';
//}
app.get(path + '/healthcheck', routes.healthcheck.index);

//START
var server = http.createServer(app);
server.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;