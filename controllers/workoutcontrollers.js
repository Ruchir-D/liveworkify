const Workout = require("../models/Workout");
const mongoose = require('mongoose');

// GET ALL WORKOUTS
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts);
}


// GET ONE WORKOUT
const getWorkout = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({msg: 'No such Workout'});
    }
    const workout = await Workout.findById(id);
    if(!workout) {
        return res.status(404).json({msg: "No such workout"});
    }
    res.status(200).json(workout);

}


// CREATE NEW WORKOUT
const createWorkout = async (req, res) => {

    const {title, reps, load} = req.body;

    try{
        const workout = await Workout.create({title, reps, load});
        res.status(200).json(workout);
    }
    catch(err){
        res.status(400).json({err: err.message});
    }
}


// DELETE A WORKOUT

const deleteWorkout = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "No such Workout"})
    }

    const workout = await Workout.findOneAndDelete({_id: id});
    if(!workout) {
        return res.status(400).json({error: 'No such workout'})
    }

    res.status(200).json(workout);
}



// UPDATE A WORKOUT

const updateWorkout = async(req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "No such workout"})
    }

    const workout = await Workout.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if(!workout) {
        req.status(400).json({error: 'No such Workout'})
    }

    res.status(200).json(workout);
}



module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    updateWorkout,
    deleteWorkout
}