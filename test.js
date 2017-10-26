import test from 'ava';
var app = require('./index.js');

/**
 * API
 */

test('apiUri', t => {
  t.is(app.options.uri, 'https://api.uptimerobot.com/v2/getMonitors');
});

test('apiMethod', t => {
  t.is(app.options.method, 'POST');
});

/**
 * Monitor Types
 */

test('typeHttps', t => {
  t.is(app.monitorType(1), 'HTTP(s)');
});

test('typeKeyword', t => {
  t.is(app.monitorType(2), 'Keyword');
});

test('typePing', t => {
  t.is(app.monitorType(3), 'Ping');
});

test('typePort', t => {
  t.is(app.monitorType(4), 'Port');
});

test('typeUnknown', t => {
  t.is(app.monitorType(5), 'Unknown');
});

/**
 * Monitor Statuses
 */

test('statusPaused', t => {
  t.is(app.monitorStatus(0), 'Paused');
});

test('statusNotCheckedYet', t => {
  t.is(app.monitorStatus(1), 'Not Checked Yet');
});

test('statusUp', t => {
  t.is(app.monitorStatus(2), 'Up');
});

test('statusSeemsDown', t => {
  t.is(app.monitorStatus(8), 'Seems Down');
});

test('statusDown', t => {
  t.is(app.monitorStatus(9), 'Down');
});

test('statusUnknown', t => {
  t.is(app.monitorStatus(20), 'Unknown');
});
