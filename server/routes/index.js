const express = require("express");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");
const { signUp, signIn } = require("../utils/validations");

const e = require("express");

// This section will help you get a list of all the records.
recordRoutes.route("/signin").post(signIn, async (req, res) => {
  const dbConnect = dbo.getDb();
  try {
    const user = await dbConnect.collection("users").findOne({
      username: req.body.username,
    });

    console.log({ user });

    if (user && (await bcrypt.compare(req.body.password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email: user.email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      await dbConnect.collection("users").updateOne(
        {
          username: req.body.username,
        },
        { $set: { token } },
        function (err, result) {
          if (err) throw err;
        }
      );

      const { _id, password, ...rest } = user;
      res.status(200).json({ ...rest, token });
    }
    res.status(400).send("Invalid Credentials");
  } catch (error) {
    console.log(error);
    res.status(400).send("Error fetching user!");
  }
});

// This section will help you create a new record.
recordRoutes.route("/signup").post(signUp, async (req, res) => {
  const dbConnect = dbo.getDb();
  const { username, full_name, email, phone, password } = req.body;
  // check if user already exist
  // Validate if user exist in our database
  const oldUser = await dbConnect.collection("users").findOne({ email: email });

  if (oldUser) {
    return res
      .status(409)
      .send(`User with ${email} Already Exist. Please try again!`);
  }

  const userInfo = {
    username,
    name: full_name,
    email: email.toLowerCase(), // sanitize: convert email to lowercase
    phone,
    password: await bcrypt.hash(password, 10),
  };

  dbConnect.collection("users").insertOne(userInfo, function (err, result) {
    if (err) {
      console.log(err);
      res.status(400).send("Error inserting user!");
    } else {
      console.log(`Added a new user with id ${result.insertedId}`);
      res.status(204).send();
    }
  });
});

module.exports = recordRoutes;
