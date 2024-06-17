const express = require("express");
const app = express();
const cors = require("cors");

const { sequelize } = require("./utils/db.config");
const { User } = require("./models/user.model");
const { Project } = require("./models/project.model");
const { Task } = require("./models/task.model");
const { File } = require("./models/file.model");
const { Message } = require("./models/message.model");

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  try {
    res.status(200).json({ error: false, message: "This is server home page" });
  } catch (error) {
    res.status(500).json({ error: true, message: `${error}` });
  }
});

sequelize.sync({ alter: false, force: false }).then(() => {
  console.log("Database & tables created!");
});

app.listen(port, () => {
  console.log(`Sevrer is running on http://localhost:${port}`);
});
