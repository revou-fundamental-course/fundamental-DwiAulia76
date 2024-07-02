// hamburger button
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-button');
    const nav = document.querySelector('nav');

    toggleButton.addEventListener('click', function () {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });
});