// Importing necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initializing the Express app
const app = express();
const port = 5000;

// Middleware setup
app.use(cors()); // Enables Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parses incoming JSON requests

// Importing route handlers
const authRouter = require('./routes/auth');
const linksRouter = require('./routes/links');

// Setting up routes
app.use('/api', authRouter); // Authentication routes
app.use('/api/links', linksRouter); // Social media links management routes

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
