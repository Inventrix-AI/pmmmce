export const PhotoGallery = () => `
<section class="gallery-strip">
    <div class="container">
        <h2 class="gallery-title">
            Photo Gallery
        </h2>
        <div class="gallery-grid">
            <div class="gallery-item" style="height: 180px; overflow: hidden; border-radius: 4px;">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80" alt="Student Group" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s;">
            </div>
            <div class="gallery-item" style="height: 180px; overflow: hidden; border-radius: 4px;">
                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80" alt="Students Studying" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s;">
            </div>
             <div class="gallery-item" style="height: 180px; overflow: hidden; border-radius: 4px;">
                <img src="https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=600&q=80" alt="College Library" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s;">
            </div>
             <div class="gallery-item" style="height: 180px; overflow: hidden; border-radius: 4px;">
                <img src="https://images.unsplash.com/photo-1590012314607-6da6f2d91971?auto=format&fit=crop&w=600&q=80" alt="Graduation Day" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s;">
            </div>
        </div>
        <div style="text-align: center; margin-top: 30px;">
            <a href="#" class="view-all-btn" style="color: var(--primary-color); font-weight: 700; text-transform: uppercase;">View All Photos</a>
        </div>
    </div>
</section>
`;
