//const router = require("express").Router();
const Workout = require("../models/workout.js");


module.exports = (router)=>{ 

    router.route('/api/workouts')
    .get(function (req, res) {
        Workout.find({})
        .sort({ date: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
         })
        .catch(err => {
            res.status(400).json(err);
         });
    })
    .post(function (req, res) {
        res.send('Add a book')
    })
    .put(function (req, res) {
        res.send('Update the book')
    })
};

  