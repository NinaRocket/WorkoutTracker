const express = require('express'); 
const router = require("express").Router();
const Exercise = require("../models/exercise.js");
const db = require("../models");

//get last workouts
router.get("/api/workouts", (req, res) => {
    db.Exercise.find({})
        .then(dbWorkout => {
            console.log(dbWorkout)
            res.json(dbWorkout);
        })
        .catch(err => {
          res.status(400).json(err);
        });
})
//post workout
router.post("/api/workouts", (req, res) => {
    db.Exercise.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
          res.status(400).json(err);
        });
})
//update workout
router.put('/api/workouts/:id', (req, res) => {
  Exercise.findByIdAndUpdate(req.params.id, {
      $push: {
          exercises: req.body,
      }, 
  }).then(dbWorkout => {
      res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.get("/api/workouts/range", (req, res) => {
  db.Exercise.find({}).limit(7)
      .then(dbWorkout => {
          res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});

module.exports = router;




