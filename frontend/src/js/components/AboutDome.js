export const AboutDome = () => `
<section class="about-dome-section" style="padding: 60px 0; background: white;">
    <div class="container" style="display: flex; align-items: center; gap: 50px;">
        
        <!-- Content -->
        <div class="dome-content" style="flex: 1;">
            <h4 class="sub-heading" style="color: var(--secondary-color); text-transform: uppercase; letter-spacing: 1px; font-weight: 600; margin-bottom: 10px;">Welcome to</h4>
            <h2 class="main-heading" style="color: var(--primary-color); font-size: 2.2rem; margin-bottom: 20px; font-family: var(--font-heading);">Pt. Madan Mohan Malaviya College of Education</h2>
            <div class="divider-line" style="width: 60px; height: 3px; background: var(--secondary-color); margin-bottom: 25px;"></div>
            <p class="about-text" style="color: #555; line-height: 1.8; margin-bottom: 20px;">
                Pt. Madan Mohan Malaviya College of Education is a premier institution dedicated to shaping the
                future of education. Affiliated with V.B.S. Purvanchal University, we strive for excellence in
                teacher training and holistic development.
            </p>
            <p class="about-quote" style="font-family: var(--font-heading); font-style: italic; color: #333; border-left: 4px solid var(--secondary-color); padding-left: 15px; margin-bottom: 30px;">
                “Education is the manifestation of perfection already in man.”
            </p>
            <div class="action-buttons" style="display: flex; gap: 15px;">
                <a href="#" class="btn-primary-outline" style="border: 2px solid var(--primary-color); color: var(--primary-color); padding: 10px 25px; border-radius: 4px; font-weight: 600; text-transform: uppercase;">Read More</a>
                <a href="#" class="btn-secondary-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); padding: 10px 25px; border-radius: 4px; font-weight: 600; text-transform: uppercase;">Mission & Vision</a>
            </div>
        </div>

        <!-- Image (Dome) -->
        <div class="dome-image-wrapper" style="flex: 1; position: relative;">
            <img src="https://pmmmce.com/wp-content/uploads/2025/08/slider13.jpg" alt="College Dome" class="dome-img" 
                 style="width: 100%; border-radius: 200px 200px 20px 20px; box-shadow: var(--shadow-md); border: 5px solid white;">
            
            <div class="experience-badge" style="position: absolute; bottom: 30px; left: -20px; background: var(--secondary-color); color: white; padding: 20px; border-radius: 50%; width: 120px; height: 120px; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 5px 15px rgba(212, 129, 9, 0.4); text-align: center;">
                <span class="years" style="font-size: 1.8rem; font-weight: 700; line-height: 1;">15+</span>
                <span class="text" style="font-size: 0.7rem; text-transform: uppercase; line-height: 1.2;">Years of<br>Excellence</span>
            </div>
        </div>

    </div>
</section>
`;
