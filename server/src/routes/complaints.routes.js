// routes/todos.js
import express from "express";
import { createComplaint, getComplaint } from "../controllers/complaints.controller.js";
import { requireAdminAuth } from "../middlewares/requireAdminAuth.js";
const router = express.Router();

 router.route("/").post(createComplaint).get( requireAdminAuth,getComplaint)

export default router;
