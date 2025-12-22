/**
 * Simple Component Loader
 * "Looks static, behaves dynamic"
 */
export class ComponentLoader {
    static async load(elementId, componentPath) {
        try {
            const element = document.getElementById(elementId);
            if (!element) return;

            // In production, this might fetch raw HTML
            // For now, we will import JS modules that return HTML strings
            // to avoid CORS issues with file:// protocol if tested locally without server
            // But since we have Vite, we can just use dynamic imports or innerHTML.
        } catch (error) {
            console.error(`Failed to load component: ${componentPath}`, error);
        }
    }

    // Simpler approach: Components as JS functions returning HTML strings
    static render(elementId, htmlContent) {
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = htmlContent;
        }
    }
}
