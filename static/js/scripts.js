document.addEventListener("DOMContentLoaded", function() {
    // Add interactivity here, e.g., highlight active menu item
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('nav ul li a');
    const menuLength = menuItem.length;

    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].className = "active";
        }
    }

    // Example: Toggle display of best practices items
    const practicesList = document.getElementById('practices-list');
    if (practicesList) {
        practicesList.addEventListener('click', function(e) {
            if (e.target && e.target.nodeName === 'LI') {
                e.target.classList.toggle('expanded');
            }
        });
    }
});
