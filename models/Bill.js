const mongoose = require("mongoose");

const BillSchema = new mongoose.Schema({
  customerName: String,
  products: Array,
  totalAmount: Number,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Bill", BillSchema);