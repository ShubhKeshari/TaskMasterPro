const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db.config");

const roles = {
  MANAGER: "manager",
  TEAM_MEMBER: "team_member",
  STAKEHOLDER: "stakeholder",
};

const User = sequelize.define(
  "User",
  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM,
      values: Object.values(roles),
      allowNull: false,
      defaultValue: roles.TEAM_MEMBER,
    },
  },
  { timestamps: false }
);

module.exports = { User, roles };
