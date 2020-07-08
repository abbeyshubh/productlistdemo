const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/shoppingCart", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((res) => console.log("Connected"))
  .catch((err) => console.log("Could not connect with DB"));

// require("../models/products.model");
