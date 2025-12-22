const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const { sequelize } = require('./src/config/database');
const { Notice, Faculty } = require('./src/models');

const seedContent = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected.');
        await sequelize.sync({ force: true }); // Force sync to update Enum definition

        // 1. Seed Notices
        console.log('Seeding Notices...');

        // Clear existing to avoid duplicates if re-run (optional, but good for dev)
        // await Notice.destroy({ where: {}, truncate: true });

        const notices = [
            // Campus News (Blue)
            {
                title: "Annual Sports Meet 2025 Scheduled for Jan 15th",
                category: "campus",
                date: new Date('2025-01-02'),
                content: "All students are informed that the Annual Sports Meet will be held..."
            },
            {
                title: "Workshop on 'Modern Pedagogical Skills' held",
                category: "campus",
                date: new Date('2024-12-28'),
                content: "A 3-day workshop was organized for B.Ed students..."
            },
            {
                title: "Independence Day Celebration Report",
                category: "campus",
                date: new Date('2024-08-16'),
                content: "Flag hoisting ceremony was conducted with great enthusiasm."
            },

            // Announcements (Green)
            {
                title: "Exam Form Submission Deadline Extended to Dec 30",
                category: "announcement",
                date: new Date('2024-12-25'),
                file_url: "#"
            },
            {
                title: "B.Ed 1st Semester Practical Exam Schedule",
                category: "announcement",
                date: new Date('2024-12-20'),
                file_url: "#"
            },
            {
                title: "Important Notice regarding Scholarship Applications",
                category: "announcement",
                date: new Date('2024-11-15'),
                file_url: "#"
            },

            // University News (Orange)
            {
                title: "VBSPU Convocation Ceremony Registration Open",
                category: "university",
                date: new Date('2025-01-05'),
                file_url: "#"
            },
            {
                title: "Change in University Academic Calendar 2025",
                category: "university",
                date: new Date('2024-12-10'),
                file_url: "#"
            },
            {
                title: "UGC Guidelines for New Education Policy Implementation",
                category: "university",
                date: new Date('2024-11-01'),
                file_url: "#"
            }
        ];

        for (const notice of notices) {
            await Notice.create(notice);
        }

        // 2. Seed Faculty
        console.log('Seeding Faculty...');
        // await Faculty.destroy({ where: {}, truncate: true });

        const faculty = [
            {
                name: "Dr. R.K. Sharma",
                designation: "Principal",
                department: "Administration",
                image_url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
                display_order: 1
            },
            {
                name: "Dr. Anjali Gupta",
                designation: "Assistant Professor",
                department: "Education",
                image_url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
                display_order: 2
            },
            {
                name: "Mr. Suresh Verma",
                designation: "Assistant Professor",
                department: "Pedagogy",
                image_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
                display_order: 3
            },
            {
                name: "Mrs. Sunita Rao",
                designation: "Lecturer",
                department: "Science",
                image_url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
                display_order: 4
            }
        ];

        for (const member of faculty) {
            await Faculty.create(member);
        }

        console.log('Seeding Completed Successfully!');

    } catch (error) {
        console.error('Seeding Failed:', error);
    } finally {
        await sequelize.close();
    }
};

seedContent();
