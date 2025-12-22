
document.addEventListener('DOMContentLoaded', async () => {
    if (typeof api === 'undefined') {
        console.error('API client not found. Make sure api.js is loaded.');
        return;
    }

    try {
        const notices = await api.get('/notices');
        renderNotices(notices);
    } catch (error) {
        console.error('Failed to load notices:', error);
    }
});

function renderNotices(notices) {
    const categories = {
        'general': document.querySelector('#Notices .news-list'),
        'tender': document.querySelector('#Tenders .news-list'),
        'press': document.querySelector('#Press .news-list')
    };

    // Clear existing static content
    Object.values(categories).forEach(el => {
        if (el) el.innerHTML = '';
    });

    if (notices.length === 0) {
        if (categories['general']) categories['general'].innerHTML = '<li>No active notices.</li>';
        return;
    }

    notices.forEach(notice => {
        const listContainer = categories[notice.category] || categories['general'];
        if (listContainer) {
            const li = document.createElement('li');
            const a = document.createElement('a');

            // If it's a file upload (PDF), link to API uploads, else link to URL or #
            if (notice.link) {
                a.href = notice.link;
                a.target = "_blank";
            } else {
                a.href = '#';
            }

            a.textContent = notice.title;

            // Add "New" badge if recent (e.g., last 7 days)
            const noticeDate = new Date(notice.date);
            const now = new Date();
            const diffTime = Math.abs(now - noticeDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays <= 7) {
                const badge = document.createElement('img');
                badge.src = 'https://vbspu.ac.in/assets/img/new.gif'; // Or local asset
                badge.alt = 'New';
                badge.style.height = '15px';
                badge.style.marginLeft = '10px';
                a.appendChild(badge);
            }

            li.appendChild(a);
            listContainer.appendChild(li);
        }
    });
}
