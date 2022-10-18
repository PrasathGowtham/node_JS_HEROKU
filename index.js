const express = require("express");

const app = express();

const routerPath = require("./Router/router")
const dotenv = require("dotenv")
dotenv.config();
const mongo = require("./connect");

app.use(express.json());

mongo.connect();



app.use("/", (req, res, next) => {
   var auth={
    authrised:true
   };
   if(auth.authrised){
    next();
   }else{
    res.send({msg:"Not Authorised"})
   }
    
});



app.use("/room", routerPath);

app.use("/booking", routerPath);

app.use("/customer", routerPath);

app.use("/data", routerPath)



const PORT = process.env.PORT||3000;

app.listen(PORT,()=>{
    console.log("app is running")
})