var mongo = require('mongodb');
var url = "mongodb://127.0.0.1:27017";
let _db;

function mongoConnect(){
    mongo.MongoClient.connect(url, (err, db)=> {
        if(err) throw err;
        _db = db.db("config");
        console.log("db is connected");
        return true;
    });
}

function getDb(){
    return _db;
}

module.exports = { getDb, mongoConnect}