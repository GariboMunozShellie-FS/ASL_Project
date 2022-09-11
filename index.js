const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const productRouter = require('./routes/productsRoute')

app.use(bodyParser.urlencoded({extended: false}))

app.set('views', __dirname + '/templates/views')
app.set('view engine', 'twig')

app.get('/', (req, res) => {
    res.render("home", {name: 'world', 'user': [
        { name: 'Shellie Munoz', email: 'srgaribomunoz@student.fullsail.edu' },
        { name: 'Amara Montes', email: 'agmontes@student.fullsail.edu' },
        { name: 'Jose Lobato', email: 'jlobato@student.fullsail.edu' }
    ]})
})

app.use("/products", productRouter)

app.listen(3000)