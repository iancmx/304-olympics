const express = require("express");
const router = express.Router();


// Controllers
const user = require("./user_controllers/user");

router.post("/register", user.handleRegister);
router.post("/login", user.handleLogin);
// router.put("/updateProfile", updateProfile.handleProfileUpdate);
// router.get("/getProfile", getProfile.handleGetProfile);
// router.post("/logout", logout.handleLogout);

module.exports = router;