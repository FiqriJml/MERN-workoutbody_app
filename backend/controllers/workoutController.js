
const Workout = require('../models/WorkoutModel')
const mongoose = require('mongoose')

const createWorkout = async (req, res) => {
    const {title, reps, load} = req.body
    try {
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})        
    }
}

const getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({}).sort({createdAt: -1})
        res.status(200).json(workouts)
    } catch (error) {
        res.status(400).json({error: error.message})        
    }
}

const getWorkoutById = async (req, res) => {
    const workoutId = req.params.id 

    if(!mongoose.isValidObjectId(workoutId)){
        return res.status(404).json({message: "no such workout"})   
    }
    try {
        const workout = await Workout.findById(workoutId)
        if(!workout){
            return res.status(404).json({message: "no such workout"})
        }
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})        
    }
}

const updateWorkout = async (req, res) => {
    const newWorkout = req.body
    const {id} = req.params
    const options = {updated: true}

    if(!mongoose.isValidObjectId(id)){
        return res.status(404).json({message: "no such workout"})   
    }
    const workout = await Workout.findByIdAndUpdate(id, newWorkout, options)
    if(!workout){
        return res.status(404).json({message: "no such workout"})
    }
    res.status(200).json(workout)
    
}

const deleteWorkout = async (req, res) => {
    const id = req.params.id 

    if(!mongoose.isValidObjectId(id)){
        return res.status(404).json({message: "no such workout"})   
    }
    const workout = await Workout.findOneAndDelete({_id: id})
    if(!workout){
        return res.status(400).json({error: "no such workout"})
    }
    res.status(200).json(workout)
    
}

module.exports = {
    createWorkout,
    getWorkoutById,
    getWorkouts,
    updateWorkout,
    deleteWorkout
}