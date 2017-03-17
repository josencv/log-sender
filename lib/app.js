'use strict';

let sender = require('./sender');

sendRandomizedLogs();

function sendRandomizedLogs() {
  var testLog = {
    date: new Date(),
    level: 30,
    req_id: generateGuid(),
    name: 'test-log',
    status: 200,
    message: 'All cool!',
  }
  sender.sendLog(testLog, 'logzio');
}

function generateGuid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}