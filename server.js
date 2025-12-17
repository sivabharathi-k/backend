const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');

dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.json({ message: 'Student Management API is running!' });
});

app.use('/api/student', studentRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});