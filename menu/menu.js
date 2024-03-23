document.addEventListener("DOMContentLoaded", function() {
    let path = window.location.pathname;
    let menuLinks = document.querySelectorAll('.menu .icon');

    menuLinks.forEach(function(link) {
        let linkPath = link.getAttribute('href');
        if (linkPath === path) {
            link.classList.add('active');
            localStorage.setItem('selectedMenuItem', linkPath); // Сохраняем выбранный пункт меню в localStorage
        }
    });
});

// Обрабатываем клик на пункте меню
document.querySelectorAll('.menu .icon').forEach(function(link) {
    link.addEventListener('click', function() {
        localStorage.setItem('selectedMenuItem', link.getAttribute('href')); // Сохраняем выбранный пункт меню в localStorage
    });
});

// При загрузке страницы проверяем, есть ли сохраненный выбранный пункт меню в localStorage
document.addEventListener("DOMContentLoaded", function() {
    let selectedMenuItem = localStorage.getItem('selectedMenuItem');
    if (selectedMenuItem) {
        document.querySelectorAll('.menu .icon').forEach(function(link) {
            if (link.getAttribute('href') === selectedMenuItem) {
                link.classList.add('active'); // Добавляем класс active к выбранному пункту меню
            }
        });
    }
});
