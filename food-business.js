const foodRepository = require('./food-repository');

const create = async (food) => {

    return foodRepository.create(food);
}

const find = async (food) => {

    return foodRepository.find(food);
}

module.exports = { create, find };