const express = require('express');
const app  = express();
const mongo = require('./mongoConnection');
const emp = require('./employee');
const cors = require('cors');
const bodyParser = require('body-parser'); 
const port = 4100;

app.use(bodyParser.json());
app.use(cors());
app.use("/employee", emp);

app.listen(port, ()=> {
    mongo.mongoConnect();
    console.log(`server is running at ${port}`);
})