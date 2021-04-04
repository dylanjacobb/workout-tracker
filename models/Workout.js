const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
        required: 'Date is required'
    },
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: 'Exercise name is required'
            },
            totalDuration: {
                type: Number,
                required: 'Excercise duration is required'
            },
            numExercises: {
                type: Number,
                required: 'Number of exercises is required'
            },
            totalWeight: {
                type: Number
            },
            totalSets: {
                type: Number
            },
            totalReps: {
                type: Number
            },
            totalDistance: {
                type: Number
            }
        }
    ]
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;