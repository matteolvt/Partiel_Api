const db = require('../config/db'); 

// Fonction pour récupérer tous les produits
const getAllProducts = (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur du serveur', error: err });
        }
        res.json(results);
    });
};

// Fonction pour créer un produit
const createProduct = (req, res) => {
    const { name, description, price, categoryId } = req.body;

    if (!name || !description || !price || !categoryId) {
        return res.status(400).json({ message: 'Tous les champs sont requis' });
    }

    db.query(
        'INSERT INTO products (name, description, price, categoryId) VALUES (?, ?, ?, ?)', 
        [name, description, price, categoryId], 
        (err, results) => {
            if (err) {
                return res.status(500).json({ message: 'Erreur du serveur', error: err });
            }
            res.status(201).json({ message: 'Produit créé avec succès', productId: results.insertId });
        }
    );
};

// Fonction pour mettre à jour un produit
const updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, description, price, categoryId } = req.body;

    db.query(
        'UPDATE products SET name = ?, description = ?, price = ?, categoryId = ? WHERE id = ?', 
        [name, description, price, categoryId, id], 
        (err, results) => {
            if (err) {
                return res.status(500).json({ message: 'Erreur du serveur', error: err });
            }
            res.json({ message: 'Produit mis à jour avec succès' });
        }
    );
};

// Fonction pour supprimer un produit
const deleteProduct = (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM products WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur du serveur', error: err });
        }
        res.json({ message: 'Produit supprimé avec succès' });
    });
};

module.exports = { getAllProducts, createProduct, updateProduct, deleteProduct };
