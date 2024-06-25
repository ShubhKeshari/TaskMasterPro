const jwt = require("jsonwebtoken");
const { TokenBlacklist } = require("../models/tokenBlacklist.model");
const SECRET_KEY = process.env.SECRET_KEY; 

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ message: "Access token required" });
  }

  try {
    const isBlacklisted = await TokenBlacklist.findOne({ where: { token } });
    if (isBlacklisted) {
      return res.status(401).json({ message: "Invalid token" });
    }

    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token", error });
  }
};

module.exports = authMiddleware;
