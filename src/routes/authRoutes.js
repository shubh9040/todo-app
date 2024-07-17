const express = require("express");
const { signup, login, logout } = require("../controllers/authController"); // Ensure the correct path
const router = express.Router();

// Route: POST api/auth/signup - Sign-up user
router.post("/signup", signup);
// Route: POST api/auth/login - Login user
router.post("/login", login);
// Route: POST api/auth/logout - Logout user
router.post("/logout", logout);

module.exports = router;
