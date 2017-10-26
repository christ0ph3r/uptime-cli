#! /usr/bin/env node

const request = require('request');
const rp = require('request-promise');
const chalk = require('chalk');
const Table = require('cli-table');
const jsonfile = require('jsonfile');
const figlet = require('figlet');
const file = './config.json';
const apiKey = jsonfile.readFileSync(file);
const currSym = '$';

figletLog('Checking your uptime...');

var options = {
  method: 'POST',
  uri: 'https://api.uptimerobot.com/v2/getMonitors',
  body: {
    api_key: apiKey.key,
    all_time_uptime_ratio: 1,
    response_times_average: 1,
  },
  json: true // Automatically stringifies the body to JSON
};

rp(options)
.then(function (parsedBody) {
   var table = new Table({ head: [
    chalk.blue('ID'),
    chalk.blue('Name'),
    chalk.blue('URL'),
    chalk.blue('Status'),
    chalk.blue('Type'),
    chalk.blue('Interval'),
    chalk.blue('Uptime'),
    chalk.blue('Created'),
  ] });
  parsedBody.monitors.forEach(function (value, key) {
    table.push([
      chalk.blue(value.id),
      chalk.green(value.friendly_name),
      chalk.green(value.url),
      chalk.green(monitorStatus(value.status)),
      chalk.green(monitorType(value.type)),
      chalk.green(value.interval),
      chalk.green(value.all_time_uptime_ratio+'%'),
      chalk.green(new Date(value.create_datetime * 1000).toUTCString()),
    ]);
  });
  console.log('\n'+table.toString());
})
.catch(function (err) {
  console.log('Something went wrong...');
  console.log(err);
});

/**
 * Figlet console log
 */

function figletLog(text) {
  figlet(text, function(err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    console.log(data)
  });
}

/**
 * Switch case for monitor types
 * Makes API data understandable
 */

var monitorType = function monitorType(typeNumber) {
  switch(typeNumber) {
    case 1:
      type = "HTTP(s)";
      break;
    case 2:
      type = "Keyword";
      break;
    case 3:
      type = "Ping";
      break;
    case 4:
      type = "Port";
      break;
    default:
      type = "Unknown";
  }
  return type;
}

/**
 * Switch case for monitor statuses
 * Makes API data understandable
 */

var monitorStatus = function monitorStatus(statusNumber) {
  switch(statusNumber) {
    case 0:
      status = "Paused";
      break;
    case 1:
      status = "Not Checked Yet";
      break;
    case 2:
      status = "Up";
      break;
    case 8:
      status = "Seems Down";
      break;
    case 9:
      status = "Down";
      break;
    default:
      status = "Unknown";
  }
  return status;
}

module.exports = { options, monitorType, monitorStatus };
