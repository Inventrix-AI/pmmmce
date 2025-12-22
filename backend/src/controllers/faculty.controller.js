const db = require('../models');
const Faculty = db.Faculty;

exports.create = async (req, res) => {
    try {
        const faculty = await Faculty.create(req.body);
        res.status(201).send(faculty);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const faculty = await Faculty.findAll({
            order: [['display_order', 'ASC']]
        });
        res.send(faculty);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        await Faculty.update(req.body, { where: { id: id } });
        res.send({ message: "Faculty updated successfully." });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        await Faculty.destroy({ where: { id: id } });
        res.send({ message: "Faculty deleted successfully!" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
