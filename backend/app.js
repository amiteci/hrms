require("dotenv").config();
const express=require("express");
const cors=require("cors");
const morgan=require("morgan");
const db=require("./models");
var bodyParser = require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/uploads",express.static("uploads"));

app.use("/api/v1",require("./routes/v1"));

const swaggerUi=require("swagger-ui-express");
const swaggerJsDoc=require("swagger-jsdoc");

const specs = swaggerJsDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "RMS API",
      version: "1.0.0",
      description: "Resource Management System"
    },
    servers: [
      { url: "http://localhost:5000/api/v1" }
    ],
    components: {
        securitySchemes: {
        bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT"
        }
        }
    },
    security: [{ bearerAuth: [] }]
  },
  apis: ["./routes/v1/*.js"]  // path to route files
});
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(specs));

db.sequelize.sync().then(()=>{
  app.listen(process.env.PORT,()=>console.log("Server running"));
});