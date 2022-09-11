let products = [
    {id: '1', price: '9.99', name: 'headphones'},
]

const all = () => {
    return products
}

const find = (id) => {
    return products.find(p => p.id === id)
}
const create = (product) => {
    const id = Number(products[products.length -1].id) + 1 + ""
    products.push({id, ...product})
    return products[products.length -1]
}

const update = (id, products) => {
    products = products.map((p) => {
        return (p.id === id) ? products : p
    })
    return products
}

const remove = (id) => {
    products = products.filter( p => p.id !== id)
    return products
}

module.exports = {all, find, create, update, remove}