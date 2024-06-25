const express = require("express");
const { User } = require("../models/user.model");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { TokenBlacklist } = require("../models/tokenBlacklist.model");
const {
  validateRegister,
  validateLogin,
  validateLogout,
} = require("../middleware/validationMiddleware");
const SECRET_KEY = process.env.SECRET_KEY;

userRouter.post("/register", validateRegister, async (req, res) => {
  const { username, email, password, role } = req.body;
  try {
    const existingUser = await User.findOne({ where: { email } });
    if(existingUser){
     return res.status(400).json({ message: "User already registered",error:true});
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role,
    });
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
});

userRouter.post("/login", validateLogin, async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ email: user.email, role: user.role }, SECRET_KEY, {
      expiresIn: "10d",
    });
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
});

userRouter.post("/logout", validateLogout, async (req, res) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  try {
    await TokenBlacklist.create({ token });
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ message: "Error logging out", error });
  }
});

module.exports = { userRouter };
