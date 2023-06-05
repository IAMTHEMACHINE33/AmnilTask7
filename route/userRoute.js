const express = require("express");
const router = express.Router();
const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
require('dotenv').config()

router.post("/register", async(req, res) => {
    try
    {
        const {firstname, lastname, username, password, role} = req.body
        const user = await User.findOne(
            {
                where : { 
                    username: username 
                }
            }
        );
        if(user)
        {
            return res
                    .status(400)
                    .send("User exists")
        }
        const register = await User.create(
            {
                username, 
                firstname,
                lastname,  
                password,
                role
            }
        );
        // console.log(register);
        res
            .status(200)
            .send("User created")
    }
    catch (error)
    {
        // console.log(error);
        res
        .status(400)
        .send("Error in register")
    }
})

router.post("/login", async(req, res) => {
    try
    {
        const { username, password } = req.body;
        const user = await User.findOne(
            {
                where : {
                    username : username
                }
            }
        )

        if(user.username == username && user.password == password)
        {
            const token = jwt.sign({username}, process.env.JWT_SECRET)
            return res 
                    .status(200)
                    .json(
                            {
                                success : true, 
                                user : user.id,
                                token,
                                message : "User login success"
                            }
                        )
        }
        return res
                .status(400)
                .send("Invalid credentials")
    }
    catch (error)
    {
        // console.log(error);
        res
        .status(400)
        .send("Error in register")
    }
})

module.exports = router;