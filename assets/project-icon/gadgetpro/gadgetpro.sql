-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 23, 2026 at 03:21 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gadgetpro`
--

-- --------------------------------------------------------

--
-- Table structure for table `active_statuses`
--

CREATE TABLE `active_statuses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `status_id` int(10) UNSIGNED NOT NULL,
  `code` varchar(255) NOT NULL,
  `label` varchar(255) NOT NULL,
  `module` varchar(255) NOT NULL,
  `color` varchar(255) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `active_statuses`
--

INSERT INTO `active_statuses` (`id`, `status_id`, `code`, `label`, `module`, `color`, `icon`, `created_at`, `updated_at`) VALUES
(1, 1, 'active', 'Active', 'product', '#10b981', 'circle-check', '2026-07-23 05:11:25', '2026-07-23 05:11:25'),
(2, 2, 'inactive', 'Inactive', 'product', '#ef4444', 'circle-x', '2026-07-23 05:11:25', '2026-07-23 05:11:25'),
(3, 1, 'active', 'Active', 'sale', '#10b981', 'circle-check', '2026-07-23 05:11:25', '2026-07-23 05:11:25'),
(4, 2, 'inactive', 'Inactive', 'sale', '#ef4444', 'circle-x', '2026-07-23 05:11:25', '2026-07-23 05:11:25'),
(5, 1, 'active', 'Active', 'purchase', '#10b981', 'circle-check', '2026-07-23 05:11:25', '2026-07-23 05:11:25'),
(6, 2, 'inactive', 'Inactive', 'purchase', '#ef4444', 'circle-x', '2026-07-23 05:11:25', '2026-07-23 05:11:25'),
(7, 1, 'active', 'Active', 'supplier', '#10b981', 'circle-check', '2026-07-23 05:11:25', '2026-07-23 05:11:25'),
(8, 2, 'inactive', 'Inactive', 'supplier', '#ef4444', 'circle-x', '2026-07-23 05:11:25', '2026-07-23 05:11:25'),
(9, 1, 'active', 'Active', 'customer', '#10b981', 'circle-check', '2026-07-23 05:11:25', '2026-07-23 05:11:25'),
(10, 2, 'inactive', 'Inactive', 'customer', '#ef4444', 'circle-x', '2026-07-23 05:11:25', '2026-07-23 05:11:25');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `slug` varchar(150) NOT NULL,
  `type` enum('income','expense') NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `slug`, `type`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Product Sales', 'product-sales', 'income', 'Revenue from the sale of gadgets and electronic products.', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(2, 'Service & Repair', 'service-repair', 'income', 'Revenue from device servicing and repair services.', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(3, 'Warranty & Claims', 'warranty-claims', 'income', 'Revenue from supplier warranty claims.', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(4, 'Other Income', 'other-income', 'income', 'Income outside of primary product sales.', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(5, 'Employee Salaries', 'employee-salaries', 'expense', 'Monthly salary and employee benefit costs for store staff.', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(6, 'Rent', 'rent', 'expense', 'Rental cost for the store or shop building.', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(7, 'Electricity & Internet', 'electricity-internet', 'expense', 'Monthly electricity, water, and internet subscription bills.', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(8, 'Digital Marketing', 'digital-marketing', 'expense', 'Costs for online ads, social media, and marketplace fees.', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(9, 'Store Maintenance', 'store-maintenance', 'expense', 'Repair and maintenance costs for the store and equipment.', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(10, 'Shipping & Courier', 'shipping-courier', 'expense', 'Shipping fees and courier delivery service costs.', '2026-07-23 05:11:26', '2026-07-23 05:11:26');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `name`, `email`, `phone`, `address`, `notes`, `created_at`, `updated_at`) VALUES
