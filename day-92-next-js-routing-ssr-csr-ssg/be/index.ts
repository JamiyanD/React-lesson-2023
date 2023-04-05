// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// require("dotenv").config();
import theaterRouter from "./routes/Theaters.api"
import commentsRouter from "./routes/Comments.api";
import moviesRouter from "./routes/Movies.api ";
import  express, {Express, Request, Response}  from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors"
dotenv.config()

// const TheatersAPI = require("./routes/Theaters-api");
const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://localhost:27017/test"
const app : Express = express();

let name: string= "boldo";
name = "test";
let phoneNumber:number = 99119911;
let isMarried: boolean = false;
let sheeps: Array<string> = ["sheep1", "sheep2","sheep3",]
let sheep: string[] = ["sheep1", "sheep2","sheep3",]
let sheepObject: {name: String, age: Number} = {name: "sheep1", age: 1}

interface Student{
  name: string,
  age:number,
  isVerified:boolean
}
app.use(cors())
app.use(express.json());
app.use("/theaters", theaterRouter);
app.use("/comments", commentsRouter)
app.use("/movies", moviesRouter)

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Day-92 TypeScript</h1>");
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected succesfully"))
    .catch((err) => console.error(err));
  console.log(`Server is running on http://localhost:${PORT}`);
});
