import mongoose  from "mongoose";
const URL = "mongodb://localhost/video-DB";
( async () => {
    try {
    
        const DB= await mongoose.connect(URL);
        console.log("connect to Database to" , DB.connection.name);
    } catch (error) {
        console.error(error)
    }
   
})()