import express from "express";
import { signup, login,getUserProfile } from "../controller/user.controller.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

//This is the route to fetch user profile data
router.get("/:id", getUserProfile);


export default router;