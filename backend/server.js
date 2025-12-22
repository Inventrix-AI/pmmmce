require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./src/routes/auth.routes');
const noticeRoutes = require('./src/routes/notice.routes');
const facultyRoutes = require('./src/routes/faculty.routes');
const uploadRoutes = require('./src/routes/upload.routes');

// Mount Routes
app.use('/api/auth', authRoutes);
app.use('/api/notices', noticeRoutes);
app.use('/api/faculty', facultyRoutes);
app.use('/api/upload', uploadRoutes);

// Static Uploads
app.use('/uploads', express.static('uploads'));

// Basic Route
app.get('/', (req, res) => {
    res.json({ message: 'PMMMCE Backend API Initialized', status: 'Active' });
});

// DB Connection
const { sequelize, testConnection } = require('./src/config/database');
testConnection();

// Sync Database (Force: false to preserve data)
sequelize.sync({ force: false }).then(() => {
    console.log('Database synced');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
