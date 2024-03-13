const { getDb } = require('./mongoConnection');


function insertData(req, res){
    const data = req.body
    getDb().collection("employeeData").insertOne(data, (err, result)=>{
        if(err) throw err;
        res.json("employee added successfully 👩‍💻")
    });
}

module.exports = insertData 