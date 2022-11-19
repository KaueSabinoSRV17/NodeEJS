const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (request, response) => {
    response.render('index')
})

app.get('/about')

app.listen(8080)