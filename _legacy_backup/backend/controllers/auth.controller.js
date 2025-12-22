const db = require('../models');
const User = db.User;
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        const user = await User.create({ email, password, role });
        res.status(201).send({ message: "User registered successfully!" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email: email } });

        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }

        const passwordIsValid = await user.validatePassword(password);

        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'secret', {
            expiresIn: 86400 // 24 hours
        });

        res.status(200).send({
            id: user.id,
            email: user.email,
            role: user.role,
            accessToken: token
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
