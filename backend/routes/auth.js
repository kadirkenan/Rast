// Importing necessary modules
const express = require('express');
const pool = require('../config/db');
const router = express.Router();

// Login route handler
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // SQL query to check if the user exists with the given credentials
  const query = 'SELECT * FROM users WHERE username = $1 AND password = $2';
  try {
    const result = await pool.query(query, [username, password]);

    // If no user is found, return an unauthorized status
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // If user is found, return a success message
    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).json({ error: 'Error fetching user' }); // Return an error if the query fails
  }
});

module.exports = router;
