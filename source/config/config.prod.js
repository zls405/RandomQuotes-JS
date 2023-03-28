// config.js
const config = {
    app: {
        port: 8080,
        appVersion: '#{Octopus.Release.Number}',
        environmentName: '#{Octopus.Environment.Name}',
    },
};

module.exports = config;