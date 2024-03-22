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
