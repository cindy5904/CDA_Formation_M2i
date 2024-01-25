- Etape 1 :  Création de la Base de Données et des Tables
CREATE DATABASE tabletoptreasures_database;

USE tabletoptreasures_database;

CREATE TABLE Clients (
	id_client INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    adresse_mail VARCHAR(150) UNIQUE NOT NULL,
    adresse_de_livraison VARCHAR(255),
    telephone VARCHAR(15)
    );

CREATE TABLE Categories (
	id_categorie INT AUTO_INCREMENT PRIMARY KEY,
    nom_categorie VARCHAR(150) NOT NULL
    ); 
    
CREATE TABLE Jeux (
	id_jeux INT AUTO_INCREMENT PRIMARY KEY,
    id_categorie INT,
    nom_jeux VARCHAR(100) NOT NULL,
    descriptions TEXT,
    prix FLOAT NOT NULL,
	FOREIGN KEY (id_categorie) REFERENCES Categories (id_categorie)
    ); 
    
CREATE TABLE Commandes (
	id_commande INT AUTO_INCREMENT PRIMARY KEY,
    id_client INT NOT NULL,
    date_de_commande DATE NOT NULL,
    adresse_de_livraison VARCHAR(255) NOT NULL,
    statut BOOL,
    FOREIGN KEY (id_client) REFERENCES Clients (id_client)
    );    
    
show tables;
-- Étape 2 : Opérations en DML

-- 1.  Insérez les enregistrements du fichier annexe dans les tables "Jeux", 
-- "Categories" et "Clients"

INSERT INTO Clients (nom, prenom, adresse_mail, adresse_de_livraison, telephone)
VALUE 
	('Dubois', 'Marie', 'marie.dubois@example.com', '123 Rue de la Libération, Ville', '+1234567890'),
	('Lefebvre', 'Thomas', 'thomas.lefebvre@example.com', '456 Avenue des Roses, Ville', '+9876543210'),
	('Martinez', 'Léa', 'lea.martinez@example.com', '789 Boulevard de la Paix, Ville', '+2345678901'),
	('Dupuis', 'Antoine', 'antoine.dupuis@example.com', '567 Avenue de la Liberté, Ville', '+3456789012'),
	('Morin', 'Camille', 'camille.morin@example.com', '890 Rue de l''Avenir, Ville', '+4567890123'),
	('Girard', 'Lucas', 'lucas.girard@example.com', '234 Avenue des Champs, Ville', '+5678901234'),
	('Petit', 'Emma', 'emma.petit@example.com', '123 Rue des Étoiles, Ville', '+6789012345'),
	('Sanchez', 'Gabriel', 'gabriel.sanchez@example.com', '345 Boulevard du Bonheur, Ville', '+7890123456'),
	('Rossi', 'Clara', 'clara.rossi@example.com', '678 Avenue de la Joie, Ville', '+8901234567'),
	('Lemoine', 'Hugo', 'hugo.lemoine@example.com', '456 Rue de la Nature, Ville', '+9012345678'),
	('Moreau', 'Eva', 'eva.moreau@example.com', '789 Avenue de la Créativité, Ville', '+1234567890'),
	('Fournier', 'Noah', 'noah.fournier@example.com', '234 Rue de la Découverte, Ville', '+2345678901'),
	('Leroy', 'Léa', 'lea.leroy@example.com', '567 Avenue de l''Imagination, Ville', '+3456789012'),
	('Robin', 'Lucas', 'lucas.robin@example.com', '890 Rue de la Création, Ville', '+4567890123'),
	('Marchand', 'Anna', 'anna.marchand@example.com', '123 Boulevard de l''Innovation, Ville', '+5678901234');
    
INSERT INTO Categories (nom_categorie)
VALUE 
	('Stratégie'),
	('Familial'),
	('Aventure');
    
