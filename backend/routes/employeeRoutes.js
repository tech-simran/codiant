const express = require("express")
const { postData, fetchData, deleteData, updateData } = require("../controller/employeeApi")
const empRoutes = express.Router()

empRoutes.post("/addemployee",postData)
empRoutes.get("/employees",fetchData)
empRoutes.delete("/deleteemploye/:id",deleteData)
empRoutes.put("/updateemployee/:id",updateData)
module.exports = empRoutes