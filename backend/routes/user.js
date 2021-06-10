const express = require("express");
const { UserAuthMiddleware } = require("../middleware/authMiddleware");
const router = express.Router();

const UserController = require("../controllers/userController");

//get own user
router.get("/", UserAuthMiddleware, UserController.getUser);

module.exports = router;
