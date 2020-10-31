const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
        type: {
            type: String,
            trim: true,
            required: "Enter a exercise type"
          },
        name: {
            type: String,
            trim: true,
            required: "Enter a exercise name"
        },
        duration: {
            type: Number,
            required: "Enter duration"
        },
        weight: {
            type: Number,

        },
        reps: {
            type: Number,

        },
        sets: {
            type: Number,

        }
    }
    ]
    
});

const Workout = mongoose.model("Transaction", workoutSchema);

module.exports = Workout;
