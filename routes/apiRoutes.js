const router = require('express').Router();
const Workout = require('../models/workout');

router.get('/api/workouts', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'
                }
            }
        }
    ])
        .then(workoutdb => {
            res.json(workoutdb);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'
                },
            }
        },
        {
            $sort: {
                _id: -1
            }
        },
    ])
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err)
        })
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

router.post('/api/workouts', ({ body }, res) => {
    Workout.create(
        {
            day: Date.now()
        },
        {
            $set: {
                title: req.body.title,
                exercise: req.body.exercise,
                modified: Date.now()
            }
        }
    )
        .then(workoutdb => {
            res.json(workoutdb);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

router.post('/submit', ({ body }, res) => {
    User.create(body)
        .then(dbUser => {
            res.json(dbUser);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;