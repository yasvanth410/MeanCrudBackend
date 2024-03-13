const { ObjectId } = require('mongodb');
const { getDb } = require('./mongoConnection');

function updateEmp(req, res){
    const {id, fullName, email, role, companyName, mobile, address} = req.body;
    getDb().collection("employeeData").updateOne({_id: ObjectId(id)}, { $set: { fullName, email, role, companyName, mobile, address}}, (err, result)=>{
        if(err) throw err;
        res.json("employee details updated successfully 🎭");
    })
}

module.exports = updateEmp