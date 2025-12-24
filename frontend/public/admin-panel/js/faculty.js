document.addEventListener('DOMContentLoaded', () => {
    // Auth Check
    if (!Auth.isAuthenticated()) { window.location.href = 'login.html'; return; }

    const tableBody = document.getElementById('faculty-table-body');
    const modal = document.getElementById('add-modal');
    const form = document.getElementById('add-faculty-form');

    // Load Faculty
    fetchFaculty();

    // UI Events
    document.getElementById('open-modal').onclick = () => modal.style.display = 'flex';
    document.getElementById('close-modal').onclick = () => modal.style.display = 'none';

    // Add Faculty
    form.onsubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch(`${CONFIG.API_BASE_URL}/faculty`, {
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
            fetchFaculty();
            alert('Faculty member added!');

        } catch (error) {
            alert(error.message);
        }
    };

    // Delete Handler
    tableBody.onclick = async (e) => {
        const btn = e.target.closest('.delete');
        if (btn) {
            if (!confirm('Are you sure?')) return;
            const id = btn.dataset.id;
            try {
                const res = await fetch(`${CONFIG.API_BASE_URL}/faculty/${id}`, {
                    method: 'DELETE',
                    headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
                });
                if (res.ok) fetchFaculty();
            } catch (err) {
                console.error(err);
            }
        }
    };
});

async function fetchFaculty() {
    try {
        const res = await fetch(`${CONFIG.API_BASE_URL}/faculty`);
        const list = await res.json();

        const tbody = document.getElementById('faculty-table-body');
        if (list.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" style="text-align:center">No faculty members found.</td></tr>';
            return;
        }

        tbody.innerHTML = list.map(member => `
            <tr>
                <td><img src="${member.image_url || 'https://via.placeholder.com/40'}" class="avatar" alt="img"></td>
                <td><strong>${member.name}</strong></td>
                <td>${member.designation}</td>
                <td>${member.department || '-'}</td>
                <td class="actions">
                    <button class="delete" style="border:none; background:none; cursor:pointer; color:#888;" data-id="${member.id}">
                        <span class="material-icons-round">delete</span>
                    </button>
                </td>
            </tr>
        `).join('');

    } catch (error) {
        console.error('Fetch error:', error);
    }
}
