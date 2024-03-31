import express from "express";
import cart from "../models/cart.js";

let router = express.Router();

router.route("/").get((req, res) => {
  cart
    .find()
    .then((medicine) => res.json(medicine))
    .catch((err) => res.status(400).json("error" + err));
});

router.route("/add").post((req, res) => {
  const Name = req.body.Name;
  const Description = req.body.Description;
  const Photo = req.body.Photo;
  const MRP = req.body.MRP;
  const Quantity = req.body.Quantity;
  
  const newCart = new cart({ Name, Description, Photo, MRP, Quantity });
  newCart
    .save()
    .then(() => res.json("item added"))
    .catch((err) => res.status(400).json("error" + err));
});

router.route("/:id").delete((req, res) => {
  cart.findByIdAndDelete(req.params.id)
    .then(() => res.json("item deleted"))
    .catch((err) => res.status(400).json("error:" + err));
});

export default router;
