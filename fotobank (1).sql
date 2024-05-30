-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 24 2024 г., 18:32
-- Версия сервера: 8.0.19
-- Версия PHP: 7.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `fotobank`
--

-- --------------------------------------------------------

--
-- Структура таблицы `avatar`
--

CREATE TABLE `avatar` (
  `id` int NOT NULL,
  `iduser` int NOT NULL,
  `img` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `avatar`
--

INSERT INTO `avatar` (`id`, `iduser`, `img`) VALUES
(3, 112, '2024-05-19T21-16-17.521Z-Ð¡Ð½Ð¸Ð¼Ð¾Ðº ÑÐºÑÐ°Ð½Ð° 2024-05-16 094949.jpg'),
(4, 134, '2024-05-20T05-54-28.783Z-Ð¡Ð½Ð¸Ð¼Ð¾Ðº ÑÐºÑÐ°Ð½Ð° 2024-05-16 094949.jpg');

-- --------------------------------------------------------

--
-- Структура таблицы `cart`
--

CREATE TABLE `cart` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `img_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `img`
--

CREATE TABLE `img` (
  `id` int NOT NULL,
  `idu` int NOT NULL,
  `img` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `widthFoto` int NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `heightFoto` int NOT NULL,
  `tagOne` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `tagTwo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `tagThree` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `customFile1` int DEFAULT NULL,
  `customFile2` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `img`
--

INSERT INTO `img` (`id`, `idu`, `img`, `title`, `widthFoto`, `description`, `heightFoto`, `tagOne`, `tagTwo`, `tagThree`, `customFile1`, `customFile2`) VALUES
(20, 112, '2024-05-18T16-14-13.974Z-2021-10-06_16-51-32.png', 'fffffff', 77, 'ffffffffffffff', 77, 'ffffffff', 'ffffff', 'животные', NULL, NULL),
(21, 112, '2024-05-18T16-19-23.208Z-0909b5b0-9322-4b63-96ba-279afdf64582.jpg', 'hhhhhhhhhh', 78, 'ffffffffff', 78, 'животное', 'fff', 'fff', NULL, NULL),
(22, 86, '2024-05-18T16-21-34.689Z-2021-10-06_18-44-52.png', 'ccccccccc', 131, 'ccccccccc', 131, 'еда', 'ccc', 'ccc', NULL, NULL),
(23, 134, '2024-05-20T05-56-26.757Z-2021-10-06_18-44-52.png', 'Макет', 30, 'Макеты для сайта в стиле минимализма ', 40, 'минимум', 'красота', 'оригинальность', NULL, NULL),
(24, 134, '2024-05-20T07-49-09.395Z-DSC_8056.JPG', 'Сквер', 36, 'Прогулка по лесу', 56, 'люди', 'женщина', 'аааа', NULL, NULL),
(26, 134, '2024-05-20T08-27-24.156Z-1701986194_sportishka-com-p-fon-vechernii-gorod-oboi-14.jpg', 'вечерний город', 56, 'города вечером', 45, 'город', 'город', 'ввввв', NULL, NULL),
(27, 134, '2024-05-20T08-34-02.508Z-3.jpg', 'эстетика', 78, 'завораживающая взгляд картина ', 63, 'эстетика', 'маникен', 'ветки', NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `orders`
--

CREATE TABLE `orders` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `img_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `img_id`) VALUES
(1, 139, 20),
(2, 139, 21),
(3, 139, 26),
(4, 139, 20),
(5, 139, 23),
(7, 139, 21);

-- --------------------------------------------------------

--
-- Структура таблицы `portvolio`
--

CREATE TABLE `portvolio` (
  `id` int NOT NULL,
  `iduser` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `fulname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `number` bigint NOT NULL,
  `sity` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `print` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `link` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `portvolio`
--

INSERT INTO `portvolio` (`id`, `iduser`, `name`, `fulname`, `number`, `sity`, `print`, `link`) VALUES
(13, 112, 'Мария', 'asgrhtdjhsgsjdjh', 12345678912, 'dddd', '', 'ccccccccccc'),
(14, 134, 'Полина', 'Баташева', 12345678912, 'ижевск', 'не была фотограыом ', 'https://vk.com/im?sel=89171104');

-- --------------------------------------------------------

--
-- Структура таблицы `sessions`
--

CREATE TABLE `sessions` (
  `id` int NOT NULL,
  `userId` int NOT NULL,
  `sessionId` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `sessions`
--

INSERT INTO `sessions` (`id`, `userId`, `sessionId`, `created_at`) VALUES
(1, 91, '0cc1065f-f455-4d20-876f-4439a9170561', '2024-05-15 14:54:25'),
(2, 91, 'e25e806c-79f3-4b0d-a54a-1cc3c963964d', '2024-05-15 14:55:11'),
(3, 91, '8ad4ec3d-97bc-480f-b6d5-f8371c9ad458', '2024-05-15 14:55:49'),
(4, 91, '1baf98cf-ca2a-4543-a184-318f61ee2170', '2024-05-15 15:20:27'),
(5, 91, 'e9f62118-a352-4a1c-9f6b-1eb3fa6a0b6b', '2024-05-15 15:21:24'),
(6, 96, '5cf44bd7-f7e5-4b42-b7b7-1cea5090a86e', '2024-05-15 15:30:00'),
(7, 96, '2f86c5bf-04c9-4f26-a578-bd7dcd98d490', '2024-05-15 15:31:04'),
(8, 96, 'f59f43a6-9e00-4ada-a3d1-ee4ccc35e95c', '2024-05-15 15:31:27'),
(9, 96, '540d464d-4a00-457d-ac86-8151ea47f3d7', '2024-05-15 15:31:29'),
(10, 96, '9144b3e1-f627-4c1d-a9e5-f2ff19c6896d', '2024-05-15 15:32:00'),
(11, 96, '5139095c-4d16-43fb-9cd7-e71d21934a65', '2024-05-15 15:34:10'),
(12, 96, 'f5335c0a-af5a-41c5-8248-6ef7b004060c', '2024-05-15 15:35:06'),
(13, 96, 'ca10768c-d9a6-4ee7-96e1-d29a1bc811bb', '2024-05-15 15:35:39'),
(14, 96, 'e8b85079-3d0e-4e6b-b3bf-24ab9ee12562', '2024-05-15 15:36:25'),
(15, 96, '5de3c72d-081b-4404-a4f1-bed03ba17a4d', '2024-05-15 15:36:28'),
(16, 96, '405c8916-0606-483a-b417-89773ef09efc', '2024-05-15 15:36:29'),
(17, 96, '923cdc1e-4af5-48db-a016-47cbf7c83afb', '2024-05-15 15:36:57'),
(18, 96, 'e4e7c2b9-d840-43c4-8c94-29844ae0e514', '2024-05-15 15:37:55'),
(19, 96, 'fa63cd06-bc7d-430f-a0e3-845122c51f43', '2024-05-15 15:39:20'),
(20, 96, 'b4f7118c-c8fd-42b1-97f7-900079489518', '2024-05-15 15:43:13'),
(21, 96, '72562133-3d2c-49ef-a203-4781febab2f1', '2024-05-15 15:44:28'),
(22, 96, '64b5a63e-45e1-4bfd-bf6a-10a501d31334', '2024-05-15 15:44:56'),
(23, 96, 'e3782acc-c251-4e95-8253-f7b371755226', '2024-05-15 15:49:26'),
(24, 96, '7ade96cb-c980-4103-ae66-b1dedfbc88a1', '2024-05-15 15:59:04'),
(25, 96, '7aa140d3-c397-49fc-a0bd-4f3733611cb1', '2024-05-15 15:59:36'),
(26, 96, '2408cb76-2d8d-4183-99de-4d2472dcd180', '2024-05-15 15:59:39'),
(27, 96, '4a5dbf4e-8a36-411e-96f8-1db7b6f5e5f8', '2024-05-15 15:59:40'),
(28, 96, '9f1c7b9a-f193-4088-9d04-6119ab110b94', '2024-05-15 15:59:41'),
(29, 96, '908f1b24-bac5-405d-9854-80d34e7d2e99', '2024-05-15 16:00:19'),
(30, 96, '75d2a6e5-d10e-45b6-8533-327a6ff08787', '2024-05-15 16:00:19'),
(31, 96, '18b72ffa-8285-4a8c-98c0-767efdc90c6f', '2024-05-15 16:00:19'),
(32, 96, '2b4e18e9-15ac-437c-a289-34e648e11de3', '2024-05-15 16:00:19'),
(33, 96, 'edc6fb5f-5e05-4bf3-995f-e2478a9fa0db', '2024-05-15 16:00:20'),
(34, 96, '849c524c-e207-40c3-b633-48b9ddf5eb87', '2024-05-15 16:00:20'),
(35, 96, '6dc8c053-7b5f-4888-80fc-026affa8aff9', '2024-05-15 16:00:21'),
(36, 96, '0a1efa1e-99f6-4e12-9fd2-2e8ebfcd125d', '2024-05-15 16:00:21'),
(37, 96, 'd334065c-8465-44b9-9d01-394e908fe16d', '2024-05-15 16:00:49'),
(38, 96, 'f0a6614d-4b53-4d5e-933e-9110e22edff6', '2024-05-15 16:01:07'),
(39, 96, '566a2116-7b9d-48aa-b489-154c7943f84f', '2024-05-15 16:01:08'),
(40, 96, '81a51f28-f03b-4466-a7d5-78a0f18ac7a4', '2024-05-15 16:01:19'),
(41, 96, '16e55650-dc06-459f-b490-2de0799181c1', '2024-05-15 16:01:20'),
(42, 96, '9a5c6843-7c75-4481-9932-40e2dfeef69c', '2024-05-15 16:01:22'),
(43, 96, 'b2cdcd48-3538-4271-8190-5fbf212de8ac', '2024-05-15 16:02:43'),
(44, 96, 'e591b2f0-9e94-416e-8721-599f3a2d0549', '2024-05-15 16:02:46'),
(45, 96, '23d24ae8-4b4a-49e0-b6f9-90cb263b8843', '2024-05-15 16:02:47'),
(46, 96, '7354d10c-517a-448f-8251-996bcfe9c59a', '2024-05-15 16:02:47'),
(47, 96, '54f5d7ef-a093-4cb5-8f80-d95332a23318', '2024-05-15 16:02:47'),
(48, 96, 'eed62ca6-d4a1-4252-99a3-22726858a320', '2024-05-15 16:02:47'),
(49, 96, 'fa6ec8e2-7c1c-4f09-a061-c307eef81440', '2024-05-15 16:02:48'),
(50, 96, 'd3ab5588-b8b2-4c4d-ba81-35b5494687b7', '2024-05-15 16:02:48'),
(51, 96, '485935b2-dd4e-4abd-b8a9-3f205516e6f6', '2024-05-15 16:02:59'),
(52, 96, 'b9ca86ef-5171-46f2-87fe-c6da47865109', '2024-05-15 16:03:01'),
(53, 96, '59c5c883-d901-4874-99c7-2799ef38a011', '2024-05-15 16:04:19'),
(54, 89, 'fa55eca2-b9e3-46f0-9284-82189a7a6a4e', '2024-05-15 19:37:31'),
(55, 98, '68c6ddcf-97e2-4868-81a4-c88b82e37b52', '2024-05-15 19:43:11'),
(56, 110, '23a68674-7d8b-4251-a8d0-c5e9a168f9df', '2024-05-15 21:02:18'),
(57, 110, 'c106f609-e7f4-4a56-a137-509d8f0c3c2f', '2024-05-15 21:16:12'),
(58, 110, '8fc2a6f7-73d2-426d-ab67-bcb0d9603a46', '2024-05-15 21:16:44'),
(59, 112, 'c4b59a54-94d2-43a2-af27-02fda843e83a', '2024-05-15 21:18:15'),
(60, 113, 'd72ebf5c-2b30-4b6e-a377-15597b671ef8', '2024-05-15 21:40:39'),
(61, 112, 'c0b0da43-9cf0-47dd-8337-1452f13b3236', '2024-05-15 21:41:57'),
(62, 112, '6914c1b1-ae9c-4145-816a-02e846c15b8f', '2024-05-15 22:40:38'),
(63, 112, '4d7ec5a9-acc5-4937-8e39-982ca2d802f3', '2024-05-16 07:42:36'),
(64, 128, '1465c77e-b13a-4fde-8143-06c014d2851b', '2024-05-20 05:33:34'),
(65, 128, '3d0ffc30-061a-40be-aa8d-60a03a195f7d', '2024-05-20 05:34:18'),
(66, 130, 'fc0e7cb9-e12c-4e68-86b6-7fa8f36b4f6d', '2024-05-20 05:43:11'),
(67, 132, 'bda64c37-11cb-4543-a880-e1b04f948fc0', '2024-05-20 05:50:57'),
(68, 134, '19039f72-2134-418a-9598-c5d75503d910', '2024-05-20 05:53:37'),
(69, 113, '4d301a3f-4e80-4ac1-a006-211706220e58', '2024-05-20 18:17:36'),
(70, 113, '520542c6-e182-446b-90c8-ea1745d33352', '2024-05-20 18:18:12'),
(71, 113, 'f67e7be6-470f-40d4-bc19-7602094e816b', '2024-05-20 18:18:36'),
(72, 113, 'ac7119c2-38c7-46ab-a49e-fecad45848be', '2024-05-20 18:19:00'),
(73, 113, '725709c4-5afe-46e2-acf1-cbb902440544', '2024-05-20 18:19:47'),
(74, 113, '415cb611-028e-49a4-b825-2bbb52eab1ed', '2024-05-20 18:21:43'),
(75, 135, 'fd3ff292-4b20-432f-9c1f-25e6522f7aea', '2024-05-20 18:22:57'),
(76, 136, 'cd3b4adc-1b47-40d0-8103-0465e01c05a8', '2024-05-20 19:50:00'),
(77, 136, '50e50cd2-a1fb-4712-91f9-4cf04f2c3e53', '2024-05-20 19:50:10'),
(78, 136, '5b339f12-792e-4166-b37c-a0feee5c7293', '2024-05-20 19:50:43'),
(79, 136, '3206b3db-5a9c-4817-972c-e13b81dfb700', '2024-05-20 19:51:14'),
(80, 136, '9f414a13-6aa0-4afb-bb02-11bdb2ecfa9e', '2024-05-20 19:51:16'),
(81, 136, '13df0c57-1895-43ba-9320-59162361f1eb', '2024-05-20 19:51:55'),
(82, 136, 'd6ebcdf5-3adc-48c7-b0ca-96adc289a3bc', '2024-05-20 19:52:49'),
(83, 136, '92b0a9fc-c3e7-4347-bd6e-fa19badb7d53', '2024-05-20 19:52:58'),
(84, 136, 'f5c0202a-55f2-4cb3-9f43-cd0b76f1ba35', '2024-05-20 19:53:03'),
(85, 136, '4d9ef24d-251e-45ce-8195-33d878611b63', '2024-05-20 19:53:13'),
(86, 136, '0f1ec562-32b6-491c-a6b7-55f2fab00c39', '2024-05-23 17:46:22'),
(87, 136, '2026af13-ca8e-4dd5-8624-ae1bdc4db72c', '2024-05-23 17:47:04'),
(88, 136, '7065fa3f-e6e2-44c1-aadf-55aebe5842f1', '2024-05-23 17:47:07'),
(89, 136, '254d016b-c442-4e69-b401-c1308dba271a', '2024-05-23 17:47:21'),
(90, 136, '64790818-344f-45bf-97ad-f1527bde731f', '2024-05-23 17:47:28'),
(91, 136, 'b66c1db5-1a84-40e1-b3e6-b6344cc29d89', '2024-05-23 17:47:33'),
(92, 136, '98ea438f-ae63-4f1a-ba9b-ce81af5b1250', '2024-05-23 17:47:39'),
(93, 136, '45a57c0d-a7d4-443f-84ca-b537e1a885e3', '2024-05-23 17:47:44'),
(94, 136, '20dda5be-7be5-4956-8718-158de3c7bd70', '2024-05-23 17:48:01'),
(95, 136, 'd6d1ed3a-ac2f-4b15-85aa-841f6ca705fe', '2024-05-23 18:24:18'),
(96, 136, 'a92f5e72-f8a9-41d2-8db9-09fcdaf2ef34', '2024-05-23 18:24:51'),
(97, 139, 'edf0e7da-5625-47e1-b697-fd2e50488625', '2024-05-23 18:32:24'),
(98, 139, 'd85ab92b-804b-4788-8f9b-e05a36c2064c', '2024-05-23 18:32:26'),
(99, 139, '3b13b788-6b14-4fcd-a85d-67bdf9142009', '2024-05-23 18:32:37'),
(100, 139, 'e61eadd0-2611-469a-bb8e-5aece0af9756', '2024-05-23 18:33:01'),
(101, 139, '63bbc8c3-37ad-44b9-9fed-8e73384308e6', '2024-05-23 18:33:19'),
(102, 139, '58ff32d0-9bf5-48a9-9c3b-c139a6e5ec66', '2024-05-23 18:33:24'),
(103, 139, '3e625d0d-07cc-44c4-979b-a8e95bcbfa9a', '2024-05-23 18:33:46'),
(104, 139, 'b1159238-3eab-4827-a6b1-002090b9f73a', '2024-05-23 18:34:59'),
(105, 139, '700de1b0-7f92-4b63-b7b5-16cc20cd38fb', '2024-05-23 18:35:39'),
(106, 139, '19f9fbc5-e7b8-45df-8611-cbfa2c15a702', '2024-05-23 18:35:56'),
(107, 139, 'dca718e2-aaa3-41a4-bfe8-409dc162cad2', '2024-05-23 18:36:36'),
(108, 139, '6d1519a5-7a23-47e6-948c-0b58215fb053', '2024-05-23 18:36:38'),
(109, 139, 'abc81b0b-3a1a-4678-abec-d9a412630f34', '2024-05-23 18:36:50'),
(110, 139, '5340d911-1f49-4e58-b176-4fef69506544', '2024-05-23 18:37:13'),
(111, 139, '25b5b829-1691-47a7-b379-95cef546abfd', '2024-05-23 18:37:27'),
(112, 139, 'a1502ca2-e65d-4303-a252-e060bfe5dde6', '2024-05-23 18:37:28'),
(113, 139, 'b9ee9d5e-7c23-4d17-ab95-61001912b644', '2024-05-23 18:37:34'),
(114, 139, '7435a83d-25fb-4fd1-a221-c54d1275c221', '2024-05-23 18:38:00'),
(115, 139, 'f521a8ed-3995-43f1-96dc-5508097adecd', '2024-05-23 18:39:00'),
(116, 139, 'feabd75c-111d-4bd9-b7a9-732cb7c27baf', '2024-05-23 18:39:01'),
(117, 139, 'c5c4a317-f8f0-4348-b08c-2f4f373ca735', '2024-05-24 14:04:54'),
(118, 139, 'aa4a230c-d515-4d67-ab15-90a6d44c9240', '2024-05-24 15:05:05'),
(119, 139, '5342f2a9-08eb-436f-8de3-7fbbbe95adf8', '2024-05-24 15:05:06');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `fulname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `number` bigint NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(10000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `selectetForm` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `sity` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `print` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `customForm4` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `fulname`, `number`, `email`, `password`, `selectetForm`, `sity`, `print`, `customForm4`) VALUES
(1, 'привет', 'привет', 111, 'вкеанпгршор', 'апролдолрпа', 'орпариотл', NULL, NULL, NULL),
(2, 'привет', 'привет', 111, 'вкеанпгршор', 'апролдолрпа', 'орпариотл', NULL, NULL, NULL),
(51, 'textarea-320', 'asgrhtdjhsgsjdjh', 12345678912, '200904@mail.ru', '$2a$10$DxnjksB65CrFCfyLLoevoumh3.MR0ej.84LxEbHz0v16pGLLaYFca', 'polzovatel', '', '', NULL),
(52, 'textarea-320', 'asgrhtdjhsgsjdjh', 12345678912, '200904@mail.ru', '$2a$10$3Haz8F.BKiKc2KEeDqj/ZOXn1MQvIpWbZUSNHEthFkznXoRl46gVS', 'polzovatel', '', '', NULL),
(53, 'Мария', 'asgrhtdjhsgsjdjh', 12345678912, '200904@mail.ru', '$2a$10$BcAGJuO67Vs/EF2bW9nojO5tZj4lXBq/3qg6xlJ3PXOz1zc3ltUoy', 'polzovatel', '', '', NULL),
(83, 'Мария', 'мпори', 12345678912, '200904@mail.ru', '$2a$10$70YsmOi5a1wq3At.GMW4nuEFJTIZ0tPI2FQ0sm6JBXYN0PDMHrNau', 'polzovatel', '', '', NULL),
(84, 'Мария', 'мпори', 12345678912, '200904@mail.ru', '$2a$10$NtJTtPuHiLVY4D7tjYh8DuKsUtrZgr7Izo2IrAL2koOXRFGZXKhru', 'fotograf', 'неркп', 'цукн5н', NULL),
(85, 'textarea-320', 'asgrhtdjhsgsjdjh', 12345678912, '478@mail.ru', '$2a$10$ebJc4vekMKuxzA9NPean2.t6q20Gt2gmLXi6vaa7v2xX6BshRslAi', 'polzovatel', '', '', NULL),
(86, 'Мария', 'asgrhtdjhsgsjdjh', 12345678912, '200904@mail.ruasdsadasd', '$2a$10$nd3MqN.h8bh31/tIYf4PYez//ZIpIudKZ1lG5RON5vmPlKTDYYrKq', 'polzovatel', '', '', NULL),
(87, 'Мария', 'asgrhtdjhsgsjdjh', 12345678912, '200904@mail.ruasdsadasd', '$2a$10$LFpcl0GFyGZdZxzZdmz7R.ay6V8uAabqX7Hh6O.Essx9NrdeL9P1a', 'fotograf', '', '', NULL),
(88, 'Страница курсов', 'asgrhtdjhsgsjdjh', 12345678912, '789@mail.ru', '$2a$10$wdT4sIBNslvGeCiFJzJXyOT5yTLfT2IGceiLpf82ZneH03fW8ff6q', 'fotograf', '', '', NULL),
(89, 'Полина', 'asgrhtdjhsgsjdjh', 12345678912, '456123@mail.ru', '$2a$10$7OflzPMGKSv3oJmgMwa1UOP08NQX/uB1.SSIDm.s0rRD5fkzgKuQi', 'fotograf', 'dfdfdf', 'dfdfdf', NULL),
(90, 'Мария', 'asgrhtdjhsgsjdjh', 12345678912, '200904@mail.ru', '$2a$10$aXCpU3w9eIJ8ND9zMvRRN.6jzN9v3EgTAsHdsJck0Bso.CTB7Zh1m', 'fotograf', 'rrrrrhhhhh', '', NULL),
(91, 'Мария', 'мпори', 12345678912, 'ivan@example.ru', '$2a$10$yy6sD2KTNmo5hVEI3mgKIekok01IAtCoeuM8LBDTgGJwR8zObUSZu', 'polzovatel', '', '', NULL),
(92, 'Мария', 'мпори', 12345678912, 'ivan@example.ru', '$2a$10$EsNrR5TABn/tGVS/TzCPS.0dhs9grjUMXo/9EKMpiE.WH5mqAIhXC', 'polzovatel', '', '', NULL),
(93, 'Мария', 'мпори', 12345678912, 'ivan@example.ru', '$2a$10$fNooJizuihodUkBXwrKhp.9efLAsSUASJgNxEeeyUAQV08/nFJ.Om', 'polzovatel', '', '', NULL),
(94, 'Мария', 'мпори', 12345678912, 'ivan@example.ru', '$2a$10$8W954V5oe.LTyE91OqCSK.0pi.Eg6AxiSpsagUJzsWtFv39DS5tbi', 'polzovatel', '', '', NULL),
(95, 'Мария', 'мпори', 12345678912, 'ivan@example.ru', '$2a$10$H7rE2GHqED56LfmC3dQOjOlMdVqJsCq8NUsbDs0QnpwUxbPaWX6DK', 'polzovatel', '', '', NULL),
(96, 'sdsdfs', 'sdfdsfsdf', 344343433434, 'test@test.ru', '$2a$10$ezmPNaSv3P3V1JFxqgtjLulu5ReKsF18lz2eA4bFoEnNi97ksac7m', 'fotograf', '', '', NULL),
(97, 'sdsdfs', 'sdfdsfsdf', 344343433434, 'test@test.ru', '$2a$10$2zwJkvu56WACkdZjHbhH/uPkS4TBg4eiOAG/JjOSHROxCLf9E/xQq', 'polzovatel', '', '', NULL),
(98, 'Мария', 'asgrhtdjhsgsjdjh', 12345678912, '1023@mail.ru', '$2a$10$Jvl1OCKP9isDFkNc4pzakOaCZ.jXwL96nOfYKwM/QzMmO9kK4NQAa', 'polzovatel', '', '', NULL),
(99, 'Мария', 'asgrhtdjhsgsjdjh', 12345678912, '200904@mail.ru', '$2a$10$wS03Z6pqzshyJvx2hkVvZ.sA.mSCPGPDI4Mb4tmMGvjpokk9OPAfm', 'polzovatel', '', '', NULL),
(100, 'Страница курсов', 'sdfsdfsdf', 12345678912, '404@mail.ru', '$2a$10$JxaC/fi6T7eovpnVblLekeN9gTQtQgaGpqBZ.ObPWAiASMM6/Ldaq', 'polzovatel', '', '', NULL),
(101, 'Мария', 'asgrhtdjhsgsjdjh', 12345678912, '404@mail.ru', '$2a$10$iyRxHeQe.Qbvr8vs877f5OUKYSFpUiRVoLofoPYd9KiGAcsiVD3ju', 'polzovatel', '', '', NULL),
(102, 'Мария', 'asgrhtdjhsgsjdjh', 12345678912, '404@mail.ru', '$2a$10$OhRTh39wtQ7R1IPGjmxdwutTIpNDVY77y9aarzujW3Pu.s6JP73.u', 'polzovatel', '', '', NULL),
(103, 'Мария', 'asgrhtdjhsgsjdjh', 12345678912, '404@mail.ru', '$2a$10$vubxV/35Wkhlmf4R4lVZtuzo4DvJk7YZd6vopmvm9KJuWDOKC1QP2', 'polzovatel', '', '', NULL),
(104, 'Мария', 'asgrhtdjhsgsjdjh', 12345678912, '200@mail.ru', '$2a$10$QTdpA9MzKnHYEaZ0UDlFtOZF5/usttDgcKBKc3RyGtm3JLcoGgZBS', 'polzovatel', '', '', NULL),
(105, 'Мария', 'asgrhtdjhsgsjdjh', 12345678912, '200@mail.ru', '$2a$10$gtOaj3toAMCN3T122s0HZeV8yVQOdXIHyy/UxcSoBj4n6Leago.VK', 'polzovatel', '', '', NULL),
(106, 'Мария', 'asgrhtdjhsgsjdjh', 12345678912, 'oleg@mail.ru', '$2a$10$wZUdlbDNxIzys7vfdoEubeo7UA6ZT5EwzXftPWkPqaVqGPr1iqVFm', 'polzovatel', '', '', NULL),
(107, 'Мария', 'asgrhtdjhsgsjdjh', 12345678912, 'oleg@mail.ru', '$2a$10$w6axBShc.FEXtPqC5XHQnuo55oROla811c6fZdCQ0f7E9th56GcM.', 'polzovatel', '', '', NULL),
(108, 'Мария', 'asgrhtdjhsgsjdjh', 12345678912, '200@mail.ru', '$2a$10$OXXlnvSMZkdhMVSybmTLT.wj1VKXIrFXjhULnLeD.kPsyOt5lEObG', 'polzovatel', '', '', NULL),
(109, 'Мария', 'asgrhtdjhsgsjdjh', 12345678912, '200@mail.ru', '$2a$10$E7WP4UKb1uf4dueJJHYxg.v79DsyjNPQgyRLGiySU3iBwWkO.dwjq', 'polzovatel', '', '', NULL),
(110, 'Страница курсов', 'asgrhtdjhsgsjdjh', 12345678912, '3000@mail.ru', '$2a$10$gpBomvvOSB3F6GrmlQVC8.f8sT2LRz8HXq.CY0OTAsMzSAil4Kn0S', 'polzovatel', '', '', NULL),
(111, 'Мария', 'asgrhtdjhsgsjdjh', 12345678912, '3000@mail.ru', '$2a$10$dw2TMXYN31Y2xq.gRh7pXu67.CFEC03riZneDS45kwW/VZ7WAWVPa', 'polzovatel', '', '', NULL),
(112, 'Мария', 'asgrhtdjhsgsjdjh', 12345678912, '4000@mail.ru', '$2a$10$Az6cl68H.RS.Pp3Pfj0ji.3eNo/I.OHLGcPro5TiPpFbjRrOhbaru', 'fotograf', 'dddd', '', NULL),
(113, 'Мария', 'asgrhtdjhsgsjdjh', 12345678912, '5000@mail.ru', '$2a$10$RAsgMlyFe.ywujsxq79qxua7pL0RiCvH9a6Muf8eneanCgP7T3mNq', 'polzovatel', '', '', NULL),
(114, 'Страница курсов', 'asgrhtdjhsgsjdjh', 12345678912, '6000@mail.ru', '$2a$10$MJxjNJQtjO5DjmZtyva5U.EnAGHFWMhYeR2Uf8RLLUITGrS/kgOsW', 'polzovatel', '', '', NULL),
(115, 'Мария', 'asgrhtdjhsgsjdjh', 12345678912, '200904@mail.ru', '$2a$10$B8DyIUD4.zLgPesONh8M/OM3GPS2/Fq3HTvEBnuejfjqwFG683dr2', 'polzovatel', '', '', NULL),
(116, 'textarea-320', 'asgrhtdjhsgsjdjh', 12345678912, 'ghjhgf@mail.ru', '$2a$10$OtCI9n/6G0iNP4WJrJwt/uw9GbL.F1CIpW.TdW9A0eXy8gZfKUrRq', 'polzovatel', '', '', NULL),
(117, 'Мария', 'asgrhtdjhsgsjdjh', 12345678912, '200904@mail.ru', '$2a$10$PN8T7m63MvXbVCngOo1/RemwcKgdo59VhNq.PZ8xOBFbCGWnw1V0q', 'polzovatel', '', '', NULL),
(118, 'Мария', 'asgrhtdjhsgsjdjh', 12345678912, '200904@mail.ru', '$2a$10$kKKFzl1E6cGgwkoM/s7xiub5sPYcjlP7Fht3KrNS5O5pQglsnsAzu', 'polzovatel', '', '', NULL),
(119, 'Мария', 'asgrhtdjhsgsjdjh', 12345678912, '200904@mail.ru', '$2a$10$UQYxc2OMS13iWKZzAJA/5uCvFwla09.pCSi5c4Pa8UA8MHUEQhCpy', 'polzovatel', '', '', NULL),
(120, 'Мария', 'asgrhtdjhsgsjdjh', 12345678912, '200904@mail.ru', '$2a$10$gX/n4BqXCliWjpvc38X29OGQxHIqnFlXsj0XG229piNsBQHRa5XmS', 'polzovatel', '', '', NULL),
(121, 'Мария', 'asgrhtdjhsgsjdjh', 12345678912, '200904@mail.ru', '$2a$10$vJ1cFjUII7IiQtUemRiupeB/Q9T7dP3KX0bLDRyB8OMxpkSHuCqpi', 'fotograf', '', '', NULL),
(122, 'Мария', 'asgrhtdjhsgsjdjh', 12345678912, '404@mail.ru', '$2a$10$wyo5c6ao.Kl97U/Xw9hlLOAopaM4dPTYubzrwlCQ5Tp.84ljQY1Ku', 'polzovatel', '', '', NULL),
(123, 'Мария', 'asgrhtdjhsgsjdjh', 12345678912, '404@mail.ru', '$2a$10$nVZ8COi9CfGXORIx5unkGeBDFRs/moNdnsPTpaSOTRH6wzqT1I/BO', 'fotograf', 'dfdfdf', '', NULL),
(124, 'Мария', 'asgrhtdjhsgsjdjh', 12345678912, '200904@mail.ru', '$2a$10$jWofF/yQcdA65g8JClH18.GlusYZV9HU8CpNs9XkgnlRQF1.B0ZOC', 'polzovatel', '', '', NULL),
(125, 'Мария', 'asgrhtdjhsgsjdjh', 12345678912, '200904@mail.ru', '$2a$10$Puujv5wbON6r8yBcNvWkiOwGw4fYUcWH4KKB6mN8DVgYc96gd/lN2', 'polzovatel', '', '', NULL),
(126, 'Мария', 'asgrhtdjhsgsjdjh', 12345678912, '200904@mail.ru', '$2a$10$6NvFT3jDw0YlDW0SjFS4G.P5XTNo//zzdSANvCqhEPDcZM6v7MNuq', 'polzovatel', '', '', NULL),
(127, 'полина', 'баташева', 12345678912, 'апррор@mail.ru', '$2a$10$vTBPUXqPRIu7gND3lijJyeUCY13KmSEOfK0/sRe1Qz9s6crMXzjmu', 'fotograf', 'ижевск', 'не была фотограыом ', NULL),
(128, 'полина', 'баташева', 12345678912, 'hjkjhg@mail.ru', '$2a$10$8oAAESGTkjMT0iKL9NEcROO92U2NgJZ0DSNLtHNVWg7tZ0ACz.LLu', 'fotograf', 'ижевск', 'не была фотограыом ', NULL),
(129, 'Страница курсов', 'мпори', 12345678912, '200904@mail.ru', '$2a$10$vIXrs8qOgENUr9S3aiIOZ.QlvAgNWV.jg7G6K7W5dojXbX/S15qOC', 'fotograf', 'ижевск', 'не была фотографом', NULL),
(130, 'textarea-320', 'asgrhtdjhsgsjdjh', 12345678912, '7000@mail.ru', '$2a$10$9G5zv5flGZnoyVwLX3pkXuvBONFTc29pZb138adj4UcATFSM.qzVC', 'polzovatel', '', '', NULL),
(131, 'textarea-320', 'asgrhtdjhsgsjdjh', 12345678912, '7000@mail.ru', '$2a$10$Brdt4fHEgbVr6WXmIl4dxe96zLRTw8ME1775jlBsZAnh.yPys/O.S', 'polzovatel', '', '', NULL),
(132, 'Мария', 'asgrhtdjhsgsjdjh', 12345678912, '8000@mail.ru', '$2a$10$nQhtbuldcyOdpQglM22q8uNtHNIaor2ClPekntmQZXBJWKvGf0KZa', 'polzovatel', '', '', NULL),
(133, 'Мария', 'asgrhtdjhsgsjdjh', 12345678912, '8000@mail.ru', '$2a$10$bxXnsfwMBsM1H.v/UP4QA.oLZM7HUgwnnLisovcFod07rE4RwDZ2y', 'polzovatel', '', '', NULL),
(134, 'Полина', 'Баташева', 12345678912, '9000@mail.ru', '$2a$10$OVX.5eQz/jYbMKKy8J6Uk.bZMKJjEsjAAkO9t5bI1shxjzLjB3j8G', 'fotograf', 'ижевск', 'не была фотограыом ', NULL),
(135, 'магнитная пластина  на чехол телефона', 'мпори', 12345678912, '10000@mail.ru', '$2a$10$aYHxNPFQq1o7q/gwyjCuV.DoiYIOavYf/7jOk3I/6k8O0RVyysmjK', 'polzovatel', '', '', NULL),
(136, 'Даниил', 'Шубников', 79225115433, 'danilka-shubnikov@mail.ru', '$2a$10$nMeQTvWPFmUfYQoUxZF.H.vkRp/MPSCXhPcv6.APDFpCKq/.ZqrDC', 'polzovatel', '', '', NULL),
(137, 'Даниил', 'Шубников', 679225115433, 'danilka-shubnikov@mail.ru', '$2a$10$rv/dVRtECnvHREv0/2B/7OoXSn.M9zYf.xlydB8A.LyE/ZtWfXmk6', 'polzovatel', '', '', NULL),
(138, 'Даниил', 'Шубников', 79225115433, 'danilka-shubnikov@mail.ru', '$2a$10$.n8r9EbuppgDiU6qRIvxd.eDXK7hk46KOyVovqyua8Hc30ausOwDK', 'polzovatel', '', '', NULL),
(139, 'fghfghfgh', 'fghfghgfh', 123123213123, 'danisdfslka-shubnikov@mail.ru', '$2a$10$Nr/rw2ADtzt0T/MLChzT7.iHMeD4XAKUBLprJjx7AnCIa.NroaGrW', 'polzovatel', '', '', NULL);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `avatar`
--
ALTER TABLE `avatar`
  ADD PRIMARY KEY (`id`),
  ADD KEY `iduser` (`iduser`);

--
-- Индексы таблицы `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `img_id` (`img_id`);

--
-- Индексы таблицы `img`
--
ALTER TABLE `img`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id-users` (`idu`);

--
-- Индексы таблицы `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `img_id` (`img_id`);

--
-- Индексы таблицы `portvolio`
--
ALTER TABLE `portvolio`
  ADD PRIMARY KEY (`id`),
  ADD KEY `iduser` (`iduser`);

--
-- Индексы таблицы `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `avatar`
--
ALTER TABLE `avatar`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT для таблицы `img`
--
ALTER TABLE `img`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT для таблицы `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `portvolio`
--
ALTER TABLE `portvolio`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT для таблицы `sessions`
--
ALTER TABLE `sessions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=140;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `avatar`
--
ALTER TABLE `avatar`
  ADD CONSTRAINT `avatar_ibfk_1` FOREIGN KEY (`iduser`) REFERENCES `users` (`id`);

--
-- Ограничения внешнего ключа таблицы `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`img_id`) REFERENCES `img` (`id`);

--
-- Ограничения внешнего ключа таблицы `img`
--
ALTER TABLE `img`
  ADD CONSTRAINT `img_ibfk_1` FOREIGN KEY (`idu`) REFERENCES `users` (`id`);

--
-- Ограничения внешнего ключа таблицы `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`img_id`) REFERENCES `img` (`id`);

--
-- Ограничения внешнего ключа таблицы `portvolio`
--
ALTER TABLE `portvolio`
  ADD CONSTRAINT `portvolio_ibfk_1` FOREIGN KEY (`iduser`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
