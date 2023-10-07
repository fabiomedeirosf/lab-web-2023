const Hapi = require("@hapi/hapi");
const routes = require('./routes');

const server = Hapi.server({
    port: 8000,
    host: '0.0.0.0'
});

routes.forEach((path) => server.route(path));

module.exports = server;