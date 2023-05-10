const Task = require('../models/Task');



const getAllTasks = async (req, res)=>{
    try {
        let tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({error:error})
    }
}

const createTask = async (req, res)=>{
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({error:error})
    }
   
}

const getTask = async (req, res)=>{
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id: taskID});
        if(!task){
            return res.status(404).json({"msg":`The is no task with id ${taskID}`});
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({error:error});
    }
    
}

const updateTask = async (req, res)=>{
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id: taskID}, req.body,{
            new:true,
            runValidators:true
        });
        if(!task){
            return res.status(404).json({"msg":`The is no task with id ${taskID}`});
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({error:error});
    }
}

const deleteTask = async (req, res)=>{
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id: taskID});
        if(!task){
            return res.status(404).json({"msg":`The is no task with id ${taskID}`});
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({error:error});
    }
}

module.exports ={
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}