const { Product, Variant, Image } = require('../models')

const index = async (req, res) => {
	const productItem = await Product.findAll({
		include: [
			{ model: Variant, include: [Image] }
		]
	})
	res.render('views/home', { productItem })
}

const show = async (req, res) => {
	const productItem = await Product.findOne({ 
		where: { slug: req.params.slug },
		include: [
			{ model: Variant, include: [Image] }
		]
	})

	let variantItem = productItem.Variants[0]

	if (req.query.v) {
		variantItem = productItem.Variants.find(v => v.slug === req.query.v)
	}

	res.render('views/show', { productItem, variantItem })
}

module.exports = { index, show }