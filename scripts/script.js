var modalId = document.getElementById('modalSearch');

modalId.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    let button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    let recipient = button.getAttribute('data-bs-whatever');

    // Use above variables to manipulate the DOM
});

function searchFocus() {

    let el = document.getElementById("search")
    el.focus();
    el.value = "Пахиверия Шейдекери";
}

var modalLogin = document.getElementById('modalLogin');

modalLogin.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    let button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    let recipient = button.getAttribute('data-bs-whatever');

    // Use above variables to manipulate the DOM
});
