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

module.exports.allProduct = async (req, res) => {
  try {
    //  const {limit,page}={...req.body};
    const p = await productModel.find().lean();
    return res.json(p);
  } catch (err) {
    console.log(err);
    return res.status(404).json({ message: "Error in Fetching Product" });
  }
};

module.exports.editProduct = async (req, res) => {
  try {
    let id = req.params.id;
    if (id) {
      let product = await productModel.findByIdAndUpdate(
        id,
        { ...req.body },
        { new: true }
      );
      if (product) {
        return res
          .status(202)
          .json({ message: "Product updated successfully", product });
      }
    }
  } catch (err) {
    return res.status(400).json({ message: "Error happens while update" });
  }
};

module.exports.deleteProduct = async (req, res) => {
  try {
    let id = req.params.id;
    if (id) {
      const p = await productModel.findByIdAndDelete(id);
      return res.status(200).json({ message: "Product Deleted Successfully" });
    }
  } catch (err) {
    return res.status(400).json({ message: "Product Deletion failed" });
  }
};
