const express = require('express')
const config = require('./config/config')
const dbConnection = require('./config/database')
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express()

dbConnection().then(() => {

  require('./config/express')(app)
  require('./config/routes')(app)
  // app.use(function(req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "*");
  //   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  //   res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
  //   next();
  // })
  // app.use(
  //   '/',
  //   createProxyMiddleware({
  //     target: 'localhost:3005',
  //     changeOrigin: true,
  //   })
  // );

  app.listen(config.port,'localhost',() =>  console.log(`Listening on port ${config.port}!`))
}).catch(err => console.error(err))