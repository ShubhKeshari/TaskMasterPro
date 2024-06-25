const { roles } = require("../models/user.model");

const validateRegister = (req, res, next) => {
  const { username, email, password, role } = req.body;
  if (!username || !email || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }
  if (!Object.values(roles).includes(role)) {
    return res.status(400).json({ message: "Invalid role" });
  }
  next();
};

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
  next();
};

const validateLogout = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(400).json({ message: "Authorization token is required" });
  }
  next();
};

module.exports = {
  validateRegister,
  validateLogin,
  validateLogout,
};
