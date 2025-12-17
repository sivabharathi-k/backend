const mongoose = require('mongoose');
require('dotenv').config();

const testConnection = async () => {
    try {
        console.log('Testing connection to:', process.env.MONGO_URL);
        await mongoose.connect(process.env.MONGO_URL);
        console.log('✅ Connected to MongoDB Atlas successfully!');
        process.exit(0);
    } catch (error) {
        console.log('❌ Connection failed:', error.message);
        process.exit(1);
    }
};

testConnection();