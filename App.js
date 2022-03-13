const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Form");
let cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

const signupRoute = require("./routes/signUpRoute.js");
const signInRoute = require("./routes/signInRoutes");
const productRoute = require("./routes/productRoute");
const categoryRoute = require("./routes/categoryRoute");

app.use("/", signupRoute);
app.use("/", signInRoute);
app.use("/", productRoute);
app.use("/", categoryRoute);

app.listen(PORT, () => {
  console.log(`App is running on localhost:${PORT}`);
});
