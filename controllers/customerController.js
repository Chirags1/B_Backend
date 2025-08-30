const customerModel = require("../models/customerSchema");

async function addCustomer(req, res) {
  try {
    const customer = await customerModel.create({ ...req.body });
    if (customer) {
      res.status(200).json({ message: "Customer added successfully" });
    } else {
      res.status(400).json({ message: "Customer creation failed " });
    }
  } catch (err) {
    res.status(400).json({ message: "customer creation failed", err });
  }
}

async function getCustomer(req, res) {
  try {
    const { page, limit, search } = req.query;
    const searchQuery = search
      ? { customerName: { $regex: search, $options: "i" } } // filter by name
      : {};
    const customer = await customerModel
      .find(searchQuery)
      .skip((+page - 1) * +limit)
      .limit(+limit);
    res.json({ customer: customer, page: +page, limit: +limit });
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ message: "Error in fetching the customer", err: err });
  }
}

async function deleteCustomer(req, res) {
  try {
    const id = req.params.id;
    if (id) {
      const d = await customerModel.findByIdAndDelete(id);
      if (d) {
        return res
          .status(200)
          .json({ message: "Customer Deleted Successfully" });
      }
    }
  } catch (err) {
    res.status(400).json({ message: "customer deletion failed" });
  }
}

async function editCustomer(req, res) {
  try {
    const id = req.params.id;
    const customer = await customerModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    if (customer) {
      res.status(200).json({ message: "Customer Data Updated" });
    }
  } catch (err) {
    return res.status(400).json({ message: "Error in Customer update" });
  }
}

module.exports = { addCustomer, editCustomer, deleteCustomer, getCustomer };
