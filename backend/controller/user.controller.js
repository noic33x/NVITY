const express = require('express');
const mongoose = require('mongoose');
const User = require('../model/user.model');
const bcrypt = require('bcrypt');
require('dotenv').config();
const secretKey = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken');

const saltRounds = 10;
const register = async(req,res)=> {
    const {name, email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = {
        name,
        email,
        password: hashedPassword
    }
    try {
        const response = await new User(newUser).save();
        res.json(response)
    } catch (error) {
        res.send(error)
    }
}
const login = async(req,res)=> {
    const {email, password} = req.body;
    try {
        const response = await User.findOne({email});
        if(await bcrypt.compare(password, response.password)){
            const token = jwt.sign({id: response._id}, secretKey, {expiresIn: '6h'});
            res.json({message: "Login succes", user: response, token})
        }else{
            res.json({message: "Login failed"})
        }
    } catch (error) {
        res.send(error)
    }
}
const auth = async(req,res, next)=> {
    const token = req.body.token
    try {
        jwt.verify(token, secretKey, (err, user) => {
            if (err) return res.sendStatus(403); 
            next();
        })
    } catch (error) {
        console.error();
    }
}
module.exports = {
    register,
    login,
    auth
}