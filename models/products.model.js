const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
    },
    price: {
      type: Number,
    },
    productImage: {
      type: String,
    },
    description: {
      type: String,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    updated_at: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const details = (module.exports = mongoose.model("products", productSchema));
