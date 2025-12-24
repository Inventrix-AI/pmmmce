document.addEventListener('DOMContentLoaded', () => {
    // Auth Check
    if (!Auth.isAuthenticated()) { window.location.href = 'login.html'; return; }

    const tableBody = document.getElementById('notices-table-body');
    const modal = document.getElementById('add-modal');
    const form = document.getElementById('add-notice-form');

    // Load Notices
    fetchNotices();

    // UI Events
    document.getElementById('open-modal').onclick = () => modal.style.display = 'flex';
    document.getElementById('close-modal').onclick = () => modal.style.display = 'none';

    // Add Notice
    form.onsubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        data.date = new Date().toISOString(); // Auto date

        try {
            const res = await fetch(`${CONFIG.API_BASE_URL}/notices`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Auth.getToken()}`
                },
                body: JSON.stringify(data)
            });

            if (!res.ok) throw new Error('Failed to create');

            modal.style.display = 'none';
            form.reset();
            fetchNotices(); // Refresh list via API
            alert('Notice added successfully!');

        } catch (error) {
            alert(error.message);
        }
    };

    // Delete Notice Handler (delegated)
    tableBody.onclick = async (e) => {
        if (e.target.closest('.delete')) {
            if (!confirm('Are you sure?')) return;
            const id = e.target.closest('.delete').dataset.id;
            try {
                const res = await fetch(`${CONFIG.API_BASE_URL}/notices/${id}`, {
                    method: 'DELETE',
                    headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
                });
                if (res.ok) fetchNotices();
            } catch (err) {
                console.error(err);
            }
        }
    };
});

async function fetchNotices() {
    try {
        const res = await fetch(`${CONFIG.API_BASE_URL}/notices`);
        const notices = await res.json();

        const tbody = document.getElementById('notices-table-body');
        if (notices.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" style="text-align:center">No notices found.</td></tr>';
            return;
        }

        tbody.innerHTML = notices.map(n => `
            <tr>
                <td>${new Date(n.date).toLocaleDateString()}</td>
                <td><span style="font-weight: 500;">${n.title}</span></td>
                <td><span class="chip ${n.category}">${n.category}</span></td>
                <td>${n.file_url ? '<a href="' + n.file_url + '" target="_blank">View</a>' : '-'}</td>
                <td class="actions">
                    <button class="delete" data-id="${n.id}"><span class="material-icons-round" style="font-size: 1.2rem;">delete</span></button>
                </td>
            </tr>
        `).join('');

    } catch (error) {
        console.error('Fetch error:', error);
    }
}
