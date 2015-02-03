"use strict";

var express = require("express"),
    bodyParser = require("body-parser"),
    logger = require("winston");

module.exports = function(config) {
  var app = express();

  logger.info("test");
  app.use(bodyParser.json());

  //app.all('*', function(req, res, next) {
    //res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE");
  ////add_header 'Access-Control-Allow-Headers' 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type';
    //next();
  //});

  //app.use('/health', require('./rest/health'));
  //app.use('/logger', require('./rest/logger'));

  return app;
};
