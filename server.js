const Hapi = require("@hapi/hapi");
const routes = require('./config/routes');
const config = require('./config/env-config')
const HapiJWT = require('hapi-auth-jwt2');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision')
const HapiSwagger = require('hapi-swagger');

const server = Hapi.server({
    port: config.port,
    host: config.host
});

const swaggerPlugin = [
    Inert,
    Vision,
    {
        plugin: HapiSwagger,
        options: {
            documentationPath: '/docs',
            schemes: ['https', 'https'],
            info: {
                title: "API de Pedidos Aula Fatec",
                version: '1.0'
            }
        }
    }
];

const plugins = [
    {
        plugin: routes,
        options: {
            routesBaseDir: './api'
        }
    }
];

const validate = async (decoded, request, h) => {
    
    return {isValid: true};
}

//enable jwt by config
if(config.jwt.enable === 'true') {
    
    server.register(HapiJWT);

    server.auth.strategy('jwt', 'jwt',
    {
        key: config.jwt.secret,
        validate
    });

    server.auth.default('jwt');
}

plugins.push(...swaggerPlugin);

module.exports = {server, plugins};