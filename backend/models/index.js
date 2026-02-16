const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./user.model")(sequelize, Sequelize);
db.Leave = require("./leave.model")(sequelize, Sequelize);
db.Task = require("./task.model")(sequelize, Sequelize);
db.Audit = require("./audit.model")(sequelize, Sequelize);

db.User.hasMany(db.Leave);
db.Leave.belongsTo(db.User);

db.User.hasMany(db.Task);
db.Task.belongsTo(db.User);

module.exports = db;