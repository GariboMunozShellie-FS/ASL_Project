const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const fileUpload = require('express-fileupload')

const homeRouter = require('./routes/homeRoute')
const productRouter = require('./routes/productsRoute')
const variantRouter = require('./routes/variantsRoute')
const imageRouter = require('./routes/imagesRoute')
const { index } = require('./controllers/homeControl')

app.use(bodyParser.urlencoded({extended: false}))

app.use(fileUpload())

app.set('views', __dirname + '/templates')
app.set('view engine', 'twig')

app.get('/', index)
app.use("/shop", homeRouter)
app.use("/products", productRouter)
app.use("/variants", variantRouter)
app.use("/images", imageRouter)

app.listen(3000)