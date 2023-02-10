-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 10, 2023 at 02:00 AM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `programa`
--

-- --------------------------------------------------------

--
-- Table structure for table `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Titulo` varchar(250) NOT NULL,
  `Subtitulo` text NOT NULL,
  `Cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `novedades`
--

INSERT INTO `novedades` (`id`, `Titulo`, `Subtitulo`, `Cuerpo`, `img_id`) VALUES
(1, 'Vincha Daisy', '', 'algoooo', 'mi5q86u1zf9d99q34vuy'),
(2, 'Gorrito tejido', '100000', 'algooo mas', NULL),
(8, ' NTNGNMG', '', 'HRJTYJTY', ''),
(7, 'DGHGT', '', 'EBYFFFFFFFFFFFFFFMMMMMMMMMMMMMUTYYYYYYYYY', ''),
(9, 'NEW FY', '', 'W YYUII', ''),
(10, 'HOLAAfrfefef', '', 'UIHIUJOfrfrfr', ''),
(11, 'jvjhbj', '', 'vvykjkn', 'fsjuq75pkoxicgmugaux');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(6, 'lupi', 'f0898af949a373e72a4f6a34b4de9090'),
(5, 'mune', 'fcea920f7412b5da7be0cf42b8c93759');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
