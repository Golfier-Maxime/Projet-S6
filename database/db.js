const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

// Créez une instance de la base de données SQLite ou ouvrez-la si elle existe déjà.
const db = new sqlite3.Database('OA_DB.db');

// Lisez le fichier create_tables.sql et exécutez-le
const createTablesSQL = fs.readFileSync('create_tables.sql', 'utf-8');
db.exec(createTablesSQL, (err) => {
  if (err) {
    console.error('Erreur lors de la création des tables :', err.message);
  } else {
    console.log('Tables créées avec succès.');
    
    // Lisez le fichier insert_data.sql et exécutez-le pour insérer des données
    const insertDataSQL = fs.readFileSync('insert_data.sql', 'utf-8');
    db.exec(insertDataSQL, (err) => {
      if (err) {
        console.error('Erreur lors de l\'insertion de données :', err.message);
      } else {
        console.log('Données insérées avec succès.');
      }

      // Fermez la base de données après avoir exécuté les scripts
      db.close();
    });
  }
});