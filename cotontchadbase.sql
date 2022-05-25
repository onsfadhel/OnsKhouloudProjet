-- phpMyAdmin SQL Dump
-- version 5.3.0-dev+20220423.6d54ac471a
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 25 mai 2022 à 18:44
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 8.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `cotontchadbase`
--

-- --------------------------------------------------------

--
-- Structure de la table `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add vehicules', 7, 'add_vehicules'),
(26, 'Can change vehicules', 7, 'change_vehicules'),
(27, 'Can delete vehicules', 7, 'delete_vehicules'),
(28, 'Can view vehicules', 7, 'view_vehicules'),
(29, 'Can add utilisateurs', 8, 'add_utilisateurs'),
(30, 'Can change utilisateurs', 8, 'change_utilisateurs'),
(31, 'Can delete utilisateurs', 8, 'delete_utilisateurs'),
(32, 'Can view utilisateurs', 8, 'view_utilisateurs'),
(33, 'Can add chauffeurs', 9, 'add_chauffeurs'),
(34, 'Can change chauffeurs', 9, 'change_chauffeurs'),
(35, 'Can delete chauffeurs', 9, 'delete_chauffeurs'),
(36, 'Can view chauffeurs', 9, 'view_chauffeurs'),
(37, 'Can add usines', 10, 'add_usines'),
(38, 'Can change usines', 10, 'change_usines'),
(39, 'Can delete usines', 10, 'delete_usines'),
(40, 'Can view usines', 10, 'view_usines'),
(41, 'Can add borderauxdelivraison', 11, 'add_borderauxdelivraison'),
(42, 'Can change borderauxdelivraison', 11, 'change_borderauxdelivraison'),
(43, 'Can delete borderauxdelivraison', 11, 'delete_borderauxdelivraison'),
(44, 'Can view borderauxdelivraison', 11, 'view_borderauxdelivraison'),
(45, 'Can add transactions', 12, 'add_transactions'),
(46, 'Can change transactions', 12, 'change_transactions'),
(47, 'Can delete transactions', 12, 'delete_transactions'),
(48, 'Can view transactions', 12, 'view_transactions'),
(49, 'Can add produits', 13, 'add_produits'),
(50, 'Can change produits', 13, 'change_produits'),
(51, 'Can delete produits', 13, 'delete_produits'),
(52, 'Can view produits', 13, 'view_produits'),
(53, 'Can add clients', 14, 'add_clients'),
(54, 'Can change clients', 14, 'change_clients'),
(55, 'Can delete clients', 14, 'delete_clients'),
(56, 'Can view clients', 14, 'view_clients'),
(57, 'Can add facturedeproduction', 15, 'add_facturedeproduction'),
(58, 'Can change facturedeproduction', 15, 'change_facturedeproduction'),
(59, 'Can delete facturedeproduction', 15, 'delete_facturedeproduction'),
(60, 'Can view facturedeproduction', 15, 'view_facturedeproduction'),
(61, 'Can add test', 16, 'add_test'),
(62, 'Can change test', 16, 'change_test'),
(63, 'Can delete test', 16, 'delete_test'),
(64, 'Can view test', 16, 'view_test'),
(65, 'Can add caller', 17, 'add_caller'),
(66, 'Can change caller', 17, 'change_caller'),
(67, 'Can delete caller', 17, 'delete_caller'),
(68, 'Can view caller', 17, 'view_caller'),
(69, 'Can add credential', 18, 'add_credential'),
(70, 'Can change credential', 18, 'change_credential'),
(71, 'Can delete credential', 18, 'delete_credential'),
(72, 'Can view credential', 18, 'view_credential'),
(73, 'Can add code', 19, 'add_code'),
(74, 'Can change code', 19, 'change_code'),
(75, 'Can delete code', 19, 'delete_code'),
(76, 'Can view code', 19, 'view_code'),
(77, 'Can add stock', 20, 'add_stock'),
(78, 'Can change stock', 20, 'change_stock'),
(79, 'Can delete stock', 20, 'delete_stock'),
(80, 'Can view stock', 20, 'view_stock'),
(81, 'Can add administrateur', 21, 'add_administrateur'),
(82, 'Can change administrateur', 21, 'change_administrateur'),
(83, 'Can delete administrateur', 21, 'delete_administrateur'),
(84, 'Can view administrateur', 21, 'view_administrateur'),
(85, 'Can add responsable logistique', 22, 'add_responsablelogistique'),
(86, 'Can change responsable logistique', 22, 'change_responsablelogistique'),
(87, 'Can delete responsable logistique', 22, 'delete_responsablelogistique'),
(88, 'Can view responsable logistique', 22, 'view_responsablelogistique'),
(89, 'Can add responsable financier', 23, 'add_responsablefinancier'),
(90, 'Can change responsable financier', 23, 'change_responsablefinancier'),
(91, 'Can delete responsable financier', 23, 'delete_responsablefinancier'),
(92, 'Can view responsable financier', 23, 'view_responsablefinancier'),
(93, 'Can add responsable de production', 24, 'add_responsabledeproduction'),
(94, 'Can change responsable de production', 24, 'change_responsabledeproduction'),
(95, 'Can delete responsable de production', 24, 'delete_responsabledeproduction'),
(96, 'Can view responsable de production', 24, 'view_responsabledeproduction'),
(97, 'Can add responsable cgi', 25, 'add_responsablecgi'),
(98, 'Can change responsable cgi', 25, 'change_responsablecgi'),
(99, 'Can delete responsable cgi', 25, 'delete_responsablecgi'),
(100, 'Can view responsable cgi', 25, 'view_responsablecgi'),
(101, 'Can add responsable de pont bacule', 26, 'add_responsabledepontbacule'),
(102, 'Can change responsable de pont bacule', 26, 'change_responsabledepontbacule'),
(103, 'Can delete responsable de pont bacule', 26, 'delete_responsabledepontbacule'),
(104, 'Can view responsable de pont bacule', 26, 'view_responsabledepontbacule'),
(105, 'Can add cozoc', 27, 'add_cozoc'),
(106, 'Can change cozoc', 27, 'change_cozoc'),
(107, 'Can delete cozoc', 27, 'delete_cozoc'),
(108, 'Can view cozoc', 27, 'view_cozoc'),
(109, 'Can add ticketdepese', 28, 'add_ticketdepese'),
(110, 'Can change ticketdepese', 28, 'change_ticketdepese'),
(111, 'Can delete ticketdepese', 28, 'delete_ticketdepese'),
(112, 'Can view ticketdepese', 28, 'view_ticketdepese'),
(113, 'Can add besoins', 29, 'add_besoins'),
(114, 'Can change besoins', 29, 'change_besoins'),
(115, 'Can delete besoins', 29, 'delete_besoins'),
(116, 'Can view besoins', 29, 'view_besoins'),
(117, 'Can add facturecoton', 30, 'add_facturecoton'),
(118, 'Can change facturecoton', 30, 'change_facturecoton'),
(119, 'Can delete facturecoton', 30, 'delete_facturecoton'),
(120, 'Can view facturecoton', 30, 'view_facturecoton'),
(121, 'Can add bordereauxlivraisonintrant', 31, 'add_bordereauxlivraisonintrant'),
(122, 'Can change bordereauxlivraisonintrant', 31, 'change_bordereauxlivraisonintrant'),
(123, 'Can delete bordereauxlivraisonintrant', 31, 'delete_bordereauxlivraisonintrant'),
(124, 'Can view bordereauxlivraisonintrant', 31, 'view_bordereauxlivraisonintrant'),
(125, 'Can add facturelivraisonintrant', 32, 'add_facturelivraisonintrant'),
(126, 'Can change facturelivraisonintrant', 32, 'change_facturelivraisonintrant'),
(127, 'Can delete facturelivraisonintrant', 32, 'delete_facturelivraisonintrant'),
(128, 'Can view facturelivraisonintrant', 32, 'view_facturelivraisonintrant'),
(129, 'Can add stockcoton', 33, 'add_stockcoton'),
(130, 'Can change stockcoton', 33, 'change_stockcoton'),
(131, 'Can delete stockcoton', 33, 'delete_stockcoton'),
(132, 'Can view stockcoton', 33, 'view_stockcoton');

-- --------------------------------------------------------

--
-- Structure de la table `auth_user`
--

CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `auth_user`
--

INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
(1, 'pbkdf2_sha256$260000$KcLp1LgH7JHqjPdD7KtQm5$VivNlalp2Z9jh1Ahchq+B7qfjKt5n1C9b06j0uyn5ug=', '2022-05-25 11:12:11.410718', 1, 'admin', '', '', 'admin@gmail.com', 1, 1, '2022-04-12 00:05:08.494321'),
(2, 'pbkdf2_sha256$260000$a2skQAeVNoLHfPx2z68U7M$78PTOnh5v+y1u3NZ8dOHqisiiRYsRB9QANCZW4f60SY=', NULL, 1, 'admini', '', '', 'admini@gmail.com', 1, 1, '2022-05-17 22:52:14.402335');

-- --------------------------------------------------------

--
-- Structure de la table `auth_user_groups`
--

CREATE TABLE `auth_user_groups` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `auth_user_user_permissions`
--

CREATE TABLE `auth_user_user_permissions` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `backend_besoins`
--

CREATE TABLE `backend_besoins` (
  `id` bigint(20) NOT NULL,
  `code` varchar(50) DEFAULT NULL,
  `code_AV` varchar(50) DEFAULT NULL,
  `nom_artc` varchar(50) NOT NULL,
  `qte` double NOT NULL,
  `unite` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `echeance` date NOT NULL,
  `prix` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `backend_besoins`
--

INSERT INTO `backend_besoins` (`id`, `code`, `code_AV`, `nom_artc`, `qte`, `unite`, `date`, `echeance`, `prix`) VALUES
(1, '#105', 'AV200C', 'Nitrogene', 240, 'KG', '2022-04-19', '2022-04-23', 2400),
(2, '#106', 'AV330C', 'potasium', 600, 'KG', '2022-04-21', '2022-04-30', 4500),
(3, '#107', 'AV330C', 'Phosphore', 450, 'kg', '2022-04-24', '2022-05-04', 3000),
(4, '150', 'AV907V', 'Potasium', 450, 'kg', '2022-05-18', '2022-05-24', 4000),
(5, '#152', 'AV200C', 'Potasium', 550, 'kg', '2022-04-22', '2022-04-26', 5000),
(6, '#110', 'AV900C', 'Phosphore', 350, 'kg', '2022-04-24', '2022-05-28', 4000),
(7, '#111', 'AV330C', 'Nitrogene', 850, 'kg', '2022-04-28', '2022-05-08', 7600),
(8, '#112', 'AV900C', 'Potasium', 500, 'kg', '2022-05-26', '2022-05-08', 6050),
(9, '#113', 'AV200C', 'Potasium', 500, 'kg', '2022-04-24', '2022-05-29', 4750),
(10, '#114', 'AV709C', 'Potasium', 470, 'kg', '2022-04-26', '2022-05-01', 5400),
(11, '#115', 'AV709C', 'Nitrogene', 680, 'kg', '2022-04-26', '2022-05-05', 7200);

-- --------------------------------------------------------

--
-- Structure de la table `backend_borderauxdelivraison`
--

CREATE TABLE `backend_borderauxdelivraison` (
  `id` bigint(20) NOT NULL,
  `numerobordereau` int(11) NOT NULL,
  `date` date NOT NULL,
  `lieu` varchar(50) NOT NULL,
  `modalitepaiement` varchar(50) NOT NULL,
  `modalitelivraison` varchar(50) NOT NULL,
  `datePaie` date NOT NULL,
  `delailivraison` date NOT NULL,
  `observation` varchar(50) NOT NULL,
  `tauxremise` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `backend_borderauxdelivraison`
--

INSERT INTO `backend_borderauxdelivraison` (`id`, `numerobordereau`, `date`, `lieu`, `modalitepaiement`, `modalitelivraison`, `datePaie`, `delailivraison`, `observation`, `tauxremise`) VALUES
(1, 12345, '2022-04-12', 'tchad', 'espèce', 'transporteur', '2022-04-13', '2022-04-12', 'portation de 1000 kg de coton', 12350),
(2, 784562, '2022-04-12', 'tchad', 'cheque', 'transporteur', '2022-04-12', '2022-04-12', 'portation de 124 kg de coton fibre', 7584),
(3, 48512, '2022-04-12', 'tchad', 'carte bancaire', 'transporteur', '2022-04-18', '2022-04-17', 'portation de 124 kg de coton fibre', 1452),
(4, 784512, '2022-03-07', 'tchad', 'espèce', 'transporteur', '2022-04-10', '2022-04-07', 'rien', 1758);

-- --------------------------------------------------------

--
-- Structure de la table `backend_bordereauxlivraisonintrant`
--

CREATE TABLE `backend_bordereauxlivraisonintrant` (
  `id` bigint(20) NOT NULL,
  `num` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `designation` varchar(50) NOT NULL,
  `qte` double NOT NULL,
  `model_liv` varchar(50) NOT NULL,
  `model_paie` varchar(50) NOT NULL,
  `date_paie` date NOT NULL,
  `date_liv` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `backend_bordereauxlivraisonintrant`
--

INSERT INTO `backend_bordereauxlivraisonintrant` (`id`, `num`, `date`, `designation`, `qte`, `model_liv`, `model_paie`, `date_paie`, `date_liv`) VALUES
(1, '58245', '2022-05-18', 'graine', 125, 'livreur', 'carte bancaire', '2022-05-25', '2022-05-22'),
(2, '15A14', '2022-05-19', 'livraison des cotons', 125, 'Envoi Rapide', 'Virement Bancaire', '2022-05-25', '2022-05-26');

-- --------------------------------------------------------

--
-- Structure de la table `backend_chauffeurs`
--

CREATE TABLE `backend_chauffeurs` (
  `id` bigint(20) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `Birthday` date NOT NULL,
  `phone` varchar(128) NOT NULL,
  `adresse` varchar(50) NOT NULL,
  `permis` varchar(50) DEFAULT NULL,
  `salaire` double DEFAULT NULL,
  `photo` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `backend_chauffeurs`
--

INSERT INTO `backend_chauffeurs` (`id`, `nom`, `prenom`, `Birthday`, `phone`, `adresse`, `permis`, `salaire`, `photo`) VALUES
(1, 'ali', 'ben ali', '1986-04-12', '+21625016452', 'Tunis', '147852', 650, 'pictures/chauffeur_EQr1MtK.png'),
(2, 'mohamed', 'trad', '1990-04-12', '+21658750456', 'tunis', '145892', 650, 'pictures/admin.png'),
(3, 'salma', 'daas', '1988-12-21', '+21625016754', 'Tunis', '158966', 720, 'pictures/driver_NLUViY4.png'),
(4, 'sami', 'baccouch', '1995-04-24', '+21654452456', 'tunis', '145852', 450, 'pictures/responsablelogistique_TAegujb.png');

-- --------------------------------------------------------

--
-- Structure de la table `backend_clients`
--

CREATE TABLE `backend_clients` (
  `id` bigint(20) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `adresse` varchar(50) NOT NULL,
  `pays` varchar(50) NOT NULL,
  `phone` varchar(128) NOT NULL,
  `dateDeCommande` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `backend_clients`
--

INSERT INTO `backend_clients` (`id`, `nom`, `prenom`, `adresse`, `pays`, `phone`, `dateDeCommande`) VALUES
(1, 'mahmoud', 'chikh', 'palé', 'tchad', '+21658878541', '2022-04-16'),
(2, 'saleh', 'khmiri', 'tunis', 'tunisie', '+21658878532', '2022-04-16'),
(3, 'hamza', 'zakeria', 'tunis', 'tunisie', '+21658878541', '2022-04-23'),
(4, 'brahim', 'zaghouani', 'Tunis', 'tunisie', '+21658811785', '2022-04-17');

-- --------------------------------------------------------

--
-- Structure de la table `backend_code`
--

CREATE TABLE `backend_code` (
  `id` bigint(20) NOT NULL,
  `number` varchar(5) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `backend_code`
--

INSERT INTO `backend_code` (`id`, `number`, `user_id`) VALUES
(2, '81337', 9),
(3, '37561', 10),
(4, '08721', 11),
(5, '52357', 12),
(7, '73636', 14),
(8, '18577', 16),
(9, '01698', 17);

-- --------------------------------------------------------

--
-- Structure de la table `backend_facturecoton`
--

CREATE TABLE `backend_facturecoton` (
  `id` bigint(20) NOT NULL,
  `num` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `qte` double NOT NULL,
  `unite` varchar(10) DEFAULT NULL,
  `prixUnitaire` double NOT NULL,
  `prixTotal` double NOT NULL,
  `nom_AV` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `backend_facturecoton`
--

INSERT INTO `backend_facturecoton` (`id`, `num`, `date`, `qte`, `unite`, `prixUnitaire`, `prixTotal`, `nom_AV`) VALUES
(1, 'FN1452', '2022-05-18', 150, 'KG', 15, 1478523, 'AV1'),
(2, '15332', '2022-05-26', 10, 'kg', 180, 2000, 'AVtest');

-- --------------------------------------------------------

--
-- Structure de la table `backend_facturedeproduction`
--

CREATE TABLE `backend_facturedeproduction` (
  `id` bigint(20) NOT NULL,
  `numFacture` int(11) NOT NULL,
  `PrixUnite` double NOT NULL,
  `Qte` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `client_id` bigint(20) NOT NULL,
  `produit_id` bigint(20) NOT NULL,
  `datedecreation` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `backend_facturedeproduction`
--

INSERT INTO `backend_facturedeproduction` (`id`, `numFacture`, `PrixUnite`, `Qte`, `total`, `client_id`, `produit_id`, `datedecreation`) VALUES
(1, 174523, 16780, 12, 8200, 3, 2, '2022-04-20'),
(2, 85427, 147, 12, 1520, 1, 4, '2022-04-22'),
(3, 25418, 116.8, 12, 1472, 4, 2, '2022-04-22'),
(4, 52148, 125, 5, 526, 2, 1, '2022-04-19');

-- --------------------------------------------------------

--
-- Structure de la table `backend_facturelivraisonintrant`
--

CREATE TABLE `backend_facturelivraisonintrant` (
  `id` bigint(20) NOT NULL,
  `numfact` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `intrant` varchar(50) NOT NULL,
  `qte` double NOT NULL,
  `prixunitaire` double NOT NULL,
  `prixtotal` double NOT NULL,
  `modal_liv` varchar(50) NOT NULL,
  `echeance` date NOT NULL,
  `observation` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `backend_facturelivraisonintrant`
--

INSERT INTO `backend_facturelivraisonintrant` (`id`, `numfact`, `date`, `intrant`, `qte`, `prixunitaire`, `prixtotal`, `modal_liv`, `echeance`, `observation`) VALUES
(1, '2035FA', '2022-05-18', 'coton', 125, 10, 1500, 'Envoi Rapide', '2022-05-25', 'livraison de 125 kg de coton'),
(2, '15A18', '2022-05-11', 'graine', 125, 10, 1350, 'Envoi Rapide', '2022-05-27', 'portation de 125 graine de coton');

-- --------------------------------------------------------

--
-- Structure de la table `backend_produits`
--

CREATE TABLE `backend_produits` (
  `id` bigint(20) NOT NULL,
  `reference` varchar(50) NOT NULL,
  `categorie` varchar(50) NOT NULL,
  `description` varchar(50) NOT NULL,
  `prix_de_vente` double NOT NULL,
  `quantite` varchar(50) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `mois` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `backend_produits`
--

INSERT INTO `backend_produits` (`id`, `reference`, `categorie`, `description`, `prix_de_vente`, `quantite`, `image`, `mois`) VALUES
(1, '1234568', 'huile ODIN', 'huile ODIN', 16785, '20', 'pictures/20220214_130716-scaled_mptTRys.jpg', 1),
(2, '7854568', 'savon', 'Savon fabriqué par l\'Huilerie-Savonnerie de Moundo', 1485, '30', 'pictures/45385979-36677661_J3WI81d.jpg', 5),
(3, '4520180', 'huile SAOR', 'huile SAOR', 20456, '150', 'pictures/20220214_130716-scaled_HBgqaCB.jpg', 5),
(4, '585245', 'tourteaux', 'tourteaux cotontchad', 1260, '200', 'pictures/images_3bIQIgW.jpg', 1),
(7, '5827', 'savon', 'savon Din', 1452, '50', 'pictures/45385979-36677661_c9syrcm.jpg', 1),
(9, '4520458', 'huile ODIN', 'huile ODIN', 125, '30', 'pictures/gg_H48fiBW.jpg', 5),
(10, '521587', 'tourteaux', 'tourteaux cotontchad', 23, '40', 'pictures/images_91fNmuM.jpg', 5),
(11, '785426', 'huile ODIN', 'huile ODIN', 125, '500', 'pictures/20220214_130716-scaled_JgD8QYR.jpg', 2),
(12, '3254568', 'huile SAOR', 'huile SAOR', 20, '125', 'pictures/gg_8jQ68H2.jpg', 2),
(13, '2870180', 'savon', 'Savon de Moundou', 26, '200', 'pictures/45385979-36677661_2XqMunH.jpg', 2),
(14, '5484127', 'tourteaux', 'tourteaux', 12, '255', 'pictures/images_Hrue4pA.jpg', 2),
(15, '85461', 'huile SAOR', 'huile SAOR', 20, '300', '', 2);

-- --------------------------------------------------------

--
-- Structure de la table `backend_stock`
--

CREATE TABLE `backend_stock` (
  `id` bigint(20) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `reference` varchar(50) NOT NULL,
  `categorie` varchar(50) NOT NULL,
  `description` varchar(50) NOT NULL,
  `entre` double NOT NULL,
  `sortie` double NOT NULL,
  `mois` int(11) NOT NULL,
  `emplacement_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `backend_stock`
