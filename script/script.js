document.addEventListener('DOMContentLoaded', function() {
    var burgerMenu = document.getElementById('burger-menu');
    var navList = document.getElementById('nav-list');

    burgerMenu.onclick = function() {
        // Check if nav is visible
        var isMenuVisible = navList.offsetLeft === 0;
        
        if (isMenuVisible) {
            // Hide menu
            navList.style.left = '-100%';
        } else {
            // Show menu
            navList.style.left = '0';
        }
    };
});