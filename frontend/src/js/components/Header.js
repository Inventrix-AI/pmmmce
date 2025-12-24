export const Header = () => `
<!-- Top Bar -->
<div class="top-bar">
    <div class="container top-bar-inner">
        <div class="contact-info">
            <span>📞 9285354702</span> | <span>✉️ pmmmce@gmail.com</span>
        </div>
        <div class="login-links">
            <a href="/login.html" class="btn btn-login">Login Portal</a>
        </div>
    </div>
</div>

<!-- Banner Image -->
<header class="main-header">
    <div class="container" style="padding: 0;">
        <img src="/images/header-banner.png" alt="PMMMCE Banner" style="width: 100%; height: auto; display: block;">
    </div>
</header>

<!-- Navigation -->
<nav class="main-nav">
    <div class="container" style="position: relative;">
        <button class="mobile-menu-toggle" aria-label="Toggle Navigation">
            ☰
        </button>
        <ul class="nav-list">
            <li><a href="/" class="nav-link active">HOME</a></li>
            
            <li class="dropdown">
                <a href="#" class="nav-link">University ▾</a>
                <ul class="dropdown-menu">
                    <li><a href="about-samiti.html">About Samiti</a></li>
                    <li><a href="about-college.html">About College</a></li>
                    <li><a href="governing-body.html">Governing Body</a></li>
                    <li><a href="audit-reports.html">Audit Reports</a></li>
                </ul>
            </li>

            <li class="dropdown">
                <a href="#" class="nav-link">Faculties ▾</a>
                <ul class="dropdown-menu">
                    <li><a href="faculty.html">Teaching Staff</a></li>
                    <li><a href="staff-profile.html">Staff Profile</a></li>
                </ul>
            </li>

            <li><a href="admission.html" class="nav-link">Admission</a></li>

            <li class="dropdown">
                <a href="#" class="nav-link">Student Corner ▾</a>
                <ul class="dropdown-menu">
                    <li><a href="courses.html">Courses & Fees</a></li>
                    <li><a href="infrastructure.html">Infrastructure</a></li>
                    <li><a href="library.html">Library</a></li>
                     <li><a href="laboratory.html">Laboratory</a></li>
                     <li><a href="activity.html">Activities</a></li>
                </ul>
            </li>

            <li><a href="gallery.html" class="nav-link">Gallery</a></li>
            <li><a href="/login.html" class="nav-link">Login</a></li>
            <li><a href="contact.html" class="nav-link">Contact</a></li>
        </ul>
    </div>
</nav>
`;
