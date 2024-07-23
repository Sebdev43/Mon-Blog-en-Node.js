# Mon Blog en Node.js

## Description

Bienvenue dans mon projet de blog développé en Node.js. Ce projet a été réalisé dans le cadre de ma formation chez O'clock et représente un exercice pratique pour mettre en application mes compétences en développement backend avec Express.js et en gestion des vues avec EJS. Le blog permet de consulter une liste d'articles et de lire chaque article en détail.

## Fonctionnalités

- Affichage de la liste des articles.
- Consultation du détail de chaque article.
- Utilisation de templates EJS pour le rendu côté serveur.
- Gestion des routes avec Express.js.

## Structure du Projet

- `server.js` : Fichier principal pour démarrer le serveur Express.
- `router.js` : Fichier définissant les routes pour l'application.
- `controller.js` : Fichier contrôleur gérant la logique des routes.
- `views/` : Dossier contenant les fichiers de vue EJS (index.ejs, article.ejs, header.ejs).
- `data/` : Dossier contenant le fichier JSON des articles (articles.json).
- `public/` : Dossier pour les fichiers statiques (CSS, images, etc.).

Technologies Utilisées

- Node.js : Environnement d'exécution pour JavaScript côté serveur.
- Express.js : Framework web pour Node.js.
- EJS : Moteur de templates pour générer le HTML.
- JSON : Format de données pour stocker les articles.

## Installation et Exécution

1. Cloner le dépôt :

```bash
git clone https://github.com/votre-nom-utilisateur/nom-du-depot.git
cd nom-du-depot
```

2. Installer les dépendances :

```bash
npm install
```

3. Démarrer le serveur :

```bash
npm start
```

4. Accéder à l'application :

Ouvrez votre navigateur et allez à http://localhost:3000.

## Auteur

- Sebdev43 : Développeur Web Full Stack en formation chez O'clock.
