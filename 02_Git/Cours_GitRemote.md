## Utiliser Git en remote 

Pour connecter un référenciel Git local à Github, vous devez suivre ces quelques étapes:

1. **Créer un compte GitHub:** Si vous n'avez pas déjà de compte GitHub, rendez-vous sur https://github.com et créez-en un.

2. **Installer Git:** Si Git n'est pas déjà installé sur voutre ordinateur, téléchargez-le et installez-le à partir du site officiel: https://git-scm.com/downloads.

3. **Configurer Git:** Avant de pouvoir utiliser Git avec GitHub, vous devez configurer votre nom d'utilisateur et votre mail de façon locale. Vous pouvez le faire ne exécutant ces commandes sur votre terminal:

```bash
git config --global user.name "votre nom"
git config --global user.mail "votre@email.com"
```

4. **Créer un nouveau référentiel sur GitHub** Connectez-vous à votre compte GitHub, cliquez sur le bouton "+" en haut de l'écran pour créer un nouveau référentiel (repository). Suivez les étapes pour le configurer selon vos besoins.

5. **Clonez le référenciel GitHub en local:** Pour clonez le référentiel GitHub sur votre ordinateur, utilisez la commande `git clone` en spécifiant l'url du référentiel distant: 

```bash
git clone URL_du_référentiel
```

6. **Travaillez sur votre projet localement:** Vous pouvez maintenant travailler sur votre projet localement en ajoutant, modifiant et supprimant des fichiers dans la répertoire cloné. 

7. **Validez et publiez vos midifications:** Une fois que vous avez effectué des modifications que vous souhaitez envoyer sur GitHub, vous devez ajouter ces modifications (add), valider les changements (commit) et le pousser vers le repo distant (push), en l'occurence  Github. Par exemple:

```bash
git add . 
git commit -m "description"
git push origin main
```

Assurez-vous dee remplacer `main` par la branche que vous souhaitez pousser si vous travaillez sur une branche différente.

8. **Consultez votre référentiel sur GitHub:** Après avoir poussé vos modifications, vous pouvez vous rendre sur votre référentiel GitHub pour voir les changements en ligne.
Votre référentiel Git local est maintenant connecté à GitHub, et vous pouvez continuer à travailler sur votre projet tout en collaborant avec d'autres personnes via GitHub.

 ## Envoyer son projet sur GitHub sans Git Clone 
 Pour rattacher un référentiel distant à un dossier sans utiliser `git clone`, vous pouvez utiliser la commande `git remote` pour ajouter un dépôt distant et `git fetch` pour récupérer **les références** du dépôt distant: 

 1. **Créer un référentiel distant sur GitHub si ce n'est pas déjà fait**

 2. **Dans votre dossier local, initialiser un repo Git**

 3. **Ajouter le référentiel distant en  utilisant `git remote add` :**

 ```bash
 git remote add nom_perso_distant url_du_referentiel

 ```

 Remplacez `nom_perso_distant` par le nom que vous souhaitez (par exemple, origin) et vous récupérez l'url suur GitHub.
 Si vous avez fait une erreur et que vous souhaitez supprimer un remote, utilisez la commande `git remote remove nom_du_remote`

 4. **Vérifiez que le référentiel distant a été ajouté avec succès**

```bash
git remote -v
``` 

Cela affichera les URL des référentiels distants que vous avez configurés.

5. **Récupérez les références du dépôts avec `git fetch`:**

 ```bash
 git fetch nom_distant
 ```

Cela récupérera les informations sur les branches et les tafs du référentiel distant, mais ne fusionnera pas automatiquement les modifications dans votre branche locale.

6.**Ensuite, pour travailler avec les modifications du référentiel distant, vous pouvez créer une branche locale qui suiit une branche distante avec `git checkout`**

```bash
git checkout -b nom_de_votre_branche_locale origin/nom_de_la_branche_distante
```

Vous avez maintenant connecté un référentiel distant à votre dossier local sans utiliser `git clone`

## le git pull

```bash
git pull branche_distante  branche_locale

#Exemple 
git pull origin main
```

Lorsque vous exécutez `git pull`, ces étapes se succèdent:
1. Git commence par exécuter une opération `git fetch` pour récupérer toutes les modifications depuis la branche distante spécifiée. Cela met à jour les références distantes dans votre dépôt local pour refléter l'état actuel du dépôt distant, mais à ce moment là, on ne modifie pas encore saa branche locale.

2. Fusion automatique:  Après avoir récupéré les informations distantes, Git exécute automatiquement une opération de fusion (ou de rebase, si vous lui spécifiez) pour intégrer les modifications récupérées dans votre branche locale. Si git détecte des conflits entre les modifications distantes et locale, il vous demandera de les résoudre manuellement avant de terminer la fusion.

3. Finalisation: Une fois que la fusion (ou la rebase) est réussie, votre branche locale est mise à jour avec les dernières modifications de la branche distante.
Votre arborescence de travail reflète désormais l'état actuel de la branche distante.
