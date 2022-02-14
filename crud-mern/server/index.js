import express from "express";
import mongoose from "mongoose";
import route from "./route/routes.js";
import cors from "cors";

import bodyparser from "body-parser";
const app = express();
app.use(cors());

app.use(bodyparser.json({ extended: true }));
app.use(bodyparser.urlencoded({ extended: true }));
app.use("/users", route);
const PORT = 8000;
const URL =
  "mongodb+srv://smit:smit@crud.rkntb.mongodb.net/CRUD?retryWrites=true&w=majority";

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running sucessfuly on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error", error.message);
  });
