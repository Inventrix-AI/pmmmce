require('dotenv').config();
const express = require('express');
const cors = require('cors');
// Import Models
const db = require('./models'); // Assuming a models/index.js file that sets up db and sequelize
const sequelize = db.sequelize; // Assuming sequelize instance is exposed via db
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve Static Uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to PMMMCE API', status: 'Running' });
});

// Import Routes
const authRoutes = require('./routes/auth.routes');
const noticeRoutes = require('./routes/notice.routes');
const uploadRoutes = require('./routes/upload.routes');
const facultyRoutes = require('./routes/faculty.routes');

app.use('/api/auth', authRoutes);
app.use('/api/notices', noticeRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/faculty', facultyRoutes);

// Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
