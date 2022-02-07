# Moving translation files

### 1. Exporting files
Before executing the command, make sure source-key.json is set to the desired environment from which to export.

> node export 

### 2. Importing files
Before executing the command, make sure target-key.json is set to the desired environment from which to export.

> node import './output/1644225955532_staging.json'

**Note:** The last argument is the file to import

#### bis - ENV Type
***environment.js*** allows you to configure what collection to export and import, and sets the environment names.

Example configuration:

const env = {
  sourceEnvName: 'staging',
  sourceCollectionName: 'langs',

  targetEnvName: 'production',
  targetCollectionName: 'langs',

  store: true
};