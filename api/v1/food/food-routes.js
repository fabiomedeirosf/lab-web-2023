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
                handler: controller.getFoods
            },
            {
                method: "POST",
                path: "/foods",
                options: {
                    handler: controller.create,
                    validate: schema.postFood
                }
            }
        ])
    }
};

module.exports = plugin;