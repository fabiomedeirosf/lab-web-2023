const foodInMemory = [];

const create = async (food) => {

    const id = Math.floor(Math.random() * 9999);

    food.id = id;
    foodInMemory.push(food);

    return food;
}

const find = async (filter) => {
    return foodInMemory;
}

module.exports = {create, find};

