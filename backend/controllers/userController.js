const User = require("../models/user");

class UserController {
  getUser = async (req, res) => {
    const user = req.user;
    const result = await User.getById(user.userID);
    delete result.password;
    delete result.salt;
    res.json(result);
  };
}

module.exports = new UserController();