--

INSERT INTO `backend_stock` (`id`, `image`, `reference`, `categorie`, `description`, `entre`, `sortie`, `mois`, `emplacement_id`) VALUES
(1, '', 'A854', 'huile SAOR', 'huile SAOR', 100, 150, 2, 3),
(2, '', '7581180', 'savon', 'Savon de Moundou', 50, 40, 2, 1),
(4, '', 'H158', 'huile ODIN', 'huile ODIN', 250, 250, 2, 1),
(5, '', '14582', 'savon', 'Savon de Moundou', 145, 100, 3, 1),
(6, '', '2548', 'tourteaux', 'tourteaux cotontchad', 82, 24, 2, 3),
(7, '', 'R1258', 'huile SAOR', 'huile SAOR', 452, 400, 3, 1),
(8, '', 'R1858', 'huile ODIN', 'huile ODIN', 152, 149, 3, 2),
(9, '', '4582', 'tourteaux', 'tourteaux cotontchad', 95, 82, 3, 4);

-- --------------------------------------------------------

--
-- Structure de la table `backend_stockcoton`
--

CREATE TABLE `backend_stockcoton` (
  `id` bigint(20) NOT NULL,
  `referencecoton` varchar(50) NOT NULL,
  `entre` double NOT NULL,
  `sortie` double NOT NULL,
  `av` varchar(50) NOT NULL,
  `mois` int(11) NOT NULL,
  `usine_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `backend_stockcoton`
--

INSERT INTO `backend_stockcoton` (`id`, `referencecoton`, `entre`, `sortie`, `av`, `mois`, `usine_id`) VALUES
(1, 'AC125', 100, 90, 'AV12', 2, 2),
(2, 'C785', 250, 250, 'Av8', 2, 3);

-- --------------------------------------------------------

--
-- Structure de la table `backend_ticketdepese`
--

CREATE TABLE `backend_ticketdepese` (
  `id` bigint(20) NOT NULL,
  `numeroticket` varchar(50) NOT NULL,
  `caisse` int(11) NOT NULL,
  `date` date NOT NULL,
  `dateP1` date NOT NULL,
  `dateP2` date NOT NULL,
  `peseur` varchar(50) NOT NULL,
  `poidP1` double NOT NULL,
  `poidP2` double NOT NULL,
  `observation` varchar(100) NOT NULL,
  `vehicule_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `backend_ticketdepese`
--

INSERT INTO `backend_ticketdepese` (`id`, `numeroticket`, `caisse`, `date`, `dateP1`, `dateP2`, `peseur`, `poidP1`, `poidP2`, `observation`, `vehicule_id`) VALUES
(1, 'A1254', 4, '2022-05-20', '2022-05-17', '2022-05-18', 'ahmed ben mohamed', 1285, 1285, 'portation de coton de l\'association', 2),
(2, 'A7458', 2, '2022-05-20', '2022-05-16', '2022-05-17', 'asma ben ali', 1752, 1750, 'portation de coton de l\'association', 1),
(3, 'A125B2', 3, '2022-05-26', '2022-05-27', '2022-05-28', 'sami ben abdalah', 1250, 1240, 'portation de 124 kg de coton fibre', 3);

-- --------------------------------------------------------

--
-- Structure de la table `backend_transactions`
--

CREATE TABLE `backend_transactions` (
  `id` bigint(20) NOT NULL,
  `transaction` varchar(50) NOT NULL,
  `datededepart` date NOT NULL,
  `adressededepart` varchar(50) NOT NULL,
  `datearrive` date NOT NULL,
  `adressededestination` varchar(50) NOT NULL,
  `notes` varchar(50) NOT NULL,
  `chauffeur_id` bigint(20) DEFAULT NULL,
  `produit_id` bigint(20) DEFAULT NULL,
  `vehicule_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `backend_transactions`
--

INSERT INTO `backend_transactions` (`id`, `transaction`, `datededepart`, `adressededepart`, `datearrive`, `adressededestination`, `notes`, `chauffeur_id`, `produit_id`, `vehicule_id`) VALUES
(1, 'entré', '2022-04-12', 'usine léré', '2022-04-12', 'association villageoise', 'portation de 50 T de coton', 2, 1, 1),
(2, 'sortie', '2022-04-12', 'association villageoise 1', '2022-04-13', 'usine pala', 'portation de 1000 kg de coton', 4, 3, 2),
(3, 'sortie', '2022-04-12', 'usine léré', '2022-04-12', 'association villageoise', 'portation de 100 kg de coton graine', 2, 3, 4),
(4, 'entré', '2022-04-12', 'usine sarh', '2022-04-12', 'usine  léré', 'portation de 50 kg de coton', 1, 2, 4),
(5, 'sortie', '2022-04-12', 'usine sarh', '2022-04-12', 'usine de koumra', 'portation de 50 kg de coton', 3, 1, 1),
(6, 'entré', '2022-04-13', 'Tunis', '2022-04-13', 'Tunis', 'rien', 2, 2, 2),
(23, 'sortie', '2022-04-14', 'Tunis', '2022-04-15', 'usine de léré', 'portation de 50 kg de coton', 4, 3, 2),
(24, 'sortie', '2022-04-16', 'usine de  léré', '2022-04-16', 'usine de koumra', 'portation de 1000 kg de coton', 3, 4, 4),
(25, 'entré', '2022-04-17', 'usine de koumra', '2022-04-18', 'usine de sarh', 'rien', 2, 2, 4);

-- --------------------------------------------------------

--
-- Structure de la table `backend_usines`
--

CREATE TABLE `backend_usines` (
  `id` bigint(20) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `age` date NOT NULL,
  `typeEgreneuse` varchar(50) NOT NULL,
  `nbreEgreneuse` int(11) NOT NULL,
  `capacite` double NOT NULL,
  `personnelPermanent` int(11) NOT NULL,
  `personnelSaisonnier` int(11) NOT NULL,
  `personnelOccasionnel` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `backend_usines`
--

INSERT INTO `backend_usines` (`id`, `nom`, `age`, `typeEgreneuse`, `nbreEgreneuse`, `capacite`, `personnelPermanent`, `personnelSaisonnier`, `personnelOccasionnel`) VALUES
(1, 'Léré', '1970-04-12', '120 Scies', 3, 32500, 42, 120, 60),
(2, 'pala', '1980-10-12', '141 Scies', 3, 45000, 42, 120, 60),
(3, 'Gaya', '1970-03-01', '120 Scies', 3, 13500, 10, 5, 10),
(4, 'kelo', '1993-04-12', '141 Scies', 3, 42000, 57, 166, 60),
(5, 'kaybé', '1996-04-12', '120 Scies', 2, 9000, 6, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `backend_utilisateurs`
--

CREATE TABLE `backend_utilisateurs` (
  `id` bigint(20) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `email` varchar(254) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(128) NOT NULL,
  `adresse` varchar(50) NOT NULL,
  `role` varchar(50) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_verified` tinyint(1) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `backend_utilisateurs`
--

INSERT INTO `backend_utilisateurs` (`id`, `nom`, `prenom`, `email`, `password`, `phone`, `adresse`, `role`, `is_active`, `is_staff`, `is_verified`, `last_login`) VALUES
(9, 'onsfl', 'Fadhel', 'ons123@gmail.com', 'pbkdf2_sha256$260000$p7o6at86wNqtKrZdWUlfib$tqEZtKjxbDaoV3Y+sgULG+M1kOykV1jFV0bM9bABRCY=', '+21658810345', 'Tunis', 'gestionnaire logistique', 1, 0, 0, NULL),
(10, 'ahlem', 'ahlem', 'ahlem123@gmail.com', 'pbkdf2_sha256$260000$W66zb91Y8WAJhvtbmDtndB$bCM66UkNznphb8LSk7YSRk/M47AUgQERie3l1gsj1/c=', '+21658810345', 'tunis', 'responsable de production', 1, 0, 0, NULL),
(11, 'admin', 'admin', 'admin@gmail.com', 'pbkdf2_sha256$260000$knNcDFxW5SNmQOJET113EX$8MwkFTU8iwB8KECTCRvwVMTMMKlSddHnfeBHOuLMatQ=', '+21658810345', 'tunis', 'administrateur', 1, 0, 0, NULL),
(12, 'ali', 'ben ali', 'te32718@gmail.com', 'pbkdf2_sha256$260000$ClFz1G3sWbfxEZfNmIMVqX$MZqIfOD5j58NJZsOe1y2P82d7g5J8smxwvhvaQLIUDo=', '+21658810456', 'tunis', 'responsable financier', 1, 0, 0, NULL),
(14, 'turky', 'khouloud', 'khouloud@gmail.com', 'pbkdf2_sha256$260000$53K3bgx42SFbI5Fkd514FF$UiWJbfoCh2ZqH8n2M8KXrhbbLTyyQiJBcfSkFlElWCg=', '+21658810345', 'tunis', 'cozoc', 1, 0, 0, NULL),
(16, 'rayen', 'ben ahmed', 'rayen@gmail.com', 'pbkdf2_sha256$260000$OT8pQlVC51V5DcKC9KkqG2$DKUx3WdAgHhuwmv1iJXwjkbzjYklxr7kpxQOZQYd1uk=', '+21658810456', 'tunis', 'responsable de pont bascule', 1, 0, 0, NULL),
(17, 'mohamed', 'brahmi', 'mohamed123@gmail.com', 'pbkdf2_sha256$260000$dciXtFXZH9wA1iDgJWbFET$TJhlMFDJSmNeUaxXOk4S9RhUTyhbLIXZixw4KK4MJ8Y=', '+21658810456', 'tunis', 'responsable CGI', 1, 0, 0, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `backend_vehicules`
--

CREATE TABLE `backend_vehicules` (
  `id` bigint(20) NOT NULL,
  `matricule` varchar(50) NOT NULL,
  `types` varchar(50) NOT NULL,
  `poid` varchar(50) NOT NULL,
  `vitesse` int(11) NOT NULL,
  `freinage` varchar(50) NOT NULL,
  `consommation` varchar(50) NOT NULL,
  `marque` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `backend_vehicules`
--

INSERT INTO `backend_vehicules` (`id`, `matricule`, `types`, `poid`, `vitesse`, `freinage`, `consommation`, `marque`) VALUES
(1, '1234567TN158', 'camion', '30000', 80, '..', '36.5', 'Toyota'),
(2, '47592Tch147', 'Tracteur routier', '16000', 90, '..', '25', 'valtra'),
(3, '5478895Tch147', 'véhicule légère', '3000', 120, '..', '12.85', 'chevrolet'),
(4, '8987TN123', 'Tracteur de cour', '5000', 80, '....', '28.39', 'new holland'),
(5, '14582Tch125', 'camion', '19000', 80, '..', '36', 'iveco'),
(6, '785423', 'Tracteur de cour', '26000', 90, '..', '25', 'valtra'),
(7, '85214', 'camion', '30100', 80, '..', '36.2', 'iveco');

-- --------------------------------------------------------

--
-- Structure de la table `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `django_admin_log`
--

INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`) VALUES
(1, '2022-04-12 00:14:59.997643', '1', 'ali', 1, '[{\"added\": {}}]', 9, 1),
(2, '2022-04-12 00:15:48.567769', '2', 'mohamed', 1, '[{\"added\": {}}]', 9, 1),
(3, '2022-04-12 00:18:04.018758', '3', 'salma', 1, '[{\"added\": {}}]', 9, 1),
(4, '2022-04-12 00:19:15.942811', '4', 'sami', 1, '[{\"added\": {}}]', 9, 1),
(5, '2022-04-12 00:21:08.356550', '1', 'usines object (1)', 1, '[{\"added\": {}}]', 10, 1),
(6, '2022-04-12 00:24:02.367789', '2', 'usines object (2)', 1, '[{\"added\": {}}]', 10, 1),
(7, '2022-04-12 00:30:38.940356', '3', 'usines object (3)', 1, '[{\"added\": {}}]', 10, 1),
(8, '2022-04-12 00:32:31.781497', '4', 'usines object (4)', 1, '[{\"added\": {}}]', 10, 1),
(9, '2022-04-12 00:32:35.999114', '4', 'usines object (4)', 2, '[]', 10, 1),
(10, '2022-04-12 00:34:20.843771', '5', 'usines object (5)', 1, '[{\"added\": {}}]', 10, 1),
(11, '2022-04-12 00:35:24.646539', '1', 'vehicules object (1)', 1, '[{\"added\": {}}]', 7, 1),
(12, '2022-04-12 00:35:27.306666', '1', 'vehicules object (1)', 2, '[]', 7, 1),
(13, '2022-04-12 00:36:07.323975', '2', 'vehicules object (2)', 1, '[{\"added\": {}}]', 7, 1),
(14, '2022-04-12 00:36:52.099502', '3', 'vehicules object (3)', 1, '[{\"added\": {}}]', 7, 1),
(15, '2022-04-12 00:37:53.645618', '4', 'vehicules object (4)', 1, '[{\"added\": {}}]', 7, 1),
(16, '2022-04-12 00:38:56.528205', '1', 'Borderauxdelivraison object (1)', 1, '[{\"added\": {}}]', 11, 1),
(17, '2022-04-12 00:39:01.156668', '1', 'Borderauxdelivraison object (1)', 2, '[]', 11, 1),
(18, '2022-04-12 00:39:48.284297', '2', 'Borderauxdelivraison object (2)', 1, '[{\"added\": {}}]', 11, 1),
(19, '2022-04-12 00:40:30.410147', '3', 'Borderauxdelivraison object (3)', 1, '[{\"added\": {}}]', 11, 1),
(20, '2022-04-12 00:41:19.193426', '4', 'Borderauxdelivraison object (4)', 1, '[{\"added\": {}}]', 11, 1),
(21, '2022-04-12 00:43:17.062703', '1', 'produits object (1)', 1, '[{\"added\": {}}]', 13, 1),
(22, '2022-04-12 00:44:13.076620', '2', 'produits object (2)', 1, '[{\"added\": {}}]', 13, 1),
(23, '2022-04-12 00:44:46.575742', '3', 'produits object (3)', 1, '[{\"added\": {}}]', 13, 1),
(24, '2022-04-12 00:45:45.559382', '4', 'produits object (4)', 1, '[{\"added\": {}}]', 13, 1),
(25, '2022-04-12 00:49:37.736598', '1', 'transactions object (1)', 1, '[{\"added\": {}}]', 12, 1),
(26, '2022-04-12 00:50:51.084363', '2', 'transactions object (2)', 1, '[{\"added\": {}}]', 12, 1),
(27, '2022-04-12 00:51:37.785329', '3', 'transactions object (3)', 1, '[{\"added\": {}}]', 12, 1),
(28, '2022-04-12 00:52:29.267537', '4', 'transactions object (4)', 1, '[{\"added\": {}}]', 12, 1),
(29, '2022-04-12 00:52:32.976141', '4', 'transactions object (4)', 2, '[]', 12, 1),
(30, '2022-04-12 00:53:12.915341', '5', 'transactions object (5)', 1, '[{\"added\": {}}]', 12, 1),
(31, '2022-04-15 13:37:28.375371', '1', 'transactions object (1)', 2, '[{\"changed\": {\"fields\": [\"Produit\"]}}]', 12, 1),
(32, '2022-04-15 13:37:51.463990', '2', 'transactions object (2)', 2, '[{\"changed\": {\"fields\": [\"Produit\"]}}]', 12, 1),
(33, '2022-04-15 13:38:00.149542', '3', 'transactions object (3)', 2, '[{\"changed\": {\"fields\": [\"Produit\"]}}]', 12, 1),
(34, '2022-04-15 13:38:10.234524', '5', 'transactions object (5)', 2, '[{\"changed\": {\"fields\": [\"Produit\"]}}]', 12, 1),
(35, '2022-04-15 13:38:19.011528', '6', 'transactions object (6)', 2, '[{\"changed\": {\"fields\": [\"Produit\"]}}]', 12, 1),
(36, '2022-04-15 21:24:17.379550', '1', 'vehicules object (1)', 2, '[{\"changed\": {\"fields\": [\"Marque\"]}}]', 7, 1),
(37, '2022-04-15 21:31:03.859499', '2', 'mohamed', 2, '[{\"changed\": {\"fields\": [\"Photo\"]}}]', 9, 1),
(38, '2022-04-15 21:31:24.867718', '3', 'salma', 2, '[{\"changed\": {\"fields\": [\"Photo\"]}}]', 9, 1),
(39, '2022-04-15 21:36:13.294370', '1', 'transactions object (1)', 2, '[{\"changed\": {\"fields\": [\"Vehicule\"]}}]', 12, 1),
(40, '2022-04-15 21:36:21.894843', '2', 'transactions object (2)', 2, '[{\"changed\": {\"fields\": [\"Vehicule\"]}}]', 12, 1),
(41, '2022-04-15 21:36:30.126384', '3', 'transactions object (3)', 2, '[{\"changed\": {\"fields\": [\"Vehicule\"]}}]', 12, 1),
(42, '2022-04-15 21:36:39.128730', '5', 'transactions object (5)', 2, '[{\"changed\": {\"fields\": [\"Vehicule\"]}}]', 12, 1),
(43, '2022-04-15 21:36:49.330332', '6', 'transactions object (6)', 2, '[{\"changed\": {\"fields\": [\"Vehicule\"]}}]', 12, 1),
(44, '2022-04-15 21:36:55.917514', '23', 'transactions object (23)', 2, '[{\"changed\": {\"fields\": [\"Vehicule\"]}}]', 12, 1),
(45, '2022-04-15 21:37:12.516358', '23', 'transactions object (23)', 2, '[{\"changed\": {\"fields\": [\"Chauffeur\"]}}]', 12, 1),
(46, '2022-04-15 21:37:36.633921', '24', 'transactions object (24)', 2, '[{\"changed\": {\"fields\": [\"Vehicule\"]}}]', 12, 1),
(47, '2022-04-18 22:28:26.162608', '6', 'admin@gmail.com', 2, '[{\"changed\": {\"fields\": [\"Phone\"]}}]', 8, 1),
(48, '2022-04-18 22:41:58.028553', '7', 'test@gmail.com', 1, '[{\"added\": {}}]', 8, 1),
(49, '2022-04-18 22:53:43.343308', '7', 'test@gmail.com', 3, '', 8, 1),
(50, '2022-04-18 22:54:21.587395', '8', 'test@gmail.com', 1, '[{\"added\": {}}]', 8, 1),
(51, '2022-04-18 22:55:01.113008', '6', 'admin@gmail.com', 2, '[]', 8, 1),
(52, '2022-04-19 00:02:28.105941', '1', 'ons123@gmail.com', 2, '[{\"changed\": {\"fields\": [\"Phone\"]}}]', 8, 1),
(53, '2022-04-19 00:02:48.649825', '1', 'ons123@gmail.com', 3, '', 8, 1),
(54, '2022-04-19 02:07:00.914601', '4', 'ahlem123@gmail.com', 3, '', 8, 1),
(55, '2022-04-19 04:26:48.452858', '9', 'ons123@gmail.com', 2, '[{\"changed\": {\"fields\": [\"Phone\"]}}]', 8, 1),
(56, '2022-04-19 04:27:00.985500', '9', 'ons123@gmail.com', 2, '[]', 8, 1),
(57, '2022-04-19 20:52:52.223344', '10', 'ahlem123@gmail.com', 2, '[{\"changed\": {\"fields\": [\"Phone\"]}}]', 8, 1),
(58, '2022-04-20 02:46:09.820280', '6', 'admin@gmail.com', 2, '[]', 8, 1),
(59, '2022-04-20 02:51:57.366767', '6', 'admin@gmail.com', 3, '', 8, 1),
(60, '2022-04-28 01:31:08.441580', '10', 'ahlem123@gmail.com', 2, '[{\"changed\": {\"fields\": [\"Phone\"]}}]', 8, 1),
(61, '2022-05-08 21:35:50.525590', '7', 'produits object (7)', 2, '[{\"changed\": {\"fields\": [\"Mois\"]}}]', 13, 1),
(62, '2022-05-08 21:36:04.759255', '4', 'produits object (4)', 2, '[{\"changed\": {\"fields\": [\"Mois\"]}}]', 13, 1),
(63, '2022-05-08 21:36:14.714714', '3', 'produits object (3)', 2, '[{\"changed\": {\"fields\": [\"Mois\"]}}]', 13, 1),
(64, '2022-05-08 21:36:22.575309', '2', 'produits object (2)', 2, '[{\"changed\": {\"fields\": [\"Mois\"]}}]', 13, 1),
(65, '2022-05-08 21:36:30.729267', '1', 'produits object (1)', 2, '[{\"changed\": {\"fields\": [\"Mois\"]}}]', 13, 1),
(66, '2022-05-08 22:21:49.723666', '9', 'produits object (9)', 1, '[{\"added\": {}}]', 13, 1),
(67, '2022-05-08 23:53:25.750501', '10', 'produits object (10)', 1, '[{\"added\": {}}]', 13, 1),
(68, '2022-05-08 23:55:59.547665', '11', 'produits object (11)', 1, '[{\"added\": {}}]', 13, 1),
(69, '2022-05-08 23:57:02.992197', '12', 'produits object (12)', 1, '[{\"added\": {}}]', 13, 1),
(70, '2022-05-08 23:57:43.293771', '13', 'produits object (13)', 1, '[{\"added\": {}}]', 13, 1),
(71, '2022-05-08 23:58:32.543020', '14', 'produits object (14)', 1, '[{\"added\": {}}]', 13, 1),
(72, '2022-05-09 00:07:16.892253', '15', 'produits object (15)', 1, '[{\"added\": {}}]', 13, 1),
(73, '2022-05-09 00:29:20.512871', '15', 'produits object (15)', 2, '[{\"changed\": {\"fields\": [\"Mois\"]}}]', 13, 1),
(74, '2022-05-09 00:29:28.250938', '14', 'produits object (14)', 2, '[{\"changed\": {\"fields\": [\"Mois\"]}}]', 13, 1),
(75, '2022-05-09 00:29:36.199974', '13', 'produits object (13)', 2, '[{\"changed\": {\"fields\": [\"Mois\"]}}]', 13, 1),
(76, '2022-05-09 00:29:42.951046', '12', 'produits object (12)', 2, '[{\"changed\": {\"fields\": [\"Mois\"]}}]', 13, 1),
(77, '2022-05-09 00:29:49.584618', '11', 'produits object (11)', 2, '[{\"changed\": {\"fields\": [\"Mois\"]}}]', 13, 1),
(78, '2022-05-09 00:29:55.612539', '10', 'produits object (10)', 2, '[{\"changed\": {\"fields\": [\"Mois\"]}}]', 13, 1),
(79, '2022-05-09 00:29:55.802242', '10', 'produits object (10)', 2, '[]', 13, 1),
(80, '2022-05-09 00:30:02.495909', '9', 'produits object (9)', 2, '[{\"changed\": {\"fields\": [\"Mois\"]}}]', 13, 1),
(81, '2022-05-09 00:30:07.514186', '9', 'produits object (9)', 2, '[]', 13, 1),
(82, '2022-05-09 00:30:13.709623', '7', 'produits object (7)', 2, '[{\"changed\": {\"fields\": [\"Mois\"]}}]', 13, 1),
(83, '2022-05-09 00:30:18.097673', '9', 'produits object (9)', 2, '[]', 13, 1),
(84, '2022-05-09 00:30:24.591980', '4', 'produits object (4)', 2, '[{\"changed\": {\"fields\": [\"Mois\"]}}]', 13, 1),
(85, '2022-05-09 00:30:31.405533', '2', 'produits object (2)', 2, '[{\"changed\": {\"fields\": [\"Mois\"]}}]', 13, 1),
(86, '2022-05-09 00:30:38.847506', '1', 'produits object (1)', 2, '[{\"changed\": {\"fields\": [\"Mois\"]}}]', 13, 1),
(87, '2022-05-09 20:35:36.522317', '3', 'te32718@gmail.com', 3, '', 8, 1),
(88, '2022-05-09 20:38:01.378211', '5', 'mohamed123@gmail.com', 3, '', 8, 1),
(89, '2022-05-09 20:38:26.532375', '13', 'mohamed123@gmail.com', 1, '[{\"added\": {}}]', 8, 1),
(90, '2022-05-09 20:38:57.702025', '2', 'khouloud@gmail.com', 3, '', 8, 1),
(91, '2022-05-20 19:56:33.211420', '15', 'rayen@gmail.com', 3, '', 8, 1),
(92, '2022-05-24 22:58:41.190519', '13', 'mohamed123@gmail.com', 3, '', 8, 1),
(93, '2022-05-25 11:12:53.664086', '1', 'stockcoton object (1)', 1, '[{\"added\": {}}]', 33, 1);

-- --------------------------------------------------------

--
-- Structure de la table `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'auth', 'user'),
(21, 'BackEnd', 'administrateur'),
(29, 'BackEnd', 'besoins'),
(11, 'BackEnd', 'borderauxdelivraison'),
(31, 'BackEnd', 'bordereauxlivraisonintrant'),
(9, 'BackEnd', 'chauffeurs'),
(14, 'BackEnd', 'clients'),
(19, 'BackEnd', 'code'),
(27, 'BackEnd', 'cozoc'),
(30, 'BackEnd', 'facturecoton'),
(15, 'BackEnd', 'facturedeproduction'),
(32, 'BackEnd', 'facturelivraisonintrant'),
(13, 'BackEnd', 'produits'),
(25, 'BackEnd', 'responsablecgi'),
(26, 'BackEnd', 'responsabledepontbacule'),
(24, 'BackEnd', 'responsabledeproduction'),
(23, 'BackEnd', 'responsablefinancier'),
(22, 'BackEnd', 'responsablelogistique'),
(20, 'BackEnd', 'stock'),
(33, 'BackEnd', 'stockcoton'),
(16, 'BackEnd', 'test'),
(28, 'BackEnd', 'ticketdepese'),
(12, 'BackEnd', 'transactions'),
(10, 'BackEnd', 'usines'),
(8, 'BackEnd', 'utilisateurs'),
(7, 'BackEnd', 'vehicules'),
(5, 'contenttypes', 'contenttype'),
(17, 'django_twilio', 'caller'),
(18, 'django_twilio', 'credential'),
(6, 'sessions', 'session');

-- --------------------------------------------------------

--
-- Structure de la table `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'BackEnd', '0001_initial', '2022-04-11 23:57:17.627347'),
(2, 'BackEnd', '0002_alter_vehicules_poid', '2022-04-11 23:57:19.124175'),
(3, 'BackEnd', '0003_livre', '2022-04-11 23:57:19.515282'),
(4, 'BackEnd', '0004_delete_livre', '2022-04-11 23:57:19.700564'),
(5, 'BackEnd', '0005_utilisateurs', '2022-04-11 23:57:19.945192'),
(6, 'BackEnd', '0006_chauffeurs', '2022-04-11 23:57:20.227740'),
(7, 'BackEnd', '0007_chauffeurs_permis_chauffeurs_salaire', '2022-04-11 23:57:20.464079'),
(8, 'BackEnd', '0008_chauffeurs_photo', '2022-04-11 23:57:20.585191'),
(9, 'BackEnd', '0009_rename_téléphone_chauffeurs_phone', '2022-04-11 23:57:20.703552'),
(10, 'BackEnd', '0010_alter_chauffeurs_photo', '2022-04-11 23:57:20.751480'),
(11, 'BackEnd', '0011_rename_téléphone_utilisateurs_phone', '2022-04-11 23:57:20.870518'),
(12, 'BackEnd', '0012_usines', '2022-04-11 23:57:21.118516'),
(13, 'BackEnd', '0013_utilisateurs_is_active_utilisateurs_is_staff_and_more', '2022-04-11 23:57:21.504608'),
(14, 'BackEnd', '0014_borderauxdelivraison', '2022-04-11 23:57:21.776846'),
(15, 'BackEnd', '0015_transactions', '2022-04-11 23:57:22.949494'),
(16, 'BackEnd', '0016_remove_transactions_chauffeur', '2022-04-11 23:57:23.423428'),
(17, 'BackEnd', '0017_transactions_chauffeur', '2022-04-11 23:57:24.767383'),
(18, 'BackEnd', '0018_utilisateurs_last_login', '2022-04-11 23:57:24.946571'),
(19, 'BackEnd', '0019_alter_utilisateurs_email', '2022-04-11 23:57:25.226979'),
(20, 'BackEnd', '0020_user', '2022-04-11 23:57:25.496040'),
(21, 'BackEnd', '0021_alter_utilisateurs_password', '2022-04-11 23:57:26.274064'),
(22, 'BackEnd', '0022_delete_user', '2022-04-11 23:57:26.464047'),
(23, 'BackEnd', '0023_produits', '2022-04-11 23:57:26.760221'),
(24, 'BackEnd', '0024_alter_produits_quantite', '2022-04-11 23:57:27.637937'),
(25, 'BackEnd', '0025_produits_emplacement', '2022-04-11 23:57:28.433317'),
(26, 'BackEnd', '0026_remove_produits_image', '2022-04-11 23:57:28.554004'),
(27, 'BackEnd', '0027_produits_image', '2022-04-11 23:57:28.718676'),
(28, 'contenttypes', '0001_initial', '2022-04-11 23:57:29.435121'),
(29, 'auth', '0001_initial', '2022-04-11 23:57:40.326410'),
(30, 'admin', '0001_initial', '2022-04-11 23:57:42.630730'),
(31, 'admin', '0002_logentry_remove_auto_add', '2022-04-11 23:57:42.693743'),
(32, 'admin', '0003_logentry_add_action_flag_choices', '2022-04-11 23:57:42.741959'),
(33, 'contenttypes', '0002_remove_content_type_name', '2022-04-11 23:57:43.615735'),
(34, 'auth', '0002_alter_permission_name_max_length', '2022-04-11 23:57:44.901514'),
(35, 'auth', '0003_alter_user_email_max_length', '2022-04-11 23:57:45.366787'),
(36, 'auth', '0004_alter_user_username_opts', '2022-04-11 23:57:45.512680'),
(37, 'auth', '0005_alter_user_last_login_null', '2022-04-11 23:57:47.050460'),
(38, 'auth', '0006_require_contenttypes_0002', '2022-04-11 23:57:47.131486'),
(39, 'auth', '0007_alter_validators_add_error_messages', '2022-04-11 23:57:47.182310'),
(40, 'auth', '0008_alter_user_username_max_length', '2022-04-11 23:57:47.297976'),
(41, 'auth', '0009_alter_user_last_name_max_length', '2022-04-11 23:57:47.414787'),
(42, 'auth', '0010_alter_group_name_max_length', '2022-04-11 23:57:47.584042'),
(43, 'auth', '0011_update_proxy_permissions', '2022-04-11 23:57:47.645697'),
(44, 'auth', '0012_alter_user_first_name_max_length', '2022-04-11 23:57:47.768689'),
(45, 'sessions', '0001_initial', '2022-04-11 23:57:48.352816'),
(46, 'BackEnd', '0028_alter_transactions_codeproduit', '2022-04-12 00:48:08.938338'),
(47, 'BackEnd', '0029_clients', '2022-04-12 02:08:18.655091'),
(48, 'BackEnd', '0030_facturedeproduction', '2022-04-12 02:27:09.423931'),
(49, 'BackEnd', '0031_rename_codeproduit_transactions_codeproduit_id', '2022-04-13 01:20:47.333718'),
(50, 'BackEnd', '0032_rename_codeproduit_id_transactions_codeproduit', '2022-04-13 01:27:23.369531'),
(51, 'BackEnd', '0033_test', '2022-04-13 01:31:47.600083'),
(52, 'BackEnd', '0034_delete_test', '2022-04-13 01:37:05.287452'),
(53, 'BackEnd', '0035_rename_codeproduit_transactions_produit', '2022-04-13 15:10:55.652322'),
(54, 'BackEnd', '0036_rename_produit_transactions_produits', '2022-04-14 23:25:04.902463'),
(55, 'BackEnd', '0037_alter_transactions_produits', '2022-04-15 00:31:36.819524'),
(56, 'BackEnd', '0038_remove_transactions_produits_transactions_produit', '2022-04-15 00:37:42.458642'),
(57, 'BackEnd', '0039_rename_produit_transactions_produits', '2022-04-15 00:41:08.478953'),
(58, 'BackEnd', '0040_remove_transactions_produits_transactions_produit', '2022-04-15 13:33:33.432836'),
(59, 'BackEnd', '0041_remove_vehicules_chauffeur', '2022-04-15 21:10:12.539357'),
(60, 'BackEnd', '0042_vehicules_marque', '2022-04-15 21:21:17.306737'),
(61, 'BackEnd', '0043_transactions_vehicule', '2022-04-15 21:34:56.898662'),
(62, 'BackEnd', '0044_facturedeproduction_datedecreation', '2022-04-17 22:04:58.946450'),
(63, 'BackEnd', '0045_alter_facturedeproduction_numfacture', '2022-04-17 23:03:38.176160'),
(64, 'django_twilio', '0001_initial', '2022-04-18 21:42:31.835249'),
(65, 'django_twilio', '0002_auto_20220418_2242', '2022-04-18 21:42:33.871133'),
(66, 'BackEnd', '0046_code', '2022-04-18 22:17:19.224917'),
(67, 'BackEnd', '0047_auto_20220429_0202', '2022-04-29 01:02:49.707709'),
(68, 'BackEnd', '0048_alter_produits_mois', '2022-05-09 00:36:18.281856'),
(69, 'BackEnd', '0049_alter_produits_mois', '2022-05-09 00:36:20.804663'),
(70, 'BackEnd', '0050_alter_produits_mois', '2022-05-09 00:36:22.826547'),
(71, 'BackEnd', '0051_alter_stock_mois', '2022-05-17 11:15:52.720605'),
(72, 'BackEnd', '0052_alter_utilisateurs_role', '2022-05-20 16:24:17.516207'),
(73, 'BackEnd', '0053_administrateur', '2022-05-20 16:47:21.551093'),
(74, 'BackEnd', '0054_responsablelogistique', '2022-05-20 16:55:25.311632'),
(75, 'BackEnd', '0055_responsablefinancier', '2022-05-20 17:01:59.617435'),
(76, 'BackEnd', '0056_responsabledeproduction', '2022-05-20 17:08:30.658641'),
(77, 'BackEnd', '0057_alter_utilisateurs_role', '2022-05-20 17:10:13.735293'),
(78, 'BackEnd', '0058_responsablecgi', '2022-05-20 17:15:53.081810'),
(79, 'BackEnd', '0059_responsabledepontbacule', '2022-05-20 17:25:07.097071'),
(80, 'BackEnd', '0060_cozoc', '2022-05-20 17:31:10.377906'),
(81, 'BackEnd', '0061_ticketdepese', '2022-05-20 18:41:52.963287'),
(82, 'BackEnd', '0062_besoins', '2022-05-24 10:27:07.138861'),
(83, 'BackEnd', '0063_facturecoton', '2022-05-24 10:27:07.456047'),
(84, 'BackEnd', '0064_bordereauxlivraisonintrant', '2022-05-24 18:26:05.252052'),
(85, 'BackEnd', '0065_facturelivraisonintrant', '2022-05-24 21:37:18.202298'),
(86, 'BackEnd', '0066_stockcoton', '2022-05-25 10:51:51.387051'),
(87, 'BackEnd', '0067_auto_20220525_1211', '2022-05-25 11:11:24.007699'),
(88, 'BackEnd', '0068_rename_emplacement_stockcoton_usine', '2022-05-25 12:44:28.770801');

-- --------------------------------------------------------

--
-- Structure de la table `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('2zwkv7wfuc8yftpskgm8s8apxeq4lzg4', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1ns8kz:tx4_AY_JHznzUCGrbWaLsFnz_vbduAKopYkUB_NgJv8', '2022-06-03 19:57:53.313550'),
('6aeqtfquj6mrv1r4hx4luuol6zn7t7uk', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1ngzYT:ZKKvf9oaZKPqcnEDbepoYJDxCPfEPSqgRRcpMdFLioY', '2022-05-04 01:54:53.298745'),
('7037bh6vvkjtm6jmyrrmxa2p6im4kmq9', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1nnoYl:1YKnZSZFjlmZmL7YjsU2nxU8w4CatCE9HRcmFrG-eoY', '2022-05-22 21:35:23.705503'),
('7o0b6alkh3wazvf1x762feh9jysl10zy', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1ngzcf:8nMR0gruityU_hgwZgSEyKgrWumbRsTmfUyPd_2tOrU', '2022-05-04 01:59:13.762052'),
('8e58uoqjmhn99h9w11g6x6yfeixcxxzu', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1ngzaz:pemo2Ailv4qT5mqluHmuV_tmRwYqT3qeO0X7CbnNcwY', '2022-05-04 01:57:29.606090'),
('aknl1m7umfsgl1i2sxhrtxo8j0f7yzka', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1ntdQl:6hRVBV0S-jSip0WzWVuf0H1cgURgTRb5G-uVRyno4D4', '2022-06-07 22:55:11.214289'),
('arst6z7ye2mkl15nit5sh4sgkhoog1ns', '.eJxVjDsOgzAQRO_iOrIwXvxJmZ4zWGt7NyaJjIShinL3gESRTDnvzbxFwG0tYWu0hCmLq1Di8ttFTE-qB8gPrPdZprmuyxTlociTNjnOmV630_07KNjKvqbUo4bOWDQRNOVIQ-cNMygHChg6HtDRkJSzVveWvdeAezgaSoq9-HwB5iw4OQ:1nfNtx:fWuSUtKOr7hqATNYyetV8OPF-pJjsmOR-4_5i13Zsjw', '2022-04-29 15:30:25.234203'),
('b8vduimdsdwruhzzt0f32prelq3slj78', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1ni2iQ:79_dMKXi6SA2cPIv9BG4J7R5mlQukfds2j27ao7k3cY', '2022-05-06 23:29:30.062056'),
('bb2l1or8kegfx1kpsuki8ilr8zemvj08', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1nsjsW:Y6F2vv0YCD3hisr41yYcF8cdzCgO3Fdt4AU5kBS19KQ', '2022-06-05 11:36:08.659033'),
('bm5pzbjgrymltiz9ulv40sh0hhwyvf1f', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1nh0UL:UTYnpKmP1g0Tc1RDVfz2l7-Kdgml2a_SZTAHTe4cUaE', '2022-05-04 02:54:41.816566'),
('bweearlupclwgju45vbniyl8au50kksb', '.eJxVjDsOgzAQRO_iOrIwXvxJmZ4zWGt7NyaJjIShinL3gESRTDnvzbxFwG0tYWu0hCmLq1Di8ttFTE-qB8gPrPdZprmuyxTlociTNjnOmV630_07KNjKvqbUo4bOWDQRNOVIQ-cNMygHChg6HtDRkJSzVveWvdeAezgaSoq9-HwB5iw4OQ:1nfTQ2:QVo6JWXESiLG527cJYmsYG8sngJXANd8RwBsNMmGtRk', '2022-04-29 21:23:54.284477'),
('cady1u8dg7nkjm9g4jn2czoo4m12rq1q', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1nn337:10bDQfEgiB1y8T4Evk7UKtegXSDlS1FmpPt9cUA8a-s', '2022-05-20 18:51:33.994459'),
('cb9kuy3efdouvitg7ns503orov0f9tl5', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1nlJZO:Ty_kuQO69KkU0KP5iqqPozi2I-lFxsBB5QuLaHoy8c0', '2022-05-16 00:05:42.868972'),
('ccycuhyrqzrkhnauktkjz8d9drbc01tr', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1ns8jT:e5rVV0T6ExsmMxCvfii3KrpYeZ4N3gJcfLaP-14g2g8', '2022-06-03 19:56:19.825589'),
('dnmd7kuht42nwll8wb4yvcih8rpvdna3', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1nkBkY:ROEmsAmod7bFtkujUagpyS_zQall-Z82732KfXJ0QAU', '2022-05-12 21:32:34.544643'),
('f83ek5wb6mafghj58pf4tdizeh89ffdm', '.eJxVjDsOgzAQRO_iOrIwXvxJmZ4zWGt7NyaJjIShinL3gESRTDnvzbxFwG0tYWu0hCmLq1Di8ttFTE-qB8gPrPdZprmuyxTlociTNjnOmV630_07KNjKvqbUo4bOWDQRNOVIQ-cNMygHChg6HtDRkJSzVveWvdeAezgaSoq9-HwB5iw4OQ:1nfM5e:7p7EkJVuyvbjBMB9zD8KgR1zybVPiRZEKV7jT0cZS8k', '2022-04-29 13:34:22.313557'),
('fdoxhs5ao1qgdy40juygacz24u4uljwh', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1ngzgN:7-rrKX6mlbkSRcuoTxLnzmZZgwp2pbLfDIIrPWrR97I', '2022-05-04 02:03:03.117514'),
('gwgbslgajsan4ck11be7gy4wxg7zhm4x', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1nkXzk:8e5LE8fYJDpWr7gkCpWndJdUn_tMYBaup5cAQxwhMAo', '2022-05-13 21:17:44.574619'),
('h7xsesbyw6fe6raq8j1jgifd460tu9gl', '.eJxVjDsOgzAQRO_iOrIwXvxJmZ4zWGt7NyaJjIShinL3gESRTDnvzbxFwG0tYWu0hCmLq1Di8ttFTE-qB8gPrPdZprmuyxTlociTNjnOmV630_07KNjKvqbUo4bOWDQRNOVIQ-cNMygHChg6HtDRkJSzVveWvdeAezgaSoq9-HwB5iw4OQ:1ne4x1:2QAeiGB2E-sMKCUMLUSKFasHJWsDmd-v03XxZKUoYBI', '2022-04-26 01:04:11.738980'),
('hz5hhderu4ihyy09y0loo3saon8iw9x4', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1nskY7:KyDSyfadXU1-4dNknaVHU1WUJIRRfltiHAIJ8AlVwHY', '2022-06-05 12:19:07.416705'),
('i0gfxramhl9sqxcjicjj0t9z32gmlrws', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1nh0Lg:Ynr0g3xXPPsGTZnDmhDmn93TI-Ra5htIcFPEW0cFuHM', '2022-05-04 02:45:44.784317'),
('ie14k7g7rzt6bfkybeejrw2rvk1whozg', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1nsnEU:WE0jLyQg4ZkPngzIH2YTm33r5gdUA3QLByRSJ5dXHEo', '2022-06-05 15:11:02.504511'),
('jxnzwqodkzrofhkt0i159rb64q6ducf6', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1nk9vd:YAuRUPancOxPoH9ymd8FSXhSg1WoULBC35LEiFWlwUE', '2022-05-12 19:35:53.770540'),
('kb4u260vm0pcch6nczcntkroexwyq802', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1ns6gm:thetg7EMHMi3F-mXhmNXSFrPS2LhQML7vtaIU-ZsZ_s', '2022-06-03 17:45:24.754284'),
('kfbdvabmcgxt7g4gy68u9ectg7jwiaro', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1ngZou:xvx1PA0WDsdk6KM30ECrJTcVbRTKYv4eVEbhqXSqaBA', '2022-05-02 22:26:08.576043'),
('m1i0qx65300fik8xc6hww376s22lvmng', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1ngupI:LD9-1pSyDPfucA9jLOmYbu3WiagYmYimHrfCNddFEaM', '2022-05-03 20:51:56.201010'),
('m5cgwrc4yjy4lhe4o13pyyzerhuf289f', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1ns6f5:OS1tO7qW_-7gItSh-PSxftQHk_dQRMP-QkfiJU5r-5E', '2022-06-03 17:43:39.224098'),
('mwyz7w918lupb2v7zec8hdp3mpecrz19', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1nkANo:ilH9mwEqYRXBimI67o0WqtydfOr9XbJawwukoFcIwos', '2022-05-12 20:05:00.096628'),
('o68foky2qvappp3mc4exuvjpfodovgxf', '.eJxVjDsOgzAQRO_iOrIwXvxJmZ4zWGt7NyaJjIShinL3gESRTDnvzbxFwG0tYWu0hCmLq1Di8ttFTE-qB8gPrPdZprmuyxTlociTNjnOmV630_07KNjKvqbUo4bOWDQRNOVIQ-cNMygHChg6HtDRkJSzVveWvdeAezgaSoq9-HwB5iw4OQ:1ne42T:zQ1ovP1-zywPfanTAdLetXbOHbnuJ-wTg2HBqg62gBI', '2022-04-26 00:05:45.359513'),
('piqt6nxhda1pfp3uedplrzcl9nd1jwuj', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1ni2t9:ETul18knjHVyw3vgE5JBrjp553S6e1bB3SCuZClxhRQ', '2022-05-06 23:40:35.172759'),
('po1gcs7qcp8owa9o50rqyve6hn6kye7u', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1ngzhz:g__Rf31tpv-4xJWclmJ7Yav6wRaet5M5cnze7S07NYM', '2022-05-04 02:04:43.438874'),
('pu3f92khcuuwu7tgmlna8fb1uufutn9z', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1noLPa:YI90x14kEXZK_X-JYQ5Zc03Lplg6rTgVwAqA6xHVASU', '2022-05-24 08:40:06.441361'),
('qaln4igqwjxudzx5lbifei2asnjpb3ja', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1ns5er:D8FaHQuVeVcs5jMP8Jv85bbrquQ6wUiKnGOdUMJPyKg', '2022-06-03 16:39:21.759234'),
('s9qfux6cs1gzd3qq3cvk9p74qgy5l0m6', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1ngzjz:08R1kUxhKlZILXlNExzP8KtNcPmIN17t-YBdaP1SzZg', '2022-05-04 02:06:47.247301'),
('slt2pbzm354qdnrmdtj1dpz4dqxu2a79', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1nqry1:AzFpJUUo5LVIPLOec4-WhlTnwakjHec1EKWnZhC0V_E', '2022-05-31 07:50:05.942754'),
('stq0yz7zpb4rgi38igkj3inkndaucw5l', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1njsyd:BQX1yccAlAkNyX_PPy6XWW8R5kFXPtIK12FA_elIzh8', '2022-05-12 01:29:51.816276'),
('t3xhucl4jv5lak68ew43lnaiwlmb9ely', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1ntovz:bXawK09X6_abyObsc4dCWfi1IVnv5lOpbslG0LyIYqo', '2022-06-08 11:12:11.475605'),
('tfp4qypev5iy8jyl9sak1wu3utpkm0u9', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1ns7BA:v82ceIhIGMIQIIytiXKIyRNaGQykC7utryduv1i7taQ', '2022-06-03 18:16:48.177918'),
('tthuqzjlhuxk0zun5vnk96x6sjc2rsrl', '.eJxVjDsOgzAQRO_iOrIwXvxJmZ4zWGt7NyaJjIShinL3gESRTDnvzbxFwG0tYWu0hCmLq1Di8ttFTE-qB8gPrPdZprmuyxTlociTNjnOmV630_07KNjKvqbUo4bOWDQRNOVIQ-cNMygHChg6HtDRkJSzVveWvdeAezgaSoq9-HwB5iw4OQ:1neRl9:7teMPntCh5itfrGu00eVsrPmMlG4m6It5weJCcLaEAo', '2022-04-27 01:25:27.186455'),
('v48zfynvedhse81o8eira9pvhdinu4ku', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1ntdVU:gj8Ns5J-L_Ptf-5AtfgiJoDi4gDdKL_mwaKLIEspPNM', '2022-06-07 23:00:04.240258'),
('wgi1ysvae68kibbundv5mqp520m9pv3w', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1nsRXF:YicKAg5JjkxlBTAutfUq4c4mM9NTJW8Hry6sy457o1A', '2022-06-04 16:00:57.818806'),
('wmpd32ag8a77cljpmm122yni1s2mp02u', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1ntdTy:dURLpD6kFq3ox8RQcWPMRemDmnkOq9DgLdL2VZzpIZg', '2022-06-07 22:58:30.906314'),
('wvxqzn1tqmr5q8a22knftflxrt3il55p', '.eJxVjEEOwiAQRe_C2pChhUJduu8ZyAwMUjWQlHZlvLtt0oVu_3vvv4XHbc1-a7z4OYqrUOLyuxGGJ5cDxAeWe5WhlnWZSR6KPGmTU438up3u30HGlvfaUQAaGQwaB7a3NsWBILK2VmttXMJBY6egd6QCOEUj7EWgHq1KzJ34fAHWoze9:1ni2TL:GHC3p7ExY9sWxqo22UkYA0CQRaQtUXU_eCTY90ojLok', '2022-05-06 23:13:55.189285');

-- --------------------------------------------------------

--
-- Structure de la table `django_twilio_caller`
--

CREATE TABLE `django_twilio_caller` (
  `id` bigint(20) NOT NULL,
  `blacklisted` tinyint(1) NOT NULL,
  `phone_number` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `django_twilio_credential`
--

CREATE TABLE `django_twilio_credential` (
  `id` bigint(20) NOT NULL,
  `name` varchar(30) NOT NULL,
  `account_sid` varchar(34) NOT NULL,
  `auth_token` varchar(32) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Index pour la table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Index pour la table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Index pour la table `auth_user`
--
ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Index pour la table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  ADD KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`);

--
-- Index pour la table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  ADD KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`);

--
-- Index pour la table `backend_besoins`
--
ALTER TABLE `backend_besoins`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `backend_borderauxdelivraison`
--
ALTER TABLE `backend_borderauxdelivraison`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `backend_bordereauxlivraisonintrant`
--
ALTER TABLE `backend_bordereauxlivraisonintrant`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `backend_chauffeurs`
--
ALTER TABLE `backend_chauffeurs`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `backend_clients`
--
ALTER TABLE `backend_clients`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `backend_code`
--
ALTER TABLE `backend_code`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Index pour la table `backend_facturecoton`
--
ALTER TABLE `backend_facturecoton`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `backend_facturedeproduction`
--
ALTER TABLE `backend_facturedeproduction`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `BackEnd_facturedeproduction_numFacture_b449410a_uniq` (`numFacture`),
  ADD KEY `BackEnd_facturedepro_client_id_b0a9818e_fk_BackEnd_c` (`client_id`),
  ADD KEY `BackEnd_facturedepro_produit_id_d5842762_fk_BackEnd_p` (`produit_id`);

--
-- Index pour la table `backend_facturelivraisonintrant`
--
ALTER TABLE `backend_facturelivraisonintrant`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `backend_produits`
--
ALTER TABLE `backend_produits`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `backend_stock`
--
ALTER TABLE `backend_stock`
  ADD PRIMARY KEY (`id`),
  ADD KEY `BackEnd_stock_emplacement_id_08192b51_fk_BackEnd_usines_id` (`emplacement_id`);

--
-- Index pour la table `backend_stockcoton`
--
ALTER TABLE `backend_stockcoton`
  ADD PRIMARY KEY (`id`),
  ADD KEY `BackEnd_stockcoton_usine_id_02ac9824_fk_BackEnd_usines_id` (`usine_id`);

--
-- Index pour la table `backend_ticketdepese`
--
ALTER TABLE `backend_ticketdepese`
  ADD PRIMARY KEY (`id`),
  ADD KEY `BackEnd_ticketdepese_vehicule_id_ae28928c_fk_BackEnd_v` (`vehicule_id`);

--
-- Index pour la table `backend_transactions`
--
ALTER TABLE `backend_transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `BackEnd_transactions_chauffeur_id_a3998cbf_fk_BackEnd_c` (`chauffeur_id`),
  ADD KEY `BackEnd_transactions_produit_id_d0170250_fk_BackEnd_produits_id` (`produit_id`),
  ADD KEY `BackEnd_transactions_vehicule_id_59b6cc48_fk_BackEnd_v` (`vehicule_id`);

--
-- Index pour la table `backend_usines`
--
ALTER TABLE `backend_usines`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `backend_utilisateurs`
--
ALTER TABLE `backend_utilisateurs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `BackEnd_utilisateurs_email_49240aa9_uniq` (`email`);

--
-- Index pour la table `backend_vehicules`
--
ALTER TABLE `backend_vehicules`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`);

