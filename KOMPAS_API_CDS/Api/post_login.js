const request = require('supertest');
const config = require('../../config.js');
const { API_PATH_CDS_LOGIN } = require('../api/path.js');

const post_cds_login = ({email, password} = {}) => {
    return request(config.BASE_CDS_URL)
    .post(API_PATH_CDS_LOGIN)
    .set('Accept', 'application/json')
    .send({
        email,
        password,
    })
}


module.exports = {
    post_cds_login,
}