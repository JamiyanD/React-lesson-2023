-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 13, 2023 at 05:34 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ishop`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `order_quantity` int(3) NOT NULL,
  `is_paid` tinyint(4) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `order_status` varchar(255) DEFAULT 'NEW',
  `order_total` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `user_id`, `product_id`, `order_quantity`, `is_paid`, `created_at`, `updated_at`, `order_status`, `order_total`) VALUES
(1, 1, 1, 1, 1, '2023-02-28 16:00:00', '2023-02-28 16:00:00', 'order status', 10);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `quantity` int(11) DEFAULT 0,
  `category_id` int(11) NOT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `code` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `quantity`, `category_id`, `image_path`, `rating`, `code`) VALUES
(58, 'sd', 0, NULL, 1, NULL, NULL, NULL),
(59, 'ff', 0, NULL, 1, NULL, NULL, NULL),
(60, 'f', 0, NULL, 2, NULL, NULL, NULL),
(61, '', 22, NULL, 1, NULL, NULL, NULL),
(62, '', 2, NULL, 1, NULL, NULL, NULL),
(63, '', 2, NULL, 1, NULL, NULL, NULL),
(64, '', 434, NULL, 1, NULL, NULL, NULL),
(65, '', 23, NULL, 1, NULL, NULL, NULL),
(66, '', 4, NULL, 1, NULL, NULL, NULL),
(67, '', 2, NULL, 1, NULL, NULL, NULL),
(68, '', 2, NULL, 1, NULL, NULL, NULL),
(69, '', 2, NULL, 1, NULL, NULL, NULL),
(70, '', 2, NULL, 1, NULL, NULL, NULL),
(71, '', 2, NULL, 1, NULL, NULL, NULL),
(72, '', 2, NULL, 1, NULL, NULL, NULL),
(73, '', 0, NULL, 1, NULL, NULL, NULL),
(74, '', 3, NULL, 1, NULL, NULL, NULL),
(75, '', 2, NULL, 1, NULL, NULL, NULL),
(76, '', 4, NULL, 1, NULL, NULL, NULL),
(77, '', 4, NULL, 1, NULL, NULL, NULL),
(78, '', 4, NULL, 1, NULL, NULL, NULL),
(79, '', 2, NULL, 1, NULL, NULL, NULL),
(80, '', 2, NULL, 1, NULL, NULL, NULL),
(81, '', 3, NULL, 1, NULL, NULL, NULL),
(82, '', 4, NULL, 1, NULL, NULL, NULL),
(83, '', 4, NULL, 1, NULL, NULL, NULL),
(84, '', 2, NULL, 1, NULL, NULL, NULL),
(85, '', 3, NULL, 1, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product_category`
--

CREATE TABLE `product_category` (
  `id` int(11) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_category`
--

INSERT INTO `product_category` (`id`, `name`) VALUES
(3, 'Inactive'),
(2, 'Scheduled'),
(1, 'Published');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `full_name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `phone_number` int(50) DEFAULT NULL,
  `joined_date` int(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `full_name`, `email`, `role`, `phone_number`, `joined_date`, `password`) VALUES
(25, 'fd', 'fd', 3, 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`id`, `name`) VALUES
(1, 'Administrator'),
(2, 'Analyst'),
(3, 'Developer'),
(4, 'Support'),
(5, 'Trial');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `user_roles`
--
ALTER TABLE `user_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
