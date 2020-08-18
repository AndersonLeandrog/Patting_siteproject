function openMenu() {
    var menu = document.querySelector('.mobile');
    menu.style.animation="openAnim 0.2s ease 1";
    menu.style.animationFillMode="both";
}

function closeMenu() {
    var menu = document.querySelector('.mobile');
    menu.style.animation="closeAnim 0.2s ease 1";
}
