var mysql = require('mysql');

function UserService(connection) {
    console.log('New UserService initialized');
    this.con = connection;
    // console.log(this.con);
}

UserService.prototype.createUser = function(data, cb) {
//   var stmt = 'INSERT INTO paths (title, location_name, description, latitude, longitude) VALUES' +
//     `("${data.title}", "${data.location_name}", "${data.description}", ${data.lat}, ${data.lng})`;
//   this.con.query(stmt, function(err, result) {
//     if (err) cb(err);
//     cb(result);
//   });
    console.log('new user created');
    console.log(this.con);
    cb();
}

UserService.prototype.updateUser = function(data, cb) {
    // var stmt = 'INSERT INTO paths (title, location_name, description, latitude, longitude) VALUES' +
    //   `("${data.title}", "${data.location_name}", "${data.description}", ${data.lat}, ${data.lng})`;
    // this.con.query(stmt, function(err, result) {
    //   if (err) cb(err);
    //   cb(result);
    // });
}

UserService.prototype.deleteUser = function(data, cb) {
    // var stmt = 'INSERT INTO paths (title, location_name, description, latitude, longitude) VALUES' +
    //   `("${data.title}", "${data.location_name}", "${data.description}", ${data.lat}, ${data.lng})`;
    // this.con.query(stmt, function(err, result) {
    //   if (err) cb(err);
    //   cb(result);
    // });
}

UserService.prototype.getUser = function(data, cb) {
    // return user info
}

module.exports = UserService;
