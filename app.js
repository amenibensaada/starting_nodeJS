const express = require("express");
let products = [];

const app = express();
app.use(express.json());
//app.use("/", (req, res) => 
//res.send("Hello world!"));

app.get("/products", (req, res) => {
    res.json(products);
  });
  
  app.post("/products", (req, res) => {
    const body = req.body;
    products.push(body);
    res.json(body);
  });

  app.delete("/products/:id", (req, res) => {
    const id = req.params.id;
    const filtredProducts = products.filter((value, index) => index != id);
    products = filtredProducts;
    res.json(filtredProducts);
  });

  app.patch("/products/:id", (req, res) => {  
    const id = req.params.id;
    const body = req.body;
    products[id] = body;
    res.json(products);
  });

module.exports = app;