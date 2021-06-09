const User = require("../models/user");

module.exports.getUsers = async (req, res) => {
  const result = await User.get();
  res.json(result);
};
