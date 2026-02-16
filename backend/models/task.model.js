module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Task", {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    dueDate: DataTypes.DATE,
    status: { type: DataTypes.STRING, defaultValue: "pending" }
  });
};