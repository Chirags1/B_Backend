const express = require("express");
const router = express.Router();
const {
  addCustomer,
  getCustomer,
  deleteCustomer,
  editCustomer,
} = require("../controllers/customerController");

router.post("/add", addCustomer);
router.get("/search", getCustomer);
router.delete("/remove/:id", deleteCustomer);
router.patch("/edit/:id", editCustomer);

module.exports = router;
