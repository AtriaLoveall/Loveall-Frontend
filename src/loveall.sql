-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 08, 2024 at 12:20 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `loveall`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `admin_email` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `role` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `otp` varchar(10) DEFAULT NULL,
  `otp_expiration_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `admin_email`, `password_hash`, `role`, `created_at`, `updated_at`, `otp`, `otp_expiration_time`) VALUES
(1, 'admin1@example.com', 'hashed_pass', 'Super Admin', '2024-10-02 22:18:49', '2024-10-02 22:18:49', NULL, '0000-00-00 00:00:00'),
(2, 'admin2@example.com', 'hashed_pass', 'Moderator', '2024-10-02 22:18:49', '2024-10-02 22:18:49', NULL, '0000-00-00 00:00:00'),
(3, 'admin3@example.com', 'hashed_pass', 'Content Manager', '2024-10-02 22:18:49', '2024-10-02 22:18:49', NULL, '0000-00-00 00:00:00'),
(4, 'admin4@example.com', 'hashed_pass', 'Super Admin', '2024-10-02 22:18:49', '2024-10-02 22:18:49', NULL, '0000-00-00 00:00:00'),
(5, 'admin5@example.com', 'hashed_pass', 'Support Admin', '2024-10-02 22:18:49', '2024-10-02 22:18:49', NULL, '0000-00-00 00:00:00'),
(6, 'admin6@example.com', 'hashed_pass', 'Super Admin', '2024-10-02 22:18:49', '2024-10-02 22:18:49', NULL, '0000-00-00 00:00:00'),
(7, 'admin7@example.com', 'hashed_pass', 'Moderator', '2024-10-02 22:18:49', '2024-10-02 22:18:49', NULL, '0000-00-00 00:00:00'),
(8, 'admin8@example.com', 'hashed_pass', 'Content Manager', '2024-10-02 22:18:49', '2024-10-02 22:18:49', NULL, '0000-00-00 00:00:00'),
(9, 'admin9@example.com', 'hashed_pass', 'Super Admin', '2024-10-02 22:18:49', '2024-10-02 22:18:49', NULL, '0000-00-00 00:00:00'),
(10, 'admin10@example.com', 'hashed_pass', 'Support Admin', '2024-10-02 22:18:49', '2024-10-02 22:18:49', NULL, '0000-00-00 00:00:00'),
(11, 'admin11@example.com', 'hashed_pass', 'Super Admin', '2024-10-02 22:18:49', '2024-10-02 22:18:49', NULL, '0000-00-00 00:00:00'),
(12, 'admin12@example.com', 'hashed_pass', 'Moderator', '2024-10-02 22:18:49', '2024-10-02 22:18:49', NULL, '0000-00-00 00:00:00'),
(13, 'admin13@example.com', 'hashed_pass', 'Content Manager', '2024-10-02 22:18:49', '2024-10-02 22:18:49', NULL, '0000-00-00 00:00:00'),
(14, 'admin14@example.com', 'hashed_pass', 'Super Admin', '2024-10-02 22:18:49', '2024-10-02 22:18:49', NULL, '0000-00-00 00:00:00'),
(15, 'admin15@example.com', 'hashed_pass', 'Support Admin', '2024-10-02 22:18:49', '2024-10-02 22:18:49', NULL, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `admin_activity_log`
--

CREATE TABLE `admin_activity_log` (
  `activity_id` int(11) NOT NULL,
  `admin_id` int(11) NOT NULL,
  `action` varchar(255) NOT NULL,
  `action_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin_activity_log`
--

INSERT INTO `admin_activity_log` (`activity_id`, `admin_id`, `action`, `action_date`) VALUES
(1, 1, 'Reset User Password', '2024-10-02 22:18:49'),
(2, 2, 'Approved Store Registration', '2024-10-02 22:18:49'),
(3, 3, 'Updated User Role', '2024-10-02 22:18:49'),
(4, 4, 'Reviewed Complaint', '2024-10-02 22:18:49'),
(5, 5, 'Reset User Password', '2024-10-02 22:18:49'),
(6, 6, 'Approved Store Registration', '2024-10-02 22:18:49'),
(7, 7, 'Reviewed Complaint', '2024-10-02 22:18:49'),
(8, 8, 'Updated User Role', '2024-10-02 22:18:49'),
(9, 9, 'Reset User Password', '2024-10-02 22:18:49'),
(10, 10, 'Approved Store Registration', '2024-10-02 22:18:49'),
(11, 11, 'Reviewed Complaint', '2024-10-02 22:18:49'),
(12, 12, 'Updated User Role', '2024-10-02 22:18:49'),
(13, 13, 'Reset User Password', '2024-10-02 22:18:49'),
(14, 14, 'Approved Store Registration', '2024-10-02 22:18:49'),
(15, 15, 'Reviewed Complaint', '2024-10-02 22:18:49');

-- --------------------------------------------------------

--
-- Table structure for table `business_activity_log`
--

CREATE TABLE `business_activity_log` (
  `activity_id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `action` varchar(255) NOT NULL,
  `action_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cards`
