const express = require("express");
const router = express.Router();


// Controllers
const register = require("./user_controllers/register");
const login =  require("./user_controllers/login");
// const getProfile = require("../controllers/getProfile");
// const logout = require("../controllers/logout");

router.post("/register", register.handleRegister);
router.post("/login", login.handleLogin);
// router.put("/updateProfile", updateProfile.handleProfileUpdate);
// router.get("/getProfile", getProfile.handleGetProfile);
// router.post("/logout", logout.handleLogout);

module.exports = router;