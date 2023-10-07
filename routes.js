const controller = require('./food-controller');
const schema = require('./food-schema');
const routes = [
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
];

module.exports = routes;