const Hapi = require("@hapi/hapi");
const routes = require('./config/routes');

const server = Hapi.server({
    port: 8000,
    host: '0.0.0.0'
});

const plugins = [
    {
        plugin: routes,
        options: {
            routesBaseDir: './api'
        }
    }
];
module.exports = {server, plugins};