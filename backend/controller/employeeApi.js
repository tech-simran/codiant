const connection = require("../model/config")
const postData  = async (req,res)=>{
    const data = [req.body]
    console.log("data",data)
    const sqlQuery = `INSERT INTO employee SET ?`
   await connection.query(sqlQuery,data,(err,result)=>{
        if(err){
            res.send({status:400,message:"data is not send",response:err.sqlMessage})
        }
        else{
            res.send({status:200,message:"data send successfully",response:result})
        }
    })
}
const fetchData = async (req,res)=>{
    const sqlQuery = `SELECT * from employee`
    await connection.query(sqlQuery,(err,result)=>{
         if(err){
             res.send({status:400,message:"data is not fetched succefully",response:err.sqlMessage})
         }
         else{
             res.send({status:200,message:"data is fetched succefully",response:result})
         }
     })
}
const deleteData  = async (req,res)=>{
    const id = req.params.id
    const sqlQuery = `DELETE FROM employee where id=?`
    await connection.query(sqlQuery,id,(err,result)=>{
        if(err){
            res.send({status:400,message:"data not delete",response:err.sqlMessage})
        }
        else{
            res.send({status:200,message:"data is deleted",response:result})
        }
    })
}
const updateData = async (req,res)=>{
    const data = [req.body.name,req.body.age,req.body.address,req.body.email,req.body.password,req.params.id]
    console.log("data",data)
    const sqlQuery = `UPDATE  employee SET name=?, age=?, address=?, email=?, password=? WHERE id=?`
    await connection.query(sqlQuery,data,(err,result)=>{
        if(err){
            res.send({status:400,message:"data can not be update",response:err.sqlMessage})
        }
        else{
            res.send({status:200,message:"data is updated succesfully",response:result})
        }
    })
}
module.exports = {postData,fetchData,deleteData,updateData}