(1, 'Delacruz Hardware & Supply', 'delacruz.hardware@gmail.com', '09201110001', 'Rizal Ave., Poblacion, Malolos, Bulacan', 'Regular customer since 2022', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(2, 'Santos Auto Parts', 'santos.autoparts@gmail.com', '09201110002', 'MacArthur Highway, Balagtas, Bulacan', 'Wholesale truck parts buyer', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(3, 'Reyes Trading Co.', 'reyes.trading@yahoo.com', '09201110003', 'Quirino Hwy, Bocaue, Bulacan', 'Regular bulk order client', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(4, 'Villanueva Enterprises', NULL, '09201110004', 'Gil Puyat Ave., Guiguinto, Bulacan', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(5, 'Mercado Logistics Supply', 'mercado.logistics@outlook.com', '09201110005', 'Plaridel-Baliuag Rd., Plaridel, Bulacan', 'Project-based bulk procurement', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(6, 'Angela Ramos', NULL, '09201110006', NULL, 'Walk-in individual buyer', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(7, 'Bautista Machine Shop', 'bautista.machineshop@gmail.com', '09201110007', 'Sto. Rosario, Hagonoy, Bulacan', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(8, 'Marco Fernandez', NULL, '09201110008', 'San Miguel Blvd., San Rafael, Bulacan', 'Online reseller', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(9, 'Global Fleet Solutions', 'globalfleet@gmail.com', '09201110009', 'North Luzon Expwy Access Rd., Marilao, Bulacan', 'Retail chain account', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(10, 'Carmela Torres', NULL, '09201110010', NULL, NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(11, 'Aquino Trucking Parts', 'aquino.truckingparts@gmail.com', '09201110011', 'Camalig Rd., Meycauayan, Bulacan', 'Branch 2 account', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(12, 'Renato Cruz', NULL, '09201110012', 'Longos, Malolos, Bulacan', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(13, 'JR Diesel Supply', 'jrdiesel@gmail.com', '09201110013', 'Sumapang Matanda, Malolos, Bulacan', 'Service center partner', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(14, 'Lourdes Motor Parts', NULL, '09201110014', 'Tabang, Guiguinto, Bulacan', 'Motor parts counter shop', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(15, 'Nueva Ventures Startup', 'nueva.ventures@gmail.com', '09201110015', 'Sta. Rita, Guiguinto, Bulacan', 'Startup - bulk procurement', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(16, 'Edgar Villamor', NULL, '09201110016', NULL, NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(17, 'Berkeley Auto Supply', 'berkeleyauto@gmail.com', '09201110017', 'Sto. Cristo, Baliuag, Bulacan', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(18, 'Prime Fleet Gadgets', 'primefleet@yahoo.com', '09201110018', 'Concepcion, Baliuag, Bulacan', 'Fleet accessory specialist', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(19, 'Ferdinand Ocampo', NULL, '09201110019', 'Sta. Barbara, Baliuag, Bulacan', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(20, 'Mega Transport Supply', 'megatransport@gmail.com', '09201110020', 'Poblacion, Bustos, Bulacan', 'Chain transport supply store', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(21, 'Danilo Espiritu', NULL, '09201110021', NULL, 'Freelance mechanic', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(22, 'Central Truck Center', 'centraltruckcenter@gmail.com', '09201110022', 'San Rafael Rd., San Ildefonso, Bulacan', 'New and used truck parts', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(23, 'Ramil Domingo', NULL, '09201110023', 'Poblacion, San Ildefonso, Bulacan', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(24, 'Northgate Gadget Store', 'northgategadget@outlook.com', '09201110024', 'MacArthur Hwy, Pulilan, Bulacan', 'Premium gadget seller', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(25, 'Cristina Manalo', NULL, '09201110025', NULL, 'Regular online shopper', '2026-07-23 05:11:26', '2026-07-23 05:11:26');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `finance_categories`
--

CREATE TABLE `finance_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `slug` varchar(150) NOT NULL,
  `type` varchar(255) NOT NULL DEFAULT 'expense',
  `description` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `finance_categories`
--

INSERT INTO `finance_categories` (`id`, `name`, `slug`, `type`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Product Sales', 'product-sales', 'income', 'Revenue from the sale of gadgets and electronic products.', '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(2, 'Service & Repair', 'service-repair', 'income', 'Revenue from device servicing and repair services.', '2026-07-23 05:11:28', '2026-07-23 05:11:28'),
(3, 'Warranty & Claims', 'warranty-claims', 'income', 'Revenue from supplier warranty claims.', '2026-07-23 05:11:28', '2026-07-23 05:11:28'),
(4, 'Other Income', 'other-income', 'income', 'Income outside of primary product sales.', '2026-07-23 05:11:28', '2026-07-23 05:11:28'),
(5, 'Employee Salaries', 'employee-salaries', 'expense', 'Monthly salary and employee benefit costs for store staff.', '2026-07-23 05:11:28', '2026-07-23 05:11:28'),
(6, 'Rent', 'rent', 'expense', 'Rental cost for the store or shop building.', '2026-07-23 05:11:28', '2026-07-23 05:11:28'),
(7, 'Electricity & Internet', 'electricity-internet', 'expense', 'Monthly electricity, water, and internet subscription bills.', '2026-07-23 05:11:28', '2026-07-23 05:11:28'),
(8, 'Digital Marketing', 'digital-marketing', 'expense', 'Costs for online ads, social media, and marketplace fees.', '2026-07-23 05:11:28', '2026-07-23 05:11:28'),
(9, 'Store Maintenance', 'store-maintenance', 'expense', 'Repair and maintenance costs for the store and equipment.', '2026-07-23 05:11:28', '2026-07-23 05:11:28'),
(10, 'Shipping & Courier', 'shipping-courier', 'expense', 'Shipping fees and courier delivery service costs.', '2026-07-23 05:11:28', '2026-07-23 05:11:28'),
(11, 'Stock Purchase', 'stock-purchase', 'expense', 'Costs for purchasing merchandise stock from suppliers.', '2026-07-23 05:11:28', '2026-07-23 05:11:28'),
(12, 'Office Supplies', 'office-supplies', 'expense', 'Office stationery, receipt paper, and operational supplies.', '2026-07-23 05:11:28', '2026-07-23 05:11:28');

-- --------------------------------------------------------

--
-- Table structure for table `finance_transactions`
--

CREATE TABLE `finance_transactions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `code` varchar(255) NOT NULL,
  `transaction_date` date NOT NULL,
  `finance_category_id` bigint(20) UNSIGNED NOT NULL,
  `amount` bigint(20) NOT NULL,
  `description` text DEFAULT NULL,
  `external_reference` varchar(255) DEFAULT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `reference_type` varchar(255) DEFAULT NULL,
  `reference_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `finance_transactions`
--

INSERT INTO `finance_transactions` (`id`, `code`, `transaction_date`, `finance_category_id`, `amount`, `description`, `external_reference`, `created_by`, `created_at`, `updated_at`, `reference_type`, `reference_id`) VALUES
(1, 'INC.260723.COYD', '2026-07-23', 1, 63226097, 'Sale Inv: INV-V3ZXVS-1 - Lourdes Motor Parts', 'INV-V3ZXVS-1', 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', 'App\\Models\\Sale', 1),
(2, 'INC.260723.TAX0', '2026-07-23', 1, 2247000, 'Sale Inv: INV-KRVDTM-2 - Guest', 'INV-KRVDTM-2', 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', 'App\\Models\\Sale', 2),
(3, 'INC.260723.RKOT', '2026-07-23', 1, 81671619, 'Sale Inv: INV-J4GBQN-3 - Prime Fleet Gadgets', 'INV-J4GBQN-3', 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', 'App\\Models\\Sale', 3),
(4, 'INC.260723.LB2K', '2026-07-23', 1, 33677394, 'Sale Inv: INV-OVR6RG-4 - Guest', 'INV-OVR6RG-4', 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', 'App\\Models\\Sale', 4),
(5, 'INC.260723.QPDR', '2026-07-23', 1, 28394000, 'Sale Inv: INV-3P6IL4-6 - Global Fleet Solutions', 'INV-3P6IL4-6', 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', 'App\\Models\\Sale', 6),
(6, 'INC.260519.PYNH', '2026-05-19', 1, 36494453, 'Sale Inv: INV-9A3PTT-12 - Danilo Espiritu', 'INV-9A3PTT-12', 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', 'App\\Models\\Sale', 12),
(7, 'INC.260711.PORP', '2026-07-11', 1, 29994195, 'Sale Inv: INV-HNWVVU-14 - Ferdinand Ocampo', 'INV-HNWVVU-14', 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', 'App\\Models\\Sale', 14),
(8, 'INC.260505.AXLZ', '2026-05-05', 1, 70384047, 'Sale Inv: INV-RBJS0K-16 - Edgar Villamor', 'INV-RBJS0K-16', 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', 'App\\Models\\Sale', 16),
(9, 'INC.260510.XSBE', '2026-05-10', 1, 25274702, 'Sale Inv: INV-ZCX6Y9-22 - Delacruz Hardware & Supply', 'INV-ZCX6Y9-22', 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', 'App\\Models\\Sale', 22),
(10, 'INC.260622.EPJY', '2026-06-22', 1, 11196000, 'Sale Inv: INV-DF5HSD-27 - Cristina Manalo', 'INV-DF5HSD-27', 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', 'App\\Models\\Sale', 27),
(11, 'INC.260128.S3M7', '2026-01-28', 1, 26329901, 'Sale Inv: INV-YJKRL1-28 - Bautista Machine Shop', 'INV-YJKRL1-28', 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', 'App\\Models\\Sale', 28),
(12, 'INC.260711.RMVU', '2026-07-11', 1, 2994613, 'Sale Inv: INV-REHY2K-30 - Renato Cruz', 'INV-REHY2K-30', 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', 'App\\Models\\Sale', 30),
(13, 'INC.260318.GCJP', '2026-03-18', 1, 45013509, 'Sale Inv: INV-XEGUWI-34 - Danilo Espiritu', 'INV-XEGUWI-34', 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', 'App\\Models\\Sale', 34),
(14, 'INC.260507.HMII', '2026-05-07', 1, 50079409, 'Sale Inv: INV-SGJ7CZ-35 - Reyes Trading Co.', 'INV-SGJ7CZ-35', 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', 'App\\Models\\Sale', 35),
(15, 'INC.260429.QHTP', '2026-04-29', 1, 4293660, 'Sale Inv: INV-YMGDB3-39 - Edgar Villamor', 'INV-YMGDB3-39', 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', 'App\\Models\\Sale', 39),
(16, 'INC.260209.6KD3', '2026-02-09', 1, 6394160, 'Sale Inv: INV-STUI9I-42 - Delacruz Hardware & Supply', 'INV-STUI9I-42', 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', 'App\\Models\\Sale', 42),
(17, 'INC.260507.ZVDN', '2026-05-07', 1, 11284000, 'Sale Inv: INV-PD9ANA-46 - Guest', 'INV-PD9ANA-46', 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', 'App\\Models\\Sale', 46),
(18, 'INC.260405.QREI', '2026-04-05', 1, 72382053, 'Sale Inv: INV-HQUT9J-49 - Reyes Trading Co.', 'INV-HQUT9J-49', 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', 'App\\Models\\Sale', 49),
(19, 'INC.260613.TN3M', '2026-06-13', 2, 951759, 'Est tenetur in pariatur odio omnis.', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(20, 'INC.260226.PUXQ', '2026-02-26', 2, 140063, 'Nihil eius quo iste voluptate neque.', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(21, 'INC.260408.0X7V', '2026-04-08', 2, 1433244, 'Quis totam neque id magnam fugiat pariatur.', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(22, 'INC.260411.N0WC', '2026-04-11', 2, 1793248, 'Non quod nesciunt voluptatem.', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(23, 'INC.260614.K9SE', '2026-06-14', 2, 1851273, 'Doloribus enim delectus et provident numquam qui.', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(24, 'INC.260320.4LJO', '2026-03-20', 3, 1557463, 'Autem aliquam voluptatum est.', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(25, 'INC.260712.90MC', '2026-07-12', 3, 639749, 'Voluptatem sed rerum accusantium.', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(26, 'INC.260413.UKNM', '2026-04-13', 3, 706376, 'Veniam numquam aut nemo omnis a.', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(27, 'INC.260426.DGHT', '2026-04-26', 3, 1321292, 'Nesciunt magni nemo et excepturi cum pariatur non.', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(28, 'INC.260607.VRW3', '2026-06-07', 3, 153820, 'Iusto id quisquam sit veniam provident vel nihil.', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(29, 'INC.260204.1KI6', '2026-02-04', 3, 977846, 'Id aut qui odit nesciunt ea et perspiciatis.', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(30, 'INC.260511.ENYM', '2026-05-11', 3, 1307101, 'Molestiae qui facilis est id officia in eligendi repellendus.', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(31, 'INC.260316.AIOZ', '2026-03-16', 3, 1338390, 'Nihil maiores et qui necessitatibus modi.', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(32, 'INC.260405.EDGF', '2026-04-05', 3, 1111958, 'Nisi at est ex.', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(33, 'INC.260206.3APB', '2026-02-06', 3, 1340583, 'Quibusdam architecto enim enim natus est ullam.', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(34, 'INC.260521.MPGA', '2026-05-21', 3, 1881881, 'Voluptatem corrupti voluptatem id enim labore dolores.', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(35, 'INC.260210.JVXT', '2026-02-10', 3, 1153130, 'Perferendis labore amet impedit sapiente ut libero.', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(36, 'INC.260406.GTFG', '2026-04-06', 4, 499471, 'Corrupti quis sit repellendus impedit eius fugit.', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(37, 'INC.260525.9DFO', '2026-05-25', 4, 1380296, 'Velit ut nisi aut id iste minima.', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(38, 'INC.260401.IKBJ', '2026-04-01', 4, 1491721, 'Aspernatur dolor accusantium sapiente et qui amet.', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(39, 'INC.260218.9MDM', '2026-02-18', 4, 247638, 'Aut beatae occaecati dolor.', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(40, 'INC.260129.MQWY', '2026-01-29', 4, 1260977, 'Ea ipsum est vel sapiente sunt optio laboriosam.', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(41, 'INC.260423.WVYP', '2026-04-23', 4, 386958, 'Qui rem qui eos velit.', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(42, 'INC.260427.JBIC', '2026-04-27', 4, 976734, 'Qui a aspernatur nostrum distinctio repellat.', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(43, 'INC.260409.VFKY', '2026-04-09', 4, 1967538, 'Autem voluptatem sit velit veniam consequuntur sit.', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(44, 'INC.260719.WNLW', '2026-07-19', 4, 99039, 'Ipsam id quibusdam doloribus at nemo.', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(45, 'EXP.260613.OL1T', '2026-06-13', 11, 9073925, 'Purchase of merchandise stock', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(46, 'EXP.260415.LR65', '2026-04-15', 11, 7854116, 'Purchase of merchandise stock', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(47, 'EXP.260220.7SBR', '2026-02-20', 11, 8305688, 'Purchase of merchandise stock', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(48, 'EXP.260327.LUHJ', '2026-03-27', 11, 5840716, 'Purchase of merchandise stock', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(49, 'EXP.260313.A60D', '2026-03-13', 11, 9864868, 'Purchase of merchandise stock', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(50, 'EXP.260517.ZHJM', '2026-05-17', 11, 7209124, 'Purchase of merchandise stock', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(51, 'EXP.260306.HGE0', '2026-03-06', 11, 7349655, 'Purchase of merchandise stock', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(52, 'EXP.260224.LFFT', '2026-02-24', 11, 898949, 'Purchase of merchandise stock', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(53, 'EXP.260404.5NRO', '2026-04-04', 11, 8338548, 'Purchase of merchandise stock', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(54, 'EXP.260624.FEFM', '2026-06-24', 11, 2589992, 'Purchase of merchandise stock', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(55, 'EXP.260528.J9XD', '2026-05-28', 11, 8495449, 'Purchase of merchandise stock', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(56, 'EXP.260125.GOZ1', '2026-01-25', 11, 5888379, 'Purchase of merchandise stock', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(57, 'EXP.260204.YYAN', '2026-02-04', 11, 6955894, 'Purchase of merchandise stock', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(58, 'EXP.260528.FME1', '2026-05-28', 11, 1948946, 'Purchase of merchandise stock', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(59, 'EXP.260624.6WWF', '2026-06-24', 11, 1751280, 'Purchase of merchandise stock', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(60, 'EXP.260708.VDBF', '2026-07-08', 11, 9442255, 'Purchase of merchandise stock', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(61, 'EXP.260629.0XVQ', '2026-06-29', 11, 4826401, 'Purchase of merchandise stock', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(62, 'EXP.260501.2ZEW', '2026-05-01', 11, 6819460, 'Purchase of merchandise stock', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(63, 'EXP.260704.WIJD', '2026-07-04', 11, 2250708, 'Purchase of merchandise stock', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(64, 'EXP.260128.N3UF', '2026-01-28', 11, 7162899, 'Purchase of merchandise stock', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(65, 'EXP.260626.G3LE', '2026-06-26', 11, 1291587, 'Purchase of merchandise stock', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(66, 'EXP.260628.SPXC', '2026-06-28', 11, 6590567, 'Purchase of merchandise stock', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(67, 'EXP.260620.ACAQ', '2026-06-20', 11, 4879936, 'Purchase of merchandise stock', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(68, 'EXP.260522.CNAM', '2026-05-22', 11, 3702753, 'Purchase of merchandise stock', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(69, 'EXP.260530.PT1R', '2026-05-30', 11, 9208149, 'Purchase of merchandise stock', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(70, 'EXP.260519.ZN9X', '2026-05-19', 11, 4740162, 'Purchase of merchandise stock', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(71, 'EXP.260320.QG5V', '2026-03-20', 11, 6381556, 'Purchase of merchandise stock', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(72, 'EXP.260411.MNUF', '2026-04-11', 11, 8801449, 'Purchase of merchandise stock', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(73, 'EXP.260428.GYXX', '2026-04-28', 11, 6781881, 'Purchase of merchandise stock', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(74, 'EXP.260321.ZF7F', '2026-03-21', 5, 5635437, 'Monthly employee salary', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(75, 'EXP.260531.LTNO', '2026-05-31', 5, 3298196, 'Monthly employee salary', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(76, 'EXP.260626.IDH6', '2026-06-26', 5, 2541868, 'Employee allowance', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(77, 'EXP.260217.AA4V', '2026-02-17', 5, 5410693, 'Employee allowance', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(78, 'EXP.260424.DWDF', '2026-04-24', 5, 3410687, 'Employee allowance', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(79, 'EXP.260611.B3U0', '2026-06-11', 5, 5597353, 'Employee allowance', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(80, 'EXP.260401.O9QH', '2026-04-01', 5, 5044190, 'Employee allowance', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(81, 'EXP.260324.Q6O0', '2026-03-24', 5, 6719082, 'Monthly employee salary', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(82, 'EXP.260327.PNTG', '2026-03-27', 5, 2781831, 'Employee allowance', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(83, 'EXP.260704.MMSO', '2026-07-04', 5, 5793068, 'Employee allowance', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(84, 'EXP.260605.TOV0', '2026-06-05', 5, 7157624, 'Employee allowance', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(85, 'EXP.260618.YKBD', '2026-06-18', 5, 3748013, 'Monthly employee salary', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(86, 'EXP.260610.FX3J', '2026-06-10', 6, 12119020, 'Monthly shop rent', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(87, 'EXP.260722.BAPA', '2026-07-22', 6, 5918908, 'Monthly shop rent', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(88, 'EXP.260129.IMBV', '2026-01-29', 6, 3762527, 'Monthly shop rent', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(89, 'EXP.260511.UBK8', '2026-05-11', 6, 6723281, 'Store rental cost', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(90, 'EXP.260628.WP5A', '2026-06-28', 6, 6525767, 'Monthly shop rent', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(91, 'EXP.260706.GR4U', '2026-07-06', 6, 13854861, 'Monthly shop rent', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(92, 'EXP.260714.WGAL', '2026-07-14', 6, 9829889, 'Store rental cost', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(93, 'EXP.260521.WOW0', '2026-05-21', 6, 10231433, 'Monthly shop rent', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(94, 'EXP.260529.XYDK', '2026-05-29', 6, 12952277, 'Monthly shop rent', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(95, 'EXP.260526.Q1XA', '2026-05-26', 6, 8280398, 'Monthly shop rent', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(96, 'EXP.260214.UM50', '2026-02-14', 6, 8890363, 'Store rental cost', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(97, 'EXP.260313.R20K', '2026-03-13', 6, 10197497, 'Store rental cost', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(98, 'EXP.260422.5KS2', '2026-04-22', 6, 14242372, 'Store rental cost', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(99, 'EXP.260317.8CXZ', '2026-03-17', 6, 7612747, 'Monthly shop rent', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(100, 'EXP.260215.YK09', '2026-02-15', 6, 12083225, 'Monthly shop rent', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(101, 'EXP.260615.CLS7', '2026-06-15', 6, 14964342, 'Store rental cost', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(102, 'EXP.260227.IWUO', '2026-02-27', 6, 6799500, 'Store rental cost', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(103, 'EXP.260209.WTZW', '2026-02-09', 6, 13667867, 'Monthly shop rent', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(104, 'EXP.260204.J3Q8', '2026-02-04', 7, 598764, 'Internet cost', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(105, 'EXP.260227.IU5R', '2026-02-27', 7, 1455305, 'Internet cost', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(106, 'EXP.260314.ZJX8', '2026-03-14', 7, 1268558, 'Monthly electricity bill', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(107, 'EXP.260620.DPDH', '2026-06-20', 7, 747961, 'Internet cost', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(108, 'EXP.260605.TPED', '2026-06-05', 7, 735540, 'Internet cost', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(109, 'EXP.260710.FLW9', '2026-07-10', 7, 875554, 'Monthly electricity bill', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(110, 'EXP.260324.PGAI', '2026-03-24', 7, 910867, 'Internet cost', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(111, 'EXP.260313.EJOG', '2026-03-13', 7, 649816, 'Internet cost', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(112, 'EXP.260415.KBG4', '2026-04-15', 7, 979582, 'Monthly electricity bill', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(113, 'EXP.260716.JKGX', '2026-07-16', 7, 920471, 'Monthly electricity bill', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(114, 'EXP.260125.OXME', '2026-01-25', 7, 536116, 'Internet cost', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(115, 'EXP.260531.CENG', '2026-05-31', 7, 480440, 'Monthly electricity bill', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(116, 'EXP.260614.C96E', '2026-06-14', 8, 1503465, 'Instagram ad cost', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(117, 'EXP.260422.XUNO', '2026-04-22', 8, 1795470, 'Marketplace promotion', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(118, 'EXP.260513.MI8R', '2026-05-13', 8, 608358, 'Instagram ad cost', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(119, 'EXP.260423.RNN2', '2026-04-23', 8, 154582, 'Instagram ad cost', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(120, 'EXP.260319.TTG8', '2026-03-19', 8, 136824, 'Marketplace promotion', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(121, 'EXP.260504.USBY', '2026-05-04', 8, 299748, 'Instagram ad cost', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(122, 'EXP.260309.SIDF', '2026-03-09', 8, 1857446, 'Marketplace promotion', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(123, 'EXP.260124.YRLD', '2026-01-24', 8, 1921649, 'Google Ads cost', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(124, 'EXP.260706.WRMB', '2026-07-06', 8, 483012, 'Instagram ad cost', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(125, 'EXP.260615.Z8LS', '2026-06-15', 8, 364915, 'Marketplace promotion', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(126, 'EXP.260630.3A8I', '2026-06-30', 8, 1315040, 'Instagram ad cost', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(127, 'EXP.260527.T9P8', '2026-05-27', 9, 596923, 'Display maintenance', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(128, 'EXP.260407.ZUEB', '2026-04-07', 9, 578313, 'AC repair', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(129, 'EXP.260310.ZDC0', '2026-03-10', 9, 957902, 'AC repair', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(130, 'EXP.260217.WPAI', '2026-02-17', 9, 738752, 'AC repair', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(131, 'EXP.260517.AS8R', '2026-05-17', 9, 296442, 'Display maintenance', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(132, 'EXP.260321.BIXJ', '2026-03-21', 9, 469404, 'Display maintenance', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(133, 'EXP.260720.WU5J', '2026-07-20', 9, 856735, 'Display maintenance', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(134, 'EXP.260526.Q7CL', '2026-05-26', 9, 610199, 'Display maintenance', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(135, 'EXP.260721.6ZHI', '2026-07-21', 9, 901759, 'AC repair', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(136, 'EXP.260209.1QKP', '2026-02-09', 9, 913651, 'AC repair', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(137, 'EXP.260301.HSID', '2026-03-01', 9, 535933, 'AC repair', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(138, 'EXP.260708.0RXK', '2026-07-08', 9, 394411, 'Display maintenance', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(139, 'EXP.260426.1YXE', '2026-04-26', 9, 116542, 'AC repair', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(140, 'EXP.260213.UKV1', '2026-02-13', 9, 793529, 'AC repair', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(141, 'EXP.260325.9ZAC', '2026-03-25', 9, 631690, 'AC repair', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(142, 'EXP.260509.PAFG', '2026-05-09', 9, 775833, 'AC repair', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(143, 'EXP.260417.DONF', '2026-04-17', 10, 69582, 'Courier cost', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(144, 'EXP.260411.081E', '2026-04-11', 10, 187502, 'Courier cost', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(145, 'EXP.260614.1HRW', '2026-06-14', 10, 292772, 'Courier cost', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(146, 'EXP.260411.G9VO', '2026-04-11', 10, 114407, 'Courier cost', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(147, 'EXP.260526.KZRC', '2026-05-26', 10, 241232, 'Courier cost', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(148, 'EXP.260430.M6Y0', '2026-04-30', 10, 76597, 'Goods shipping fee', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(149, 'EXP.260504.WUAW', '2026-05-04', 10, 484317, 'Goods shipping fee', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(150, 'EXP.260217.ULWK', '2026-02-17', 10, 383921, 'Courier cost', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(151, 'EXP.260206.VYDX', '2026-02-06', 10, 82838, 'Courier cost', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(152, 'EXP.260527.3TQE', '2026-05-27', 10, 243569, 'Courier cost', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(153, 'EXP.260630.JYKH', '2026-06-30', 12, 416514, 'Purchase of office stationery', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(154, 'EXP.260315.D3HV', '2026-03-15', 12, 98674, 'Purchase of office stationery', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(155, 'EXP.260316.LQI2', '2026-03-16', 12, 320144, 'Purchase of office stationery', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(156, 'EXP.260510.P0ZJ', '2026-05-10', 12, 199110, 'Printer ink for receipts', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(157, 'EXP.260604.VKVI', '2026-06-04', 12, 496888, 'Printer ink for receipts', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(158, 'EXP.260402.JKOL', '2026-04-02', 12, 260561, 'Printer ink for receipts', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(159, 'EXP.260329.IZHO', '2026-03-29', 12, 64047, 'Purchase of office stationery', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(160, 'EXP.260131.NEYD', '2026-01-31', 12, 316254, 'Printer ink for receipts', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(161, 'EXP.260306.PJL3', '2026-03-06', 12, 192452, 'Purchase of office stationery', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(162, 'EXP.260709.HTP3', '2026-07-09', 12, 171371, 'Purchase of office stationery', NULL, 1, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(163, 'EXP.260313.YAD6', '2026-03-13', 12, 429793, 'Purchase of office stationery', NULL, 3, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL),
(164, 'EXP.260406.EPL9', '2026-04-06', 12, 308261, 'Purchase of office stationery', NULL, 2, '2026-07-23 05:11:28', '2026-07-23 05:11:28', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2026_01_06_142223_create_customers_table', 1),
(5, '2026_01_07_023726_create_suppliers_table', 1),
(6, '2026_01_07_043653_create_units_table', 1),
(7, '2026_01_07_055728_create_categories_table', 1),
(8, '2026_01_07_062203_create_products_table', 1),
(9, '2026_01_07_081258_create_purchases_table', 1),
(10, '2026_01_07_081259_create_purchase_items_table', 1),
(11, '2026_01_08_030943_create_sales_table', 1),
(12, '2026_01_08_030944_create_sale_items_table', 1),
(13, '2026_02_02_072243_create_finance_categories_table', 1),
(14, '2026_02_02_102421_create_finance_transactions_table', 1),
(15, '2026_02_03_033839_create_settings_table', 1),
(16, '2026_02_03_124644_add_polymorphic_reference_to_finance_transactions_table', 1),
(17, '2026_02_19_064807_add_global_discount_to_sales_table', 1),
(18, '2026_07_23_113139_create_active_statuses_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `unit_id` bigint(20) UNSIGNED NOT NULL,
  `sku` varchar(50) NOT NULL,
  `name` varchar(150) NOT NULL,
  `purchase_price` bigint(20) NOT NULL,
  `selling_price` bigint(20) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 0,
  `min_stock` int(11) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `description` text DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `category_id`, `unit_id`, `sku`, `name`, `purchase_price`, `selling_price`, `quantity`, `min_stock`, `is_active`, `description`, `notes`, `created_at`, `updated_at`) VALUES
(1, 8, 1, 'GP-260723.VW8U', 'Samsung Galaxy A15 128GB', 2049179, 2499000, 38, 10, 1, 'Ready stock - Samsung Galaxy A15 128GB', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(2, 8, 1, 'GP-260723.R9QB', 'Samsung Galaxy A25 5G 128GB', 2869180, 3499000, 115, 10, 1, 'Ready stock - Samsung Galaxy A25 5G 128GB', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(3, 8, 1, 'GP-260723.Q3OY', 'Xiaomi Redmi Note 13 128GB', 1803180, 2199000, 70, 10, 1, 'Ready stock - Xiaomi Redmi Note 13 128GB', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(4, 8, 1, 'GP-260723.RXYR', 'Xiaomi Redmi 13C 128GB', 1311180, 1599000, 77, 10, 1, 'Ready stock - Xiaomi Redmi 13C 128GB', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(5, 8, 1, 'GP-260723.NNVR', 'Realme C55 128GB', 1885180, 2299000, 109, 10, 1, 'Ready stock - Realme C55 128GB', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(6, 8, 1, 'GP-260723.0SEF', 'Vivo Y27 128GB', 2295180, 2799000, 119, 10, 1, 'Ready stock - Vivo Y27 128GB', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(7, 8, 1, 'GP-260723.2AZK', 'OPPO A58 128GB', 2131180, 2599000, 23, 10, 1, 'Ready stock - OPPO A58 128GB', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(8, 8, 1, 'GP-260723.CIRZ', 'Infinix Note 40 256GB', 2705180, 3299000, 35, 10, 1, 'Ready stock - Infinix Note 40 256GB', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(9, 8, 9, 'GP-260723.YAPR', 'ASUS Vivobook 14 M1402 Ryzen 5', 5985180, 7299000, 28, 10, 1, 'Ready stock - ASUS Vivobook 14 M1402 Ryzen 5', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(10, 8, 9, 'GP-260723.DJ6D', 'Lenovo IdeaPad Slim 3 i5-1235U', 6969180, 8499000, 43, 10, 1, 'Ready stock - Lenovo IdeaPad Slim 3 i5-1235U', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(11, 8, 9, 'GP-260723.VOHO', 'Acer Aspire Go 14 i5-1335U', 6559180, 7999000, 78, 10, 1, 'Ready stock - Acer Aspire Go 14 i5-1335U', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(12, 8, 9, 'GP-260723.119B', 'HP 15-fd0013TU i3-N305', 4919180, 5999000, 17, 10, 1, 'Ready stock - HP 15-fd0013TU i3-N305', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(13, 8, 9, 'GP-260723.RXH8', 'ASUS TUF Gaming F15 i5-11400H', 9429180, 11499000, 63, 10, 1, 'Ready stock - ASUS TUF Gaming F15 i5-11400H', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(14, 8, 9, 'GP-260723.C4SJ', 'Lenovo V14 G4 Ryzen 3 7320U', 4509180, 5499000, 26, 10, 1, 'Ready stock - Lenovo V14 G4 Ryzen 3 7320U', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(15, 8, 1, 'GP-260723.FTGW', 'Samsung Galaxy Tab A9 64GB WiFi', 1885180, 2299000, 108, 10, 1, 'Ready stock - Samsung Galaxy Tab A9 64GB WiFi', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(16, 8, 1, 'GP-260723.3LZF', 'Xiaomi Redmi Pad SE 128GB', 2049179, 2499000, 114, 10, 1, 'Ready stock - Xiaomi Redmi Pad SE 128GB', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(17, 8, 1, 'GP-260723.XXHF', 'iPad 10th Gen 64GB WiFi', 5329180, 6499000, 97, 10, 1, 'Ready stock - iPad 10th Gen 64GB WiFi', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(18, 8, 1, 'GP-260723.I4I5', 'Lenovo Tab M11 128GB', 2705180, 3299000, 16, 10, 1, 'Ready stock - Lenovo Tab M11 128GB', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(19, 8, 1, 'GP-260723.KTIB', 'Sony WH-CH520 Wireless Headphone', 614180, 749000, 47, 10, 1, 'Ready stock - Sony WH-CH520 Wireless Headphone', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(20, 8, 1, 'GP-260723.4IGW', 'JBL Tune 520BT Bluetooth Headphone', 491179, 599000, 53, 10, 1, 'Ready stock - JBL Tune 520BT Bluetooth Headphone', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(21, 8, 1, 'GP-260723.LWT9', 'Samsung Galaxy Buds FE', 819180, 999000, 107, 10, 1, 'Ready stock - Samsung Galaxy Buds FE', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(22, 8, 1, 'GP-260723.KSJU', 'JBL Go 3 Portable Speaker', 327180, 399000, 52, 10, 1, 'Ready stock - JBL Go 3 Portable Speaker', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(23, 8, 1, 'GP-260723.RDX1', 'Anker Soundcore A20i TWS Earbuds', 245179, 299000, 21, 10, 1, 'Ready stock - Anker Soundcore A20i TWS Earbuds', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(24, 8, 1, 'GP-260723.XQUG', 'Samsung Galaxy Watch FE', 1639180, 1999000, 104, 10, 1, 'Ready stock - Samsung Galaxy Watch FE', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(25, 8, 1, 'GP-260723.ZD1M', 'Xiaomi Redmi Watch 4', 737180, 899000, 115, 10, 1, 'Ready stock - Xiaomi Redmi Watch 4', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(26, 8, 1, 'GP-260723.FRKQ', 'Huawei Band 9', 409180, 499000, 97, 10, 1, 'Ready stock - Huawei Band 9', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(27, 8, 1, 'GP-260723.DAYE', 'Realme Watch S2', 573180, 699000, 64, 10, 1, 'Ready stock - Realme Watch S2', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(28, 8, 1, 'GP-260723.UDFG', 'Corsair Vengeance LPX 16GB DDR4 3200MHz', 450180, 549000, 35, 10, 1, 'Ready stock - Corsair Vengeance LPX 16GB DDR4 3200MHz', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(29, 8, 1, 'GP-260723.WCW2', 'Kingston NV2 500GB NVMe SSD', 409180, 499000, 70, 10, 1, 'Ready stock - Kingston NV2 500GB NVMe SSD', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(30, 8, 1, 'GP-260723.CTFS', 'Kingston NV2 1TB NVMe SSD', 737180, 899000, 70, 10, 1, 'Ready stock - Kingston NV2 1TB NVMe SSD', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(31, 8, 1, 'GP-260723.CSEY', 'MSI GeForce RTX 4060 Ventus 2X 8GB', 3525180, 4299000, 66, 10, 1, 'Ready stock - MSI GeForce RTX 4060 Ventus 2X 8GB', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(32, 8, 1, 'GP-260723.GK2T', 'Corsair CV550 550W 80+ Bronze PSU', 614180, 749000, 80, 10, 1, 'Ready stock - Corsair CV550 550W 80+ Bronze PSU', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(33, 8, 1, 'GP-260723.IJDH', 'ASRock B660M-HDV Intel Motherboard', 1065180, 1299000, 98, 10, 1, 'Ready stock - ASRock B660M-HDV Intel Motherboard', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(34, 8, 1, 'GP-260723.ZTGC', 'AMD Ryzen 5 5600 Processor', 1557180, 1899000, 35, 10, 1, 'Ready stock - AMD Ryzen 5 5600 Processor', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(35, 8, 1, 'GP-260723.VM9M', 'Intel Core i5-12400F Processor', 1721180, 2099000, 41, 10, 1, 'Ready stock - Intel Core i5-12400F Processor', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(36, 8, 1, 'GP-260723.8R5S', 'Logitech MK270 Wireless Keyboard & Mouse', 286180, 349000, 93, 10, 1, 'Ready stock - Logitech MK270 Wireless Keyboard & Mouse', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(37, 8, 1, 'GP-260723.NQKA', 'Logitech G102 Lightsync Gaming Mouse', 245179, 299000, 105, 10, 1, 'Ready stock - Logitech G102 Lightsync Gaming Mouse', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(38, 8, 1, 'GP-260723.SKUS', 'Razer BlackWidow V3 Mechanical Keyboard', 983179, 1199000, 110, 10, 1, 'Ready stock - Razer BlackWidow V3 Mechanical Keyboard', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(39, 8, 1, 'GP-260723.BRUR', 'Baseus 65W GaN Fast Charger USB-C', 327180, 399000, 53, 10, 1, 'Ready stock - Baseus 65W GaN Fast Charger USB-C', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(40, 8, 1, 'GP-260723.FE6C', 'Anker PowerLine III USB-C to C 1.8m', 122179, 149000, 58, 10, 1, 'Ready stock - Anker PowerLine III USB-C to C 1.8m', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(41, 8, 1, 'GP-260723.VBSM', 'Xiaomi Mi Webcam 2K', 327180, 399000, 80, 10, 1, 'Ready stock - Xiaomi Mi Webcam 2K', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(42, 8, 1, 'GP-260723.1RUD', 'Spigen Case Samsung Galaxy A15', 163180, 199000, 80, 10, 1, 'Ready stock - Spigen Case Samsung Galaxy A15', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(43, 8, 1, 'GP-260723.SIR9', 'TP-Link Archer AX23 WiFi 6 Router', 450180, 549000, 92, 10, 1, 'Ready stock - TP-Link Archer AX23 WiFi 6 Router', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(44, 8, 1, 'GP-260723.84XG', 'TP-Link TL-SG105 5-Port Gigabit Switch', 163180, 199000, 27, 10, 1, 'Ready stock - TP-Link TL-SG105 5-Port Gigabit Switch', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(45, 8, 1, 'GP-260723.SFKG', 'TP-Link Deco M4 Mesh WiFi System (2-pack)', 983179, 1199000, 116, 10, 1, 'Ready stock - TP-Link Deco M4 Mesh WiFi System (2-pack)', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(46, 8, 1, 'GP-260723.6W0B', 'Tenda FH304 300Mbps Router', 163180, 199000, 93, 10, 1, 'Ready stock - Tenda FH304 300Mbps Router', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(47, 8, 1, 'GP-260723.QVA3', 'Cat6 UTP Cable 1m (Belden)', 20500, 25000, 42, 10, 1, 'Ready stock - Cat6 UTP Cable 1m (Belden)', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26');

-- --------------------------------------------------------

--
-- Table structure for table `purchases`
--

CREATE TABLE `purchases` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `invoice_number` varchar(255) DEFAULT NULL,
  `supplier_id` bigint(20) UNSIGNED NOT NULL,
  `purchase_date` date NOT NULL,
  `due_date` date DEFAULT NULL,
  `total` bigint(20) NOT NULL DEFAULT 0,
  `status` varchar(255) NOT NULL DEFAULT 'draft',
  `notes` text DEFAULT NULL,
  `proof_image` varchar(255) DEFAULT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `purchases`
--

INSERT INTO `purchases` (`id`, `invoice_number`, `supplier_id`, `purchase_date`, `due_date`, `total`, `status`, `notes`, `proof_image`, `created_by`, `created_at`, `updated_at`) VALUES
(1, 'PUR-XEBSW8-1', 8, '2026-03-19', '2026-04-17', 0, 'paid', 'Sint aperiam ad dolorem.', NULL, 2, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(2, 'PUR-3O6FVK-2', 11, '2026-07-12', '2026-08-02', 0, 'ordered', NULL, NULL, 1, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(3, 'PUR-RIQSUO-3', 6, '2026-06-29', '2026-07-18', 0, 'draft', NULL, NULL, 2, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(4, 'PUR-NNEWJI-4', 7, '2026-04-10', '2026-05-10', 0, 'paid', NULL, NULL, 3, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(5, 'PUR-UY3V4C-5', 12, '2026-06-27', '2026-07-21', 0, 'received', NULL, NULL, 2, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(6, 'PUR-WIONFR-6', 10, '2026-05-15', '2026-06-10', 0, 'received', NULL, NULL, 2, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(7, 'PUR-XROGV1-7', 9, '2026-02-14', '2026-03-07', 0, 'ordered', 'Repudiandae est corporis earum debitis.', NULL, 3, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(8, 'PUR-TVC70Z-8', 13, '2026-04-13', '2026-04-23', 0, 'received', 'Consequatur aut enim sint consequatur.', NULL, 1, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(9, 'PUR-DNFOPM-9', 5, '2026-07-15', '2026-07-22', 0, 'ordered', 'Excepturi facilis voluptatibus corporis maxime minima.', NULL, 3, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(10, 'PUR-HQAASS-10', 15, '2026-04-29', '2026-05-07', 0, 'draft', 'Voluptas beatae impedit rerum suscipit.', NULL, 3, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(11, 'PUR-NPQH2O-11', 4, '2026-02-16', '2026-03-05', 0, 'ordered', NULL, NULL, 1, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(12, 'PUR-0QNCPA-12', 3, '2026-03-28', '2026-04-22', 0, 'ordered', NULL, NULL, 1, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(13, 'PUR-RJMHXE-13', 3, '2026-04-30', '2026-05-22', 0, 'draft', NULL, NULL, 3, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(14, 'PUR-MRV3XN-14', 3, '2026-07-16', '2026-07-26', 0, 'cancelled', 'Dignissimos deleniti temporibus dignissimos non culpa omnis.', NULL, 2, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(15, 'PUR-CVQYEX-15', 7, '2026-02-07', '2026-02-20', 0, 'received', 'Eligendi laudantium quam animi ea aliquid eveniet explicabo excepturi.', NULL, 3, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(16, 'PUR-RCUDXU-16', 12, '2026-06-26', '2026-07-14', 0, 'ordered', NULL, NULL, 2, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(17, 'PUR-KVTST9-17', 10, '2026-04-17', '2026-05-02', 0, 'draft', NULL, NULL, 1, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(18, 'PUR-JH8JWM-18', 5, '2026-02-08', '2026-03-09', 0, 'paid', NULL, NULL, 1, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(19, 'PUR-ETVGBV-19', 14, '2026-05-14', '2026-06-04', 0, 'received', NULL, NULL, 1, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(20, 'PUR-CC6GCG-20', 3, '2026-02-26', '2026-03-06', 0, 'received', 'Aspernatur id nulla officia officiis et a.', NULL, 2, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(21, 'PUR-7Y8ZHJ-21', 8, '2026-04-09', '2026-05-07', 0, 'ordered', NULL, NULL, 1, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(22, 'PUR-ZSBUHK-22', 14, '2026-01-26', '2026-02-10', 0, 'ordered', 'Accusantium quam sapiente autem ea fugit.', NULL, 1, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(23, 'PUR-NFAPLL-23', 3, '2026-02-24', '2026-03-08', 0, 'ordered', NULL, NULL, 2, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(24, 'PUR-CU8S57-24', 9, '2026-07-16', '2026-08-08', 0, 'ordered', NULL, NULL, 3, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(25, 'PUR-BQNO11-25', 10, '2026-02-25', '2026-03-12', 0, 'received', 'Et non quod et voluptates culpa debitis.', NULL, 3, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(26, 'PUR-BQXGZ7-26', 13, '2026-05-26', '2026-06-18', 0, 'received', 'In quia dicta et debitis quos veniam.', NULL, 3, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(27, 'PUR-PKPS4C-27', 10, '2026-07-04', '2026-07-24', 0, 'draft', NULL, NULL, 2, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(28, 'PUR-1K7SLC-28', 9, '2026-02-06', '2026-02-21', 0, 'draft', NULL, NULL, 1, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(29, 'PUR-368919-29', 4, '2026-03-02', '2026-03-28', 0, 'draft', 'Aut soluta molestias magni rem.', NULL, 3, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(30, 'PUR-H0ETSO-30', 7, '2026-07-02', '2026-07-24', 0, 'ordered', 'Eaque dolorem perspiciatis neque nihil voluptatem sequi quibusdam.', NULL, 2, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(31, 'PUR-MQ0NXZ-31', 2, '2026-05-20', '2026-05-27', 0, 'ordered', 'Tempore fugiat omnis eaque repellat error soluta dolores.', NULL, 3, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(32, 'PUR-ZDAYNA-32', 6, '2026-06-27', '2026-07-07', 0, 'cancelled', NULL, NULL, 3, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(33, 'PUR-WGCEOO-33', 7, '2026-04-04', '2026-04-12', 0, 'received', NULL, NULL, 1, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(34, 'PUR-Q5MHBA-34', 2, '2026-03-03', '2026-03-28', 0, 'ordered', 'Dolore sunt ut nemo magni repellendus voluptas laborum.', NULL, 2, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(35, 'PUR-CI7GQR-35', 15, '2026-03-12', '2026-03-25', 0, 'paid', NULL, NULL, 2, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(36, 'PUR-QJ82DJ-36', 2, '2026-05-31', '2026-06-12', 0, 'received', 'Dignissimos ea itaque eligendi.', NULL, 2, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(37, 'PUR-4YMAM3-37', 6, '2026-02-27', '2026-03-10', 0, 'received', NULL, NULL, 1, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(38, 'PUR-MVIJXO-38', 10, '2026-03-02', '2026-03-10', 0, 'received', 'Velit repudiandae veniam et quia neque.', NULL, 3, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(39, 'PUR-PHVXLP-39', 15, '2026-02-07', '2026-02-16', 0, 'ordered', 'Voluptatibus rerum ut nam doloremque nostrum.', NULL, 2, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(40, 'PUR-M7EPWR-40', 12, '2026-01-24', '2026-02-04', 0, 'ordered', 'Exercitationem repellat id voluptatibus quae harum.', NULL, 1, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(41, 'PUR-KV2NNU-41', 11, '2026-07-11', '2026-07-26', 0, 'cancelled', NULL, NULL, 3, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(42, 'PUR-LBWAKP-42', 1, '2026-02-06', '2026-03-06', 0, 'draft', NULL, NULL, 2, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(43, 'PUR-VLCXYL-43', 15, '2026-05-11', '2026-06-04', 0, 'ordered', 'Sed id ipsam libero natus eaque.', NULL, 2, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(44, 'PUR-AEMVY9-44', 5, '2026-03-30', '2026-04-25', 0, 'cancelled', NULL, NULL, 1, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(45, 'PUR-CMRFTJ-45', 2, '2026-06-06', '2026-06-17', 0, 'paid', 'Omnis aut dolorum sunt voluptatem reiciendis quia.', NULL, 2, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(46, 'PUR-NOZDYF-46', 14, '2026-06-08', '2026-06-16', 0, 'received', NULL, NULL, 1, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(47, 'PUR-Q3L4VE-47', 7, '2026-03-09', '2026-04-01', 0, 'paid', NULL, NULL, 2, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(48, 'PUR-EIREJC-48', 15, '2026-05-02', '2026-05-25', 0, 'cancelled', 'Minima quibusdam sed debitis perspiciatis accusantium assumenda sed.', NULL, 1, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(49, 'PUR-MBJ8OL-49', 10, '2026-06-14', '2026-06-27', 0, 'draft', NULL, NULL, 1, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(50, 'PUR-NGJKDP-50', 7, '2026-05-31', '2026-06-15', 0, 'paid', 'Incidunt dolores hic qui ut maxime error dolor.', NULL, 2, '2026-07-23 05:11:27', '2026-07-23 05:11:27');

-- --------------------------------------------------------

--
-- Table structure for table `purchase_items`
--

CREATE TABLE `purchase_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `purchase_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL,
  `unit_price` bigint(20) NOT NULL,
  `selling_price` bigint(20) DEFAULT NULL,
  `subtotal` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `purchase_items`
--

INSERT INTO `purchase_items` (`id`, `purchase_id`, `product_id`, `quantity`, `unit_price`, `selling_price`, `subtotal`, `created_at`, `updated_at`) VALUES
(1, 1, 12, 91, 15319, 19218, 1394029, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(2, 2, 1, 6, 6700, 7484, 40200, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(3, 2, 8, 84, 4222, 8854, 354648, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(4, 2, 17, 48, 13984, 14824, 671232, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(5, 2, 39, 27, 48754, 52713, 1316358, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(6, 2, 40, 23, 21508, 25413, 494684, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(7, 3, 1, 11, 34575, 37303, 380325, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(8, 3, 17, 15, 25543, 29395, 383145, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(9, 3, 29, 33, 20517, 22173, 677061, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(10, 3, 33, 5, 39790, 43022, 198950, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(11, 4, 5, 99, 30706, 32257, 3039894, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(12, 4, 35, 96, 2516, 7213, 241536, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(13, 5, 8, 64, 37320, 39514, 2388480, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(14, 5, 16, 52, 23066, 24898, 1199432, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(15, 5, 32, 91, 47098, 48834, 4285918, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(16, 6, 22, 14, 9764, 12207, 136696, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(17, 6, 26, 94, 18261, 19933, 1716534, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(18, 6, 29, 49, 41587, 45079, 2037763, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(19, 6, 38, 39, 34797, 36884, 1357083, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(20, 6, 46, 45, 4747, 6003, 213615, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(21, 7, 32, 62, 31281, 35001, 1939422, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(22, 8, 15, 23, 2384, 5002, 54832, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(23, 8, 19, 42, 29596, 33660, 1243032, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(24, 9, 10, 25, 27982, 30526, 699550, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(25, 9, 13, 32, 28924, 31496, 925568, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(26, 9, 22, 49, 10383, 11181, 508767, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(27, 9, 28, 64, 24872, 29550, 1591808, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(28, 9, 36, 50, 47178, 51119, 2358900, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(29, 10, 1, 24, 36589, 41549, 878136, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(30, 10, 32, 65, 1692, 2305, 109980, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(31, 10, 33, 18, 36167, 37472, 651006, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(32, 10, 40, 56, 4264, 9186, 238784, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(33, 11, 7, 39, 35600, 40001, 1388400, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(34, 11, 13, 12, 32562, 34587, 390744, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(35, 11, 16, 93, 22162, 25434, 2061066, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(36, 11, 23, 95, 29298, 30144, 2783310, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(37, 11, 43, 88, 17169, 22094, 1510872, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(38, 12, 8, 67, 33396, 35482, 2237532, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(39, 12, 14, 77, 46400, 48297, 3572800, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(40, 12, 30, 64, 26896, 30227, 1721344, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(41, 12, 38, 11, 10042, 10665, 110462, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(42, 13, 31, 59, 27934, 30754, 1648106, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(43, 13, 32, 7, 7655, 9649, 53585, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(44, 13, 33, 100, 38610, 42037, 3861000, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(45, 14, 1, 68, 49595, 53365, 3372460, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(46, 14, 21, 34, 10473, 11646, 356082, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(47, 14, 32, 70, 16801, 17872, 1176070, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(48, 15, 2, 33, 40690, 42434, 1342770, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(49, 15, 41, 43, 29051, 30068, 1249193, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(50, 16, 20, 40, 48103, 51710, 1924120, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(51, 16, 47, 18, 31229, 32249, 562122, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(52, 17, 35, 29, 1354, 5580, 39266, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(53, 18, 32, 96, 45101, 46578, 4329696, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(54, 18, 43, 47, 38968, 43038, 1831496, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(55, 19, 3, 75, 46391, 48121, 3479325, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(56, 19, 16, 21, 22166, 23688, 465486, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(57, 19, 19, 19, 12261, 16282, 232959, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(58, 19, 34, 93, 48687, 52582, 4527891, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(59, 19, 38, 51, 43785, 45945, 2233035, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(60, 20, 39, 23, 32646, 33231, 750858, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(61, 21, 7, 67, 37505, 39123, 2512835, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(62, 21, 12, 40, 42726, 47362, 1709040, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(63, 21, 25, 13, 23263, 25170, 302419, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(64, 21, 28, 58, 46460, 47398, 2694680, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(65, 21, 29, 72, 3081, 4374, 221832, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(66, 22, 2, 18, 39650, 41161, 713700, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(67, 22, 4, 9, 8009, 12839, 72081, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(68, 22, 11, 84, 3166, 3778, 265944, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(69, 22, 40, 43, 43769, 47185, 1882067, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(70, 23, 19, 11, 3816, 8548, 41976, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(71, 24, 32, 80, 7384, 9259, 590720, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(72, 24, 40, 34, 39337, 42626, 1337458, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(73, 25, 10, 36, 48285, 52226, 1738260, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(74, 26, 1, 31, 40839, 43138, 1266009, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(75, 26, 2, 87, 22812, 26308, 1984644, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(76, 26, 28, 22, 24242, 25232, 533324, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(77, 26, 39, 75, 32080, 35937, 2406000, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(78, 27, 3, 53, 25821, 30100, 1368513, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(79, 27, 35, 31, 35725, 39938, 1107475, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(80, 28, 17, 87, 35192, 38261, 3061704, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(81, 28, 29, 29, 12746, 17230, 369634, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(82, 28, 37, 47, 28258, 31977, 1328126, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(83, 29, 12, 55, 13202, 16566, 726110, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(84, 30, 8, 22, 47634, 50574, 1047948, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(85, 30, 24, 53, 15569, 19600, 825157, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(86, 30, 36, 80, 24934, 29170, 1994720, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(87, 31, 15, 8, 2373, 6208, 18984, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(88, 31, 25, 71, 3954, 6378, 280734, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(89, 32, 12, 95, 39664, 43538, 3768080, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(90, 33, 27, 55, 28552, 31175, 1570360, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(91, 33, 36, 27, 46902, 47871, 1266354, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(92, 33, 38, 64, 22343, 25833, 1429952, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(93, 33, 42, 91, 44494, 47008, 4048954, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(94, 33, 44, 35, 12057, 13342, 421995, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(95, 34, 2, 48, 31381, 35215, 1506288, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(96, 34, 32, 65, 45306, 49120, 2944890, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(97, 34, 39, 76, 48611, 49633, 3694436, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(98, 35, 14, 60, 8044, 12882, 482640, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(99, 35, 30, 78, 33226, 36204, 2591628, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(100, 35, 34, 26, 31853, 34595, 828178, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(101, 36, 7, 33, 30074, 32813, 992442, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(102, 36, 10, 27, 24034, 27375, 648918, '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(103, 36, 14, 49, 2764, 7593, 135436, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(104, 36, 20, 13, 43052, 46391, 559676, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(105, 36, 27, 77, 34355, 35500, 2645335, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(106, 37, 12, 15, 17796, 20852, 266940, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(107, 37, 25, 71, 27802, 29783, 1973942, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(108, 37, 26, 87, 30657, 33973, 2667159, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(109, 37, 29, 77, 32977, 34802, 2539229, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(110, 38, 9, 88, 36792, 40690, 3237696, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(111, 38, 31, 15, 43255, 44993, 648825, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(112, 39, 26, 9, 8109, 12770, 72981, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(113, 39, 47, 68, 12690, 15896, 862920, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(114, 40, 2, 99, 32696, 37217, 3236904, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(115, 40, 6, 91, 41870, 43952, 3810170, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(116, 40, 43, 81, 8988, 11589, 728028, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(117, 40, 46, 71, 49635, 52868, 3524085, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(118, 41, 4, 57, 21887, 24020, 1247559, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(119, 41, 16, 88, 27135, 31052, 2387880, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(120, 41, 19, 72, 21801, 23705, 1569672, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(121, 41, 27, 50, 35906, 37868, 1795300, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(122, 42, 4, 79, 28615, 30492, 2260585, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(123, 42, 11, 6, 43941, 46093, 263646, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(124, 42, 16, 70, 47079, 50958, 3295530, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(125, 42, 19, 75, 36496, 41233, 2737200, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(126, 42, 25, 67, 36793, 38737, 2465131, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(127, 43, 8, 79, 25325, 28076, 2000675, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(128, 43, 17, 79, 26518, 27444, 2094922, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(129, 44, 12, 54, 8272, 9478, 446688, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(130, 44, 15, 100, 7226, 10850, 722600, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(131, 44, 30, 10, 43616, 47817, 436160, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(132, 44, 32, 62, 23111, 26497, 1432882, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(133, 44, 37, 61, 19870, 22316, 1212070, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(134, 45, 2, 71, 25929, 28562, 1840959, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(135, 45, 4, 29, 4227, 7340, 122583, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(136, 45, 20, 65, 24422, 28614, 1587430, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(137, 45, 36, 45, 21255, 21801, 956475, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(138, 45, 38, 89, 24454, 26534, 2176406, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(139, 46, 4, 29, 7496, 9968, 217384, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(140, 46, 9, 90, 30036, 33512, 2703240, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(141, 46, 33, 86, 37953, 42480, 3263958, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(142, 46, 46, 55, 3077, 4885, 169235, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(143, 47, 12, 35, 20410, 22234, 714350, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(144, 47, 22, 23, 26248, 28679, 603704, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(145, 47, 23, 17, 35013, 36121, 595221, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(146, 47, 25, 100, 15122, 19768, 1512200, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(147, 48, 5, 39, 43697, 48502, 1704183, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(148, 48, 15, 76, 49399, 52849, 3754324, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(149, 48, 24, 67, 11247, 16143, 753549, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(150, 48, 25, 60, 6301, 8331, 378060, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(151, 48, 39, 57, 48180, 49294, 2746260, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(152, 49, 34, 78, 43246, 44640, 3373188, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(153, 50, 16, 94, 15880, 18727, 1492720, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(154, 50, 25, 74, 5379, 6934, 398046, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(155, 50, 38, 90, 48397, 51271, 4355730, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(156, 50, 46, 94, 1511, 2735, 142034, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(157, 50, 47, 86, 48040, 49374, 4131440, '2026-07-23 05:11:27', '2026-07-23 05:11:27');

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `invoice_number` varchar(255) NOT NULL,
  `customer_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `sale_date` datetime NOT NULL,
  `status` varchar(255) NOT NULL,
  `subtotal` bigint(20) NOT NULL DEFAULT 0,
  `global_discount` bigint(20) NOT NULL DEFAULT 0,
  `total_discount` bigint(20) NOT NULL DEFAULT 0,
  `total` bigint(20) NOT NULL DEFAULT 0,
  `cash_received` bigint(20) NOT NULL DEFAULT 0,
  `change` bigint(20) NOT NULL DEFAULT 0,
  `payment_method` varchar(255) NOT NULL DEFAULT 'cash',
  `notes` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`id`, `invoice_number`, `customer_id`, `created_by`, `sale_date`, `status`, `subtotal`, `global_discount`, `total_discount`, `total`, `cash_received`, `change`, `payment_method`, `notes`, `created_at`, `updated_at`) VALUES
(1, 'INV-V3ZXVS-1', 14, 1, '2026-07-23 16:08:00', 'completed', 0, 0, 0, 63226097, 60360, 0, 'transfer', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(2, 'INV-KRVDTM-2', NULL, 1, '2026-07-23 13:33:00', 'completed', 0, 0, 0, 2247000, 416420, 0, 'cash', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(3, 'INV-J4GBQN-3', 18, 3, '2026-07-23 16:25:00', 'completed', 0, 2938, 0, 81671619, 425646, 0, 'transfer', 'Natus at consequatur sit eum ab quidem.', '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(4, 'INV-OVR6RG-4', NULL, 3, '2026-07-23 17:49:00', 'completed', 0, 0, 0, 33677394, 482742, 0, 'cash', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(5, 'INV-A0WCAQ-5', 4, 2, '2026-07-23 09:09:00', 'cancelled', 0, 0, 0, 20188992, 410602, 0, 'cash', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(6, 'INV-3P6IL4-6', 9, 3, '2026-07-23 12:50:00', 'completed', 0, 0, 0, 28394000, 292806, 0, 'cash', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(7, 'INV-ZY5XHB-7', 5, 3, '2026-07-23 08:21:00', 'cancelled', 0, 0, 0, 23786037, 455957, 0, 'cash', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(8, 'INV-LASCIM-8', 3, 1, '2026-07-23 08:59:00', 'pending', 0, 0, 0, 17184741, 225008, 0, 'cash', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(9, 'INV-W5VFVO-9', 15, 3, '2026-07-23 15:38:00', 'cancelled', 0, 0, 0, 63733834, 151051, 0, 'transfer', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(10, 'INV-SSNCOI-10', 10, 3, '2026-07-23 14:43:00', 'cancelled', 0, 2952, 0, 894048, 405496, 0, 'cash', 'Neque consequuntur ut aut dolorum repellat.', '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(11, 'INV-QGOYYU-11', 1, 1, '2026-06-25 13:11:27', 'pending', 0, 4019, 0, 49273216, 205502, 0, 'transfer', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(12, 'INV-9A3PTT-12', 21, 2, '2026-05-19 13:11:27', 'completed', 0, 0, 0, 36494453, 431103, 0, 'cash', 'Est aliquam possimus aspernatur.', '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(13, 'INV-KM1H1M-13', 3, 3, '2026-03-31 13:11:27', 'pending', 0, 0, 0, 26484195, 317463, 0, 'cash', 'Mollitia aut assumenda aspernatur autem ullam rerum.', '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(14, 'INV-HNWVVU-14', 19, 1, '2026-07-11 13:11:27', 'completed', 0, 0, 0, 29994195, 125991, 0, 'transfer', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(15, 'INV-AURNET-15', 1, 3, '2026-02-20 13:11:27', 'pending', 0, 6180, 0, 1091820, 273341, 0, 'cash', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(16, 'INV-RBJS0K-16', 16, 3, '2026-05-05 13:11:27', 'completed', 0, 0, 0, 70384047, 303287, 0, 'transfer', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(17, 'INV-XYJGI6-17', 5, 3, '2026-07-02 13:11:27', 'cancelled', 0, 0, 0, 95967655, 187214, 0, 'cash', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(18, 'INV-YSJ3QW-18', 24, 1, '2026-03-01 13:11:27', 'pending', 0, 0, 0, 5643739, 241621, 0, 'cash', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(19, 'INV-PJ4DD8-19', 6, 2, '2026-07-22 13:11:27', 'pending', 0, 0, 0, 1745000, 388196, 0, 'transfer', 'Similique unde dolor quis et.', '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(20, 'INV-8HCOIB-20', NULL, 1, '2026-03-20 13:11:27', 'cancelled', 0, 0, 0, 9181401, 408714, 0, 'transfer', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(21, 'INV-R5WKLS-21', 1, 1, '2026-03-01 13:11:27', 'pending', 0, 0, 0, 38963841, 473930, 0, 'transfer', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(22, 'INV-ZCX6Y9-22', 1, 3, '2026-05-10 13:11:27', 'completed', 0, 9298, 0, 25274702, 302079, 0, 'cash', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(23, 'INV-Y7QRVJ-23', 6, 2, '2026-06-06 13:11:27', 'pending', 0, 0, 0, 34985000, 82800, 0, 'transfer', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(24, 'INV-WM9DM7-24', 10, 1, '2026-07-08 13:11:27', 'pending', 0, 0, 0, 39217122, 198708, 0, 'transfer', 'Impedit sunt quia aut.', '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(25, 'INV-ZOOYMX-25', 7, 2, '2026-04-25 13:11:27', 'cancelled', 0, 0, 0, 22186797, 80438, 0, 'transfer', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(26, 'INV-N3NLXW-26', NULL, 3, '2026-05-15 13:11:27', 'pending', 0, 0, 0, 2695000, 190112, 0, 'cash', 'Doloribus voluptatem enim neque enim temporibus provident.', '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(27, 'INV-DF5HSD-27', 25, 1, '2026-06-22 13:11:27', 'completed', 0, 0, 0, 11196000, 302035, 0, 'cash', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(28, 'INV-YJKRL1-28', 7, 2, '2026-01-28 13:11:27', 'completed', 0, 0, 0, 26329901, 353054, 0, 'cash', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(29, 'INV-YXUTCR-29', 15, 2, '2026-07-05 13:11:27', 'cancelled', 0, 0, 0, 84990000, 442801, 0, 'transfer', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(30, 'INV-REHY2K-30', 12, 3, '2026-07-11 13:11:27', 'completed', 0, 1387, 0, 2994613, 89414, 0, 'cash', 'Perspiciatis iure ratione non ad.', '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(31, 'INV-FLGIFQ-31', 15, 3, '2026-06-21 13:11:27', 'pending', 0, 0, 0, 30229000, 184657, 0, 'transfer', 'Quia perspiciatis consequatur voluptatem iusto suscipit et.', '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(32, 'INV-MO2PBC-32', 18, 1, '2026-05-20 13:11:27', 'pending', 0, 0, 0, 87670000, 409821, 0, 'cash', 'Sint fugit quis vel voluptatem.', '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(33, 'INV-ZQQ9FJ-33', 15, 2, '2026-07-09 13:11:27', 'cancelled', 0, 2102, 0, 47487898, 485113, 0, 'cash', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(34, 'INV-XEGUWI-34', 21, 1, '2026-03-18 13:11:27', 'completed', 0, 7135, 0, 45013509, 304934, 0, 'cash', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(35, 'INV-SGJ7CZ-35', 3, 1, '2026-05-07 13:11:27', 'completed', 0, 0, 0, 50079409, 229250, 0, 'cash', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(36, 'INV-XSRISV-36', 10, 3, '2026-06-30 13:11:27', 'cancelled', 0, 6683, 0, 25182601, 467847, 0, 'cash', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(37, 'INV-AG5MEU-37', NULL, 2, '2026-07-16 13:11:27', 'pending', 0, 0, 0, 1797000, 200005, 0, 'transfer', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(38, 'INV-KXCOP4-38', 4, 2, '2026-03-16 13:11:27', 'cancelled', 0, 3068, 0, 80489932, 328380, 0, 'cash', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(39, 'INV-YMGDB3-39', 16, 1, '2026-04-29 13:11:27', 'completed', 0, 0, 0, 4293660, 100354, 0, 'cash', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(40, 'INV-KNJBGN-40', 3, 1, '2026-07-15 13:11:27', 'pending', 0, 0, 0, 19290000, 242258, 0, 'transfer', 'Eius minima sed qui qui.', '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(41, 'INV-YDBUMS-41', 19, 1, '2026-06-12 13:11:27', 'pending', 0, 0, 0, 56131268, 207959, 0, 'cash', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(42, 'INV-STUI9I-42', 1, 2, '2026-02-09 13:11:27', 'completed', 0, 0, 0, 6394160, 419209, 0, 'transfer', 'Sit et nam quo ut.', '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(43, 'INV-RGR9FB-43', NULL, 1, '2026-04-30 13:11:27', 'pending', 0, 0, 0, 117262634, 220460, 0, 'transfer', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(44, 'INV-VK5HGA-44', NULL, 3, '2026-05-13 13:11:27', 'cancelled', 0, 0, 0, 127677116, 414467, 0, 'cash', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(45, 'INV-XW8OJP-45', 20, 3, '2026-03-18 13:11:27', 'cancelled', 0, 7369, 0, 29673631, 439843, 0, 'transfer', 'Facere est facilis aliquid aspernatur delectus natus dolorum.', '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(46, 'INV-PD9ANA-46', NULL, 3, '2026-05-07 13:11:27', 'completed', 0, 0, 0, 11284000, 484212, 0, 'transfer', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(47, 'INV-CDI6ZY-47', 24, 1, '2026-07-08 13:11:27', 'cancelled', 0, 0, 0, 44179346, 395082, 0, 'transfer', 'Et atque nihil et repellat dolorem.', '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(48, 'INV-U6JHUA-48', 20, 3, '2026-05-07 13:11:27', 'cancelled', 0, 0, 0, 62131874, 464473, 0, 'transfer', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(49, 'INV-HQUT9J-49', 3, 3, '2026-04-05 13:11:27', 'completed', 0, 0, 0, 72382053, 124003, 0, 'cash', NULL, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(50, 'INV-FTVSPE-50', NULL, 3, '2026-02-03 13:11:27', 'cancelled', 0, 0, 0, 1995883, 353722, 0, 'cash', 'Nostrum nostrum quidem qui nisi excepturi provident.', '2026-07-23 05:11:27', '2026-07-23 05:11:27');

-- --------------------------------------------------------

--
-- Table structure for table `sale_items`
--

CREATE TABLE `sale_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sale_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL,
  `cost_price` bigint(20) NOT NULL,
  `unit_price` bigint(20) NOT NULL,
  `discount` bigint(20) NOT NULL DEFAULT 0,
  `final_price` bigint(20) NOT NULL,
  `subtotal` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sale_items`
--

INSERT INTO `sale_items` (`id`, `sale_id`, `product_id`, `quantity`, `cost_price`, `unit_price`, `discount`, `final_price`, `subtotal`, `created_at`, `updated_at`) VALUES
(1, 1, 9, 3, 5985180, 7299000, 0, 21897000, 21897000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(2, 1, 15, 6, 1885180, 2299000, 0, 13794000, 13794000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(3, 1, 17, 3, 5329180, 6499000, 438, 19496562, 19497000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(4, 1, 27, 4, 573180, 699000, 0, 2796000, 2796000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(5, 1, 32, 7, 614180, 749000, 465, 5242535, 5243000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(6, 2, 32, 3, 614180, 749000, 0, 2247000, 2247000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(7, 3, 10, 6, 6969180, 8499000, 0, 50994000, 50994000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(8, 3, 14, 2, 4509180, 5499000, 1443, 10996557, 10998000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(9, 3, 15, 7, 1885180, 2299000, 0, 16093000, 16093000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(10, 3, 39, 9, 327180, 399000, 0, 3591000, 3591000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(11, 4, 1, 9, 2049179, 2499000, 0, 22491000, 22491000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(12, 4, 16, 1, 2049179, 2499000, 1606, 2497394, 2499000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(13, 4, 37, 5, 245179, 299000, 0, 1495000, 1495000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(14, 4, 38, 6, 983179, 1199000, 0, 7194000, 7194000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(15, 5, 6, 3, 2295180, 2799000, 0, 8397000, 8397000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(16, 5, 16, 4, 2049179, 2499000, 0, 9996000, 9996000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(17, 5, 20, 3, 491179, 599000, 1008, 1795992, 1797000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(18, 6, 2, 3, 2869180, 3499000, 0, 10497000, 10497000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(19, 6, 11, 2, 6559180, 7999000, 0, 15998000, 15998000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(20, 6, 34, 1, 1557180, 1899000, 0, 1899000, 1899000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(21, 7, 5, 9, 1885180, 2299000, 0, 20691000, 20691000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(22, 7, 34, 1, 1557180, 1899000, 963, 1898037, 1899000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(23, 7, 41, 3, 327180, 399000, 0, 1197000, 1197000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(24, 8, 12, 2, 4919180, 5999000, 0, 11998000, 11998000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(25, 8, 28, 5, 450180, 549000, 0, 2745000, 2745000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(26, 8, 36, 7, 286180, 349000, 1259, 2441741, 2443000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(27, 9, 12, 10, 4919180, 5999000, 0, 59990000, 59990000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(28, 9, 32, 5, 614180, 749000, 1166, 3743834, 3745000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(29, 10, 37, 3, 245179, 299000, 0, 897000, 897000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(30, 11, 14, 6, 4509180, 5499000, 393, 32993607, 32994000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(31, 11, 15, 2, 1885180, 2299000, 0, 4598000, 4598000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(32, 11, 38, 7, 983179, 1199000, 1372, 8391628, 8393000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(33, 11, 43, 6, 450180, 549000, 0, 3294000, 3294000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(34, 12, 9, 5, 5985180, 7299000, 547, 36494453, 36495000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(35, 13, 4, 1, 1311180, 1599000, 0, 1599000, 1599000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(36, 13, 7, 5, 2131180, 2599000, 0, 12995000, 12995000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(37, 13, 18, 3, 2705180, 3299000, 0, 9897000, 9897000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(38, 13, 41, 5, 327180, 399000, 1805, 1993195, 1995000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(39, 14, 12, 5, 4919180, 5999000, 805, 29994195, 29995000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(40, 15, 43, 2, 450180, 549000, 0, 1098000, 1098000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(41, 16, 10, 8, 6969180, 8499000, 0, 67992000, 67992000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(42, 16, 44, 6, 163180, 199000, 953, 1193047, 1194000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(43, 16, 45, 1, 983179, 1199000, 0, 1199000, 1199000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(44, 17, 9, 9, 5985180, 7299000, 638, 65690362, 65691000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(45, 17, 26, 4, 409180, 499000, 0, 1996000, 1996000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(46, 17, 28, 6, 450180, 549000, 707, 3293293, 3294000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(47, 17, 29, 7, 409180, 499000, 0, 3493000, 3493000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(48, 17, 31, 5, 3525180, 4299000, 0, 21495000, 21495000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(49, 18, 24, 2, 1639180, 1999000, 802, 3997198, 3998000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(50, 18, 28, 3, 450180, 549000, 459, 1646541, 1647000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(51, 19, 36, 5, 286180, 349000, 0, 1745000, 1745000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(52, 20, 25, 3, 737180, 899000, 1160, 2695840, 2697000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(53, 20, 26, 3, 409180, 499000, 0, 1497000, 1497000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(54, 20, 29, 10, 409180, 499000, 1439, 4988561, 4990000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(55, 21, 23, 10, 245179, 299000, 0, 2990000, 2990000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(56, 21, 24, 6, 1639180, 1999000, 159, 11993841, 11994000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(57, 21, 29, 10, 409180, 499000, 0, 4990000, 4990000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(58, 21, 34, 10, 1557180, 1899000, 0, 18990000, 18990000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(59, 22, 8, 6, 2705180, 3299000, 0, 19794000, 19794000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(60, 22, 28, 10, 450180, 549000, 0, 5490000, 5490000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(61, 23, 3, 10, 1803180, 2199000, 0, 21990000, 21990000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(62, 23, 7, 5, 2131180, 2599000, 0, 12995000, 12995000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(63, 24, 6, 5, 2295180, 2799000, 1878, 13993122, 13995000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(64, 24, 20, 3, 491179, 599000, 0, 1797000, 1797000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(65, 24, 23, 9, 245179, 299000, 0, 2691000, 2691000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(66, 24, 24, 9, 1639180, 1999000, 0, 17991000, 17991000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(67, 24, 28, 5, 450180, 549000, 0, 2745000, 2745000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(68, 25, 24, 5, 1639180, 1999000, 0, 9995000, 9995000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(69, 25, 31, 1, 3525180, 4299000, 203, 4298797, 4299000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(70, 25, 35, 3, 1721180, 2099000, 0, 6297000, 6297000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(71, 25, 41, 4, 327180, 399000, 0, 1596000, 1596000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(72, 26, 26, 1, 409180, 499000, 0, 499000, 499000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(73, 26, 43, 4, 450180, 549000, 0, 2196000, 2196000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(74, 27, 6, 4, 2295180, 2799000, 0, 11196000, 11196000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(75, 28, 14, 2, 4509180, 5499000, 0, 10998000, 10998000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(76, 28, 17, 1, 5329180, 6499000, 0, 6499000, 6499000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(77, 28, 32, 9, 614180, 749000, 0, 6741000, 6741000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(78, 28, 37, 7, 245179, 299000, 1099, 2091901, 2093000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(79, 29, 10, 10, 6969180, 8499000, 0, 84990000, 84990000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(80, 30, 32, 4, 614180, 749000, 0, 2996000, 2996000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(81, 31, 5, 10, 1885180, 2299000, 0, 22990000, 22990000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(82, 31, 19, 4, 614180, 749000, 0, 2996000, 2996000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(83, 31, 32, 2, 614180, 749000, 0, 1498000, 1498000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(84, 31, 43, 5, 450180, 549000, 0, 2745000, 2745000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(85, 32, 1, 8, 2049179, 2499000, 0, 19992000, 19992000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(86, 32, 7, 7, 2131180, 2599000, 0, 18193000, 18193000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(87, 32, 31, 9, 3525180, 4299000, 0, 38691000, 38691000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(88, 32, 33, 1, 1065180, 1299000, 0, 1299000, 1299000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(89, 32, 34, 5, 1557180, 1899000, 0, 9495000, 9495000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(90, 33, 1, 5, 2049179, 2499000, 0, 12495000, 12495000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(91, 33, 11, 3, 6559180, 7999000, 0, 23997000, 23997000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(92, 33, 14, 2, 4509180, 5499000, 0, 10998000, 10998000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(93, 34, 7, 5, 2131180, 2599000, 0, 12995000, 12995000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(94, 34, 16, 10, 2049179, 2499000, 356, 24989644, 24990000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(95, 34, 20, 4, 491179, 599000, 0, 2396000, 2396000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(96, 34, 40, 7, 122179, 149000, 0, 1043000, 1043000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(97, 34, 45, 3, 983179, 1199000, 0, 3597000, 3597000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(98, 35, 1, 9, 2049179, 2499000, 0, 22491000, 22491000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(99, 35, 11, 3, 6559180, 7999000, 0, 23997000, 23997000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(100, 35, 20, 1, 491179, 599000, 1548, 597452, 599000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(101, 35, 25, 2, 737180, 899000, 0, 1798000, 1798000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(102, 35, 39, 3, 327180, 399000, 1043, 1195957, 1197000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(103, 36, 6, 9, 2295180, 2799000, 1716, 25189284, 25191000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(104, 37, 20, 3, 491179, 599000, 0, 1797000, 1797000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(105, 38, 13, 7, 9429180, 11499000, 0, 80493000, 80493000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(106, 39, 36, 2, 286180, 349000, 0, 698000, 698000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(107, 39, 38, 3, 983179, 1199000, 1340, 3595660, 3597000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(108, 40, 2, 2, 2869180, 3499000, 0, 6998000, 6998000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(109, 40, 7, 3, 2131180, 2599000, 0, 7797000, 7797000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(110, 40, 30, 5, 737180, 899000, 0, 4495000, 4495000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(111, 41, 17, 8, 5329180, 6499000, 0, 51992000, 51992000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(112, 41, 25, 2, 737180, 899000, 1732, 1796268, 1798000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(113, 41, 27, 1, 573180, 699000, 0, 699000, 699000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(114, 41, 37, 5, 245179, 299000, 0, 1495000, 1495000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(115, 41, 40, 1, 122179, 149000, 0, 149000, 149000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(116, 42, 4, 4, 1311180, 1599000, 1840, 6394160, 6396000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(117, 43, 5, 9, 1885180, 2299000, 0, 20691000, 20691000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(118, 43, 9, 10, 5985180, 7299000, 0, 72990000, 72990000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(119, 43, 27, 2, 573180, 699000, 1391, 1396609, 1398000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(120, 43, 35, 10, 1721180, 2099000, 0, 20990000, 20990000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(121, 43, 39, 3, 327180, 399000, 1975, 1195025, 1197000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(122, 44, 13, 7, 9429180, 11499000, 884, 80492116, 80493000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(123, 44, 14, 7, 4509180, 5499000, 0, 38493000, 38493000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(124, 44, 38, 7, 983179, 1199000, 0, 8393000, 8393000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(125, 44, 40, 1, 122179, 149000, 0, 149000, 149000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(126, 44, 47, 6, 20500, 25000, 0, 150000, 150000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(127, 45, 30, 10, 737180, 899000, 0, 8990000, 8990000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(128, 45, 31, 3, 3525180, 4299000, 0, 12897000, 12897000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(129, 45, 33, 6, 1065180, 1299000, 0, 7794000, 7794000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(130, 46, 5, 1, 1885180, 2299000, 0, 2299000, 2299000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(131, 46, 20, 9, 491179, 599000, 0, 5391000, 5391000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(132, 46, 27, 4, 573180, 699000, 0, 2796000, 2796000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(133, 46, 39, 2, 327180, 399000, 0, 798000, 798000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(134, 47, 9, 5, 5985180, 7299000, 1654, 36493346, 36495000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(135, 47, 23, 6, 245179, 299000, 0, 1794000, 1794000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(136, 47, 34, 2, 1557180, 1899000, 0, 3798000, 3798000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(137, 47, 36, 6, 286180, 349000, 0, 2094000, 2094000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(138, 48, 3, 7, 1803180, 2199000, 0, 15393000, 15393000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(139, 48, 11, 5, 6559180, 7999000, 584, 39994416, 39995000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(140, 48, 24, 3, 1639180, 1999000, 0, 5997000, 5997000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(141, 48, 32, 1, 614180, 749000, 1542, 747458, 749000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(142, 49, 17, 10, 5329180, 6499000, 0, 64990000, 64990000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(143, 49, 24, 1, 1639180, 1999000, 226, 1998774, 1999000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(144, 49, 25, 6, 737180, 899000, 721, 5393279, 5394000, '2026-07-23 05:11:27', '2026-07-23 05:11:27'),
(145, 50, 29, 4, 409180, 499000, 117, 1995883, 1996000, '2026-07-23 05:11:27', '2026-07-23 05:11:27');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('iqWm1nXcjX2zLJeOpeLqq2cKmwDsssMO1EK56NsY', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', 'YTo2OntzOjY6Il90b2tlbiI7czo0MDoiMW14M1RXcVJ2dFZKMWxQYmZWdmF0U2xtdXZaTFFzVXUydVZWcEQxeSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MzE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdXNlcnMiO3M6NToicm91dGUiO3M6MTE6InVzZXJzLmluZGV4Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czozOiJ1cmwiO2E6MTp7czo4OiJpbnRlbmRlZCI7czoyMToiaHR0cDovLzEyNy4wLjAuMTo4MDAwIjt9czoyMjoiUEhQREVCVUdCQVJfU1RBQ0tfREFUQSI7YTowOnt9czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTt9', 1784812866);

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `key` varchar(255) NOT NULL,
  `value` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`key`, `value`, `created_at`, `updated_at`) VALUES
('currency_decimal_separator', ',', '2026-07-23 05:11:28', '2026-07-23 05:11:28'),
('currency_fraction_digits', '0', '2026-07-23 05:11:28', '2026-07-23 05:11:28'),
('currency_position', 'left', '2026-07-23 05:11:28', '2026-07-23 05:11:28'),
('currency_symbol', 'Rp', '2026-07-23 05:11:28', '2026-07-23 05:11:28'),
('currency_thousand_separator', '.', '2026-07-23 05:11:28', '2026-07-23 05:11:28'),
('opening_balance_amount', '25000000', '2026-07-23 05:11:28', '2026-07-23 05:11:28'),
('opening_balance_date', '2026-01-01', '2026-07-23 05:11:28', '2026-07-23 05:11:28'),
('store_address', 'Blk6 Lot34 NorthVille8 Bangkal, Malolos, Bulacan', '2026-07-23 05:11:28', '2026-07-23 05:11:28'),
('store_name', 'GadgetPro Store Kaizen', '2026-07-23 05:11:28', '2026-07-23 05:11:28'),
('store_phone', '09709399526', '2026-07-23 05:11:28', '2026-07-23 05:11:28');

-- --------------------------------------------------------

--
-- Table structure for table `suppliers`
--

CREATE TABLE `suppliers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `contact_person` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `suppliers`
--

INSERT INTO `suppliers` (`id`, `name`, `contact_person`, `email`, `phone`, `address`, `notes`, `created_at`, `updated_at`) VALUES
(1, 'Pacific Rim Auto Parts Corp.', 'Gerardo Salazar', 'gerardo@pacificrimauto.ph', '028220001', 'FTI Complex, Taguig City', 'Main supplier for truck engine parts', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(2, 'Ironclad Fastener Trading', 'Melissa Cardona', 'melissa@ironcladfastener.ph', '028220002', 'Valenzuela Industrial Park, Valenzuela City', 'Bolts, nuts, and fastener supply', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(3, 'MetroDrive Distributors Inc.', 'Ramon Buenaventura', 'ramon@metrodrive.ph', '028220003', 'EDSA Extension, Pasay City', 'Authorized distributor for tire brands', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(4, 'Circuitworks Technology Corp.', 'Katrina Villaflor', 'katrina@circuitworks.ph', '028220004', 'Carmona Industrial Estate, Cavite', 'Sensors and onboard electronics', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(5, 'Bulacan Spareparts Trading', 'Arnel Tolentino', 'arnel@bulacanspareparts.ph', '028220005', 'MacArthur Hwy, Guiguinto, Bulacan', 'General spare parts, wholesale pricing', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(6, 'GadgetHub Distribution Corp.', 'Michelle Ramirez', 'michelle@gadgethub.ph', '028220006', 'Ortigas Ave., Pasig City', 'Latest fleet accessories and devices', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(7, 'ChipTech Solutions Inc.', 'Oliver Mendiola', 'oliver@chiptechsolutions.ph', '028220007', 'Light Industry and Science Park, Cabuyao, Laguna', 'SMD components and control units', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(8, 'Cable & Connector Traders', 'Precious Aguilar', 'precious@cableconnector.ph', '028220008', 'A. Bonifacio Ave., Caloocan City', 'Wiring harnesses, connectors, adapters', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(9, 'Vantage Industrial Supply Corp.', 'Julius Bermudez', 'julius@vantageindustrial.ph', '028220009', 'Sta. Rosa-Tagaytay Rd., Sta. Rosa, Laguna', 'Tools and workshop equipment', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(10, 'Precision Instruments Corp.', 'Angelica Roque', 'angelica@precisioninstruments.ph', '028220010', 'Timog Ave., Quezon City', 'Measuring and diagnostic equipment', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(11, 'Redline Component Traders', 'Samuel Enriquez', 'samuel@redlinecomponent.ph', '028220011', 'Sucat Rd., Muntinlupa City', 'Dashboards, panels, batteries', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(12, 'Northline Supply Corp.', 'Teresa Marasigan', 'teresa@northlinesupply.ph', '028220012', 'Congressional Ave., Quezon City', 'Packaging and branded merchandise', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(13, 'Steadfast Truck Parts Corp.', 'Christian Navarro', 'christian@steadfasttruckparts.ph', '028220013', 'General Trias Industrial Complex, Cavite', 'Chassis and drivetrain parts', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(14, 'Voltmax Electronics Trading', 'Sheryl Aranda', 'sheryl@voltmaxelectronics.ph', '028220014', 'Shaw Blvd., Mandaluyong City', 'Alternators and power supply units', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(15, 'Summit Component Corp.', 'Patrick Ignacio', 'patrick@summitcomponent.ph', '028220015', 'Marilao Industrial Estate, Bulacan', 'Resistors, relays, wiring modules', '2026-07-23 05:11:26', '2026-07-23 05:11:26');

-- --------------------------------------------------------

--
-- Table structure for table `units`
--

CREATE TABLE `units` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `symbol` varchar(10) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `units`
--

INSERT INTO `units` (`id`, `name`, `symbol`, `created_at`, `updated_at`) VALUES
(1, 'Piece', 'pc', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(2, 'Box', 'box', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(3, 'Set', 'set', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(4, 'Pack', 'pack', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(5, 'Roll', 'roll', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(6, 'Meter', 'm', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(7, 'Kilogram', 'kg', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(8, 'Liter', 'ltr', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(9, 'Unit', 'unit', '2026-07-23 05:11:26', '2026-07-23 05:11:26'),
(10, 'Bundle', 'bnd', '2026-07-23 05:11:26', '2026-07-23 05:11:26');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Justine M Hilario', 'rizky', 'justinemhilario@demo.com', '2026-07-23 05:11:25', '$2y$12$3pY/rzERVyDGmYEqM8Sfd.TWxwtp0qcc2N5xq/OaG/NF1VJzmpd1W', NULL, '2026-07-23 05:11:25', '2026-07-23 05:11:25'),
(2, 'Sophia Bennett', 'sophia', 'sophia@demo.com', '2026-07-23 05:11:25', '$2y$12$GZ4G2W36NjV148y6yxv5neC3qipE6oze0omx50cjbyXhvl1nN8MpC', NULL, '2026-07-23 05:11:25', '2026-07-23 05:11:25'),
(3, 'James Carter', 'james', 'james@demo.com', '2026-07-23 05:11:25', '$2y$12$kY9T5otECqAbeskUrwqq/.s2u61Z3kztW0hk4tfPSYizdpfQfzE5u', NULL, '2026-07-23 05:11:26', '2026-07-23 05:11:26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `active_statuses`
--
ALTER TABLE `active_statuses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `active_statuses_module_status_id_unique` (`module`,`status_id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_slug_unique` (`slug`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customers_name_index` (`name`),
  ADD KEY `customers_email_index` (`email`),
  ADD KEY `customers_phone_index` (`phone`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `finance_categories`
--
ALTER TABLE `finance_categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `finance_categories_slug_unique` (`slug`);

--
-- Indexes for table `finance_transactions`
--
ALTER TABLE `finance_transactions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `finance_transactions_code_unique` (`code`),
  ADD KEY `finance_transactions_finance_category_id_foreign` (`finance_category_id`),
  ADD KEY `finance_transactions_created_by_foreign` (`created_by`),
  ADD KEY `finance_transactions_reference_type_reference_id_index` (`reference_type`,`reference_id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `products_sku_unique` (`sku`),
  ADD KEY `products_category_id_foreign` (`category_id`),
  ADD KEY `products_unit_id_foreign` (`unit_id`),
  ADD KEY `products_name_index` (`name`);

--
-- Indexes for table `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `purchases_invoice_number_unique` (`invoice_number`),
  ADD KEY `purchases_supplier_id_foreign` (`supplier_id`),
  ADD KEY `purchases_created_by_foreign` (`created_by`),
  ADD KEY `purchases_purchase_date_index` (`purchase_date`),
  ADD KEY `purchases_status_index` (`status`);

--
-- Indexes for table `purchase_items`
--
ALTER TABLE `purchase_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `purchase_items_product_id_foreign` (`product_id`),
  ADD KEY `purchase_items_purchase_id_product_id_index` (`purchase_id`,`product_id`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sales_invoice_number_unique` (`invoice_number`),
  ADD KEY `sales_customer_id_foreign` (`customer_id`),
  ADD KEY `sales_created_by_foreign` (`created_by`),
  ADD KEY `sales_sale_date_index` (`sale_date`),
  ADD KEY `sales_status_index` (`status`);

--
-- Indexes for table `sale_items`
--
ALTER TABLE `sale_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sale_items_sale_id_foreign` (`sale_id`),
  ADD KEY `sale_items_product_id_foreign` (`product_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `suppliers`
--
ALTER TABLE `suppliers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `suppliers_name_index` (`name`),
  ADD KEY `suppliers_contact_person_index` (`contact_person`),
  ADD KEY `suppliers_email_index` (`email`),
  ADD KEY `suppliers_phone_index` (`phone`);

--
-- Indexes for table `units`
--
ALTER TABLE `units`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `units_name_unique` (`name`),
  ADD UNIQUE KEY `units_symbol_unique` (`symbol`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `active_statuses`
--
ALTER TABLE `active_statuses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `finance_categories`
--
ALTER TABLE `finance_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `finance_transactions`
--
ALTER TABLE `finance_transactions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=165;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `purchases`
--
ALTER TABLE `purchases`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `purchase_items`
--
ALTER TABLE `purchase_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=158;

--
-- AUTO_INCREMENT for table `sales`
--
ALTER TABLE `sales`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `sale_items`
--
ALTER TABLE `sale_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=146;

--
-- AUTO_INCREMENT for table `suppliers`
--
ALTER TABLE `suppliers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `units`
--
ALTER TABLE `units`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `finance_transactions`
--
ALTER TABLE `finance_transactions`
  ADD CONSTRAINT `finance_transactions_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `finance_transactions_finance_category_id_foreign` FOREIGN KEY (`finance_category_id`) REFERENCES `finance_categories` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `products_unit_id_foreign` FOREIGN KEY (`unit_id`) REFERENCES `units` (`id`);

--
-- Constraints for table `purchases`
--
ALTER TABLE `purchases`
  ADD CONSTRAINT `purchases_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `purchases_supplier_id_foreign` FOREIGN KEY (`supplier_id`) REFERENCES `suppliers` (`id`);

--
-- Constraints for table `purchase_items`
--
ALTER TABLE `purchase_items`
  ADD CONSTRAINT `purchase_items_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `purchase_items_purchase_id_foreign` FOREIGN KEY (`purchase_id`) REFERENCES `purchases` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `sales_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `sales_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`);

--
-- Constraints for table `sale_items`
--
ALTER TABLE `sale_items`
  ADD CONSTRAINT `sale_items_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `sale_items_sale_id_foreign` FOREIGN KEY (`sale_id`) REFERENCES `sales` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
