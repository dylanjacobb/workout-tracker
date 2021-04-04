const router = require('express').Router();
const db = require('../models');
const Workout = require('../models/Workout');
const mongoose = require('mongoose');

// FIXME: add the aggregates

// get all workouts
router.get('/api/workouts', (req, res) => {
    db.Workout.find({})
        .then(workoutdb => {
            res.json(workoutdb);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// get workout range page
router.get('/api/workouts/range', (req, res) => {
    db.Workout.find({})
        .then(workoutdb => {
            res.json(workoutdb);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put('/api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {
        $push: {
            exercises: req.body,
        }
    })
    .then(workoutdb => {
        res.json(workoutdb);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// create new workout
router.post('/api/workouts', ({ body }, res) => {
    db.Workout.create(body)
        .then(workoutdb => {
            res.json(workoutdb);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

module.exports = router;