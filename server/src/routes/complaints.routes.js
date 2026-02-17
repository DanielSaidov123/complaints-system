// routes/todos.js
import express from "express";
import { createComplaint, getComplaint } from "../controllers/complaints.controller.js";
const router = express.Router();

 router.route("/").post(createComplaint).get(getComplaint)

export default router;
