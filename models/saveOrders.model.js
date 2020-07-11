const mongoose = require("mongoose");
// const { ObjectId } = mongoose.Schema;
const ordersSchema = new mongoose.Schema(
  {
    orders: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("order_details", ordersSchema);
