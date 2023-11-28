// # Exercice 25

// Créez une expression régulière pour valider une adresse e-mail.

// Créez un programme pour tester toutes ces adresse mails :

// Adresses e-mail correctes :
// ```
// user@example.com
// john.doe123@example.co.uk
// alice_smith@company.net
// bob+jones@email.org
// contact@website.info
// ```

// Adresses e-mail incorrectes :
// ```
// user@example
// john.doe@.co.uk
// alice@company@net
// bob@jones@email.org
// contact@website.
// ```

// En utilisant .map() et ce que vous venez de faire,  passer d'un tableau contenant des adresses mail à un tableau contenant des booléens de validité des adresses


const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let emailArray = [
    "user@example.com",
    "john.doe123@example.co.uk",
    "alice_smith@company.net",
    "bob+jones@email.org",
    "contact@website.info",
    "user@example",
    "john.doe@.co.uk",
    "alice@company@net",
    "bob@jones@email.org",
    "contact@website."
];

let validationResults = emailArray.map((element) => re.test(element));

console.log(validationResults);





   







