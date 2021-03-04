const router = require("express").Router();
const Workout = require("../models/Workout.js");

router.post("/api/workout", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            // console.log(dbWorkout);
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workout", (req, res) => {
    Workout.find({})
        .sort({ date: -1 })
        .then(cardioDoc => {
            res.json(cardioDoc);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        })
});

module.exports = router;