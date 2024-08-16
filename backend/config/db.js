// Importing the pg module to interact with PostgreSQL
const { Pool } = require('pg');

// Creating a new pool of connections to the PostgreSQL database
const pool = new Pool({
  host: 'localhost',  // PostgreSQL server address
  user: 'postgres',   // PostgreSQL username
  password: 'yourpassword', // PostgreSQL password
  database: 'social_media_links', // Database name
  port: 5432 // Default port for PostgreSQL
});

// Exporting the pool for use in other parts of the application
module.exports = pool;
