import users from "../models/users.js";
import express from "express";

let router = express.Router();

router.route("/").get((req, res) => {
  users.find() 
  .then((users) => res.json(users))
  .catch(err => res.status(400).json('error :'+ err))
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;
  const newUser = new users({ name, password, email });
  newUser
    .save()
    .then(() => res.json("user added"))
    .catch((err) => res.status(400).json("error" + err));
});

export default router;
