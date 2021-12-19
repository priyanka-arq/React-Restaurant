const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const stripeRoute = require("./app/routes/stripe");

app.use(express.json());

app.use(cors());

//routes
app.use("/api/checkout", stripeRoute);

//port
app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000");
});
