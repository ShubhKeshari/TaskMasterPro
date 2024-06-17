const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db.config");
const { User } = require("./user.model");
const { Project } = require("./project.model");

const Task = sequelize.define("Task", {
  task_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  deadline: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  assigned_to: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "user_id",
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

Task.belongsTo(User, { foreignKey: "assigned_to" });
User.hasMany(Task, { foreignKey: "assigned_to" });

Task.belongsTo(Project, { foreignKey: "project_id" });
Project.hasMany(Task, { foreignKey: "project_id" });

module.exports = { Task };
