// Importing necessary modules
const express = require('express');
const pool = require('../config/db');
const router = express.Router();

// Route to fetch all links
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM links');
    res.json(result.rows); // Return all links as a JSON array
  } catch (err) {
    console.error('Error fetching links:', err);
    res.status(500).json({ error: 'Error fetching links' }); // Return an error if the query fails
  }
});

// Route to add a new link
router.post('/', async (req, res) => {
  const { name, url, description } = req.body;
  const query = 'INSERT INTO links (name, url, description) VALUES ($1, $2, $3) RETURNING id';
  try {
    const result = await pool.query(query, [name, url, description]);
    res.status(201).json({ id: result.rows[0].id, name, url, description }); // Return the newly created link
  } catch (err) {
    console.error('Error adding link:', err);
    res.status(500).json({ error: 'Error adding link' }); // Return an error if the insertion fails
  }
});

// Route to update an existing link
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, url, description } = req.body;
  const query = 'UPDATE links SET name = $1, url = $2, description = $3 WHERE id = $4';
  try {
    await pool.query(query, [name, url, description, id]);
    res.json({ id, name, url, description }); // Return the updated link
  } catch (err) {
    console.error('Error updating link:', err);
    res.status(500).json({ error: 'Error updating link' }); // Return an error if the update fails
  }
});

// Route to delete a link
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM links WHERE id = $1';
  try {
    await pool.query(query, [id]);
    res.json({ message: 'Link deleted.' }); // Return a success message upon deletion
  } catch (err) {
    console.error('Error deleting link:', err);
    res.status(500).json({ error: 'Error deleting link' }); // Return an error if the deletion fails
  }
});

module.exports = router;
