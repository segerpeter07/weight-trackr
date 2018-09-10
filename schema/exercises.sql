USE weight_tracker_db;
CREATE TABLE exercises (
    UUID VARCHAR(36) NOT NULL,
    stringName TEXT,
    workoutUUID VARCHAR(36),
    pictureURL TEXT,
    description TEXT,
    primary key (UUID)
);