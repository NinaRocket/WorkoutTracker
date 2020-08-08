const router = require("express").Router();
const Exercise = require("../models/exercise.js");



//get function to retrieve previous workout
router.get("/api/workouts", (req, res)=>{
    Exercise.find({})
    .then(dbExercise=>{
        res.json(dbExercise);
    })
    .catch(err => {
        res.json(err);
    });
});

//post new workout
router.post("/api/workouts", (req, res) => {
  Exercise.create({})
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});



module.exports = router;
