'use strict'

// npm install check-node-version

const check = require('check-node-version')

check(
  { node: '< 9' },
  (error, results) => {
    if (error) {
      console.error(error)
      return
    }

    if (results.isSatisfied) {
      console.log('All is well.')
      return
    }

    console.error('Some package version(s) failed!')

    for (const packageName of Object.keys(results.versions)) {
      if (!results.versions[packageName].isSatisfied) {
        console.error(`Missing ${packageName}.`)
      }
    }
  }
)
