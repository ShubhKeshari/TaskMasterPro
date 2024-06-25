const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db.config");

const TokenBlacklist = sequelize.define("TokenBlacklist", {
  token_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  token: {
    type: DataTypes.STRING(512),
    allowNull: false,
  },
});

module.exports = { TokenBlacklist };
