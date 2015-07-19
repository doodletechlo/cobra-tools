// 3rd party dependencies
var querystring = require('querystring');
var http = require('http');
var q = require('q');
var debug = require('debug')('main');
var chalk = require('chalk');
var lo = require('lodash');

var config = require('./config');

module.exports = httpCall;

function httpCall(settings, callback) {
    var data = '';
    if (settings.body && lo.isObject(settings.body)) {
        settings.body = JSON.stringify(settings.body);
    }
    settings.method = settings.method || 'GET';
    if (!settings.headers) settings.headers = {};
    settings.headers['Content-Type'] = settings.headers['Content-Type'] || 'application/json';
    settings = config.getDomain(settings);

    console.log(chalk.inverse('Calling: ' + settings.host + ' ' + settings.path + ' ' + settings.method + ' '));
    debug('httpService: httpCall()', settings);
    var output = 'Route: ' + settings.path + ' ' + settings.method;
    var request = http.request(settings, function(res) {
        output += ' ' + res.statusCode;
        if (res.statusCode == 200) {
            console.log(chalk.bgBlue(output));
        } else {
            console.log(chalk.bgRed(output));
            debug(data);
        }
        res.setEncoding('utf8');
        res.on('end', function(response) {
            res.data = data;
            if (res.statusCode == 200) {
                callback(null, data);
            } else {
                var error = {
                    data: data,
                    code: res.statusCode
                }
                callback(error, data);
            }
        });
        res.on('data', function(response) {
            data += response;
            try {
                data = JSON.parse(data.toString());
            } catch (error) {}
        });
        res.on('error', function(err) {
            console.log(chalk.bgRed(err));
            callback(err, err);
        });
    });

    request.on('timeout', function(err) {
        console.log(chalk.bgRed(err));
        callback(err, err);
    });

    request.on('error', function(err) {
        console.log(chalk.bgRed(err));
        callback(err, err);
    });

    if (settings.body) {
        request.write(settings.body);
    }
    request.end();
}
