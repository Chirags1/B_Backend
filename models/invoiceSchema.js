const mongoose = require("mongoose");
const invoiceSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "customer" },
  product: [
    {
      productName: { type: mongoose.Schema.Types.ObjectId, ref: "customer" },
      weight: { type: Number, required: true },
      tunch: { type: Number, required: true },
      wastage: { type: Number, required: true },
      rate: { type: Number, required: true },
      making: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
  totalPrice: { type: Number, required: true },
  additionalCharge: { type: Number, required: true },
  gst: { type: Number },
  grandTotal: { type: Number, required: true },
  paymentMode: { type: String, required: true },
  jama: { type: Number, required: true },
  outStanding: { type: Number, required: true },
  billingDate: { type: Date },
});

module.exports = mongoose.model("invoice", invoiceSchema);
