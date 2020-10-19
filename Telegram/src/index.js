var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var axios = require('axios')

app.use(bodyParser.json()) // for parsing application/json
app.use(
    bodyParser.urlencoded({
        extended: true
    })
) // for parsing application/x-www-form-urlencoded