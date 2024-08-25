document.addEventListener('DOMContentLoaded', function () {
    // Load header
    fetch('/pages/header.html')
        .then(response => response.text())
        .then(data => document.getElementById('header').innerHTML = data)
        .then(() => attachMenuToggleHandlers());

    // Load footer
    fetch('/pages/footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer').innerHTML = data);
});

function attachMenuToggleHandlers() {
    const menuToggle = document.getElementById('menuToggle');
    const menuClose = document.getElementById('menuClose');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && menuClose && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.style.display = 'flex';
            menuToggle.style.display = 'none';
            menuClose.style.display = 'block';
        });

        menuClose.addEventListener('click', function() {
            navMenu.style.display = 'none';
            menuToggle.style.display = 'block';
            menuClose.style.display = 'none';
        });
    }
}
