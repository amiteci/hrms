const db = require("../models");
const audit = require("../services/audit.service");

exports.getUsers = async (req,res)=>{
  res.send(await db.User.findAll());
};

exports.deleteUser = async (req,res)=>{
  await db.User.destroy({where:{id:req.params.id}});
  await audit.log(req.userId,"DELETE_USER","User removed");
  res.send("Deleted");
};