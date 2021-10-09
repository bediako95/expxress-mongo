const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: "required",
	},
	price: {
		type: Number,
		required: "required",
	},
	rating: {
		type: Number,
		required: "required",
	},
});

//defining schema as model for mongoose
module.exports = mongoose.model("Product", ProductSchema);
