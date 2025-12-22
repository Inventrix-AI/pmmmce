export const StatsHighlights = () => `
<section class="stats-highlights-wrapper" style="background: #eef; padding: 40px 0;">
    <div class="container stats-highlights-grid" style="display: grid; grid-template-columns: 2fr 1fr; gap: 30px;">
        
        <!-- Left: Stats Grid (Dark Overlay style) -->
        <div class="stats-content" style="background: linear-gradient(rgba(40, 15, 60, 0.9), rgba(40, 15, 60, 0.9)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80'); background-size: cover; background-position: center; padding: 30px; border-radius: 8px; color: white;">
            <div class="stats-grid-8-col" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;">
                <!-- Row 1 -->
                <div class="stat-item">
                    <div class="stat-icon" style="font-size: 2rem; margin-bottom: 10px;">🎓</div>
                    <div class="stat-info">
                        <h4 style="font-size: 1.5rem; margin: 0; color: var(--secondary-color);">300476</h4>
                        <p style="font-size: 0.8rem; opacity: 0.9;">Students in Affiliated Colleges</p>
                    </div>
                </div>
                <div class="stat-item">
                    <div class="stat-icon" style="font-size: 2rem; margin-bottom: 10px;">🏫</div>
                    <div class="stat-info">
                        <h4 style="font-size: 1.5rem; margin: 0; color: var(--secondary-color);">3454</h4>
                        <p style="font-size: 0.8rem; opacity: 0.9;">Students at University Campus</p>
                    </div>
                </div>
                <div class="stat-item">
                    <div class="stat-icon" style="font-size: 2rem; margin-bottom: 10px;">🏛️</div>
                    <div class="stat-info">
                        <h4 style="font-size: 1.5rem; margin: 0; color: var(--secondary-color);">589</h4>
                        <p style="font-size: 0.8rem; opacity: 0.9;">Affiliated Colleges</p>
                    </div>
                </div>
                <div class="stat-item">
                    <div class="stat-icon" style="font-size: 2rem; margin-bottom: 10px;">📜</div>
                    <div class="stat-info">
                        <h4 style="font-size: 1.5rem; margin: 0; color: var(--secondary-color);">27</h4>
                        <p style="font-size: 0.8rem; opacity: 0.9;">Government/Aided Colleges</p>
                    </div>
                </div>
                <!-- Row 2 -->
                <div class="stat-item">
                    <div class="stat-icon" style="font-size: 2rem; margin-bottom: 10px;">💰</div>
                    <div class="stat-info">
                        <h4 style="font-size: 1.5rem; margin: 0; color: var(--secondary-color);">562</h4>
                        <p style="font-size: 0.8rem; opacity: 0.9;">Self-finance Colleges</p>
                    </div>
                </div>
                <div class="stat-item">
                    <div class="stat-icon" style="font-size: 2rem; margin-bottom: 10px;">👨‍🏫</div>
                    <div class="stat-info">
                        <h4 style="font-size: 1.5rem; margin: 0; color: var(--secondary-color);">6</h4>
                        <p style="font-size: 0.8rem; opacity: 0.9;">Faculties at Campus</p>
                    </div>
                </div>
                <div class="stat-item">
                    <div class="stat-icon" style="font-size: 2rem; margin-bottom: 10px;">📚</div>
                    <div class="stat-info">
                        <h4 style="font-size: 1.5rem; margin: 0; color: var(--secondary-color);">10</h4>
                        <p style="font-size: 0.8rem; opacity: 0.9;">Faculties in Colleges</p>
                    </div>
                </div>
                 <div class="stat-item">
                    <div class="stat-icon" style="font-size: 2rem; margin-bottom: 10px;">🌟</div>
                    <div class="stat-info">
                        <h4 style="font-size: 1.5rem; margin: 0; color: var(--secondary-color);">A+</h4>
                        <p style="font-size: 0.8rem; opacity: 0.9;">NAAC Accredited</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Right: Highlights Panel (White Curve) -->
        <div class="highlights-panel" style="background: white; border-radius: 8px; box-shadow: var(--shadow-sm); padding: 20px; border-top: 5px solid var(--secondary-color);">
            <h3 class="highlights-title" style="color: var(--primary-color); border-bottom: 1px solid #eee; padding-bottom: 10px; margin-bottom: 15px; font-weight: 700;">HIGHLIGHTS</h3>
            <ul class="highlights-list" style="list-style: none; padding: 0;">
                 <li style="margin-bottom: 15px; border-bottom: 1px dashed #eee; padding-bottom: 10px;">
                    <a href="#" style="font-weight: 600; color: #333; display: block; margin-bottom: 5px;">PhD Admission Notifiction 2025</a>
                    <div class="hl-meta" style="font-size: 0.75rem; color: #888;">
                        <span class="hl-date">Date : 11/11/2025</span>
                        <span class="hl-new" style="background: red; color: white; padding: 1px 4px; border-radius: 2px; margin-left: 5px; font-size: 0.6rem;">NEW</span>
                    </div>
                </li>
                <li style="margin-bottom: 15px; border-bottom: 1px dashed #eee; padding-bottom: 10px;">
                    <a href="#" style="font-weight: 600; color: #333; display: block; margin-bottom: 5px;">M.Ed / B.Ed Counseling Schedule Phase 2</a>
                    <div class="hl-meta" style="font-size: 0.75rem; color: #888;">
                        <span class="hl-date">Date : 10/11/2025</span>
                    </div>
                </li>
                <li style="margin-bottom: 15px; border-bottom: 1px dashed #eee; padding-bottom: 10px;">
                    <a href="#" style="font-weight: 600; color: #333; display: block; margin-bottom: 5px;">Examination Form Last Date Extended</a>
                    <div class="hl-meta" style="font-size: 0.75rem; color: #888;">
                        <span class="hl-date">Date : 08/11/2025</span>
                    </div>
                </li>
            </ul>
            <a href="#" class="btn-view-highlights" style="color: var(--secondary-color); font-weight: 700; font-size: 0.85rem; text-transform: uppercase;">View All Highlights &rarr;</a>
        </div>

    </div>
</section>
`;
