const multer = require("multer");
const { v4: uuid } = require("uuid");

const storage = multer.diskStorage({
  destination:"uploads/",
  filename:(req,file,cb)=> cb(null, uuid()+"-"+file.originalname)
});

module.exports = multer({storage});