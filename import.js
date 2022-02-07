// In your index.js
const { initializeApp, restore } = require('firestore-export-import')
const serviceAccount = require('./environments/target-key.json');

// Initiate Firebase App
initializeApp(serviceAccount);

// Start importing your data
// The array of date, location and reference fields are optional
restore(process.argv[2], {
  // TODO: date & geo field in envs.
  // dates: ['date1', 'date1.date2', 'date1.date2.date3'],
  // geos: ['location', 'locations'],
  // refs: ['refKey', 'arrayRef'],
})