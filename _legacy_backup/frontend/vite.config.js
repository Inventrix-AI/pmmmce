import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        '404': resolve(__dirname, '404.html'),
        'about-college': resolve(__dirname, 'about-college.html'),
        'about-samiti': resolve(__dirname, 'about-samiti.html'),
        about: resolve(__dirname, 'about.html'),
        academics: resolve(__dirname, 'academics.html'),
        activity: resolve(__dirname, 'activity.html'),
        administration: resolve(__dirname, 'administration.html'),
        admission: resolve(__dirname, 'admission.html'),
        'audit-reports': resolve(__dirname, 'audit-reports.html'),
        contact: resolve(__dirname, 'contact.html'),
        courses: resolve(__dirname, 'courses.html'),
        facilities: resolve(__dirname, 'facilities.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        'governing-body': resolve(__dirname, 'governing-body.html'),
        'important-links': resolve(__dirname, 'important-links.html'),
        infrastructure: resolve(__dirname, 'infrastructure.html'),
        laboratory: resolve(__dirname, 'laboratory.html'),
        library: resolve(__dirname, 'library.html'),
        nep: resolve(__dirname, 'nep.html'),
        'online-attendance': resolve(__dirname, 'online-attendance.html'),
        'staff-profile': resolve(__dirname, 'staff-profile.html'),
        template: resolve(__dirname, 'template.html'),
      },
    },
  },
  server: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      }
    }
  }
})
