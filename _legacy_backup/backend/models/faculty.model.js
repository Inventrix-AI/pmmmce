const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Faculty = sequelize.define('Faculty', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        designation: {
            type: DataTypes.STRING,
            allowNull: true
        },
        department: {
            type: DataTypes.STRING,
            allowNull: true
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        bio: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        display_order: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    });

    return Faculty;
};
