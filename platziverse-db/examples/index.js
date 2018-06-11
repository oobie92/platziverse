'use strict'

const db = require('../')

async function run() {
 const config = {
     database: process.env.DB_NAME || 'platziverse',
     username: process.env.DB_USER || 'oobie92',
     password: process.env.DB_PASS || 'diego',
     host: process.env.DB_HOST || '',
     dialect: 'postgres',
     port: '5433'
 }

    const { Agent, Metric } = await db(config).catch(handleFatalError)

    const agent = await Agent.createOrUpdate({
        uuid: 'yyyx',
        name: 'test',
        username: 'test',
        hostname: 'test',
        pid: 1,
        connected: true
    }).catch(handleFatalError)

    console.log('--agent--')
    console.log(agent)
}

function handleFatalError(err){
    console.error(err.message)
    console.error(err.stack)
    process.exit(1)
}

run()