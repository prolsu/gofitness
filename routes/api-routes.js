const db = require("../models");

module.exports = function (app) {
    // app.get("/exercise", (req, res) => {
    db.Workout.create({ name: "GoFitness: fitness+" })
        .then(dbWorkout => {
            console.log(dbWorkout);
        })
        .catch(({ message }) => {
            console.log(message);
        });
    // });

    app.post("/api/cardio", ({ body }, res) => {
        db.Cardio.create(body)
            .then(dbWorkout => {
                console.log(dbWorkout);
                res.json(dbWorkout)
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.post("/api/resistance", ({ body }, res) => {
        db.Resistance.create(body)
            .then(dbWorkout => {
                console.log(dbWorkout);
                res.json(dbWorkout)
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/cardio", (req, res) => {
        db.Cardio.find({})
            .then(cardioDoc => {
                res.json(cardioDoc);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/resistance", (req, res) => {
        db.Resistance.find({})
            .then(resistanceDoc => {
                res.json(resistanceDoc);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.post("/api/workouts", ({ body }, res) => {
        db.Workout.insertMany(body)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            })
    });

    // app.put("/api/workouts/:id?", (req, res) => {
    //     const { id } = req.params;
    //     db.Workout.updateOne({ id: id })
    //         .then(dbWorkout => {
    //             res.json(dbWorkout);
    //         })
    //         .catch(err => {
    //             res.json(err)
    //         });
    // });

    // app.get("/workouts", (req, res) => {
    //     db.Workout.find({})
    //         .populate("cardio")
    //         .populate("resistance")
    //         .then(dbWorkout => {
    //             res.json(dbWorkout);
    //         })
    //         .catch(err => {
    //             res.json(err);
    //         })
    // });
};