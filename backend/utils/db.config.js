const { Sequelize } = require("sequelize");
require("dotenv").config();
const sequelize = new Sequelize(process.env.DATABASE_NAME, "root", process.env.PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = { sequelize };