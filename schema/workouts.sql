USE weight_tracker_db;
CREATE TABLE workouts (
    UUID VARCHAR(36) NOT NULL,
    stringName TEXT,
    createrUUID VARCHAR(36),
    pictureURL TEXT,
    description TEXT,
    primary key (UUID)
);