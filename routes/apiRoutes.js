const router = require("express").Router();
const Workout = require("../models/workout.js");


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
        Workout.create({})
        .then(workout => {
        res.json(workout);
        })
        .catch(err => {
        console.log(err)
        res.status(400).json(err);
        });
    })
    .put(function (req, res) {
        res.send('Update the book')
    })

module.exports = router;


