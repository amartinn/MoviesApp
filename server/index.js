const express = require('express')
const config = require('./config/config')
const dbConnection = require('./config/database')

const app = express()

dbConnection().then(() => {

  require('./config/express')(app)
  require('./config/routes')(app)

  app.listen(config.port, console.log(`Listening on port ${config.port}!`))
}).catch(err => console.error(err))