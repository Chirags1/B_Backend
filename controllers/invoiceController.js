const invoiceModel = require("../models/invoiceSchema");

const createInvoice = async (req, res) => {
  try {
    const data = { ...req.body };
    const invoiceCreated = await invoiceModel.create(data);
    if (invoiceCreated) {
      res.status(200).json({ message: "invoice added successfully" });
    } else {
      res.status(400).json({ message: "invoice creation failed " });
    }
  } catch (error) {
    res.status(400).json({ message: "invoice creation failed", error });
  }
};

const getInvoice = async (req, res) => {
  try {
    const invoices = await invoiceModel.find().lean();
    res.json(invoices);
  } catch (err) {
    res.status(400).json({ message: "Error in fetching invoices", err });
  }
};

const deleteInvoice = async (req, res) => {
  try {
    const id = req.params.id;
    const invoice = await invoiceModel.findByIdAndDelete(id);
    if (invoice) {
      res.status(200).json({ message: "Invoice Deleted Successfully" });
    }
  } catch (err) {
    res.status(400).json({ message: "Error in deletion", err });
  }
};

const updateInvoice = async (req, res) => {
  try {
    const id = req.params.id;
    const data = { ...req.body };
    if (id) {
      const updatedInvoice = await invoiceModel.findByIdAndUpdate(id, data, {
        new: true,
      });
      if (updatedInvoice) {
        res.status(200).json({ message: "Invoice edited successfully" });
      } else {
        res.status(400).json({ message: "Error in updating" });
      }
    }
  } catch (err) {
    res.status(400).json({ message: "Error in updating", err });
  }
};

module.exports = { createInvoice, updateInvoice, deleteInvoice, getInvoice };
