module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Leave", {
    fromDate: DataTypes.DATE,
    toDate: DataTypes.DATE,
    reason: DataTypes.TEXT,
    attachment: DataTypes.STRING,
    status: { type: DataTypes.STRING, defaultValue: "pending" }
  });
};