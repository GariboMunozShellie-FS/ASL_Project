let products = [
    {id: '1', item: 'headphones' , price: '9.99'},
    {id: '6', item: 'hat' , price: '1'}
]

const all = () => {
    return products
}

const find = (id) => {
    return products.find(p => p.id === id)
}
const create = (product) => {
    products.push(product)
    return products
}

const update = (id, product) => {
    products = products.map((p) => {
        return (p.id === id) ? product : p
    })
    return products
}

const remove = (id) => {
    products = products.filter( p => p.id !== id)
    return products
}

module.exports = {all, find, create, update, remove}