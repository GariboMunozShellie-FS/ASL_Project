const Products = require('../models/productModel')

const index = (req, res) => {
    const productItem = Products.all()
    res.render('views/products/index', {productItem} )
    //res.json(productItem)
    //console.log(productItem);
}

const show = (req, res) => {
    const productItem = Products.find(req.params.id)
    res.render('views/products/show', {productItem} )
    //res.json(productItem)
}

const form = (req, res) => {
    const productItem = Products.all()
    res.json()
}

const create = (req, res) => {
    const productItem = Products.create(req.body)
    res.json(productItem)
}

const update = (req, res) => {
    const productItem = Products.update(req.params.id, req.body)
    res.json(productItem)
}

const remove = (req, res) => {
    const productItem = Products.remove(req.params.id)
    res.json(productItem)
}


module.exports = { index, show, form, create, update, remove }