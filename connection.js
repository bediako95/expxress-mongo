const mongoose = require("mongoose");
mongoose
	.connect("mongodb://localhost:27017/CustomersDb", { useNewUrlParser: true })
	.then(() => {
		console.log("Database connected successfully");
	})
	.catch(() => {
		console.log("Error in connection");
	});

//const Product = require("./model/products");
