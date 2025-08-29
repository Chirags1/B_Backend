const express = require("express");
const router = express.Router();
const {
  createInvoice,
  getInvoice,
  deleteInvoice,
  updateInvoice,
} = require("../controllers/invoiceController");

router.post("/create-invoice", createInvoice);
router.get("/get-invoice", getInvoice);
router.delete("/delete-invoice/:id", deleteInvoice);
router.patch("/update-invoice/:id", updateInvoice);

module.exports = router;
