(function () {
    const STORAGE_KEY = 'dsa_visualizer_theme';

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
    }

    function getPreferredTheme() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'light' || stored === 'dark') return stored;
        return 'dark';
    }

    function setTheme(theme) {
        applyTheme(theme);
        localStorage.setItem(STORAGE_KEY, theme);
    }

    document.addEventListener('DOMContentLoaded', () => {
        const toggle = document.getElementById('themeToggle');
        const initial = getPreferredTheme();
        applyTheme(initial);

        if (!toggle) return;
        toggle.checked = initial === 'light';

        toggle.addEventListener('change', () => {
            const theme = toggle.checked ? 'light' : 'dark';
            setTheme(theme);
        });
    });
})();
