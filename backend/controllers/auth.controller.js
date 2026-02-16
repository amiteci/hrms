const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const audit = require("../services/audit.service");

exports.register = async (req,res)=>{
  const hash = await bcrypt.hash(req.body.password,8);
  const user = await db.User.create({...req.body,password:hash});
  await audit.log(user.id,"REGISTER","User registered");
  res.send(user);
};

exports.login = async (req,res)=>{
  const user = await db.User.findOne({where:{email:req.body.email}});
  if(!user) return res.status(404).send("User not found");

  const valid = await bcrypt.compare(req.body.password,user.password);
  if(!valid) return res.status(401).send("Invalid password");

  const token = jwt.sign({id:user.id,role:user.role},process.env.JWT_SECRET,{expiresIn:"1d"});
  await audit.log(user.id,"LOGIN","User logged in");

  res.send({token,role:user.role});
};