import '../css/variables.css';
import '../css/global.css';
import '../css/home.css';
import '../css/subpage.css';
import '../css/responsive.css';

import { ComponentLoader } from './utils/ComponentLoader.js';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { HeroSection } from './components/HeroSection.js';
import { StatsHighlights } from './components/StatsHighlights.js';
import { AboutDome } from './components/AboutDome.js';
import { NewsCards } from './components/NewsCards.js';
import { PhotoGallery } from './components/PhotoGallery.js';

import { initInteractions } from './interactions.js';

document.addEventListener('DOMContentLoaded', () => {
    // Inject Components
    ComponentLoader.render('header-root', Header());
    ComponentLoader.render('home-root', HeroSection());
    ComponentLoader.render('stats-root', StatsHighlights());
    ComponentLoader.render('about-root', AboutDome());
    ComponentLoader.render('news-root', NewsCards());
    NewsCards.init();
    ComponentLoader.render('gallery-root', PhotoGallery());
    ComponentLoader.render('footer-root', Footer());

    // Initialize Interactions (Dropdowns, etc)
    initInteractions();

    console.log('PMMMCE Core Loaded');
});
