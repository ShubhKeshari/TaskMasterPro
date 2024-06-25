const express = require("express");
const { Task } = require("../models/task.model");
const taskRouter = express.Router();

taskRouter.post("/create", async (req, res) => {
  try {
    const { name, description, status, deadline, assigned_to, project_id } =
      req.body;
    const newTask = await Task.create({
      name,
      description,
      status,
      deadline,
      assigned_to,
      project_id,
    });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = { taskRouter };
