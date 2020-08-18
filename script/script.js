/*a função openMenu seleciona o elemento .mobile e aplica a animação openAnim ao elemento,
redimensionando ela para uma escala maior em pixels*/
function openMenu() {
    var menu = document.querySelector('.mobile');
    menu.style.animation="openAnim 0.2s ease 1";
    menu.style.animationFillMode="both";
}

/*a função closeMenu seleciona o elemento .mobile e aplica a animação closeAnim ao elemento,
redimensionando ela para uma escala menor em pixels*/
function closeMenu() {
    var menu = document.querySelector('.mobile');
    menu.style.animation="closeAnim 0.2s ease 1";
}
