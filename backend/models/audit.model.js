module.exports = (sequelize, DataTypes) => {
  return sequelize.define("AuditLog", {
    userId: DataTypes.INTEGER,
    action: DataTypes.STRING,
    details: DataTypes.TEXT
  });
};