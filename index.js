
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const productRouter = require('./routes/productsRoute')

app.use(bodyParser.urlencoded({extended: false}))

app.use("/products", productRouter)

app.listen(3000)