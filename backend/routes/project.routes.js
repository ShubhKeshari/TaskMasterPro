const express = require("express");
const { Project } = require("../models/project.model");
const projectRouter = express.Router();

projectRouter.post("/create", async (req, res) => {
  try {
    const { name, description, deadline, owner_id } = req.body;
    const newProject = await Project.create({
      name,
      description,
      deadline,
      owner_id,
    });
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = { projectRouter };
