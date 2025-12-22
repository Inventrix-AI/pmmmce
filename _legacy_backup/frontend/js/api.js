/**
 * API Client for interacting with the backend
 */

const API_BASE_URL = 'http://localhost:5000/api';

const api = {
    // Helper for headers
    getHeaders: () => {
        const headers = {
            'Content-Type': 'application/json'
        };
        const token = localStorage.getItem('token');
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        return headers;
    },

    // Generic GET
    get: async (endpoint) => {
        try {
            const response = await fetch(`${API_BASE_URL}${endpoint}`, {
                method: 'GET',
                headers: api.getHeaders()
            });
            return await response.json();
        } catch (error) {
            console.error('API GET Error:', error);
            throw error;
        }
    },

    // Generic POST
    post: async (endpoint, data) => {
        try {
            const response = await fetch(`${API_BASE_URL}${endpoint}`, {
                method: 'POST',
                headers: api.getHeaders(),
                body: JSON.stringify(data)
            });
            return await response.json();
        } catch (error) {
            console.error('API POST Error:', error);
            throw error;
        }
    },

    // Auth specific
    login: async (email, password) => {
        const result = await api.post('/auth/login', { email, password });
        if (result.accessToken) {
            localStorage.setItem('token', result.accessToken);
            localStorage.setItem('user', JSON.stringify({
                id: result.id,
                email: result.email,
                role: result.role
            }));
        }
        return result;
    },

    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/admin/login.html';
    }
};

// Expose to window for global access
window.api = api;
