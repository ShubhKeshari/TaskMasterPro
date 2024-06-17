const express = require("express");
const { sequelize } = require("./utils/db.config");
const {User} = require("./models/user.model");
const {Project} = require("./models/project.model");
const {Task} = require("./models/task.model");
const {File} = require("./models/file.model");
const {Message} = require("./models/message.model");
sequelize.sync().then(() => {
  console.log("Database & tables created!");
});
