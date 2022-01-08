

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const routes = require("./routes");
const Users = require("../server/models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mongoUri = "mongodb://localhost/edarty";

const db = mongoose.connect(mongoUri);
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.use("/api/citizen", routes.citizenRoute);
app.use("/api/messages", routes.messageRoute);
app.post("/api/user/signin", async (req, res) => {
  try {
    let { username, password } = req.body;
    let user = await Users.findOne({ username });
    if (!user) {
      throw "User doesn't exist";
    }
    let isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      throw  "Wrong password"

    }
    let token = jwt.sign(
      {
        username: user.username,
        _id: user._id,
      },
      "jwtSecret",
      {
        expiresIn: "1h",
      }
    );
    res.send({
      user,
      token: token,
    });
  } catch (error) {
    res.send(error);
  }
});

app.post("/api/user/signup", async (req, res) => {
  try {
    let { username, password, cin } = req.body;
    let existingUser = await Users.findOne({ username });
    if (existingUser) {
      throw "User already exists";
    }
    let newPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
    let user = await Users.create({
      username,
      cin,
      password: newPassword,
    });
    let token = jwt.sign(
      {
        username: user.username,
        _id: user._id,
      },
      "jwtSecret",
      {
        expiresIn: "1h",
      }
    );
    res.send({
      user,
      token: token,
    });
  } catch (error) {
    res.send(error);
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("app connected on: " + PORT);
});
