const router = require("express").Router();
const db = require("../models");



//get function to retrieve previous workout
router.get("/api/workouts", (req, res)=>{
    db.Exercise.find({})
    .then(dbExercise=>{
        res.json(dbExercise);
    })
    .catch(err => {
        res.json(err);
    });
});

//post new workout
router.post("/api/workouts", (req, res) => {
  db.Exercise.create(body)
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});



module.exports = router;
