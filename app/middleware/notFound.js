"use strict";

//var logger = require("../middleware/logger");

exports.index = function(req, res){
//    logger.warn('Request Not Found: ' +  req.url);
    res.json(404, 'URL Not Found: ' + req.url);
};