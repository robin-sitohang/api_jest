const request = require('supertest');
const config = require('../../config.js');
const { API_PATH_REGISTER } = require('../api/path.js');

const post_register = ({email, firstname, password, lastName} = {}) => {
    return request(config.BASE_URL)
    .post(API_PATH_REGISTER)
    .set('Accept', 'application/json')
    .send({
        email,
        firstname,
        password,
        "apple": {
            "email": "",
            "token": ""
        },
        "facebook": "",
        "google": "",
        lastName,
    })
}


module.exports = {
    post_register,
}