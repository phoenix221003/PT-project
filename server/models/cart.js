import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Description: { type: String, required: true },
  Photo: { type: String, required: true },
  MRP: { type: String, required: true },
  Quantity: { type: Number, required: true },
  

});

const cart = mongoose.model("cart", cartSchema);
export default cart;
