const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productCategory: { type: String, required: true },
  productWeight: { type: String, required: true },
  productTunch: { type: String, required: true },
  productWastage: { type: String, required: true },
  buyingRate: { type: String, required: true },
  makingRate: { type: String, required: true },
  buyingDate: { type: String },
});

module.exports = mongoose.model("product", productSchema);
