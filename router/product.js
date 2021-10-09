var express = require("express");
var router = express.Router();

var prod = require("../db/product_db");
router.get("/", (req, res) => {
	res.send(prod);
});

module.exports = router;
