const db = require("../models");

exports.log = async (userId, action, details) => {
  await db.Audit.create({ userId, action, details });
};