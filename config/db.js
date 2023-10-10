const mongoose = require('mongoose');

/* const dbName = 'departments_db'; */
const url = 'mongodb://localhost:27017/departments_db';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connecté à MongoDB');
  })
  .catch((err) => {
    console.error('Erreur de connexion à MongoDB :', err);
  });

module.exports = mongoose.connection;

