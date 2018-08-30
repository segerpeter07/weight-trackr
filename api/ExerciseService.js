var mysql = require('mysql');

function ExerciseService(connection) {
    console.log('New Exercise initialized');
    this.con = connection;
    // console.log(this.con);
}

ExerciseService.prototype.newExercise = function(data, cb) {
//   var stmt = 'INSERT INTO paths (title, location_name, description, latitude, longitude) VALUES' +
//     `("${data.title}", "${data.location_name}", "${data.description}", ${data.lat}, ${data.lng})`;
//   this.con.query(stmt, function(err, result) {
//     if (err) cb(err);
//     cb(result);
//   });
    console.log('new user created');
    cb();
}

ExerciseService.prototype.updateExercise = function(data, cb) {
    // var stmt = 'INSERT INTO paths (title, location_name, description, latitude, longitude) VALUES' +
    //   `("${data.title}", "${data.location_name}", "${data.description}", ${data.lat}, ${data.lng})`;
    // this.con.query(stmt, function(err, result) {
    //   if (err) cb(err);
    //   cb(result);
    // });
}

ExerciseService.prototype.deleteExercise = function(data, cb) {
    // var stmt = 'INSERT INTO paths (title, location_name, description, latitude, longitude) VALUES' +
    //   `("${data.title}", "${data.location_name}", "${data.description}", ${data.lat}, ${data.lng})`;
    // this.con.query(stmt, function(err, result) {
    //   if (err) cb(err);
    //   cb(result);
    // });
}

ExerciseService.prototype.getExercise = function(data, cb) {
    // return exercise data
}

module.exports = ExerciseService;
