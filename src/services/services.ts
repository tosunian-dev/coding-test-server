import data from '../data/data'
import { Request, Response } from 'express'

const getProducts = ({params}: Request, res: Response) => {
    const filteredProducts = data.filter((product) => {       
        return product.title.toLowerCase().includes(params.search.toLowerCase()) 
    })
    if(filteredProducts.length === 0){
        return res.send([])
    }
    res.send(filteredProducts)
}

const getProduct = ({params}: Request, res: Response) => {
    const productID = params.id
    const product = data.filter((product) => {
        return product.id.toString() === productID
    })
    if(product.length === 0){
        return res.send([])
    }
    res.send(product[0])
}

export {
    getProducts,
    getProduct
}