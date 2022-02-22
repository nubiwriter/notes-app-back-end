// import Hapi & routes
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async() => {
    const server = Hapi.server({
        port: 5000,
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
        routes: {
            cors: {
                origin: ['http://notesapp-v1.dicodingacademy.com'],
                //chrome://flags/#block-insecure-private-network-requests ----disabled it
            },
        },
    });

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();