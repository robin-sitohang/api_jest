const request = require('supertest');
const config = require('../../config.js');
const { API_PATH_CDS_ARTICLE } = require('../api/path.js');

const get_cds_article = ({token} = {}) => {
    return request(config.BASE_CDS_URL)
    .get(API_PATH_CDS_ARTICLE)
    .set('Accept', 'application/json')
    .set('Authorization', `Bearer ${token}`)
    .send({
    })
}


module.exports = {
    get_cds_article,
}