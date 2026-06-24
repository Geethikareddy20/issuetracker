import Issue from '../models/Issues.js';

export const getIssues = async (req, res) => {
    try {
        const issues = await Issue.find().sort({ createdAt: -1 });
        res.status(200).json(issues);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createIssue = async (req, res) => {
    const { title, description, status, priority, due } = req.body;
    try {
        const newIssue = new Issue({ title, description, status, priority, due });
        await newIssue.save();
        res.status(201).json(newIssue);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteIssue = async (req, res) => {
    const { id } = req.params;
    try {
        await Issue.findByIdAndDelete(id);
        res.status(200).json({ message: 'Issue deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};