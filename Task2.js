// scripts.js

// Example: Toggle menu on small screens
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav ul');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Menu';
    toggleButton.style.background = '#333';
    toggleButton.style.color = '#fff';
    toggleButton.style.border = 'none';
    toggleButton.style.padding = '10px';
    toggleButton.style.cursor = 'pointer';

    toggleButton.addEventListener('click', function() {
        nav.classList.toggle('open');
    });

    document.querySelector('header').insertBefore(toggleButton, nav);

    nav.style.display = 'none';

    const mediaQuery = window.matchMedia('(max-width: 768px)');
    function handleMediaQueryChange(e) {
        if (e.matches) {
            nav.style.display = 'none';
            toggleButton.style.display = 'block';
        } else {
            nav.style.display = 'flex';
            toggleButton.style.display = 'none';
        }
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
});