--
-- Index pour la table `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Index pour la table `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Index pour la table `django_twilio_caller`
--
ALTER TABLE `django_twilio_caller`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `phone_number` (`phone_number`);

--
-- Index pour la table `django_twilio_credential`
--
ALTER TABLE `django_twilio_credential`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=133;

--
-- AUTO_INCREMENT pour la table `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `backend_besoins`
--
ALTER TABLE `backend_besoins`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `backend_borderauxdelivraison`
--
ALTER TABLE `backend_borderauxdelivraison`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `backend_bordereauxlivraisonintrant`
--
ALTER TABLE `backend_bordereauxlivraisonintrant`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `backend_chauffeurs`
--
ALTER TABLE `backend_chauffeurs`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `backend_clients`
--
ALTER TABLE `backend_clients`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `backend_code`
--
ALTER TABLE `backend_code`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `backend_facturecoton`
--
ALTER TABLE `backend_facturecoton`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `backend_facturedeproduction`
--
ALTER TABLE `backend_facturedeproduction`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `backend_facturelivraisonintrant`
--
ALTER TABLE `backend_facturelivraisonintrant`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `backend_produits`
--
ALTER TABLE `backend_produits`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT pour la table `backend_stock`
--
ALTER TABLE `backend_stock`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `backend_stockcoton`
--
ALTER TABLE `backend_stockcoton`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `backend_ticketdepese`
--
ALTER TABLE `backend_ticketdepese`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `backend_transactions`
--
ALTER TABLE `backend_transactions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT pour la table `backend_usines`
--
ALTER TABLE `backend_usines`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `backend_utilisateurs`
--
ALTER TABLE `backend_utilisateurs`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `backend_vehicules`
--
ALTER TABLE `backend_vehicules`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- AUTO_INCREMENT pour la table `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT pour la table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

--
-- AUTO_INCREMENT pour la table `django_twilio_caller`
--
ALTER TABLE `django_twilio_caller`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `django_twilio_credential`
--
ALTER TABLE `django_twilio_credential`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Contraintes pour la table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Contraintes pour la table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Contraintes pour la table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Contraintes pour la table `backend_code`
--
ALTER TABLE `backend_code`
  ADD CONSTRAINT `BackEnd_code_user_id_041ae257_fk_BackEnd_utilisateurs_id` FOREIGN KEY (`user_id`) REFERENCES `backend_utilisateurs` (`id`);

--
-- Contraintes pour la table `backend_facturedeproduction`
--
ALTER TABLE `backend_facturedeproduction`
  ADD CONSTRAINT `BackEnd_facturedepro_client_id_b0a9818e_fk_BackEnd_c` FOREIGN KEY (`client_id`) REFERENCES `backend_clients` (`id`),
  ADD CONSTRAINT `BackEnd_facturedepro_produit_id_d5842762_fk_BackEnd_p` FOREIGN KEY (`produit_id`) REFERENCES `backend_produits` (`id`);

--
-- Contraintes pour la table `backend_stock`
--
ALTER TABLE `backend_stock`
  ADD CONSTRAINT `BackEnd_stock_emplacement_id_08192b51_fk_BackEnd_usines_id` FOREIGN KEY (`emplacement_id`) REFERENCES `backend_usines` (`id`);

--
-- Contraintes pour la table `backend_stockcoton`
--
ALTER TABLE `backend_stockcoton`
  ADD CONSTRAINT `BackEnd_stockcoton_usine_id_02ac9824_fk_BackEnd_usines_id` FOREIGN KEY (`usine_id`) REFERENCES `backend_usines` (`id`);

--
-- Contraintes pour la table `backend_ticketdepese`
--
ALTER TABLE `backend_ticketdepese`
  ADD CONSTRAINT `BackEnd_ticketdepese_vehicule_id_ae28928c_fk_BackEnd_v` FOREIGN KEY (`vehicule_id`) REFERENCES `backend_vehicules` (`id`);

--
-- Contraintes pour la table `backend_transactions`
--
ALTER TABLE `backend_transactions`
  ADD CONSTRAINT `BackEnd_transactions_chauffeur_id_a3998cbf_fk_BackEnd_c` FOREIGN KEY (`chauffeur_id`) REFERENCES `backend_chauffeurs` (`id`),
  ADD CONSTRAINT `BackEnd_transactions_produit_id_d0170250_fk_BackEnd_produits_id` FOREIGN KEY (`produit_id`) REFERENCES `backend_produits` (`id`),
  ADD CONSTRAINT `BackEnd_transactions_vehicule_id_59b6cc48_fk_BackEnd_v` FOREIGN KEY (`vehicule_id`) REFERENCES `backend_vehicules` (`id`);

--
-- Contraintes pour la table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Contraintes pour la table `django_twilio_credential`
--
ALTER TABLE `django_twilio_credential`
  ADD CONSTRAINT `django_twilio_credential_user_id_29c9a22d_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;



