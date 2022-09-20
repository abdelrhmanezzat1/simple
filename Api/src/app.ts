import express from "express";
import morgan from "morgan";
import cors from "cors";
import routervideo from "./routers/video.routers";
import dotenv from"dotenv"
import path from "path";
dotenv.config()
const app = express();
// if(process.env.NODE_ENV === 'production'){

   
// }
app.use(express.static(path.join(__dirname,"../../client","build")))
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../client","build","index.html"))
})
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(routervideo);


export default app;
