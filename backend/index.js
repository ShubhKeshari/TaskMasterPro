const express = require("express");
const app = express();
const cors = require("cors");

const { sequelize } = require("./utils/db.config");
const { User } = require("./models/user.model");
const { Project } = require("./models/project.model");
const { Task } = require("./models/task.model");
const { File } = require("./models/file.model");
const { Message } = require("./models/message.model");

const { userRouter } = require("./routes/user.routes");
const { taskRouter } = require("./routes/task.routes");
const { projectRouter } = require("./routes/project.routes");

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
app.use("/users", userRouter);
app.use("/tasks", taskRouter);
app.use("/projects", projectRouter);

app.listen(port, async () => {
  await sequelize.sync();
  console.log("All models were synchronized successfully.");
  console.log(`Sevrer is running on http://localhost:${port}`);
});