INSERT INTO Jeux (nom_jeux, descriptions, prix, id_categorie)
VALUE 
	('Catan', 'Jeu de stratégie et de développement de colonies', 30, 1),
	('Dixit', 'Jeu d''association d''images', 25, 2),
	('Les Aventuriers', 'Jeu de plateau d''aventure', 40, 3),
	('Carcassonne', 'Jeu de placement de tuiles', 28, 1),
	('Codenames', 'Jeu de mots et d''indices', 20, 2),
	('Pandemic', 'Jeu de coopération pour sauver le monde', 35, 3),
	('7 Wonders', 'Jeu de cartes et de civilisations', 29, 1),
	('Splendor', 'Jeu de développement économique', 27, 2),
	('Horreur à Arkham', 'Jeu d''enquête et d''horreur', 45, 3),
	('Risk', 'Jeu de conquête mondiale', 22, 1),
	('Citadelles', 'Jeu de rôles et de bluff', 23, 2),
	('Terraforming Mars', 'Jeu de stratégie de colonisation de Mars', 55, 3),
	('Small World', 'Jeu de civilisations fantastiques', 32, 1),
	('7 Wonders Duel', 'Jeu de cartes pour 2 joueurs', 26, 2),
	('Horreur à l''Outreterre', 'Jeu d''aventure horrifique', 38, 3);
    
-- Effectuez trois commandes en insérant une nouvelle entrée dans la table 
-- "Commandes". Assurez-vous d'inclure l'ID du client (créé précédemment), la 
-- date de commande, l'adresse de livraison et le statut de la commande    

INSERT INTO Commandes (id_client, date_de_commande, adresse_de_livraison, statut)
VALUE 
	(12, '2022-05-12', '123 rue de la Liberté, ville', 1),
    (5, '2023-06-23', '258 rue de Paris, ville', 0),
    (9, '2023-12-09', '32 rue de la Lys, ville', 1);
    
-- Mettez à jour le prix du jeu avec l'ID 3 (Les Aventuriers) pour le fixer à 35 €.

UPDATE Jeux
SET prix = 35
WHERE id_jeux = 3;

-- Supprimez le jeu avec l'ID 2 (Dixit) de la table "Jeux"
DELETE FROM jeux
WHERE id_jeux = 2;

-- Étape 3 : Requêtes SQL simples

-- Sélectionnez tous les noms de catégories distinctes

SELECT nom_categorie
FROM categories;

-- Montrez les catégories avec des noms commençant par "A" ou "S".

SELECT nom_categorie
FROM categories
WHERE nom_categorie LIKE 'A%' OR nom_categorie LIKE 'S%';

--  Quelles catégories ont un ID entre 2 et 5 inclus ?

SELECT *
FROM categories
WHERE id_categorie BETWEEN 2 AND 5;

-- Combien de catégories différentes existent ?

SELECT COUNT(nom_categorie)
FROM categories;

-- Quelle est la catégorie ayant le nom le plus long ?

SELECT nom_categorie
FROM categories
ORDER BY LENGTH(nom_categorie) DESC
LIMIT 1;

--  Montrez le nombre de jeux dans chaque catégorie.

SELECT c.nom_categorie, COUNT(j.id_jeux)
from categories AS c
LEFT JOIN jeux AS j
ON c.id_categorie = j.id_categorie
GROUP BY c.nom_categorie;

-- Affichez les catégories triées par ordre alphabétique inversé.

SELECT *
FROM categories
ORDER BY nom_categorie ASC;

--  Sélectionnez tous les noms de jeux distincts

SELECT nom_jeux
FROM jeux;

-- Montrez les jeux avec un prix entre 25 et 40

SELECT *
FROM jeux
WHERE prix BETWEEN 25 AND 40;

-- Quels jeux appartiennent à la catégorie avec l'ID 3 ?

SELECT *
FROM jeux
WHERE id_categorie = 3;

-- Combien de jeux ont une description contenant le mot "aventure" 

SELECT COUNT(*)
FROM jeux
WHERE descriptions LIKE '%aventure%';

-- Quel est le jeu le moins cher

SELECT *
FROM jeux
ORDER BY prix ASC
LIMIT 1;

-- Montrez la somme totale des prix de tous les jeux

SELECT SUM(prix) 
FROM jeux;

-- Affichez les jeux triés par ordre alphabétique des noms en limitant les résultats à  5

SELECT *
FROM jeux
ORDER BY nom_jeux
LIMIT 5;

-- Table "Clients" :
-- 1.  Sélectionnez tous les prénoms des clients distincts

SELECT prenom 
FROM clients;

-- Montrez les clients dont l'adresse contient "Rue" et dont le numéro de téléphone 
-- commence par "+1".

SELECT *
FROM clients
WHERE adresse_de_livraison LIKE '%Rue%' AND telephone LIKE '+1%';

SELECT c.nom , j.nom_jeux, co.date_de_commande
FROM commandes AS co
INNER JOIN clients AS c
ON co.id_client = c.id_client
INNER JOIN jeux AS j
ON co.id_jeux = j.id_clients;