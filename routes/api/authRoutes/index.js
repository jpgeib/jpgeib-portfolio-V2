const router = require("express").Router();
const { login, logout, register, resetPassword, forgotPassword, test } = require("../../../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/reset/:id/:token", resetPassword);
router.post("/forgot", forgotPassword);
router.get("/test", test);

module.exports = router;