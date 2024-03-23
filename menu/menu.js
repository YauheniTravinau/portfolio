let currentUrl = window.location.pathname;

// Получаем все ссылки в меню
let menuLinks = document.querySelectorAll('#menu a');

// Проходимся по каждой ссылке
menuLinks.forEach(function(link) {
    // Если URL ссылки совпадает с текущим URL страницы, добавляем класс 'active'
    if (link.getAttribute('href') === currentUrl) {
        link.classList.add('active');
    }
});