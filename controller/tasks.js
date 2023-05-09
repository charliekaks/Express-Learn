const Task = require('../models/Task');



const getAllTasks = (req, res)=>{
res.send("Get all Tasks")
}

const createTask = async (req, res)=>{
    try {
        const task = await Task.create(req.body)
        res.status(201).json(task)
    } catch (error) {
        res.status(500).json({error:error})
    }
   
}

const getTask = (req, res)=>{
    res.send("get  a task")
}

const updateTask = (req, res)=>{
    res.send("update a task")
}

const deleteTask = (req, res)=>{
    res.send("delete a task")
}

module.exports ={
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}