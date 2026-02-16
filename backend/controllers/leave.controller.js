const db = require("../models");
const audit = require("../services/audit.service");

exports.applyLeave = async (req,res)=>{
  const leave = await db.Leave.create({
    ...req.body,
    attachment:req.file?.filename,
    UserId:req.userId
  });
  await audit.log(req.userId,"APPLY_LEAVE","Leave applied");
  res.send(leave);
};

exports.getLeaves = async (req,res)=>{
  if(req.role === "employee"){
    const leaves = await db.Leave.findAll({
      where:{UserId:req.userId},
      include:db.User
    });
    return res.send(leaves);
  }

  const leaves = await db.Leave.findAll({include:db.User});
  res.send(leaves);
};

exports.updateLeaveStatus = async (req,res)=>{
  const leave = await db.Leave.findByPk(req.params.id);
  leave.status=req.body.status;
  await leave.save();
  await audit.log(req.userId,"LEAVE_STATUS",req.body.status);
  res.send(leave);
};