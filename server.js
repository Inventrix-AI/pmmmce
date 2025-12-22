const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// API Endpoint for Contact Form
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Received contact form submission:', { name, email, message });

    // Here you would typically save to DB or send email

    res.json({ success: true, message: 'Message received successfully!' });
});

// Serve index.html for all other routes (SPA fallback, though this is MPA)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
