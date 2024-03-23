// Получаем текущий путь страницы
let currentPath = window.location.pathname;

// Находим ссылку в меню с текущим путем и добавляем класс "active"
let menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(function(link) {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    }
});