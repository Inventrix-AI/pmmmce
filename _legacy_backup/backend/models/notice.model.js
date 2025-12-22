const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Notice = sequelize.define('Notice', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        link: {
            type: DataTypes.STRING,
            allowNull: true // For external links or PDF uploads
        },
        date: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        category: {
            type: DataTypes.ENUM('general', 'exam', 'tender', 'press'),
            defaultValue: 'general'
        }
    });

    return Notice;
};
