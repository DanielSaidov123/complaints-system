import express from "express";
// שים לב: ב-ES Modules חייבים להוסיף סיומת .js בייבוא קבצים שלך
import * as authController from '../controllers/auth.controller.js'; 

const router = express.Router();

router.post('/login', authController.login);

// במקום module.exports = router;
export default router; 
