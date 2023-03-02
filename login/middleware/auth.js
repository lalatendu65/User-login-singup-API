const jwt=require("jsonwebtoken");
const SCREAT_KEY="NodesApi"
const auth=(req,res,next)=>{
    try{
        let token=req.headers.authorization 
        if(token){
            token =token.split(" ")[1]
            let user=jwt.verify(token,SCREAT_KEY)
            req.userId=user.id
        }
        else{
            res.status(401).json({message:"invalid user"})
        }
        next()


    }
    catch(error){
        res.status(400).json({ message: "invalid user" });
        console.log(error)

    }
}
module.exports=auth;
