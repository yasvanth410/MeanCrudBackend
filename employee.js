const express = require('express');
const router = express.Router();
const addEmp = require("./addEmployee");
const getemp = require('./getEmployee');
const upEmp = require('./updateEmployee')
const delEmp = require('./deleteEmployee');

router.post('/addEmployee', addEmp);
router.get("/getEmp", getemp);
router.put("/updateEmp", upEmp);
router.delete("/deleteEmp/:empid", delEmp);

module.exports = router