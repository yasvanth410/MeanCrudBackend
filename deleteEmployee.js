const { ObjectId } = require('mongodb');
const {getDb} = require('./mongoConnection');

function deleteEmp(req, res){
    const id = req.params.empid
    getDb().collection("employeeData").deleteOne({_id: ObjectId(id)}, (err, result)=> {
        if(err) throw err;
        res.json("employee deleted successfully");
    })

}

module.exports = deleteEmp