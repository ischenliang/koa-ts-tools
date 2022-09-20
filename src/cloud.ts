import AV from 'leanengine'
import fs from 'fs'
import path from 'path'

/**
 * Loads all cloud functions under the `functions` directory.
 */
fs.readdirSync(path.join(__dirname, 'functions')).forEach( file => {
  require(path.join(__dirname, 'functions', file))
})

/**
 * A simple cloud function.
 */
AV.Cloud.define('hello', (request: any, response: any) => {
  return 'Hello world!'
})