const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = (app) => {
    app.use(logger('dev'))
    app.use(express.json())
    app.use(cors({origin: true}));
    app.use(express.urlencoded({
        extended: false
    }))
    app.use(bodyParser.json())
}   