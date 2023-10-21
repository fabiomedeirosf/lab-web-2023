const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');


const initEnvs = () => {

    process.env.ENVIRONMENT = process.env.ENVIRONMENT || 'development';

    const envPath = path.join(__dirname, '/../.env-' + process.env.ENVIRONMENT);

    try {
        fs.statSync(envPath);
        dotenv.config({path: envPath});
    } catch (err) {
        console.log(envPath + 'Error to load envs');
        console.log(err);
    }
};

initEnvs();

const allEnvs = {

    host: process.env.HOST,
    port: process.env.PORT
};

module.exports = allEnvs;