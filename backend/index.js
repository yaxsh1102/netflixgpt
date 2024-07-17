const express = require("express")
const app = express()
const cors = require('cors')


PORT = process.env.PORT||4000
app.use(cors()) 
 app.use(express.json())

require("./config/database").connect()
const user = require("./routes/routes") 
app.use("/api/v1" , user) ;

app.listen(PORT ,  ()=>{
    console.log("APP IS RUNNING")
})

