const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json()); 
const contactSchema = new mongoose.Schema({
        type: String, 
        required: [true, 'First name is required'], 
        trim: true 
    },
    lastName: { 
        type: String, 
        trim: true 
    },
    email: { 
        type: String, 
        required: [true, 'Email is required'], 
        unique: true, 
        trim: true,
        lowercase: true,
        match: [/^\s*[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}\s*$/, 'Please fill a valid email address']
    },
    phoneNumber: { 
        type: String, 
        required: [true, 'Phone number is required'],
        trim: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

const Contact = mongoose.model('Contact', contactSchema);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Successfully connected to MongoDB.'))
    .catch((error) => console.error('MongoDB connection error:', error));
app.post('/api/contacts', async (req, res) => {
    try {
        const { firstName, lastName, phoneNumber, email } = req.body;

        const existingContact = await Contact.findOne({ email });
        if (existingContact) {
            return res.status(400).json({ 
                success: false, 
                message: 'A user with this email already exists.' 
            });
        }

        const newContact = new Contact({
            firstName,
            lastName,
            phoneNumber,
            email
        });

        const savedContact = await newContact.save();

        res.status(201).json({
            success: true,
            message: 'Contact data collected successfully!',
            data: savedContact
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error collecting contact data.',
            error: error.message
        });
    }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
