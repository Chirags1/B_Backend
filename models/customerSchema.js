const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  address: { type: String, required: true },
  mobile: { type: String, required: true },
  adhar: { type: String, unique: true },
  pancard: { type: String, unique: true },
});

module.exports = mongoose.model("customer", customerSchema);
