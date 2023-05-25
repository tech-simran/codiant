const express = require("express")
const app = express()
app.use(express.json())
const cors = require("cors")
app.use(cors())
const Port = 6060
const empRoutes = require("./routes/employeeRoutes")
app.use("/",empRoutes)
app.listen(Port, ()=>{
    console.log(`Server is listening on port ${Port}`)
})