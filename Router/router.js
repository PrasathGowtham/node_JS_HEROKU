const express=require("express");

const router = express.Router();
 
const roomData = require("../modules/Hotelmodules")


router.post("/create",roomData.createrooms);



router.get("/getrooms",roomData.getrooms)

router.get("/customer",)


module.exports=router;