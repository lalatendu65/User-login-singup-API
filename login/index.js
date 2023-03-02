const express=require("express");

const app=express();
const mongoose=require("mongoose");
const Notesroute = require("./routes/noteroute");

const Userroutes=require("./routes/userroutes");

PORT=5000
//db coonection 

mongoose.connect("mongodb://localhost:27017/pratice3")
.then( () => {

  console.log("db connected ");
})
.catch((error)=>{
    console.log(error)
});
//json middwileware 
app.use(express.json());
//routes define


app.use("/user",Userroutes);
app.use("/notes",Notesroute)




app.listen(PORT,()=>{
    console.log(`app listen at ${PORT}`)
})