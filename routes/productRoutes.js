const express = require("express");
const {
  add,
  allProduct,
  editProduct,
  deleteProduct,
} = require("../controllers/productController");
const router = express.Router();
router.post("/add", add);
router.get("/search", allProduct);
router.patch("/edit/:id", editProduct);
router.delete("/remove/:id", deleteProduct);

module.exports = router;
