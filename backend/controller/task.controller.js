const express = require('express');

//import Model
const Task = require('../model/task.model');

const allTask = async(req,res)=> {
    const {userId} = req.body;
    try {
        const response = await Task.find({userId});
        res.json(response)
    } catch (error) {
        res.json(error)
    }   
}
const createTask = async(req,res)=> {
    const {name, description, status, priority, userId} = req.body;
    const newTask = {
        name,
        description,
        status,
        priority,
        userId
    }
    try {
        const response = await new Task(newTask).save();
        res.json({status: true, response})
    } catch (error) {
        res.json(error)
    }
}

const uncompleteTask = async(req, res)=> {
    const {userId} = req.body;
    try {
        const response = await Task.find({status: false, userId});
        res.json(response)
    } catch (error) {
        res.json(error);
    }
}

const completeTask = async(req, res)=> {
    const {userId} = req.body;
    try {
        const response = await Task.find({status: true, userId});
        res.json(response)
    } catch (error) {
        res.json(error);
    }
}

const editTask = async(req, res)=> {
    const id = req.params.id;
    const {name, description, status, priority} = req.body;
    const newTask = {
        name,
        description,
        status,
        priority
    }
    try {
        const response = await Task.findByIdAndUpdate(id, newTask)
        res.json({message: true})
    } catch (error) {
        res.json(error)
    }
}

const changeTocomplete =  async(req, res)=> {
    const id = req.params.id
    const status = true;
    try {
        const response = await Task.findByIdAndUpdate(id, {status})
        res.json({message: true})
    } catch (error) {
        res.json(error)
    }
}

const changeToUncomplete =  async(req, res)=> {
    const id = req.params.id
    const status = false;
    try {
        const response = await Task.findByIdAndUpdate(id, {status})
        res.json({message: true})
    } catch (error) {
        res.json(error)
    }
}

const deleteTask = async(req, res)=> {
    const id = req.params.id;
    try {
        const response = await Task.findByIdAndDelete(id);
        res.json(response)
    } catch (error) {
        res.json(error)
    }
}
const allPriority = async(req, res)=> {
    const {userId} = req.body;
    try {
        const response = await Task.find({priority: true, userId});
        res.json(response)
    } catch (error) {
        res.json(error);
    }
}

const changeToPriority =  async(req, res)=> {
    const id = req.params.id
    const priority = true;
    try {
        const response = await Task.findByIdAndUpdate(id, {priority})
        res.json({message: true})
    } catch (error) {
        res.json(error)
    }
}
const changeToUnpriority =  async(req, res)=> {
    const id = req.params.id
    const priority = false;
    try {
        const response = await Task.findByIdAndUpdate(id, {priority})
        res.json({message: true})
    } catch (error) {
        res.json(error)
    }
}
module.exports = {
    allTask,
    createTask,
    uncompleteTask,
    completeTask,
    editTask,
    changeTocomplete,
    changeToUncomplete,
    deleteTask,
    changeToPriority,
    allPriority,
    changeToUnpriority
}