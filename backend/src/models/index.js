const { sequelize } = require('../config/database');

const db = {};

db.Sequelize = sequelize;
db.sequelize = sequelize;

// Import Models
db.User = require('./user.model')(sequelize, require('sequelize'));
db.Notice = require('./notice.model')(sequelize, require('sequelize'));
db.Faculty = require('./faculty.model')(sequelize, require('sequelize'));

module.exports = db;
