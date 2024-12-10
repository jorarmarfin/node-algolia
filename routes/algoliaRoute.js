const express = require('express');
const { check } = require('express-validator');
const {createProduct, deleteProduct} = require("../controllers/AlgoliaController");
const router = express.Router();

// api/algolia

router.post('/product/add',createProduct);
router.delete('/product/delete/:objectID', deleteProduct);



module.exports = router;