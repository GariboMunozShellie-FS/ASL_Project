const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const productRouter = require('./routes/productsRoute')
const variantRouter = require('./routes/variantsRoute')
const imageRouter = require('./routes/imagesRoute')

app.use(bodyParser.urlencoded({extended: false}))

app.set('views', __dirname + '/templates')
app.set('view engine', 'twig')

app.get('/', (req, res) => {
    res.render("views/home")
})

app.use("/products", productRouter)
app.use("/variants", variantRouter)
app.use("/images", imageRouter)

app.listen(3000)