export const Footer = () => `
<footer class="main-footer" style="background: var(--primary-color); color: white; padding-top: 50px;">
    <div class="container">
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; padding-bottom: 40px;">
            <!-- Col 1 -->
            <div class="footer-col">
                <h4 style="border-bottom: 2px solid var(--secondary-color); display: inline-block; margin-bottom: 20px; padding-bottom: 5px;">Contact Us</h4>
                <p><strong>PMMM College of Education</strong><br>
                Lawar (Darrighat), Post Koni<br>
                Bilaspur (C.G) 495551</p>
                <p>📞 9285354702<br>
                ✉️ pmmmce@gmail.com</p>
            </div>
            
            <!-- Col 2 -->
            <div class="footer-col">
                <h4 style="border-bottom: 2px solid var(--secondary-color); display: inline-block; margin-bottom: 20px; padding-bottom: 5px;">Quick Links</h4>
                <ul style="padding: 0; list-style: none;">
                    <li style="margin-bottom: 10px;"><a href="#">Admission</a></li>
                    <li style="margin-bottom: 10px;"><a href="#">Courses</a></li>
                    <li style="margin-bottom: 10px;"><a href="#">Fee Structure</a></li>
                    <li style="margin-bottom: 10px;"><a href="#">Gallery</a></li>
                </ul>
            </div>
            
            <!-- Col 3 -->
            <div class="footer-col">
                <h4 style="border-bottom: 2px solid var(--secondary-color); display: inline-block; margin-bottom: 20px; padding-bottom: 5px;">Location</h4>
                <div style="background: #eee; height: 150px; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: #333;">
                    (Map Placeholder)
                </div>
            </div>
        </div>
    </div>
    
    <div class="footer-bottom" style="background: #33154c; padding: 15px 0; text-align: center; border-top: 1px solid rgba(255,255,255,0.1);">
        <p style="margin: 0; font-size: 0.9rem;">&copy; 2025 Pt. Madan Mohan Malaviya College of Education. All Rights Reserved.</p>
    </div>
</footer>
`;
