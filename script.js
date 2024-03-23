// Загрузка меню с помощью JavaScript
window.addEventListener('DOMContentLoaded', function() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                document.getElementById('menu').innerHTML = xhr.responseText;
            } else {
                console.error('Не удалось загрузить меню');
            }
        }
    };
    xhr.open('GET', '/menu/menu.html', true);
    xhr.send();
})

document.addEventListener("DOMContentLoaded", function () {
    const jobTitles = document.querySelectorAll("#jobTitles p");
    let currentIndex = 0;

    function showNextTitle() {
        const currentTitle = jobTitles[currentIndex];
        currentTitle.classList.remove("active");
        currentIndex = (currentIndex + 1) % jobTitles.length;
        const nextTitle = jobTitles[currentIndex];
        nextTitle.classList.add("active");
        setTimeout(showNextTitle, 5000); // Через 5 секунд переключиться на следующий заголовок
    }

    showNextTitle(); // Начать анимацию с первого заголовка
});

// Получаем параграф с классом "jobTitle"
const jobTitle = document.querySelector('#jobTitles .jobTitle');

// Массив с различными вариантами текста
const titles = [
    "Веб-разработчик | Фронтенд-разработчик | Дизайнер веб-сайтов",
    "Графический дизайнер | Специалист по монтажу видео | Специалист по визуальным эффектам",
    "Веб-дизайнер | Веб-мастер | Специалист по оптимизации SEO",
    "Специалист по анимации веб-сайтов | Веб-инженер | Веб-программист",
    "Специалист по веб-хостингу и доменам | Full-stack разработчик"
];

let currentIndex = 0;

function switchText() {
    jobTitle.textContent = titles[currentIndex];
    currentIndex++;
    if (currentIndex >= titles.length) {
        currentIndex = 0;
    }
}

setInterval(switchText, 3000);
