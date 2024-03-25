import express from "express";
import path from "path";
import dotenv from "dotenv";
import morgan from "morgan";

const app = express();

//env config
dotenv.config();

//Middlewares
app.use(express.json());
app.use(morgan("dev"));

app.use("/uploads", express.static("uploads"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

//Routes
app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
  });

app.listen(process.env.PORT, () => {
    console.log(`Server Running on port ${process.env.PORT}.`);
  });