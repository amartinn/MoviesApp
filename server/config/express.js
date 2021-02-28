const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')


module.exports = (app) => {
    app.use(logger('dev'))
    app.use(express.json())
    app.use(express.urlencoded({
        extended: false
    }))
    app.use(bodyParser.json())
}