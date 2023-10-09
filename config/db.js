
const MongoClient = require('mongodb').MongoClient;
const dbName = 'departments_db';
const url = 'mongodb://localhost:27017/';

async function connectToMongoDB() {
    try {
      const client = await MongoClient.connect(url, { useNewUrlParser: true });
      console.log('Connecté à MongoDB');
  
      const db = client.db(dbName);
  
      module.exports = { client, db };
    } catch (err) {
      console.error('Erreur de connexion à MongoDB :', err);
    }
  }
  connectToMongoDB();

