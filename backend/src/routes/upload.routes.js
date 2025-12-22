const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');

router.post('/', upload.single('file'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send({ message: "Please upload a file!" });
        }

        // Construct public URL (assuming server serves /uploads static route)
        // In local dev: http://localhost:5000/uploads/filename
        const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;

        res.status(200).send({
            message: "File uploaded successfully",
            url: fileUrl,
            filename: req.file.filename
        });
    } catch (error) {
        res.status(500).send({ message: `Could not upload the file: ${error}` });
    }
});

module.exports = router;
