'use strict';

var config = require('./config.js')();

var logger = require('winston');

config.port = (config.env === 'production') ? 80:3000;

var app = require('./app/server.js')(config);

app.listen(config.port);

exports = module.exports = app;

logger.info("Environment:", config.env);
logger.info('Started on port ' + config.port);
