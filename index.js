const express = require('express')
const app = express()

// GET / HTTP/1.1

app.get('/products/all', (req, res) => {
    res.send('page: ' + '2' + 
    ' sort: ' + 'prize' +
    ' order: ' + 'desc')
})

app.get('/products/:id-:size-:color', (req, res) => {
    res.send('id: ' + req.params.id + 
    ' size: ' + req.params.size +
    ' color: ' + req.params.color)
})

app.get('/products/:id', (req, res) => {
    res.send('id: ' + req.params.id )
})

app.listen(3000)