CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (

 (
id int NOT NULL AUTO_INCREMENT,
author varchar(40) NOT NULL,
chirp varchar(240) NOT NULL,
chirped timestamp(),
PRIMARY KEY (id)
);

);