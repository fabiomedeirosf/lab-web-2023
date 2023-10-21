const business = require('./food-business');

const getFoods = async (request, h) => {

    const result = await business.find();
    return h.response(result).code(200);
};

const create = async (request, h) => {

    const result = await business.create(request.payload);

    return h.response(result).code(201);
}
module.exports = {getFoods, create};