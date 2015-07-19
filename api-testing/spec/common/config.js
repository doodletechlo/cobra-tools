var debug = require('debug')('main');

module.exports = {
    getDomain: getDomain
};

var domain = {
    dev: {
        url: 'de74xyk8y8kp9.cloudfront.net'
    },
    local: {
        url: 'localhost',
        port: 3005
    }
};

function getDomain(settings) {
    settings.host = domain.dev.url;
    if (process.env.ENV === 'local') {
        settings.host = domain.local.url;
        settings.port = domain.local.port;
    }
    return settings;
}
