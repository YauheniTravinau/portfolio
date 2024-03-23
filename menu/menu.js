document.addEventListener("DOMContentLoaded", function() {
    let icons = document.querySelectorAll('.icon');
    let activeIconIndex = localStorage.getItem('activeIconIndex');

    if (activeIconIndex !== null) {
        icons[parseInt(activeIconIndex)].classList.add('active'); // Преобразуем строку в число
    }

    icons.forEach(function(icon, index) {
        icon.addEventListener('click', function() {
            let activeIcon = document.querySelector('.icon.active');
            if (activeIcon) {
                activeIcon.classList.remove('active');
            }
            this.classList.add('active');
            localStorage.setItem('activeIconIndex', index.toString()); // Преобразуем число в строку перед сохранением в localStorage
        });
    });
});
