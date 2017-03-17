'use strict';

let config = require('../config');
let logzioType = "logzio";
let logzioLogger = require('logzio-nodejs').createLogger(config.logzio);

function sendLog(entry, type) {
  if (type == logzioType) {
    logzioLogger.log(entry);
  }
}

let sender = {};
sender.sendLog = sendLog;
module.exports = sender;
