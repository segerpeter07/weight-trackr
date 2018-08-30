var mysql = require('mysql');

function WorkoutService(connection) {
    console.log('New Exercise initialized');
    this.con = connection;
    // console.log(this.con);
}

WorkoutService.prototype.newWorkout = function(data, cb) {
//   var stmt = 'INSERT INTO paths (title, location_name, description, latitude, longitude) VALUES' +
//     `("${data.title}", "${data.location_name}", "${data.description}", ${data.lat}, ${data.lng})`;
//   this.con.query(stmt, function(err, result) {
//     if (err) cb(err);
//     cb(result);
//   });
    console.log('new user created');
    cb();
}

WorkoutService.prototype.updateWorkout = function(data, cb) {
    // var stmt = 'INSERT INTO paths (title, location_name, description, latitude, longitude) VALUES' +
    //   `("${data.title}", "${data.location_name}", "${data.description}", ${data.lat}, ${data.lng})`;
    // this.con.query(stmt, function(err, result) {
    //   if (err) cb(err);
    //   cb(result);
    // });
}

WorkoutService.prototype.deleteWorkout = function(data, cb) {
    // var stmt = 'INSERT INTO paths (title, location_name, description, latitude, longitude) VALUES' +
    //   `("${data.title}", "${data.location_name}", "${data.description}", ${data.lat}, ${data.lng})`;
    // this.con.query(stmt, function(err, result) {
    //   if (err) cb(err);
    //   cb(result);
    // });
}

WorkoutService.prototype.getWorkout = function(data, cb) {
    // return workout info
}

module.exports = WorkoutService;
