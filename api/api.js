var express = require('express');
var path = require('path');
var mysql = require('mysql');
var router = express.Router();

var UserService = require('./UserService');
var ExerciseService = require('./ExerciseService');
var WorkoutService = require('./WorkoutService');

// router.route('/paths').post(function(req, res) {
//   service.createPath(req.body, function(err) {
//     if (err == null) {
//       return res.sendStatus(400);
//     }
//     res.json(err);
//   });
// })

/* ----- Establish DB Connection ----- */
// this.con = mysql.createConnection({
//     port: '3306',
//     host: 'localhost',
//     user: 'strolle_app',
//     password: 'walk',
//     database: 'strolle_test'
// });
this.con = {
    port: 'TEST',
    host: 'TEST'
}

var userService = new UserService(this.con);
var ExerciseService = new ExerciseService(this.con);
var WorkoutService = new WorkoutService(this.con);

/* ----- Password Calls ----- */
router.route('/testPassword').post(function(req, res) {
    console.log('API reached');
    const entered = req.body.password;
    if(entered.length >= 6) {
        return res.sendStatus(202);
    } else {
        return res.json(true);
    }
})


/* ----- User Account Calls ----- */
router.route('/users/create').post(function(req, res) {
    // create new account
    console.log('API reached')
    console.log(req.body);
    userService.createUser(req.body, function(err) {
        if(err) {
            return res.sendStatus(402);
        }
        return res.json();
    });
})

router.route('/users/update/:userID').post(function(req, res) {
    // update accounts
})

router.route('/users/delete/:userID').post(function(req, res) {
    // delete account
})

router.route('/users/:userID').get(function(req, res) {
    // return user based off userID
})


/* ----- Exercise Calls ----- */
router.route('/exercise/create').post(function(req, res) {
    // create new exercise
})

router.route('/exercise/update/:exerciseID').post(function(req, res) {
    // update exercise
})

router.route('/exercise/delete/:exerciseID').post(function(req, res) {
    // delete exercise
})

router.route('/exercise/:exerciseID').get(function(req, res) {
    // return exercise based off exerciseID
})


/* ----- Workout Calls ----- */
router.route('/workouts/create').post(function(req, res) {
    // create new workout
})

router.route('/workouts/update/:workoutID').post(function(req, res) {
    // update workout
})

router.route('/workouts/delete/:workoutID').post(function(req, res) {
    // delete workout
})

router.route('workouts/:workoutID').get(function(req, res) {
    // get workout based off workoutID
})

module.exports = router;
