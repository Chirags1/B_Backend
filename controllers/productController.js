const productModel = require("../models/productSchema");

module.exports.add = async (req, res) => {
  try {
    // const {productName,productCategory,productWeight,productTunch,productWastage,buyingRate,makingRate,buyingDate}=req.body;

    const product = await productModel.create({ ...req.body });
    if (product) {
      return res.status(202).json({ message: "product added successfully" });
    } else {
      return res.status(400).json({ message: "product creation failed" });
    }
  } catch (err) {
    return res.status(400).json({ message: "product creation failed" });
  }
};
