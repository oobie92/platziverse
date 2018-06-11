'use strict'

const debug = require('debug')('platziverse:api:db')

module.exports = {
    db: {
        database: process.env.DB_NAME || 'platziverse',
        username: process.env.DB_USER || 'oobie92',
        password: process.env.DB_PASS || 'diego',
        host: process.env.DB_HOST || '',
        dialect: 'postgres',
        port: '5433',
        logging: s => debug(s),
    },
    auth: {
        secret: process.env.SECRET || 'platzi'
    }
}