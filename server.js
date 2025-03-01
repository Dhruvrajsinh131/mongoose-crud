const express = require("express");
const app = express();
require("dotenv").config(); // Load .env file
const mongooose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");

console.log("Product", Product);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Hi",
  });
});

app.listen(6969, () => {
  console.log("Server is runnig on Port 6969");
});

mongooose
  .connect(process.env.DB_CONNECTIONSTRING)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err, "Something went wrong while connecting to DB.");
  });
