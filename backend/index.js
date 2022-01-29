const express= require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const app=express();
const pinRoute=require("./routes/pins");
const userRoute=require("./routes/users");
const cors=require("cors");

dotenv.config();

app.use(express.json());
app.use(cors(
    {
        origin: ['http://localhost:8800'],
        credentials:true
    },
))


mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true}).then(()=>{
    console.log("mongoDB connected");
})
.catch((err)=>console.log(err));

app.use("/api/pins", pinRoute);
app.use("/api/users", userRoute);

app.listen(process.env.PORT||8800,()=>{
    console.log("Backend server is running");
})
