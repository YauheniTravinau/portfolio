document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.checkbox');

    let totalPrice = 0;
    let selectedServices = 0;

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('click', function () {
            if (checkbox.classList.contains('checked')) {
                checkbox.classList.remove('checked');
                totalPrice -= parseInt(checkbox.parentNode.parentNode.querySelector('td:nth-child(3)').textContent.replace('$', ''));
                selectedServices--;
            } else {
                checkbox.classList.add('checked');
                totalPrice += parseInt(checkbox.parentNode.parentNode.querySelector('td:nth-child(3)').textContent.replace('$', ''));
                selectedServices++;
            }

            updateSummary();
        });
    });

    function updateSummary() {
        let discount = 0;
        if (selectedServices > 3) {
            discount = 30;
        }

        const finalPrice = totalPrice * (1 - discount / 100);

        document.getElementById('totalPrice').textContent = totalPrice;
        document.getElementById('discount').textContent = discount;
        document.getElementById('finalPrice').textContent = finalPrice.toFixed(2);
    }
});
