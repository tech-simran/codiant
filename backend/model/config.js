const mysql = require("mysql")
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"codienttask"
})
connection.connect((err)=>{
    if(err){
        console.log("connection is not created",err)
    }
    else{
        console.log("conetion is creates successfully")
    }
})
module.exports = connection