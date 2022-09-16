const {Product} = require('../models')

const index = async (req, res) => {
    const productItem = await Product.findAll()
    res.render('views/products/index', {productItem} )
    //res.json(productItem)
    
}

const show = async (req, res) => {
    const productItem = await Product.findByPk(req.params.id)
    res.render('views/products/show', {productItem} )
    //res.json(productItem)
}

const form = async (req, res) => {
    if (req.params.id){
        const productItem = await Product.findByPk(req.params.id)
        res.render('views/products/edit', {productItem} )
        console.log(req.params.id);
    }
    else{
        res.render('views/products/create')
    }
}

const create = async (req, res) => {
    const productItem =  await Product.create(req.body)
    res.redirect('/products/' + productItem.id)
    //res.json(productItem)
    //console.log(productItem);
}

const update = async (req, res) => {
    const productItem = await Product.update(req.body, {
        where: { id: req.params.id }
    })
    res.redirect('/products/' + req.params.id)
    //res.json(productItem)
}

const remove = async (req, res) => {
    const productItem = await Product.destroy({where: { id: req.params.id }})
    //res.render('views/products/delete')
    res.redirect('/products/')
}


module.exports = { index, show, form, create, update, remove }