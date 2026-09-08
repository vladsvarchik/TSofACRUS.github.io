// theme.js — переключение светлой/тёмной темы
(function() {
    const body = document.body;
    const btn = document.getElementById('theme-toggle-btn');
    if (!btn) return;

    const icon = document.getElementById('theme-icon');
    const label = document.getElementById('theme-label');

    // Загружаем сохранённую тему
    const savedTheme = localStorage.getItem('ac-theme');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        if (icon) icon.textContent = '☀️';
        if (label) label.textContent = 'Дневная тема';
    }

    // Клик по кнопке
    btn.addEventListener('click', function() {
        body.classList.toggle('light-theme');

        if (body.classList.contains('light-theme')) {
            localStorage.setItem('ac-theme', 'light');
            if (icon) icon.textContent = '☀️';
            if (label) label.textContent = 'Дневная тема';
        } else {
            localStorage.setItem('ac-theme', 'dark');
            if (icon) icon.textContent = '🌙';
            if (label) label.textContent = 'Ночная тема';
        }
    });
})();