const express = require("express");
const { verifyCode } = require("../controllers/verificationController");

const router = express.Router();

router.post("/verify-code", verifyCode);

module.exports = router;
