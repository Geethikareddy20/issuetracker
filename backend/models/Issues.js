import mongoose from 'mongoose';

const issueSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ['Open', 'In Progress', 'Closed'], default: 'Open' },
    priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Low' },
    due: { type: String, default: '' }
}, { timestamps: true });

const Issue = mongoose.model('Issue', issueSchema);
export default Issue;