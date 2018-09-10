CREATE DATABASE weight_tracker_db;
USE weight_tracker_db;
CREATE TABLE users (
    UUID VARCHAR(36) NOT NULL,
    firstName TEXT,
    lastName TEXT,
    profilePic TEXT,
    email TEXT,
    password TEXT,
    primary key (UUID)
);