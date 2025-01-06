const db = require('../config/db');


const getAllProducts = (callback) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};


const createProduct = (name, price, category_id, callback) => {
  db.query('INSERT INTO products (name, price, category_id) VALUES (?, ?, ?)', [name, price, category_id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};


const updateProduct = (id, name, price, category_id, callback) => {
  db.query('UPDATE products SET name = ?, price = ?, category_id = ? WHERE id = ?', [name, price, category_id, id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};


const deleteProduct = (id, callback) => {
  db.query('DELETE FROM products WHERE id = ?', [id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

module.exports = { getAllProducts, createProduct, updateProduct, deleteProduct };
