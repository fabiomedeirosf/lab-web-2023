const Hapi = require("@hapi/hapi");
const routes = require('./config/routes');
const config = require('./config/env-config')
const HapiJWT = require('hapi-auth-jwt2');

const server = Hapi.server({
    port: config.port,
    host: config.host
});

const plugins = [
    {
        plugin: routes,
        options: {
            routesBaseDir: './api'
        }
    }
];

const validate = async (decoded, request, h) => {
    console.log('validate');
    console.log(decoded);

    return {isValid: true};
}

server.register(HapiJWT);

server.auth.strategy('jwt', 'jwt',
{
    key: 'empresario',
    validate
});

server.auth.default('jwt');

module.exports = {server, plugins};