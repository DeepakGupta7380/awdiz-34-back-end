import express from "express";
import { getProducts, createProduct } from "../controllers/productController.js";

const router = express.Router();

//routes define
router.get("/", getProducts);
router.post("/", createProduct);

export default router