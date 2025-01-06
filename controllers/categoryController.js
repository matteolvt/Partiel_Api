const db = require('../config/db');

// Fonction pour récupérer toutes les catégories
const getAllCategories = (req, res) => {
    db.query('SELECT * FROM categories', (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur du serveur', error: err });
        }
        res.json(results);
    });
};

// Fonction pour créer une catégorie
const createCategory = (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: 'Le nom de la catégorie est requis' });
    }

    db.query(
        'INSERT INTO categories (name) VALUES (?)', 
        [name], 
        (err, results) => {
            if (err) {
                return res.status(500).json({ message: 'Erreur du serveur', error: err });
            }
            res.status(201).json({ message: 'Catégorie créée avec succès', categoryId: results.insertId });
        }
    );
};

// Fonction pour mettre à jour une catégorie
const updateCategory = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: 'Le nom de la catégorie est requis' });
    }

    db.query(
        'UPDATE categories SET name = ? WHERE id = ?', 
        [name, id], 
        (err, results) => {
            if (err) {
                return res.status(500).json({ message: 'Erreur du serveur', error: err });
            }
            res.json({ message: 'Catégorie mise à jour avec succès' });
        }
    );
};

// Fonction pour supprimer une catégorie
const deleteCategory = (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM categories WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur du serveur', error: err });
        }
        res.json({ message: 'Catégorie supprimée avec succès' });
    });
};

module.exports = { getAllCategories, createCategory, updateCategory, deleteCategory };
