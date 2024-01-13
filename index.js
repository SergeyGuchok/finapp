const express = require('express')
const app = express()
const port = 3000

const login = require('./routes/login')

app.use('/', login)

app.listen(port)