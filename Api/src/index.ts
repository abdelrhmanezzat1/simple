import app from "./app"
import "./db/db"
import dotenv from"dotenv"
dotenv.config()
const Port = 5000 || process.env.PORT


app.listen(Port,()=>{
console.log(`server is running at port ${Port}..!`)
})