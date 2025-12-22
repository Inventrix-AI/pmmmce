// Dashboard Logic
document.addEventListener('DOMContentLoaded', () => {
    // 1. Protect Route
    if (!Auth.isAuthenticated()) {
        window.location.href = 'login.html';
        return;
    }

    // 2. Load Stats
    loadStats();
});

async function loadStats() {
    try {
        const token = Auth.getToken();

        // Fetch Notices Count
        const noticesRes = await fetch(`${CONFIG.API_BASE_URL}/notices`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const notices = await noticesRes.json();

        // Fetch Faculty Count
        const facultyRes = await fetch(`${CONFIG.API_BASE_URL}/faculty`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const faculty = await facultyRes.json();

        // Update UI
        document.getElementById('stat-notices').textContent = Array.isArray(notices) ? notices.length : 0;
        document.getElementById('stat-faculty').textContent = Array.isArray(faculty) ? faculty.length : 0;
        document.getElementById('stat-gallery').textContent = 'N/A'; // Placeholder until Gallery API

    } catch (error) {
        console.error('Failed to load stats:', error);
    }
}
