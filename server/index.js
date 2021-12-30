

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const routes = require("./routes");

const mongoUri = "mongodb://localhost/edarty";

const db = mongoose.connect(mongoUri);
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.use("/api/user", routes.userRoute);


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("app connected on: " + PORT);
});
