const db = require('../models');
const Notice = db.Notice;

exports.create = async (req, res) => {
    try {
        const notice = await Notice.create(req.body);
        res.status(201).send(notice);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const { category } = req.query;
        let condition = category ? { category: category, is_active: true } : { is_active: true };

        const notices = await Notice.findAll({
            where: condition,
            order: [['date', 'DESC']]
        });
        res.send(notices);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        await Notice.update(req.body, { where: { id: id } });
        res.send({ message: "Notice was updated successfully." });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        await Notice.destroy({ where: { id: id } });
        res.send({ message: "Notice was deleted successfully!" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