--

CREATE TABLE `cards` (
  `card_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `card_type` varchar(50) NOT NULL,
  `purchase_date` date NOT NULL,
  `expiry_date` date NOT NULL,
  `discount_code` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cards`
--

INSERT INTO `cards` (`card_id`, `user_id`, `card_type`, `purchase_date`, `expiry_date`, `discount_code`) VALUES
(1, 1, 'Gold', '2023-01-01', '2024-01-01', 'DISC10'),
(2, 2, 'Silver', '2023-02-01', '2024-02-01', 'DISC20'),
(3, 3, 'Platinum', '2023-03-01', '2024-03-01', 'DISC30'),
(4, 4, 'Gold', '2023-04-01', '2024-04-01', 'DISC40'),
(5, 5, 'Silver', '2023-05-01', '2024-05-01', 'DISC50'),
(6, 6, 'Platinum', '2023-06-01', '2024-06-01', 'DISC60'),
(7, 7, 'Gold', '2023-07-01', '2024-07-01', 'DISC70'),
(8, 8, 'Silver', '2023-08-01', '2024-08-01', 'DISC80'),
(9, 9, 'Platinum', '2023-09-01', '2024-09-01', 'DISC90'),
(10, 10, 'Gold', '2023-10-01', '2024-10-01', 'DISC100'),
(11, 11, 'Silver', '2023-11-01', '2024-11-01', 'DISC110'),
(12, 12, 'Platinum', '2023-12-01', '2024-12-01', 'DISC120'),
(13, 13, 'Gold', '2024-01-01', '2025-01-01', 'DISC130'),
(14, 14, 'Silver', '2024-02-01', '2025-02-01', 'DISC140'),
(15, 15, 'Platinum', '2024-03-01', '2025-03-01', 'DISC150');

-- --------------------------------------------------------

--
-- Table structure for table `card_purchase_transaction`
--

CREATE TABLE `card_purchase_transaction` (
  `transaction_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `purchased_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `card_purchase_transaction`
--

INSERT INTO `card_purchase_transaction` (`transaction_id`, `user_id`, `amount`, `purchased_at`) VALUES
(1, 1, 100.00, '2024-10-02 22:19:11'),
(2, 2, 50.00, '2024-10-02 22:19:11'),
(3, 3, 120.50, '2024-10-02 22:19:11'),
(4, 4, 75.00, '2024-10-02 22:19:11'),
(5, 5, 200.00, '2024-10-02 22:19:11'),
(6, 6, 50.00, '2024-10-02 22:19:11'),
(7, 7, 150.00, '2024-10-02 22:19:11'),
(8, 8, 300.00, '2024-10-02 22:19:11'),
(9, 9, 80.75, '2024-10-02 22:19:11'),
(10, 10, 90.00, '2024-10-02 22:19:11'),
(11, 11, 60.50, '2024-10-02 22:19:11'),
(12, 12, 170.00, '2024-10-02 22:19:11'),
(13, 13, 110.00, '2024-10-02 22:19:11'),
(14, 14, 250.00, '2024-10-02 22:19:11'),
(15, 15, 135.00, '2024-10-02 22:19:11'),
(16, 1, 100.00, '2024-10-02 22:19:11'),
(17, 2, 50.00, '2024-10-02 22:19:11'),
(18, 3, 120.50, '2024-10-02 22:19:11'),
(19, 4, 75.00, '2024-10-02 22:19:11'),
(20, 5, 200.00, '2024-10-02 22:19:11'),
(21, 6, 50.00, '2024-10-02 22:19:11'),
(22, 7, 150.00, '2024-10-02 22:19:11'),
(23, 8, 300.00, '2024-10-02 22:19:11'),
(24, 9, 80.75, '2024-10-02 22:19:11'),
(25, 10, 90.00, '2024-10-02 22:19:11'),
(26, 11, 60.50, '2024-10-02 22:19:11'),
(27, 12, 170.00, '2024-10-02 22:19:11'),
(28, 13, 110.00, '2024-10-02 22:19:11'),
(29, 14, 250.00, '2024-10-02 22:19:11'),
(30, 15, 135.00, '2024-10-02 22:19:11');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `feedback_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `rating` int(11) DEFAULT NULL CHECK (`rating` >= 1 and `rating` <= 5),
  `comments` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `offers`
--

CREATE TABLE `offers` (
  `offer_id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `offer_type` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `discount_percentage` decimal(5,2) DEFAULT NULL,
  `minimum_purchase` decimal(10,2) DEFAULT NULL,
  `maximum_discount` decimal(10,2) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `status` varchar(50) NOT NULL DEFAULT 'active',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `offers`
--

INSERT INTO `offers` (`offer_id`, `store_id`, `offer_type`, `description`, `discount_percentage`, `minimum_purchase`, `maximum_discount`, `start_date`, `end_date`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 'Seasonal', '20% off on all electronics', 20.00, 500.00, 100.00, '2024-10-10', '2024-10-20', 'active', '2024-10-05 03:43:04', '2024-10-05 03:43:04'),
(2, 2, 'Clearance', 'Buy 2 Get 1 Free on all books', NULL, 200.00, 50.00, '2024-10-15', '2024-10-25', 'active', '2024-10-05 03:43:04', '2024-10-05 03:43:04'),
(3, 3, 'Festive', '30% discount on fashion items', 30.00, 700.00, 150.00, '2024-10-05', '2024-10-15', 'active', '2024-10-05 03:43:04', '2024-10-05 03:43:04'),
(4, 4, 'Flash Sale', '15% off on groceries over $100', 15.00, 100.00, 30.00, '2024-10-08', '2024-10-12', 'active', '2024-10-05 03:43:04', '2024-10-05 03:43:04'),
(5, 5, 'Holiday Offer', 'Flat 10% discount on all auto accessories', 10.00, 300.00, 75.00, '2024-10-12', '2024-10-22', 'active', '2024-10-05 03:43:04', '2024-10-05 03:43:04'),
(6, 6, 'Membership Special', 'Exclusive 25% off for gym members', 25.00, 400.00, 100.00, '2024-10-01', '2024-10-31', 'active', '2024-10-05 03:43:04', '2024-10-05 03:43:04'),
(7, 7, 'Home Makeover', '25% off on home decor items', 25.00, 200.00, 60.00, '2024-10-10', '2024-10-30', 'active', '2024-10-05 03:43:04', '2024-10-05 03:43:04'),
(8, 8, 'Toy Festival', 'Buy 1 Get 1 on selected toys', NULL, 100.00, 50.00, '2024-10-10', '2024-10-15', 'active', '2024-10-05 03:43:04', '2024-10-05 03:43:04'),
(9, 9, 'Melody Discount', '15% off on musical instruments', 15.00, 500.00, 120.00, '2024-10-01', '2024-10-15', 'active', '2024-10-05 03:43:04', '2024-10-05 03:43:04'),
(10, 10, 'Pet Lovers Offer', '10% off on pet products', 10.00, 250.00, 40.00, '2024-10-15', '2024-10-30', 'active', '2024-10-05 03:43:04', '2024-10-05 03:43:04'),
(11, 11, 'Gadget Sale', '20% discount on all electronics', 20.00, 800.00, 200.00, '2024-10-12', '2024-10-22', 'active', '2024-10-05 03:43:04', '2024-10-05 03:43:04'),
(12, 12, 'Gaming Fest', '30% off on all gaming accessories', 30.00, 300.00, 100.00, '2024-10-05', '2024-10-20', 'active', '2024-10-05 03:43:04', '2024-10-05 03:43:04'),
(13, 13, 'Sports Mania', '15% off on sports equipment', 15.00, 500.00, 150.00, '2024-10-01', '2024-10-15', 'active', '2024-10-05 03:43:04', '2024-10-05 03:43:04'),
(14, 14, 'Digital Deal', '20% off on all digital products', 20.00, 600.00, 175.00, '2024-10-10', '2024-10-20', 'active', '2024-10-05 03:43:04', '2024-10-05 03:43:04'),
(15, 15, 'Outdoor Special', '20% off on camping gear', 20.00, 350.00, 90.00, '2024-10-08', '2024-10-18', 'active', '2024-10-05 03:43:04', '2024-10-05 03:43:04');

-- --------------------------------------------------------

--
-- Table structure for table `offer_transaction`
--

CREATE TABLE `offer_transaction` (
  `transaction_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `offer_id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `transaction_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `amount` decimal(10,2) NOT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `discount_applied` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `otps`
--

CREATE TABLE `otps` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) NOT NULL,
  `otp_code` varchar(10) NOT NULL,
  `otp_purpose` varchar(50) NOT NULL,
  `expiration_time` datetime NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `attempt_count` int(11) DEFAULT 0,
  `verified` tinyint(1) DEFAULT 0,
  `ip_address` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `otps`
--

INSERT INTO `otps` (`id`, `email`, `otp_code`, `otp_purpose`, `expiration_time`, `created_at`, `attempt_count`, `verified`, `ip_address`) VALUES
(1, 'john.doe@example.com', '123456', 'Registration', '2024-12-31 23:59:59', '2024-10-03 03:49:11', 0, 1, '192.168.0.1'),
(2, 'jane.doe@example.com', '654321', 'Login', '2024-12-31 23:59:59', '2024-10-03 03:49:11', 1, 0, '192.168.0.2'),
(3, 'alice.smith@example.com', '111111', 'Reset Password', '2024-12-31 23:59:59', '2024-10-03 03:49:11', 0, 0, '192.168.0.3'),
(4, 'bob.jones@example.com', '222222', 'Two-Factor Authentication', '2024-12-31 23:59:59', '2024-10-03 03:49:11', 1, 1, '192.168.0.4'),
(5, 'charlie.brown@example.com', '333333', 'Registration', '2024-12-31 23:59:59', '2024-10-03 03:49:11', 0, 0, '192.168.0.5'),
(6, 'david.white@example.com', '444444', 'Login', '2024-12-31 23:59:59', '2024-10-03 03:49:11', 2, 1, '192.168.0.6'),
(7, 'emily.green@example.com', '555555', 'Reset Password', '2024-12-31 23:59:59', '2024-10-03 03:49:11', 0, 0, '192.168.0.7'),
(8, 'frank.black@example.com', '666666', 'Two-Factor Authentication', '2024-12-31 23:59:59', '2024-10-03 03:49:11', 1, 1, '192.168.0.8'),
(9, 'grace.wilson@example.com', '777777', 'Registration', '2024-12-31 23:59:59', '2024-10-03 03:49:11', 0, 0, '192.168.0.9'),
(10, 'henry.moore@example.com', '888888', 'Login', '2024-12-31 23:59:59', '2024-10-03 03:49:11', 1, 1, '192.168.0.10'),
(11, 'irene.taylor@example.com', '999999', 'Reset Password', '2024-12-31 23:59:59', '2024-10-03 03:49:11', 0, 0, '192.168.0.11'),
(12, 'jack.thomas@example.com', '000000', 'Two-Factor Authentication', '2024-12-31 23:59:59', '2024-10-03 03:49:11', 2, 1, '192.168.0.12'),
(13, 'kate.johnson@example.com', '444555', 'Registration', '2024-12-31 23:59:59', '2024-10-03 03:49:11', 1, 0, '192.168.0.13'),
(14, 'leo.king@example.com', '555666', 'Login', '2024-12-31 23:59:59', '2024-10-03 03:49:11', 0, 1, '192.168.0.14'),
(15, 'maria.adams@example.com', '666777', 'Reset Password', '2024-12-31 23:59:59', '2024-10-03 03:49:11', 1, 0, '192.168.0.15'),
(16, 'john.doe@example.com', '123456', 'Registration', '2024-12-31 23:59:59', '2024-10-03 03:51:55', 0, 1, '192.168.0.1'),
(17, 'jane.doe@example.com', '654321', 'Login', '2024-12-31 23:59:59', '2024-10-03 03:51:55', 1, 0, '192.168.0.2'),
(18, 'alice.smith@example.com', '111111', 'Reset Password', '2024-12-31 23:59:59', '2024-10-03 03:51:55', 0, 0, '192.168.0.3'),
(19, 'bob.jones@example.com', '222222', 'Two-Factor Authentication', '2024-12-31 23:59:59', '2024-10-03 03:51:55', 1, 1, '192.168.0.4'),
(20, 'charlie.brown@example.com', '333333', 'Registration', '2024-12-31 23:59:59', '2024-10-03 03:51:55', 0, 0, '192.168.0.5'),
(21, 'david.white@example.com', '444444', 'Login', '2024-12-31 23:59:59', '2024-10-03 03:51:55', 2, 1, '192.168.0.6'),
(22, 'emily.green@example.com', '555555', 'Reset Password', '2024-12-31 23:59:59', '2024-10-03 03:51:55', 0, 0, '192.168.0.7'),
(23, 'frank.black@example.com', '666666', 'Two-Factor Authentication', '2024-12-31 23:59:59', '2024-10-03 03:51:55', 1, 1, '192.168.0.8'),
(24, 'grace.wilson@example.com', '777777', 'Registration', '2024-12-31 23:59:59', '2024-10-03 03:51:55', 0, 0, '192.168.0.9'),
(25, 'henry.moore@example.com', '888888', 'Login', '2024-12-31 23:59:59', '2024-10-03 03:51:55', 1, 1, '192.168.0.10'),
(26, 'irene.taylor@example.com', '999999', 'Reset Password', '2024-12-31 23:59:59', '2024-10-03 03:51:55', 0, 0, '192.168.0.11'),
(27, 'jack.thomas@example.com', '000000', 'Two-Factor Authentication', '2024-12-31 23:59:59', '2024-10-03 03:51:55', 2, 1, '192.168.0.12'),
(28, 'kate.johnson@example.com', '444555', 'Registration', '2024-12-31 23:59:59', '2024-10-03 03:51:55', 1, 0, '192.168.0.13'),
(29, 'leo.king@example.com', '555666', 'Login', '2024-12-31 23:59:59', '2024-10-03 03:51:55', 0, 1, '192.168.0.14'),
(30, 'maria.adams@example.com', '666777', 'Reset Password', '2024-12-31 23:59:59', '2024-10-03 03:51:55', 1, 0, '192.168.0.15');

-- --------------------------------------------------------

--
-- Table structure for table `stores`
--

CREATE TABLE `stores` (
  `store_id` int(11) NOT NULL,
  `store_name` varchar(255) NOT NULL,
  `store_email` varchar(255) NOT NULL,
  `owner_name` varchar(255) NOT NULL,
  `phone_number` varchar(15) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `otp` varchar(10) DEFAULT NULL,
  `otp_expiration_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `address` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `store_logo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stores`
--

INSERT INTO `stores` (`store_id`, `store_name`, `store_email`, `owner_name`, `phone_number`, `password_hash`, `otp`, `otp_expiration_time`, `address`, `created_at`, `updated_at`, `store_logo`) VALUES
(1, 'Tech Shop', 'techshop@example.com', 'Alice Johnson', '9876543210', 'hashed_pass', NULL, '2024-10-04 19:26:53', '321 Mall Street', '2024-10-02 16:48:49', '2024-10-04 19:26:53', 'logo1.jpg'),
(2, 'Book World', 'bookworld@example.com', 'Bob Brown', '8765432109', 'hashed_pass', NULL, '2024-10-06 15:43:04', '456 Library Avenue', '2024-10-02 16:48:49', '2024-10-06 15:43:04', 'logo2.jpg'),
(3, 'Fashion Corner', 'fashion@example.com', 'Carol Lee', '7654321098', 'hashed_pass', NULL, '2024-10-06 15:43:19', '789 Plaza Road', '2024-10-02 16:48:49', '2024-10-06 15:43:19', 'logo3.jpg'),
(4, 'Grocery Haven', 'grocery@example.com', 'David Wilson', '6543210987', 'hashed_pass', NULL, '2024-10-06 15:43:33', '321 Food Drive', '2024-10-02 16:48:49', '2024-10-06 15:43:33', 'logo4.jpg'),
(5, 'Auto Hub', 'autohub@example.com', 'Emma Davis', '5432109876', 'hashed_pass', NULL, '2024-10-06 15:44:11', '123 Auto Lane', '2024-10-02 16:48:49', '2024-10-06 15:44:11', 'logo5.jpg'),
(6, 'Fitness Pro', 'fitnesspro@example.com', 'Frank Miller', '4321098765', 'hashed_pass', NULL, '2024-10-06 15:44:27', '456 Gym Road', '2024-10-02 16:48:49', '2024-10-06 15:44:27', 'logo6.jpg'),
(7, 'Home Decor', 'homedecor@example.com', 'Grace Taylor', '3210987654', 'hashed_pass', NULL, '2024-10-04 19:35:02', '789 Design Avenue', '2024-10-02 16:48:49', '2024-10-04 19:35:02', 'logo7.jpg'),
(8, 'Toy Land', 'toyland@example.com', 'Henry Anderson', '2109876543', 'hashed_pass', NULL, '2024-10-06 15:45:01', '987 Fun Street', '2024-10-02 16:48:49', '2024-10-06 15:45:01', 'logo8.jpg'),
(9, 'Music House', 'musichouse@example.com', 'Isabella Thomas', '1098765432', 'hashed_pass', NULL, '2024-10-06 15:45:17', '321 Melody Lane', '2024-10-02 16:48:49', '2024-10-06 15:45:17', 'logo9.jpg'),
(10, 'Pet Paradise', 'petparadise@example.com', 'Jack Moore', '0987654321', 'hashed_pass', NULL, '2024-10-06 15:45:34', '456 Animal Avenue', '2024-10-02 16:48:49', '2024-10-06 15:45:34', 'logo10.jpg'),
(11, 'ElectroMart', 'electromart@example.com', 'Kelly Martin', '9876543210', 'hashed_pass', NULL, '2024-10-06 15:45:51', '654 Gadget Drive', '2024-10-02 16:48:49', '2024-10-06 15:45:51', 'logo11.jpg'),
(12, 'Game Zone', 'gamezone@example.com', 'Leo Jackson', '8765432109', 'hashed_pass', NULL, '2024-10-06 15:46:05', '789 Play Road', '2024-10-02 16:48:49', '2024-10-06 15:46:05', 'logo12.jpg'),
(13, 'Sport World', 'sportworld@example.com', 'Mia White', '7654321098', 'hashed_pass', NULL, '2024-10-06 15:46:18', '987 Fitness Avenue', '2024-10-02 16:48:49', '2024-10-06 15:46:18', 'logo13.jpg'),
(14, 'Digital Hub', 'digitalhub@example.com', 'John Doe', '6543210987', 'hashed_pass', NULL, '2024-10-06 15:46:35', '321 Technology Drive', '2024-10-02 16:48:49', '2024-10-06 15:46:35', 'logo14.jpg'),
(15, 'Outdoor Living', 'outdoorliving@example.com', 'Jane Smith', '5432109876', 'hashed_pass', NULL, '2024-10-06 15:46:47', '456 Nature Lane', '2024-10-02 16:48:49', '2024-10-06 15:46:47', 'logo15.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `stores_subaccount`
--

CREATE TABLE `stores_subaccount` (
  `subaccount_id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `subaccount_name` varchar(255) NOT NULL,
  `email_id` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(15) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `profile_picture` blob DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `referral_id` varchar(50) DEFAULT NULL,
  `referred_by` varchar(50) DEFAULT NULL,
  `verified` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `first_name`, `last_name`, `email`, `phone_number`, `password_hash`, `address`, `profile_picture`, `date_of_birth`, `created_at`, `updated_at`, `referral_id`, `referred_by`, `verified`) VALUES
(1, 'John', 'Doe', 'john.doe@example.com', '1234567890', 'hashed_pass', '123 Main Street', NULL, '1990-01-01', '2024-10-02 22:18:49', '2024-10-02 22:18:49', 'REF123', 'REF001', 1),
(2, 'Jane', 'Smith', 'jane.smith@example.com', '2345678901', 'hashed_pass', '456 Oak Avenue', NULL, '1985-02-15', '2024-10-02 22:18:49', '2024-10-02 22:18:49', 'REF124', 'REF002', 0),
(3, 'Alice', 'Johnson', 'alice.j@example.com', '3456789012', 'hashed_pass', '789 Pine Boulevard', NULL, '1993-03-22', '2024-10-02 22:18:49', '2024-10-02 22:18:49', 'REF125', 'REF003', 1),
(4, 'Bob', 'Brown', 'bob.b@example.com', '4567890123', 'hashed_pass', '321 Elm Street', NULL, '1991-04-10', '2024-10-02 22:18:49', '2024-10-02 22:18:49', 'REF126', 'REF004', 1),
(5, 'Carol', 'Lee', 'carol.l@example.com', '5678901234', 'hashed_pass', '654 Cedar Drive', NULL, '1989-05-30', '2024-10-02 22:18:49', '2024-10-02 22:18:49', 'REF127', 'REF005', 0),
(6, 'David', 'Wilson', 'david.w@example.com', '6789012345', 'hashed_pass', '987 Maple Lane', NULL, '1992-06-14', '2024-10-02 22:18:49', '2024-10-02 22:18:49', 'REF128', 'REF006', 1),
(7, 'Emma', 'Davis', 'emma.d@example.com', '7890123456', 'hashed_pass', '852 Birch Circle', NULL, '1994-07-19', '2024-10-02 22:18:49', '2024-10-02 22:18:49', 'REF129', 'REF007', 0),
(8, 'Frank', 'Miller', 'frank.m@example.com', '8901234567', 'hashed_pass', '951 Spruce Way', NULL, '1995-08-12', '2024-10-02 22:18:49', '2024-10-02 22:18:49', 'REF130', 'REF008', 1),
(9, 'Grace', 'Taylor', 'grace.t@example.com', '9012345678', 'hashed_pass', '159 Oak Court', NULL, '1990-09-25', '2024-10-02 22:18:49', '2024-10-02 22:18:49', 'REF131', 'REF009', 0),
(10, 'Henry', 'Anderson', 'henry.a@example.com', '0123456789', 'hashed_pass', '258 Ash Road', NULL, '1987-10-05', '2024-10-02 22:18:49', '2024-10-02 22:18:49', 'REF132', 'REF010', 1),
(11, 'Isabella', 'Thomas', 'isabella.t@example.com', '1234567800', 'hashed_pass', '357 Pine Street', NULL, '1996-11-21', '2024-10-02 22:18:49', '2024-10-02 22:18:49', 'REF133', 'REF011', 1),
(12, 'Jack', 'Moore', 'jack.m@example.com', '2345678902', 'hashed_pass', '456 Spruce Boulevard', NULL, '1988-12-09', '2024-10-02 22:18:49', '2024-10-02 22:18:49', 'REF134', 'REF012', 1),
(13, 'Kelly', 'Martin', 'kelly.m@example.com', '3456789013', 'hashed_pass', '654 Maple Avenue', NULL, '1997-01-15', '2024-10-02 22:18:49', '2024-10-02 22:18:49', 'REF135', 'REF013', 0),
(14, 'Leo', 'Jackson', 'leo.j@example.com', '4567890124', 'hashed_pass', '987 Oak Drive', NULL, '1986-02-28', '2024-10-02 22:18:49', '2024-10-02 22:18:49', 'REF136', 'REF014', 1),
(15, 'Mia', 'White', 'mia.w@example.com', '5678901235', 'hashed_pass', '951 Birch Boulevard', NULL, '1993-03-07', '2024-10-02 22:18:49', '2024-10-02 22:18:49', 'REF137', 'REF015', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_activity_log`
--

CREATE TABLE `user_activity_log` (
  `activity_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `action` varchar(255) NOT NULL,
  `action_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_activity_log`
--

INSERT INTO `user_activity_log` (`activity_id`, `user_id`, `action`, `action_date`) VALUES
(1, 1, 'Logged In', '2024-10-02 22:18:49'),
(2, 2, 'Logged Out', '2024-10-02 22:18:49'),
(3, 3, 'Purchased Item', '2024-10-02 22:18:49'),
(4, 4, 'Updated Profile', '2024-10-02 22:18:49'),
(5, 5, 'Reset Password', '2024-10-02 22:18:49'),
(6, 6, 'Logged In', '2024-10-02 22:18:49'),
(7, 7, 'Viewed Product', '2024-10-02 22:18:49'),
(8, 8, 'Added Item to Cart', '2024-10-02 22:18:49'),
(9, 9, 'Checked Out', '2024-10-02 22:18:49'),
(10, 10, 'Logged In', '2024-10-02 22:18:49'),
(11, 11, 'Purchased Membership', '2024-10-02 22:18:49'),
(12, 12, 'Logged In', '2024-10-02 22:18:49'),
(13, 13, 'Reviewed Product', '2024-10-02 22:18:49'),
(14, 14, 'Logged Out', '2024-10-02 22:18:49'),
(15, 15, 'Updated Address', '2024-10-02 22:18:49');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`),
  ADD UNIQUE KEY `admin_email` (`admin_email`);

--
-- Indexes for table `admin_activity_log`
--
ALTER TABLE `admin_activity_log`
  ADD PRIMARY KEY (`activity_id`),
  ADD KEY `admin_id` (`admin_id`);

--
-- Indexes for table `business_activity_log`
--
ALTER TABLE `business_activity_log`
  ADD PRIMARY KEY (`activity_id`),
  ADD KEY `store_id` (`store_id`);

--
-- Indexes for table `cards`
--
ALTER TABLE `cards`
  ADD PRIMARY KEY (`card_id`),
  ADD UNIQUE KEY `discount_code` (`discount_code`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `card_purchase_transaction`
--
ALTER TABLE `card_purchase_transaction`
  ADD PRIMARY KEY (`transaction_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`feedback_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `store_id` (`store_id`);

--
-- Indexes for table `offers`
--
ALTER TABLE `offers`
  ADD PRIMARY KEY (`offer_id`),
  ADD KEY `store_id` (`store_id`);

--
-- Indexes for table `offer_transaction`
--
ALTER TABLE `offer_transaction`
  ADD PRIMARY KEY (`transaction_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `offer_id` (`offer_id`),
  ADD KEY `store_id` (`store_id`);

--
-- Indexes for table `otps`
--
ALTER TABLE `otps`
  ADD PRIMARY KEY (`id`),
  ADD KEY `email` (`email`);

--
-- Indexes for table `stores`
--
ALTER TABLE `stores`
  ADD PRIMARY KEY (`store_id`),
  ADD UNIQUE KEY `store_email` (`store_email`);

--
-- Indexes for table `stores_subaccount`
--
ALTER TABLE `stores_subaccount`
  ADD PRIMARY KEY (`subaccount_id`),
  ADD UNIQUE KEY `email_id` (`email_id`),
  ADD KEY `store_id` (`store_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `user_activity_log`
--
ALTER TABLE `user_activity_log`
  ADD PRIMARY KEY (`activity_id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `admin_activity_log`
--
ALTER TABLE `admin_activity_log`
  MODIFY `activity_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `business_activity_log`
--
ALTER TABLE `business_activity_log`
  MODIFY `activity_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `cards`
--
ALTER TABLE `cards`
  MODIFY `card_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `card_purchase_transaction`
--
ALTER TABLE `card_purchase_transaction`
  MODIFY `transaction_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `feedback_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `offers`
--
ALTER TABLE `offers`
  MODIFY `offer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `offer_transaction`
--
ALTER TABLE `offer_transaction`
  MODIFY `transaction_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `otps`
--
ALTER TABLE `otps`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `stores`
--
ALTER TABLE `stores`
  MODIFY `store_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `stores_subaccount`
--
ALTER TABLE `stores_subaccount`
  MODIFY `subaccount_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `user_activity_log`
--
ALTER TABLE `user_activity_log`
  MODIFY `activity_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admin_activity_log`
--
ALTER TABLE `admin_activity_log`
  ADD CONSTRAINT `admin_activity_log_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`admin_id`) ON DELETE CASCADE;

--
-- Constraints for table `business_activity_log`
--
ALTER TABLE `business_activity_log`
  ADD CONSTRAINT `business_activity_log_ibfk_1` FOREIGN KEY (`store_id`) REFERENCES `stores` (`store_id`) ON DELETE CASCADE;

--
-- Constraints for table `cards`
--
ALTER TABLE `cards`
  ADD CONSTRAINT `cards_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `card_purchase_transaction`
--
ALTER TABLE `card_purchase_transaction`
  ADD CONSTRAINT `card_purchase_transaction_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `feedback`
--
ALTER TABLE `feedback`
  ADD CONSTRAINT `feedback_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `feedback_ibfk_2` FOREIGN KEY (`store_id`) REFERENCES `stores` (`store_id`) ON DELETE CASCADE;

--
-- Constraints for table `offers`
--
ALTER TABLE `offers`
  ADD CONSTRAINT `offers_ibfk_1` FOREIGN KEY (`store_id`) REFERENCES `stores` (`store_id`) ON DELETE CASCADE;

--
-- Constraints for table `offer_transaction`
--
ALTER TABLE `offer_transaction`
  ADD CONSTRAINT `offer_transaction_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `offer_transaction_ibfk_2` FOREIGN KEY (`offer_id`) REFERENCES `offers` (`offer_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `offer_transaction_ibfk_3` FOREIGN KEY (`store_id`) REFERENCES `stores` (`store_id`) ON DELETE CASCADE;

--
-- Constraints for table `stores_subaccount`
--
ALTER TABLE `stores_subaccount`
  ADD CONSTRAINT `stores_subaccount_ibfk_1` FOREIGN KEY (`store_id`) REFERENCES `stores` (`store_id`) ON DELETE CASCADE;

--
-- Constraints for table `user_activity_log`
--
ALTER TABLE `user_activity_log`
  ADD CONSTRAINT `user_activity_log_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
