const express = require("express");
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    description: String, 
    price:Number
  });

const Product = mongoose.model('Product', productSchema);


// let products = [];

const app = express();
app.use(express.json());
//app.use("/", (req, res) => 
//res.send("Hello world!"));

app.get("/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
  });
  
  app.post("/products", async(req, res) => {
    const body = req.body;
    // products.push(body);
     await Product.create(body);
    res.json(body);
  });

  app.delete("/products/:id", async (req, res) => {
    const id = req.params.id;
    // const filtredProducts = products.filter((value, index) => index != id);
    // products = filtredProducts;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.json(deletedProduct);
  });

  app.patch("/products/:id", async (req, res) => {  
    const id = req.params.id;
    const body = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(id , body); 
    // products[id] = body;
    res.json(updatedProduct);
  });

module.exports = app;