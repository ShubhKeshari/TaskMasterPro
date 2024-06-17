const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db.config");
const { Task } = require("./task.model");
const { Project } = require("./project.model");

const File = sequelize.define("File", {
  file_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  file_url: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  task_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Task,
      key: "task_id",
    },
  },
  project_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Project,
      key: "project_id",
    },
  },
});

File.belongsTo(Task, { foreignKey: "task_id" });
Task.hasMany(File, { foreignKey: "task_id" });

File.belongsTo(Project, { foreignKey: "project_id" });
Project.hasMany(File, { foreignKey: "project_id" });

module.exports = {File};
