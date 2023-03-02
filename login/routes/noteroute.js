const express = require("express");
const auth = require("../middleware/auth");
const Notesroute = express.Router();

const notemodule = require("../models/note");

Notesroute.post("/creatnote", auth, async (req, res) => {
  const { title, des } = req.body;
  const newnote = new notemodule({
    title: title,
    des: des,
    userId: req.userId,
  });
  try {
    await newnote.save();
    res.status(201).json(newnote);
  } catch (error) {
    res.status(500).json({ message: "something went worng" });
  }
});
Notesroute.get("/",auth,async (req, res) => {
  try {
    const notes = await notemodule.find({ userId: req.userId });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "something went worng" });
  }
});

Notesroute.put("/:id",auth,async(req,res)=>{
    const id=req.params.id;
    const { title, des } = req.body;

    const newnotes={
        title:title,
        des:des,
        userId:req.userId
    }
    try{
        await notemodule.findByIdAndUpdate(id,newnotes,{new:true});
        res.status(200).json(newnotes)


    }catch(error){
        res.status(500).json({ message: "something went worng" });

    }

})

Notesroute.delete("/:id",auth,async(req,res)=>{
    const id = req.params.id;
    

    try {

       const note= await notemodule.findByIdAndRemove(id)
       res.status(202
        
        ).json(note)
    } 
    
    catch (error) {
      res.status(500).json({ message: "something went worng" });
    }
})

module.exports = Notesroute;
