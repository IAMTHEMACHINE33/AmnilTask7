const express = require("express");
const router = express.Router();
const Product = require("../model/productModel");
const Auth = require("../Auth/auth");

router.post("/add", Auth.authRole("admin"), async (req, res) => {
    try
    {
        const { product_name, price, sellerId } = req.body;
        console.log(req.user?.id);
        const productAdd = await Product.create(
            {
                product_name, 
                price,
                sellerId,
                buyerId : null
            }
        );
        res
            .status(200)
            .send("Product added")
    }
    catch (error)
    {
        res
        .status(400)
        .send("Error adding product")
    }
})

module.exports = router;