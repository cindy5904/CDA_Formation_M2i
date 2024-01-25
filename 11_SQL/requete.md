SELECT *
FROM users;
SELECT first_name, last_name, job 
FROM users;

SELECT *
FROM users
WHERE job !='Developer';

SELECT * 
FROM users
WHERE first_name = 'John';

SELECT * 
FROM users 
WHERE salary >= 3000;

SELECT * 
FROM users 
WHERE age < 30 OR age >= 35;

SELECT * 
FROM users 
WHERE job = 'Teacher' AND salary > 2600;

SELECT * 
FROM users
WHERE (birth_location = 'New York') AND (salary >= 3000 AND salary <= 3500) 
AND NOT (job = 'Doctor' OR job ='Lawyer');

SELECT * 
from users
where job = 'Engineer';

SELECT first_name, last_name 
from users 
where birth_location IN ('Londres', 'Paris', 'Berlin');

SELECT * 
FROM users
WHERE age BETWEEN '25' AND '35';

SELECT * 
FROM users
WHERE job = 'developer' AND salary > 2500;

SELECT * 
FROM users
ORDER BY age DESC
limit 5;

SELECT *
FROM users 
Order by first_name ASC
LIMIT 5 offset 5;

-- 1.Affichez toutes les colonnes de la table "Users" pour tous les utilisateurs.
SELECT * 
FROM users;

-- 2.Sélectionnez les noms et prénoms des utilisateurs nés à New York ou à Paris.
SELECT first_name, last_name 
FROM users 
WHERE birth_location = 'New York' OR 'Paris';

-- 3.Affichez les utilisateurs dont le travail est "Developer" ou "Designer".
SELECT * 
FROM users
WHERE job IN ('Developer', 'Designer');

-- 4.Sélectionnez les utilisateurs dont l'âge est supérieur à 30 ans.
SELECT *
FROM users
WHERE age > 30;

-- 5.Affichez les utilisateurs dont le salaire est compris entre 2500 et 3000.
SELECT * 
FROM users
WHERE salary BETWEEN 2500 AND 3000;

--  6.Sélectionnez les utilisateurs dont le travail n'est ni "Developer" ni "Designer".
SELECT * 
FROM users 
WHERE NOT job IN ('Designer', 'Developer');

--  7.Affichez les utilisateurs triés par ordre alphabétique du nom de famille, puis du prénom.
SELECT * 
FROM users 
ORDER BY last_name ASC, first_name ASC;

-- 8.Sélectionnez les utilisateurs nés avant l'année 1990.
SELECT *
FROM users
WHERE birth_date < '1990-01-01';

-- 9. Affichez les utilisateurs dont le lieu de naissance est "London" ou "Berlin" et dont le travail est "Designer".
SELECT * 
FROM users
WHERE birth_location IN ('London', 'Berlin') AND job = 'Designer';

-- 10. Sélectionnez les 10 utilisateurs avec les salaires les plus élevés.
SELECT *
FROM users 
ORDER BY salary DESC
LIMIT 10;

-- 11. Affichez les noms, prénoms et âges des utilisateurs nés entre 1980 et 1990.
SELECT last_name, first_name, age
FROM users
WHERE birth_date BETWEEN '1980-01-01' AND '1990-01-01';

-- 12. Sélectionnez les utilisateurs par ordre décroissant d'âge.
SELECT * 
FROM users 
ORDER BY age DESC;

-- 13. Sélectionnez les utilisateurs dont le travail est "Doctor" et dont le salaire est supérieur à 3000.
SELECT * 
FROM users
WHERE job = 'Doctor' AND salary > 3000;

-- 14. Affichez les utilisateurs triés par lieu de naissance, puis par salaire.
SELECT * 
FROM users 
ORDER BY birth_location, salary;

-- 15. Sélectionnez les utilisateurs nés à Paris et dont le travail est "Lawyer".
SELECT * 
FROM users
WHERE birth_location = 'Paris' AND job = 'Lawyer';

-- 16. Affichez le salaire le plus bas de tout les utilisateurs en utilisant un alias.
SELECT MIN(salary) AS BasSalaire 
FROM users;

-- 17. Sélectionnez les utilisateurs nés après l'année 1985 et dont le travail est "Engineer".
SELECT * 
FROM users
WHERE birth_date > '1985-12-31' AND job ='Engineer';

-- 18. Affichez les utilisateurs dont le prénom est "John" et le nom de famille est "Doe".
SELECT * 
FROM users 
WHERE first_name = 'John' AND last_name ='Doe';

-- 19. Sélectionnez les 6 utilisateurs dont le salaire est le plus bas en omettant les trois premiers résultats.
SELECT * 
FROM users 
ORDER BY salary ASC
LIMIT 6
OFFSET 3;

-- 20. Affichez les utilisateurs par ordre croissant d'âge, limités aux 5 premiers.
SELECT * 
FROM users
ORDER BY age ASC
LIMIT 5;

-- Quel est le salaire le plus bas
SELECT MIN(salary) AS Bas_Salaire
FROM users;

-- Quel est l'âge max parmi les utilisateurs ayant le métier "Engineer"
SELECT MAX(age) AS max_age
FROM users
WHERE job ='Engineer';

-- Trouvez le salaire moyen des utilisateurs dont le métiers est "Teacher"
SELECT AVG(salary) AS salaire_moyen
FROM users
WHERE job ='Teacher';

-- Trouver le montant total des salaires de tous
SELECT SUM(salary) AS total_salaire
FROM users;

-- Selectionnez les utilisateurs ayant un prénom qui commence par d
SELECT * 
FROM users 
WHERE first_name LIKE 'D%';

-- Trouvez les utilisateurs dont le nom de famille se termine par son
SELECT * 
FROM users 
WHERE last_name LIKE '%son';

-- Identifiez les utilisateurs dont le prenom contient exactement 5 caractère
SELECT * 
FROM users
WHERE first_name LIKE '_____';

-- Selectionnez les utilisateurs ayant doctor dans leur métiers
SELECT * 
FROM users 
WHERE job LIKE '%Doctor%';

-- 1. **Affichez le nombre d'utilisateurs par lieu de naissance, mais ne montrez que les lieux avec plus d'un' utilisateur.**
SELECT birth_location, COUNT(*)
FROM users
GROUP BY birth_location
HAVING COUNT(*) > 1;

-- 2. **Sélectionnez la profession et la moyenne des salaires pour chaque profession, mais ne montrez que celles avec une moyenne de salaire supérieure à 2500.**
SELECT job, AVG(salary)
FROM users
GROUP BY job
HAVING AVG(salary) > 2500;

-- 3. **Affichez la somme des salaires pour chaque lieu de naissance, mais ne montrez que les lieux dont la somme des salaires est supérieure à 5000.**
SELECT birth_location, SUM(salary) AS salaire
FROM users
GROUP BY birth_location 
HAVING salaire > 5000;

-- 4. **Sélectionnez la date de naissance et le nombre d'utilisateurs nés à chaque date, mais ne montrez que les dates où il y a plus d'un utilisateur né.**
SELECT birth_date, COUNT(*)
FROM users
GROUP BY birth_date
HAVING COUNT(*) > 1;

-- 5. **Affichez la profession, le lieu de naissance, et le salaire maximum pour chaque profession et lieu, mais ne montrez que les résultats où le salaire maximum est supérieur à 3000.**
SELECT job, birth_location, MAX(salary)
FROM users
GROUP BY job, birth_location
HAVING MAX(salary) > 3000;
