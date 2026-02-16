const db = require("../models");
const audit = require("../services/audit.service");

exports.createTask = async (req,res)=>{
  const task = await db.Task.create({...req.body,UserId:req.body.userId});
  await audit.log(req.userId,"CREATE_TASK","Task created");
  res.send(task);
};

exports.getTasks = async (req,res)=>{
  res.send(await db.Task.findAll({include:db.User}));
};

exports.updateTask = async (req,res)=>{
  const task = await db.Task.findByPk(req.params.id);
  await task.update(req.body);
  res.send(task);
};