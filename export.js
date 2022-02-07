/**
 * Script to import-export collections accross firestore of firebase projects.
 *
 * - Mainly used in @italanta projects for moving translation files
 * 
 * @see https://github.com/dalenguyen/firestore-backup-restore
 */
const { initializeApp, backup } = require('firestore-export-import');
const fs = require('fs');

// env type :: { sourcEnv: string (read from); targetEnv: string (send too); store?: boolean (store copy on disk) }
const env = require('environments/environment.js');
const serviceAccount = require(env.sourceEnv);


// Initiate Firebase App
initializeApp(serviceAccount);

// Export file
backup(env.sourceCollectionName).then((data) => {
  const fileName = `output/${new Date().getTime()}_${env.sourceEnvName}`;
  fs.writeFileSync(fileName, JSON.stringify(data));

  console.log('Success!');
});
