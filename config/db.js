const mongoose = require("mongoose");
require("dotenv").config();
//mongodb+srv://abbey7991:shubh1997@cluster0-4lzfj.mongodb.net/abbey7991?retryWrites=true&w=majority
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// require("../modals/details.modal");
// / || "mongodb://localhost:27017/categoriesDB"
