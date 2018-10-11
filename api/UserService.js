var mysql = require('mysql');
const uuidv4 = require('uuid/v4');

function UserService(connection) {
    console.log('New UserService initialized');
    this.con = connection;
    // console.log(this.con);
}

UserService.prototype.createUser = function(data, cb) {
    uuid = uuidv4();
    this.profilePic = "NA";

    var stmt = 'INSERT INTO weight_tracker_db.users (uuid, firstName, lastName, profilePic, email, password) VALUES' +
        `("${uuid}", "${data.firstName}", "${data.lastName}", "${this.profilePic}", "${data.email}", "${data.password}")`;

    this.con.query(stmt, function(err, result) {
        if (err) {
            return cb(null);
        }      
        return cb(uuid);
    });
    // console.log(this.con);
    // cb();
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

UserService.prototype.getUser = function(uuid, cb) {
    // return user info
    var stmt = 'SELECT * FROM weight_tracker_db.users WHERE uuid =' + uuid;
    this.con.query(stmt, function(err, result) {
        console.log(result);
        if (err) {
            return cb(null);
        }      
        return cb(uuid);
    });
}

module.exports = UserService;
