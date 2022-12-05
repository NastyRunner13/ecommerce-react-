const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const registerRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order");
const stripeRouter = require("./routes/stripe");
const bodyParser = require("body-parser");

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DBConnection Successfull");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/users", userRoute);
app.use("/api/auth", registerRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRouter);
app.use("/api/orders", orderRouter);

app.listen(5000, function () {
  console.log("Server started at port 3000!");
});
