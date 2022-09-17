const {Variant, Product} = require('../models')

const index = async (req, res) => {
    const variantItem = await Variant.findAll()
    res.render('views/variants/index', {variantItem} )
    //res.json(variantItem)
    
}

const show = async (req, res) => {
    const variantItem = await Variant.findByPk(req.params.id)
    const productItem = await variantItem.getProduct()
    res.render('views/variants/show', {variantItem, productItem} )
    //res.json(variantItem)
}

const form = async (req, res) => {
    const productItem = await Product.findAll()
    if (req.params.id){
        const variantItem = await Variant.findByPk(req.params.id)
        res.render('views/variants/edit', {variantItem, productItem} )
        console.log(req.params.id);
    }
    else{
        res.render('views/variants/create', {productItem})
    }
}

const create = async (req, res) => {
    const variantItem =  await Variant.create(req.body)
    res.redirect('/variants/' + variantItem.id)
    //res.json(variantItem)
    //console.log(variantItem);
}

const update = async (req, res) => {
    const variantItem = await Variant.update(req.body, {
        where: { id: req.params.id }
    })
    res.redirect('/variants/' + req.params.id)
    //res.json(variantItem)
}

const remove = async (req, res) => {
    const variantItem = await Variant.destroy({where: { id: req.params.id }})
    //res.render('views/variants/delete')
    res.redirect('/variants/')
}


module.exports = { index, show, form, create, update, remove }