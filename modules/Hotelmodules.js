const mongo = require("../connect");



module.exports.createrooms = async (req, res) => {
    try {
        const roomData = await mongo.selectedDb.collection("room").insert(req.body);
        res.send(roomData)
    } catch (err) {
        console.error(err);

    }
};

module.exports.getrooms=async (req,res)=>{
    try {
        const getData = await mongo.selectedDb.collection("room").find().toArray();
        res.send(getData)
    } catch (err) {
        console.error(err);
res.status(500).send(err)
    }
};