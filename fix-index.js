const mongoose = require('mongoose');
require('dotenv').config();

const fixIndex = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB');
        
        // Drop the problematic id index
        const db = mongoose.connection.db;
        await db.collection('students').dropIndex('id_1');
        console.log('✅ Dropped id_1 index successfully');
        
        process.exit(0);
    } catch (error) {
        console.log('Error:', error.message);
        process.exit(1);
    }
};

fixIndex();