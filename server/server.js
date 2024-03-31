import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

let app = express();
let port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

const uri = process.env.URI;
mongoose.connect(uri);
mongoose.connection.once("open", () => {
  console.log("mongodb server is connected");
});

import userRouter from "./routes/users.route.js";
import medicineRouter from "./routes/medicine.route.js"
import cartRouter from "./routes/cart.route.js"
import contactRouter from "./routes/contact.route.js"

app.use('/signUp', userRouter)
app.use('/shop', medicineRouter)
app.use('/cart', cartRouter)
app.use('/contact', contactRouter)

app.listen(port, () => console.log("server is connected to port 3000"));
