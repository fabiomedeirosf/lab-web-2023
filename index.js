const server = require('./server');


(async () => {
    await server.start();

    console.log('server started ' + server.info.uri);
})();

