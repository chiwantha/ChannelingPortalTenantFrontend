-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 02, 2025 at 11:52 AM
-- Server version: 10.11.13-MariaDB-0ubuntu0.24.04.1
-- PHP Version: 8.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `arogya_channeling`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `id` int(11) NOT NULL,
  `session_id` int(11) NOT NULL,
  `patient` varchar(100) NOT NULL,
  `contact` varchar(10) NOT NULL,
  `alternate_contact` varchar(10) DEFAULT '0',
  `date` date NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `note` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `is_confirmed` tinyint(1) NOT NULL DEFAULT 0,
  `state` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `doctors`
--

CREATE TABLE `doctors` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `specialization_id` int(11) NOT NULL,
  `description` text DEFAULT 'None',
  `image` varchar(200) NOT NULL DEFAULT 'default.png',
  `contact` varchar(10) DEFAULT NULL,
  `hospital` varchar(200) DEFAULT 'None',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `doctors`
--

INSERT INTO `doctors` (`id`, `name`, `specialization_id`, `description`, `image`, `contact`, `hospital`, `created_at`, `updated_at`, `state`) VALUES
(1, 'Dr. Suneth Karunarathna', 1, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(2, 'Dr. Roshan Gunarathna', 1, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(3, 'Dr. Damith Rodrigo', 2, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(4, 'Dr. Nandika Harischandra', 2, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(5, 'Dr. Saman Kularathna', 2, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(6, 'Dr. D.M. Amarathunga', 3, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(7, 'Dr. Fathima Hasmiya', 3, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(8, 'Dr. Sanjeewa Hulangamuwa', 3, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(9, 'Dr. Sasanka Jayanada', 3, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(10, 'Dr. Deepa Himani Liyanage', 3, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(11, 'Dr. (Mrs) Apeksha Perera', 3, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(12, 'Dr. Thulasi Weerasinghe', 3, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(13, 'Ms. Thiloka Hettiarachchi', 4, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(14, 'Dr. Jeewanthi Dissanayaka', 4, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(15, 'Dr. (Mrs) Pearl Mallawaarachchi', 4, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(16, 'Dr. (Mrs) Upeka Samarawickrama', 4, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(17, 'Dr. Chathuri Jayawardana', 5, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(18, 'Dr. Shaminda Kahandawa', 5, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(19, 'Dr. Amal Fernando', 6, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(20, 'Dr. (Mrs) O.P.N.D. Nishanthi', 6, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(21, 'Dr. J. D. Dias', 7, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(22, 'Dr. Wathsala Priyadarshani', 7, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(23, 'Dr. Tharanga Subhasekara', 7, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(24, 'Dr. Deepanee Wewelwala', 7, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(25, 'Dr. Pradeep Gunawardana', 8, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(26, 'Dr. (Mrs) Tharanga Liyanaarachchi', 9, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(27, 'Dr. Rangana Herath', 9, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(28, 'Dr. Ishan Jayasooriya', 10, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(29, 'Dr. Peshala Dangalla', 11, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(30, 'Dr. Ruwan Pathiraja', 11, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(31, 'Dr. Rohantha Periyapperuma', 11, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(32, 'Dr. Prabath Randombage', 11, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(33, 'Dr. Prasad Rannulu', 11, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(34, 'Dr. Ajith Semasinghe', 11, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(35, 'Dr. Aruna Jayawardana', 12, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(36, 'Dr. Ajith Pitawala', 13, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(37, 'Dr. (Mrs) Rajima Srinani', 14, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(38, 'Dr. Dinith Galabada', 15, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(39, 'Dr. Jalitha Thinnarachchi', 15, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(40, 'Dr. A.T. Alibhoy', 16, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(41, 'Dr. Nilukshi Fernando', 16, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(42, 'Dr. (Mrs) Thilanka Perera', 16, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(43, 'Dr. Darshana Wijegunasinghe', 16, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(44, 'Dr. Dhanushka Vithanawasam', 16, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(45, 'Dr. Janaka Cooray', 17, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(46, 'Dr. Kanthi Perera', 17, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(47, 'Dr. Priyantha Senarathna', 18, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(48, 'Dr. Pradeep Amarasinghe', 19, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(49, 'Dr. Wasantha Amarasinghe', 19, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(50, 'Dr. Kelum Chathuranga Vidana Gamage', 19, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(51, 'Dr. Dilshan Munidasa', 19, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(52, 'Dr. Rushantha Premadasa', 19, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(53, 'Dr. Dimuthu Thennakoon', 19, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(54, 'Dr. Sanjaya Fernando', 20, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(55, 'Dr. (Mrs) Dhammika Dissanayaka', 21, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(56, 'Dr. (Mrs) Nimalika Hettiarachchi', 21, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(57, 'Dr. Himali Jayaweera', 21, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(58, 'Dr. D.M. Mihira Manamperi', 21, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(59, 'Dr. Lakpriya Rathnakumara Udabage', 21, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(60, 'Dr. P.A.J. Sherman Fernando', 22, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(61, 'Dr. Palitha Gunawardane', 22, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(62, 'Dr. Thusith Gunawardane', 22, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(63, 'Dr. Sampath Hemachandra', 22, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(64, 'Dr. S.P. Jayawardane', 22, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(65, 'Dr. Jagath Kulathilake', 22, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(66, 'Prof. Aruna Munasinghe', 22, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(67, 'Dr. Aloka Perera', 22, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(68, 'Dr. Gayani Premawansha', 22, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(69, 'Dr. Sridaran', 22, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(70, 'Ms. Charitha Kumarahewa', 23, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(71, 'Mr. Prasad Rajathewa', 23, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(72, 'Dr. Nishantha Dolawaththa', 24, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(73, 'Dr. H.M.A. Herath', 24, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(74, 'Dr. S. Panduwawala', 24, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(75, 'Ms. Sham Abeysinghe', 25, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(76, 'Ms. Praba Kumari', 25, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(77, 'Dr. Himantha Athukorala', 26, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(78, 'Dr. Dhanushka Karunarathna', 26, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(79, 'Dr. Lilani Panangala', 26, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(80, 'Dr. Priyantha Weerasinghe', 27, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(81, 'Ms. Oshin De Seram', 28, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(82, 'Dr. Mangala Perera', 29, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(83, 'Dr. Duminda Dissanayaka', 30, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(84, 'Dr. Damith Leelarathna', 30, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(85, 'Dr. Eranga Perera', 30, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(86, 'Dr. Ranjith Perera', 30, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(87, 'Dr. M.G. Lionel Weerawardana', 30, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(88, 'Dr. Asoka Wijemanna', 30, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1),
(89, 'Dr. (Mrs) Manjula Rajapaksha', 31, 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence', 'default.png', '0', 'None', '2025-06-19 14:53:49', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `session`
--

CREATE TABLE `session` (
  `id` int(11) NOT NULL,
  `doctor_id` int(11) NOT NULL,
  `type_id` int(11) NOT NULL,
  `day` varchar(9) NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `fee` varchar(10) NOT NULL DEFAULT '2600.00',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `session`
--

INSERT INTO `session` (`id`, `doctor_id`, `type_id`, `day`, `start_time`, `end_time`, `fee`, `created_at`, `updated_at`, `state`) VALUES
(251, 1, 1, 'Monday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(252, 1, 3, 'Wednesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(253, 1, 1, 'Friday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(254, 2, 3, 'Tuesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(255, 2, 1, 'Tuesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(256, 2, 3, 'Saturday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(257, 3, 3, 'Monday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(258, 3, 1, 'Wednesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(259, 3, 3, 'Friday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(260, 4, 1, 'Tuesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(261, 4, 3, 'Thursday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(262, 4, 1, 'Sunday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(263, 5, 1, 'Monday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(264, 5, 1, 'Thursday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(265, 5, 3, 'Saturday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(266, 6, 3, 'Tuesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(267, 6, 1, 'Friday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(268, 7, 3, 'Monday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(269, 7, 1, 'Wednesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(270, 7, 1, 'Saturday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(271, 8, 1, 'Tuesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(272, 8, 3, 'Thursday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(273, 8, 3, 'Sunday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(274, 9, 1, 'Monday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(275, 9, 3, 'Wednesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(276, 9, 1, 'Friday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(277, 10, 3, 'Tuesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(278, 10, 1, 'Thursday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(279, 10, 1, 'Sunday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(280, 11, 3, 'Monday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(281, 11, 1, 'Wednesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(282, 11, 3, 'Friday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(283, 12, 1, 'Tuesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(284, 12, 3, 'Thursday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(285, 12, 1, 'Saturday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(286, 13, 1, 'Monday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(287, 13, 3, 'Thursday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(288, 14, 3, 'Tuesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(289, 14, 1, 'Friday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(290, 15, 1, 'Wednesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(291, 15, 3, 'Saturday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(292, 16, 1, 'Thursday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(293, 16, 3, 'Sunday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(294, 17, 3, 'Monday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(295, 17, 1, 'Wednesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(296, 17, 3, 'Friday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(297, 18, 1, 'Tuesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(298, 18, 3, 'Thursday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(299, 18, 1, 'Sunday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(300, 19, 1, 'Monday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(301, 19, 3, 'Wednesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(302, 19, 1, 'Saturday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(303, 20, 3, 'Tuesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(304, 20, 1, 'Friday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(305, 20, 3, 'Sunday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(306, 21, 3, 'Monday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(307, 21, 1, 'Thursday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(308, 22, 1, 'Tuesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(309, 22, 3, 'Friday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(310, 23, 1, 'Wednesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(311, 23, 3, 'Saturday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(312, 24, 3, 'Thursday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(313, 24, 1, 'Sunday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(314, 25, 1, 'Monday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(315, 25, 3, 'Tuesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(316, 25, 1, 'Wednesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(317, 25, 3, 'Thursday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(318, 25, 1, 'Friday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(319, 26, 1, 'Tuesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(320, 26, 1, 'Thursday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(321, 26, 3, 'Saturday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(322, 27, 3, 'Monday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(323, 27, 3, 'Wednesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(324, 27, 3, 'Friday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(325, 28, 3, 'Tuesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(326, 28, 3, 'Thursday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(327, 28, 1, 'Sunday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(328, 29, 1, 'Monday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(329, 29, 1, 'Wednesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(330, 29, 1, 'Friday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(331, 30, 3, 'Tuesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(332, 30, 3, 'Thursday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(333, 30, 3, 'Saturday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(334, 31, 3, 'Monday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(335, 31, 3, 'Wednesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(336, 31, 3, 'Sunday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(337, 32, 1, 'Tuesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(338, 32, 1, 'Thursday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(339, 32, 1, 'Saturday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(340, 33, 1, 'Monday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(341, 33, 3, 'Wednesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(342, 33, 3, 'Friday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(343, 34, 3, 'Tuesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(344, 34, 1, 'Thursday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(345, 34, 1, 'Sunday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(346, 35, 1, 'Wednesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(347, 35, 3, 'Friday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(348, 35, 3, 'Sunday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(349, 36, 3, 'Monday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(350, 36, 1, 'Thursday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(351, 36, 1, 'Saturday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(352, 37, 1, 'Tuesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(353, 37, 1, 'Friday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(354, 37, 3, 'Sunday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(355, 38, 1, 'Monday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(356, 38, 3, 'Wednesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(357, 38, 3, 'Saturday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(358, 39, 3, 'Tuesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(359, 39, 1, 'Thursday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(360, 39, 1, 'Sunday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(361, 40, 3, 'Monday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(362, 40, 1, 'Wednesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(363, 40, 3, 'Friday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(364, 41, 1, 'Tuesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(365, 41, 3, 'Thursday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(366, 41, 1, 'Saturday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(367, 42, 1, 'Monday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(368, 42, 3, 'Wednesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(369, 42, 3, 'Sunday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(370, 43, 3, 'Tuesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(371, 43, 1, 'Friday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(372, 44, 1, 'Thursday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(373, 44, 3, 'Saturday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(374, 45, 1, 'Monday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(375, 45, 3, 'Thursday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(376, 46, 3, 'Tuesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(377, 46, 1, 'Friday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(378, 46, 1, 'Sunday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(379, 47, 1, 'Wednesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(380, 47, 3, 'Saturday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(381, 48, 3, 'Monday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(382, 48, 3, 'Wednesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(383, 48, 1, 'Friday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(384, 49, 1, 'Tuesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(385, 49, 1, 'Thursday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(386, 49, 3, 'Sunday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(387, 50, 1, 'Monday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(388, 50, 1, 'Wednesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(389, 50, 1, 'Saturday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(390, 51, 3, 'Tuesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(391, 51, 3, 'Thursday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(392, 52, 3, 'Friday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(393, 52, 1, 'Sunday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(394, 53, 3, 'Monday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(395, 53, 1, 'Thursday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(396, 53, 3, 'Saturday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(397, 54, 1, 'Tuesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(398, 54, 3, 'Friday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(399, 55, 1, 'Monday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(400, 55, 3, 'Wednesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(401, 55, 1, 'Saturday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(402, 56, 3, 'Tuesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(403, 56, 1, 'Thursday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(404, 56, 3, 'Sunday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(405, 57, 3, 'Monday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(406, 57, 1, 'Wednesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(407, 57, 3, 'Friday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(408, 58, 1, 'Tuesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(409, 58, 3, 'Thursday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(410, 59, 1, 'Friday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(411, 59, 1, 'Sunday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(412, 60, 1, 'Monday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(413, 60, 1, 'Wednesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(414, 60, 1, 'Friday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(415, 61, 3, 'Tuesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(416, 61, 3, 'Thursday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(417, 61, 3, 'Saturday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(418, 62, 3, 'Monday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(419, 62, 3, 'Wednesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(420, 62, 3, 'Sunday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(421, 63, 1, 'Tuesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(422, 63, 1, 'Thursday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(423, 63, 1, 'Saturday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(424, 64, 1, 'Monday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(425, 64, 3, 'Wednesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(426, 64, 3, 'Friday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(427, 65, 3, 'Tuesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(428, 65, 1, 'Thursday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(429, 65, 1, 'Sunday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(430, 66, 3, 'Monday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(431, 66, 3, 'Thursday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(432, 67, 1, 'Tuesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(433, 67, 1, 'Friday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(434, 67, 3, 'Sunday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(435, 68, 1, 'Wednesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(436, 68, 3, 'Saturday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(437, 69, 1, 'Monday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(438, 69, 1, 'Thursday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(439, 69, 1, 'Saturday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(440, 70, 3, 'Tuesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(441, 70, 3, 'Friday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(442, 71, 3, 'Monday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(443, 71, 1, 'Wednesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(444, 71, 1, 'Sunday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(445, 72, 1, 'Monday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(446, 72, 3, 'Thursday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(447, 73, 1, 'Tuesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(448, 73, 3, 'Friday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(449, 74, 3, 'Wednesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(450, 74, 1, 'Saturday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(451, 74, 3, 'Sunday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(452, 75, 3, 'Tuesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(453, 75, 1, 'Thursday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(454, 76, 3, 'Monday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(455, 76, 1, 'Wednesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(456, 76, 3, 'Saturday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(457, 77, 1, 'Monday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(458, 77, 3, 'Wednesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(459, 77, 1, 'Friday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(460, 78, 3, 'Tuesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(461, 78, 1, 'Thursday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(462, 78, 3, 'Sunday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(463, 79, 1, 'Tuesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(464, 79, 3, 'Friday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(465, 79, 1, 'Saturday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(466, 80, 1, 'Wednesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(467, 80, 3, 'Saturday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(468, 81, 3, 'Thursday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(469, 81, 1, 'Sunday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(470, 82, 3, 'Monday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(471, 82, 1, 'Thursday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(472, 82, 1, 'Saturday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(473, 83, 1, 'Monday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(474, 83, 1, 'Wednesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(475, 83, 1, 'Friday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(476, 84, 3, 'Tuesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(477, 84, 3, 'Thursday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(478, 84, 3, 'Saturday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(479, 85, 3, 'Monday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(480, 85, 3, 'Wednesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(481, 85, 3, 'Sunday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(482, 86, 1, 'Tuesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(483, 86, 1, 'Thursday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(484, 86, 1, 'Saturday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(485, 87, 1, 'Monday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(486, 87, 3, 'Wednesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(487, 87, 3, 'Friday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(488, 88, 3, 'Tuesday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(489, 88, 1, 'Thursday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(490, 88, 1, 'Sunday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(491, 89, 1, 'Wednesday', '11:00:00', '15:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(492, 89, 3, 'Friday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1),
(493, 89, 3, 'Sunday', '17:00:00', '21:00:00', '2600.00', '2025-06-20 10:03:13', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `session_type`
--

CREATE TABLE `session_type` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `session_type`
--

INSERT INTO `session_type` (`id`, `name`, `state`) VALUES
(1, 'Morning', 1),
(2, 'AfterNoon', 1),
(3, 'Evening', 1),
(4, 'Night', 1);

-- --------------------------------------------------------

--
-- Table structure for table `specialization`
--

CREATE TABLE `specialization` (
  `id` int(11) NOT NULL,
  `specialization` varchar(100) NOT NULL,
  `icon` varchar(200) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `specialization`
--

INSERT INTO `specialization` (`id`, `specialization`, `icon`, `state`) VALUES
(1, 'Cardiologist', 'https://cdn-icons-png.flaticon.com/512/2964/2964067.png', 1),
(2, 'Chest Physician', 'https://cdn-icons-png.flaticon.com/512/2964/2964111.png', 1),
(3, 'Dermatologist', 'https://cdn-icons-png.flaticon.com/512/2964/2964116.png', 1),
(4, 'Dietician and Nutrician', 'https://cdn-icons-png.flaticon.com/512/2964/2964125.png', 1),
(5, 'Endocrinologist', 'https://cdn-icons-png.flaticon.com/512/2964/2964130.png', 1),
(6, 'ENT Surgeon', 'https://cdn-icons-png.flaticon.com/512/2964/2964135.png', 1),
(7, 'Eye Surgeon', 'https://cdn-icons-png.flaticon.com/512/2964/2964140.png', 1),
(8, 'Family Physician', 'https://cdn-icons-png.flaticon.com/512/2964/2964145.png', 1),
(9, 'Gastroenterologist', 'https://cdn-icons-png.flaticon.com/512/2964/2964150.png', 1),
(10, 'Genito Urinary Surgeon', 'https://cdn-icons-png.flaticon.com/512/2964/2964155.png', 1),
(11, 'Gynaecologist', 'https://cdn-icons-png.flaticon.com/512/2964/2964160.png', 1),
(12, 'Haematologist', 'https://cdn-icons-png.flaticon.com/512/2964/2964165.png', 1),
(13, 'Microbiologist', 'https://cdn-icons-png.flaticon.com/512/2964/2964170.png', 1),
(14, 'Neonatologist', 'https://cdn-icons-png.flaticon.com/512/2964/2964175.png', 1),
(15, 'Nephorologist', 'https://cdn-icons-png.flaticon.com/512/2964/2964180.png', 1),
(16, 'Neuro Physician', 'https://cdn-icons-png.flaticon.com/512/2964/2964185.png', 1),
(17, 'Oncologist', 'https://cdn-icons-png.flaticon.com/512/2964/2964190.png', 1),
(18, 'OMF Surgeon', 'https://cdn-icons-png.flaticon.com/512/2964/2964195.png', 1),
(19, 'Orthopaedic Surgeon', 'https://cdn-icons-png.flaticon.com/512/2964/2964200.png', 1),
(20, 'Paediatric Neurologist', 'https://cdn-icons-png.flaticon.com/512/2964/2964205.png', 1),
(21, 'Paediatrician', 'https://cdn-icons-png.flaticon.com/512/2964/2964210.png', 1),
(22, 'Physician', 'https://cdn-icons-png.flaticon.com/512/2964/2964215.png', 1),
(23, 'Phsiotherapist', 'https://cdn-icons-png.flaticon.com/512/2964/2964220.png', 1),
(24, 'Psychiatrist', 'https://cdn-icons-png.flaticon.com/512/2964/2964225.png', 1),
(25, 'Psychological counselor', 'https://cdn-icons-png.flaticon.com/512/2964/2964230.png', 1),
(26, 'Rheumatologist', 'https://cdn-icons-png.flaticon.com/512/2964/2964235.png', 1),
(27, 'Sexual medicine and Sexual health', 'https://cdn-icons-png.flaticon.com/512/2964/2964240.png', 1),
(28, 'Speech and Language therapist', 'https://cdn-icons-png.flaticon.com/512/2964/2964245.png', 1),
(29, 'Sports Medicine', 'https://cdn-icons-png.flaticon.com/512/2964/2964250.png', 1),
(30, 'Surgeon', 'https://cdn-icons-png.flaticon.com/512/2964/2964255.png', 1),
(31, 'Venerelogist', 'https://cdn-icons-png.flaticon.com/512/2964/2964260.png', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ses_id` (`session_id`);

--
-- Indexes for table `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `spec_id` (`specialization_id`);

--
-- Indexes for table `session`
--
ALTER TABLE `session`
  ADD PRIMARY KEY (`id`),
  ADD KEY `doc_id` (`doctor_id`),
  ADD KEY `ses_id` (`type_id`);

--
-- Indexes for table `session_type`
--
ALTER TABLE `session_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `specialization`
--
ALTER TABLE `specialization`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `doctors`
--
ALTER TABLE `doctors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- AUTO_INCREMENT for table `session`
--
ALTER TABLE `session`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=494;

--
-- AUTO_INCREMENT for table `session_type`
--
ALTER TABLE `session_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `specialization`
--
ALTER TABLE `specialization`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointment`
--
ALTER TABLE `appointment`
  ADD CONSTRAINT `ses_id` FOREIGN KEY (`session_id`) REFERENCES `session` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `doctors`
--
ALTER TABLE `doctors`
  ADD CONSTRAINT `spec_id` FOREIGN KEY (`specialization_id`) REFERENCES `specialization` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `session`
--
ALTER TABLE `session`
  ADD CONSTRAINT `doc_id` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
