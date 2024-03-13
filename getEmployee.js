const { getDb } = require('./mongoConnection');

function getEmp(req, res) {
    getDb().collection("employeeData").find().toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
}



module.exports = getEmp