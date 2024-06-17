const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db.config");
const { User } = require("./user.model");
const { Project } = require("./project.model");

const Message = sequelize.define("Message", {
  message_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  sender_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "user_id",
    },
  },
  receiver_id: {
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

Message.belongsTo(User, { as: "Sender", foreignKey: "sender_id" });
User.hasMany(Message, { foreignKey: "sender_id" });

Message.belongsTo(User, { as: "Receiver", foreignKey: "receiver_id" });
User.hasMany(Message, { foreignKey: "receiver_id" });

Message.belongsTo(Project, { foreignKey: "project_id" });
Project.hasMany(Message, { foreignKey: "project_id" });

module.exports = {Message};
