export const Header = () => `
<!-- Top Bar -->
<div class="top-bar" style="background: #eee; padding: 5px 0; font-size: 0.85rem; border-bottom: 1px solid #ddd;">
    <div class="container" style="display: flex; justify-content: space-between;">
        <div class="contact-info">
            <span>📞 9285354702</span> | <span>✉️ pmmmce@gmail.com</span>
        </div>
        <div class="login-links">
            <a href="#">B.Ed/D.El.Ed Login</a> | <a href="#">RTI</a>
        </div>
    </div>
</div>

<!-- Banner Image -->
<header class="main-header" style="background: white;">
    <div class="container" style="padding: 0;">
        <img src="/images/header-banner.png" alt="PMMMCE Banner" style="width: 100%; height: auto; display: block;">
    </div>
</header>

<!-- Navigation -->
<nav class="main-nav" style="background: var(--secondary-color); position: sticky; top: 0; z-index: 1000; box-shadow: var(--shadow-sm);">
    <div class="container">
        <ul class="nav-list" style="display: flex; justify-content: center; margin: 0; padding: 0;">
            <li><a href="/" class="nav-link active" style="display: block; padding: 16px 25px; color: white; font-weight: 700; text-transform: uppercase; background: var(--primary-color);">HOME</a></li>
            
            <li class="dropdown" style="position: relative;">
                <a href="#" class="nav-link" style="cursor: pointer; display: block; padding: 16px 25px; color: var(--primary-color); font-weight: 700; text-transform: uppercase;">University ▾</a>
                <ul class="dropdown-menu" style="display: none; position: absolute; top: 100%; left: 0; background: white; min-width: 200px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); padding: 0; list-style: none;">
                    <li><a href="about-samiti.html" style="display: block; padding: 12px 20px; color: #333; border-bottom: 1px solid #eee;">About Samiti</a></li>
                    <li><a href="about-college.html" style="display: block; padding: 12px 20px; color: #333; border-bottom: 1px solid #eee;">About College</a></li>
                    <li><a href="governing-body.html" style="display: block; padding: 12px 20px; color: #333; border-bottom: 1px solid #eee;">Governing Body</a></li>
                    <li><a href="audit-reports.html" style="display: block; padding: 12px 20px; color: #333; border-bottom: 1px solid #eee;">Audit Reports</a></li>
                </ul>
            </li>

            <li class="dropdown" style="position: relative;">
                <a href="#" class="nav-link" style="cursor: pointer; display: block; padding: 16px 25px; color: var(--primary-color); font-weight: 700; text-transform: uppercase;">Faculties ▾</a>
                <ul class="dropdown-menu" style="display: none; position: absolute; top: 100%; left: 0; background: white; min-width: 200px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); padding: 0; list-style: none;">
                    <li><a href="faculty.html" style="display: block; padding: 12px 20px; color: #333; border-bottom: 1px solid #eee;">Teaching Staff</a></li>
                    <li><a href="staff-profile.html" style="display: block; padding: 12px 20px; color: #333; border-bottom: 1px solid #eee;">Staff Profile</a></li>
                </ul>
            </li>

            <li><a href="admission.html" class="nav-link" style="display: block; padding: 16px 25px; color: var(--primary-color); font-weight: 700; text-transform: uppercase;">Admission</a></li>

            <li class="dropdown" style="position: relative;">
                <a href="#" class="nav-link" style="cursor: pointer; display: block; padding: 16px 25px; color: var(--primary-color); font-weight: 700; text-transform: uppercase;">Student Corner ▾</a>
                <ul class="dropdown-menu" style="display: none; position: absolute; top: 100%; left: 0; background: white; min-width: 200px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); padding: 0; list-style: none;">
                    <li><a href="courses.html" style="display: block; padding: 12px 20px; color: #333; border-bottom: 1px solid #eee;">Courses & Fees</a></li>
                    <li><a href="infrastructure.html" style="display: block; padding: 12px 20px; color: #333; border-bottom: 1px solid #eee;">Infrastructure</a></li>
                    <li><a href="library.html" style="display: block; padding: 12px 20px; color: #333; border-bottom: 1px solid #eee;">Library</a></li>
                     <li><a href="laboratory.html" style="display: block; padding: 12px 20px; color: #333; border-bottom: 1px solid #eee;">Laboratory</a></li>
                     <li><a href="activity.html" style="display: block; padding: 12px 20px; color: #333; border-bottom: 1px solid #eee;">Activities</a></li>
                </ul>
            </li>

            <li><a href="gallery.html" class="nav-link" style="display: block; padding: 16px 25px; color: var(--primary-color); font-weight: 700; text-transform: uppercase;">Gallery</a></li>
            <li><a href="contact.html" class="nav-link" style="display: block; padding: 16px 25px; color: var(--primary-color); font-weight: 700; text-transform: uppercase;">Contact</a></li>
        </ul>
    </div>
</nav>
`;
