// Auth Logic
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorAlert = document.getElementById('error-alert');

    // 1. Handle Login
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const btn = loginForm.querySelector('button');

            try {
                btn.textContent = 'Logging in...';
                btn.disabled = true;
                errorAlert.style.display = 'none';

                const response = await fetch(`${CONFIG.API_BASE_URL}/auth/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();

                if (response.ok) {
                    // Success
                    localStorage.setItem('adminToken', data.token);
                    localStorage.setItem('adminUser', JSON.stringify(data.user));
                    window.location.href = 'dashboard.html';
                } else {
                    // Error
                    throw new Error(data.message || 'Login failed');
                }

            } catch (error) {
                console.error(error);
                errorAlert.textContent = error.message;
                errorAlert.style.display = 'block';
                btn.textContent = 'Login';
                btn.disabled = false;
            }
        });
    }

    // 2. Handle Logout
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            Auth.logout();
        });
    }
});

const Auth = {
    getToken: () => localStorage.getItem('adminToken'),
    getUser: () => JSON.parse(localStorage.getItem('adminUser')),
    isAuthenticated: () => !!localStorage.getItem('adminToken'),
    logout: () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
        window.location.href = 'login.html';
    },
    checkSession: () => {
        if (!Auth.isAuthenticated()) {
            window.location.href = 'login.html';
        }
    }
};
