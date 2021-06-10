const User = require("../models/user");

class UserController {
  getUser = async (req, res) => {
    const user = req.user;
    const result = await User.getById(user.userID);
    res.json(result);
  };
}

module.exports = new UserController();
