import express from "express";
import {
  addUser,
  getUsers,
  getUserBYID,
  editUser,
  deleteUser,
} from "../controller/user-controller.js";
const route = express.Router();
route.get("/", getUsers);
route.post("/add", addUser);
route.get("/:id", getUserBYID);
route.put("/:id", editUser);
route.delete("/:id", deleteUser);
export default route;
