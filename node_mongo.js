const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ContactMethod = require('./ContactMethod'); 

const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/contact_db')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.post('/contacts', async (req, res) => {
    try {
        const { type, value, isPrimary } = req.body;
        const newContact = new ContactMethod({ type, value, isPrimary });
        await newContact.save();
        res.status(201).json({ success: true, data: newContact });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
app.get('/contacts', async (req, res) => {
    try {
        const contacts = await ContactMethod.find();
        res.status(200).json({ success: true, data: contacts });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
app.put('/contacts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        
        const contact = await ContactMethod.findByIdAndUpdate(id, updatedData, { new: true });
        if (!contact) return res.status(404).json({ success: false, message: 'Contact not found' });
        
        res.status(200).json({ success: true, data: contact });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
app.delete('/contacts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await ContactMethod.findByIdAndDelete(id);
        if (!contact) return res.status(404).json({ success: false, message: 'Contact not found' });
        
        res.status(200).json({ success: true, message: 'Contact method deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
