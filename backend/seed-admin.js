const { sequelize } = require('./src/config/database');
const { User } = require('./src/models');
const bcrypt = require('bcryptjs');

const seedAdmin = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected.');

        // Sync (Ensure table exists)
        await sequelize.sync();

        // Check if admin exists
        const adminEmail = 'admin@pmmmce.com';
        const existingAdmin = await User.findOne({ where: { email: adminEmail } });

        if (existingAdmin) {
            console.log('Admin user already exists.');
        } else {
            console.log('Creating admin user...');
            const hashedPassword = await bcrypt.hash('admin123', 10);
            await User.create({
                email: adminEmail,
                password: hashedPassword,
                role: 'admin'
            });
            console.log('Admin user created successfully.');
            console.log('Email: admin@pmmmce.com');
            console.log('Password: admin123');
        }

    } catch (error) {
        console.error('Seeding failed:', error);
    } finally {
        await sequelize.close();
    }
};

seedAdmin();
