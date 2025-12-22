import { API } from '../api.js';

export const NewsCards = () => `
<section class="news-cards-section" style="padding: 40px 0; background: #f9f9f9;">
    <div class="container news-cards-wrapper" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px;">
        
        <!-- Card 1: Campus News -->
        <div class="news-card blue-card" style="background: white; border-radius: 8px; box-shadow: var(--shadow-sm); overflow: hidden; border-top: 4px solid #0056b3;">
            <div class="card-header-styled" style="background: #eef4ff; padding: 15px 20px; border-bottom: 1px solid #dde;">
                <h3 style="color: #0056b3; margin: 0; font-size: 1.1rem; font-weight: 700; text-transform: uppercase;">Campus News</h3>
            </div>
            <div class="card-body-styled">
                <ul id="news-campus" class="styled-news-list" style="padding: 0; list-style: none; min-height: 150px;">
                    <li style="padding: 15px; color: #888; text-align: center;">Loading...</li>
                </ul>
                <div style="padding: 15px; text-align: center;">
                    <a href="#" style="color: #0056b3; font-weight: 600; font-size: 0.85rem;">VIEW ALL</a>
                </div>
            </div>
        </div>

        <!-- Card 2: Announcements -->
        <div class="news-card green-card" style="background: white; border-radius: 8px; box-shadow: var(--shadow-sm); overflow: hidden; border-top: 4px solid #28a745;">
            <div class="card-header-styled" style="background: #effff2; padding: 15px 20px; border-bottom: 1px solid #dde;">
                <h3 style="color: #28a745; margin: 0; font-size: 1.1rem; font-weight: 700; text-transform: uppercase;">Announcements</h3>
            </div>
            <div class="card-body-styled">
                <ul id="news-announcements" class="styled-news-list" style="padding: 0; list-style: none; min-height: 150px;">
                    <li style="padding: 15px; color: #888; text-align: center;">Loading...</li>
                </ul>
                <div style="padding: 15px; text-align: center;">
                    <a href="#" style="color: #28a745; font-weight: 600; font-size: 0.85rem;">VIEW ALL</a>
                </div>
            </div>
        </div>

        <!-- Card 3: University News -->
        <div class="news-card orange-card" style="background: white; border-radius: 8px; box-shadow: var(--shadow-sm); overflow: hidden; border-top: 4px solid #fd7e14;">
            <div class="card-header-styled" style="background: #fff8f2; padding: 15px 20px; border-bottom: 1px solid #dde;">
                <h3 style="color: #fd7e14; margin: 0; font-size: 1.1rem; font-weight: 700; text-transform: uppercase;">University News</h3>
            </div>
            <div class="card-body-styled">
                <ul id="news-university" class="styled-news-list" style="padding: 0; list-style: none; min-height: 150px;">
                    <li style="padding: 15px; color: #888; text-align: center;">Loading...</li>
                </ul>
                <div style="padding: 15px; text-align: center;">
                    <a href="#" style="color: #fd7e14; font-weight: 600; font-size: 0.85rem;">VIEW ALL</a>
                </div>
            </div>
        </div>

    </div>
</section>
`;

// Hydration Logic
NewsCards.init = async () => {
    try {
        const notices = await API.get('/notices');
        if (!notices || notices.length === 0) {
            console.log('No notices found');
            return;
        }

        const renderNewsList = (data, elementId) => {
            const list = document.getElementById(elementId);
            if (!list) return;

            if (data.length === 0) {
                list.innerHTML = '<li style="padding: 15px; color: #888; text-align: center;">No updates available.</li>';
                return;
            }

            list.innerHTML = data.map(item => `
                <li style="padding: 15px; border-bottom: 1px solid #f0f0f0;">
                     <a href="${item.file_url || '#'}" style="color: #333; font-weight: 500; display: block;">${item.title}</a>
                     <span style="font-size: 0.75rem; color: #888;">${new Date(item.date).toLocaleDateString()}</span>
                </li>
            `).join('');
        };

        // Filter and Render
        renderNewsList(notices.filter(n => n.category === 'campus'), 'news-campus');
        renderNewsList(notices.filter(n => n.category === 'announcement'), 'news-announcements');
        renderNewsList(notices.filter(n => n.category === 'university'), 'news-university');

    } catch (error) {
        console.error('Failed to load news:', error);
    }
};
