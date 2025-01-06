# Gestion des Produits et Catégories

Ce projet est une API développée avec Node.js et Express pour gérer des produits et des catégories. L'API permet d'effectuer des opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) pour les produits et les catégories, et est connectée à une base de données MySQL.

## Fonctionnalités

- Gestion des catégories
  - Ajouter, afficher, modifier et supprimer des catégories.
- Gestion des produits
  - Ajouter, afficher, modifier et supprimer des produits.
  - Chaque produit est associé à une catégorie.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés :

- **Node.js** (version 14 ou supérieure)
- **MySQL** (ou XAMPP/MAMP si vous utilisez un serveur local)
- **npm** (gestionnaire de paquets Node)

## Installation

### 1. Cloner le repository

```bash
git clone https://github.com/votre-utilisateur/partiel-api.git

2. Installation des dépendances
Dans le répertoire de votre projet, exécutez la commande suivante pour installer les dépendances nécessaires :

cd Partiel_Api
npm install

3. Configuration de la base de données
Base de données MySQL : Assurez-vous que MySQL est installé et que vous avez une base de données prête.
Créez une base de données gestion_produits dans MySQL ou dans phpMyAdmin.
Assurez-vous que votre fichier db.js dans le répertoire config est correctement configuré pour se connecter à votre base de données.

4. Importer les données
Pour ajouter des catégories et des produits à la base de données, vous pouvez utiliser les requêtes POST pour insérer des données via l'API.

Exemple de requêtes à envoyer pour ajouter des catégories et des produits :

Ajouter une catégorie

Endpoint : POST /categories

Exemple de requête (JSON) :

{
    "name": "Electronique"
}
Ajouter un produit

Endpoint : POST /products

Exemple de requête (JSON) :

{
    "name": "Smartphone",
    "price": 499,
    "category_id": 1
}

5. Lancer l'application
Lancez le serveur avec la commande suivante :

npm start
L'application sera disponible sur http://localhost:3000.

Routes API

Catégories
GET /categories : Récupérer toutes les catégories.
POST /categories : Ajouter une nouvelle catégorie.
PUT /categories/:id : Mettre à jour une catégorie.
DELETE /categories/:id : Supprimer une catégorie.
Produits
GET /products : Récupérer tous les produits.
POST /products : Ajouter un nouveau produit.
PUT /products/:id : Mettre à jour un produit.
DELETE /products/:id : Supprimer un produit.

Structure des fichiers
├── app.js                 # Serveur Express
├── config
│   └── db.js              # Configuration de la base de données MySQL
├── controllers
│   ├── categoryController.js
│   └── productController.js
├── models
│   ├── Category.js
│   └── Product.js
├── routes
│   ├── categoryRoutes.js
│   └── productRoutes.js       # Styles de la page
├── package.json           # Dépendances du projet
└── README.md              # Documentation du projet

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.
```
