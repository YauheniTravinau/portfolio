document.addEventListener("DOMContentLoaded", function() {
    const icons = document.querySelectorAll(".icon");

    icons.forEach(icon => {
        icon.addEventListener("click", function() {
            // Remove 'active' class from all icons
            icons.forEach(icon => {
                icon.classList.remove("active");
            });

            // Add 'active' class to the clicked icon
            icon.classList.add("active");
        });
    });
});

