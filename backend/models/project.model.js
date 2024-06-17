const { DataTypes } = require("sequelize");
const { User } = require("./user.model");
const { sequelize } = require("../utils/db.config");

const Project = sequelize.define("Project", {
  project_id: {
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
  deadline: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  owner_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "user_id",
    },
  },
});

Project.belongsTo(User, { foreignKey: "owner_id" });
User.hasMany(Project, { foreignKey: "owner_id" });

module.exports = { Project };
