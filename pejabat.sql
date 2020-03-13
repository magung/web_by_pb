-- phpMyAdmin SQL Dump
-- version 4.4.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 13, 2020 at 03:01 PM
-- Server version: 5.6.25
-- PHP Version: 5.6.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `contoh`
--

-- --------------------------------------------------------

--
-- Table structure for table `pejabat`
--

CREATE TABLE IF NOT EXISTS `pejabat` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `nip` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `jabatan` varchar(100) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `status` varchar(25) CHARACTER SET utf8 DEFAULT NULL,
  `tanda_tangan` varchar(100) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=51 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pejabat`
--

INSERT INTO `pejabat` (`id`, `nama`, `nip`, `jabatan`, `status`, `tanda_tangan`) VALUES
(2, 'Wasja, S.H.', '19650106 199803 1 004', 'Kepala Bagian Tata Usaha', 'checked', ''),
(29, 'Ir. V. Diah Qurani Kristina, M.Si.', '19671216 199403 2 001', 'Kepala Bidang PTN Wil. I Cianjur', 'checked', '29.jpg'),
(33, 'Aden Mahyar Burhanuddin, S.H.', '19741012 199903 1 003', 'Kepala Seksi Perencanaan, Perlindungan dan Pengawetan', 'checked', '33.jpg'),
(31, 'Badiah, S.Si., M.Si.', '19710110 199703 2 005', 'Kepala Bidang PTN Wil. III Bogor', '', ''),
(35, 'Hidayat Santosa, B.ScF.', '19620528 198903 1 004', 'Kepala Sub Bagian Data, Evaluasi dan Humas', '', ''),
(30, 'Ir. Syahrial Anuar, M.M.', '19630901 198903 1 005', 'Kepala Bidang PTN Wil. II Sukabumi', 'checked', '30.jpg'),
(38, 'Bambang Jaya Supena, S.Hut.', '19640416 198602 1 001', 'Kepala Seksi PTN Wil. II Gedeh', '', ''),
(37, 'Agus Arianto, S.Hut.', '19730821 200003 1 003', 'Kepala Seksi PTN Wil. I Cibodas', 'checked', 'agus.jpg'),
(43, 'Zainuddin', '19611112 198903 1 006', 'Petugas Perizinan Pendakian', '', 'zainuddin.jpg'),
(39, 'Lucky Wahyu Muslihat, S.Hut.', '19611013 198603 1 001', 'Kepala Seksi PTN Wil. III Selabintana', 'checked', '39.jpg'),
(34, 'Drs. Antong Hartadi', '19610913 198903 1 002', 'Kepala Sub Bagian Umum', '', ''),
(42, 'Bambang Mulyawan, S.H.', '19740920 199903 1 005', 'Kepala Seksi PTN Wil. VI Tapos', '', ''),
(32, 'Johanes Wiharisno, S.Hut., M.P.', '19770906 200312 1 001', 'Kepala Seksi Pemanfaatan dan Pelayanan', 'checked', '32.jpg'),
(28, 'Ir. Mimi Murdiah', '19611101 198901 2 001', 'Kepala Bidang Teknis Konservasi', 'checked', '28.jpg'),
(36, 'Heri Suheri, S.Hut., M.Sc.', '19770407 200501 1 005', 'Kepala Sub Bagian Program dan Kerjasama', '', ''),
(40, 'Sudjoko Mustadjab, S.Hut.', '19641208 198603 1 004', 'Kepala Seksi PTN Wil. IV Situgunung', '', ''),
(41, 'Amru Ikhwansyah, S.Pd.', '19730525 199903 1 003', 'Kepala Seksi PTN Wil. V Bodogol', '', ''),
(1, 'Wahju Rudianto, S.Pi., M.Si.', '19691016 199403 1 001', 'Kepala Balai Besar', 'checked', '1.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pejabat`
--
ALTER TABLE `pejabat`
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `pejabat` (`nama`),
  ADD KEY `nip` (`nip`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pejabat`
--
ALTER TABLE `pejabat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=51;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
