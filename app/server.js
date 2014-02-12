"use strict";

var express = require('express'),
    http = require('http'),
    routes = require('./routes'),
    config = require('./middleware/configuration');

var app = express();
var port = process.env.PORT;

console.log("test env:  " + config.get('test:key'));

//MIDDLEWARE
app.set('port', port);
app.use(express.json());
app.use(express.urlencoded());
app.use(app.router);

//ROUTES
//TODO: paths fix
app.get('/node/iisnode/api/healthcheck', routes.healthcheck.index);

//START
var server = http.createServer(app);
server.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;