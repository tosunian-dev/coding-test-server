import { Router } from "express";
import { getProduct, getProducts } from "../services/services";
const router = Router()

// router.get  products search
router.get('/items/:search?', getProducts)
// router.get  product search
router.get('/item/:id', getProduct)

export default router