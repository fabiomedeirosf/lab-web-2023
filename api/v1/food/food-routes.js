const controller = require('./food-controller');
const schema = require('./food-schema');

const plugin = {
    name: 'foods-v1-routes',
    verision: '1',
    register: (server) => {
        server.route([
            {
                method: "GET",
                path: "/foods",
                options: {
                    tags: ['api'],
                    description: 'Consulta lista de comidas',
                    handler: controller.getFoods
                }
            },
            {
                method: "POST",
                path: "/foods",
                options: {
                    tags: ['api'],
                    description: 'cadastra comida',
                    handler: controller.create,
                    validate: schema.postFood
                }
            }
        ])
    }
};

module.exports = plugin;