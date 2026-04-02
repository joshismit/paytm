const express = require("express");
const zod = require("zod");
const {User} = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");
const router = express.Router();

//signup and sign in routes

const signupSchema = zod.object({
    username:zod.string(),
    password: zod.string(),
    firstName: zod.string(),
    password: zod.string()
})



router.post("/signup", async (req,res)=>{
    const {success} = signupSchema.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Email already taken / incorrect inputs"
        })
    }
    const user = await User.findOne({
        username: req.body.username
    })

    if(user._id){
        return res.json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const dbUser =  await User.create(body);
    const token = jwt.sign({
        userId: dbUser._id
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
})

module.exports = router;