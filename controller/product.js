//This controls our reading of the products
const Product = require("../model/products");
exports.findProducts = async (req, res) => {
	const prod = await Product.find();
	res.send(prod);
};

//Create new product
exports.createProduct = async (req, res) => {
	const product = new Product(req.body);
	await product.save();
	res.send(product);
	console.log(product);
};

//fetch a single product based on the id
exports.findOneProduct = async (req, res) => {
	//handle error if id being fetched can't be found
	try {
		const product = await Product.findById(req.params.id);
		res.send(product);
	} catch {
		res.status(404).send({ error: "Product is not found" });
		console.log("Product cannot be found");
	}

	res.send(product);
	console.log(product);
};

//
exports.updateProduct = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		Object.assign(product, req.body);
		product.save();
		res.send(product);
	} catch {
		res.status(404).send({ error: "updating the product" });
	}
};

//delete
exports.deleteProduct = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		await product.remove();
		res.send(true);
		console.log(`${product} has been deleted`);
	} catch {
		res.status(404).send({ error: "Product not found" });
	}
};
