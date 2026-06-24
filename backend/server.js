const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const issueRoutes = require('./routes/IssueRoutes'); // Fixed relative path

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Essential for parsing JSON request bodies

// Database Connection (Replace with your local URI or MongoDB Atlas URI)
const MONGO_URI = 'mongodb://localhost:27017/issuetracker'; 
mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB database...'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

// Routes
app.use('/api/issues', issueRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running smoothly on port ${PORT}`);
});