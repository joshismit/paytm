const express = require("express");
const zod = require("zod");
const router = express.Router();

//signup and sign in routes

const signupSchema = zod.object({
    username:zod.string(),
    password: zod.string(),
    firstName: zod.string(),
    password: zod.string()
})



router.post("/signup",(req,res)=>{
    const body = req.body;
    const {success} = signupSchema.safeParse(req.body);
    if(!success){
        return res.json({
            message: "Email already taken / incorrect inputs"
        })
    }
    const user = User
})

module.exports = router;