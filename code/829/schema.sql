DROP DATABASE IF EXISTS songsDB;

USE songsDB;

CREATE DATABASE `songsDB` /*!40100 DEFAULT CHARACTER SET latin1 */;
CREATE TABLE `Top5000` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `artist` varchar(45) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `year` int(4) DEFAULT NULL,
  `raw_score` decimal(3,3) DEFAULT NULL,
  `raw_score_US` decimal(3,3) DEFAULT NULL,
  `raw_score_UK` decimal(3,3) DEFAULT NULL,
  `raw_score_EU` decimal(3,3) DEFAULT NULL,
  `raw_other` decimal(3,3) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

