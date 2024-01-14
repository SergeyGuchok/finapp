const express = require('express')
const app = express()
const port = 8000

const login = require('./routes/login')

app.use('/', login)

app.listen(port)