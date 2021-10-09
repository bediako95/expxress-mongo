const connection = require("./connection");
const express = require("express");
var app = express();
const path = require("path");
const bodyparser = require("body-parser");
const ProductController = require("./controller/product");
const port = 3000;
app.use(express.json());

//read from db
app.get("/", ProductController.findProducts);
//create or write a doc to the db
app.post("/", ProductController.createProduct);
//find a specific product
app.get("/:id", ProductController.findOneProduct);
//update a specific product
app.patch("/:id", ProductController.updateProduct);

//delete a product
app.delete("/:id", ProductController.deleteProduct);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
