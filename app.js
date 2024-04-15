// app.js
document.querySelectorAll('.menu li').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.querySelector('.submenu').style.display = 'block';
    });
    item.addEventListener('mouseout', () => {
        item.querySelector('.submenu').style.display = 'none';
    });
});

// Adicionando suporte para submenus dentro de submenus
document.querySelectorAll('.submenu').forEach(submenu => {
    submenu.addEventListener('mouseover', () => {
        submenu.style.display = 'block';
    });
    submenu.addEventListener('mouseout', () => {
        submenu.style.display = 'none';
    });
});