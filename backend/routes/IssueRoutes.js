const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define a Schema for Issues
const IssueSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    status: { type: String, default: 'Open' }
});

const Issue = mongoose.model('Issue', IssueSchema);

// GET all issues
router.get('/', async (req, res) => {
    try {
        const issues = await Issue.find();
        res.json(issues);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new issue
router.post('/', async (req, res) => {
    const newIssue = new Issue({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status || 'Open'
    });
    try {
        const savedIssue = await newIssue.save();
        res.status(201).json(savedIssue);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE an issue
router.delete('/:id', async (req, res) => {
    try {
        const result = await Issue.findByIdAndDelete(req.params.id);
        if (!result) return res.status(404).json({ message: "Issue not found" });
        res.json({ message: "Issue deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;