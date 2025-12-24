const { sequelize } = require('./src/config/database');
const { User } = require('./src/models');

const resetAdmin = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected.');

        const adminEmail = 'admin@pmmmce.com';
        const newPassword = 'admin123';

        const adminUser = await User.findOne({ where: { email: adminEmail } });

        if (adminUser) {
            console.log(`Found user ${adminEmail}. Resetting password...`);
            // IMPORTANT: Do NOT hash here. The model hook (beforeUpdate) handles it!
            adminUser.password = newPassword;
            await adminUser.save();

            console.log('Password reset successfully (letting hooks handle hashing).');
            console.log(`Email: ${adminEmail}`);
            console.log(`New Password: ${newPassword}`);
        } else {
            console.log('Admin user not found! Creating one...');
            // IMPORTANT: Do NOT hash here. The model hook (beforeCreate) handles it!
            await User.create({
                email: adminEmail,
                password: newPassword,
                role: 'admin'
            });
            console.log('Admin user created successfully.');
        }

    } catch (error) {
        console.error('Reset failed:', error);
    } finally {
        await sequelize.close();
    }
};

resetAdmin();
