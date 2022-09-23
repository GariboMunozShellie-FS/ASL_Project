const {Image, Variant} = require('../models')

const index = async (req, res) => {
    const imageItem = await Image.findAll()
    res.render('views/images/index', {imageItem} )
    //res.json(imageItem)
    
}

const show = async (req, res) => {
    const imageItem = await Image.findByPk(req.params.id)
    const variantItem = await imageItem.getVariant()
    res.render('views/images/show', {imageItem, variantItem} )
    //res.json(imageItem)
}

const form = async (req, res) => {
        const variantItem = await Variant.findAll()
    if (req.params.id){
        const imageItem = await Image.findByPk(req.params.id)
        res.render('views/images/edit', {imageItem, variantItem} )
        console.log(req.params.id);
    }
    else{
        res.render('views/images/create', {variantItem})
    }
}

const create = async (req, res, next) => {
  const imageItem = await Image.create(req.body)
  // Sets a pretext "imageId" for our upload middleware
  req.imageId = imageItem.id
  // Invoke our upload middleware with next()
  next()
  res.redirect('/images/' + imageItem.id)
}

const update = async (req, res, next) => {
  const imageItem = await Image.update(req.body, {
    where: { id: req.params.id }
  })
  // Sets a pretext "imageId" for our upload middleware
  req.imageId = req.params.id
  // Invoke our upload middleware with next()
  next()
  res.redirect('/images/' + req.params.id)
}

const remove = async (req, res) => {
    const imageItem = await Image.destroy({where: { id: req.params.id }})
    //res.render('views/images/delete')
    res.redirect('/images/')
}


module.exports = { index, show, form, create, update, remove }