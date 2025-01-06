const db = require('../config/db');


const getAllCategories = (callback) => {
  db.query('SELECT * FROM categories', (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};


const createCategory = (name, callback) => {
  db.query('INSERT INTO categories (name) VALUES (?)', [name], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};


const updateCategory = (id, name, callback) => {
  db.query('UPDATE categories SET name = ? WHERE id = ?', [name, id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};


const deleteCategory = (id, callback) => {
  db.query('DELETE FROM categories WHERE id = ?', [id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

module.exports = { getAllCategories, createCategory, updateCategory, deleteCategory };
