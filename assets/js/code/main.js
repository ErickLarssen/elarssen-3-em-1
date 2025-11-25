/*=============== MOSTRAR MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navFechar = document.getElementById('nav-fechar');

// Mostrar Menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('mostrar-menu');
    });
}

// Menu Fechar
if (navFechar) {
    navFechar.addEventListener('click', () => {
        navMenu.classList.remove('mostrar-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('mostrar-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== ADD SOMBRA NA HEADER ===============*/
const sombraHeader = () => {
    const header = document.querySelector('.header');
    this.scrollY >= 50 ? header.classList.add('sombra-header') : header.classList.remove('sombra-header');
};
window.addEventListener('scroll', sombraHeader);

/*============ MOSTRAR SCROLL UP ============*/
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*======= SCROLL SECTIONS ACTIVE LINK =======*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollDown = window.scrollY
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link')
    }else{
      sectionsClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)


/*========= SCROLL REVEAL ANIMATION =========*/
const sr = ScrollReveal({
  origin:'top',
  distance: '60px',
  duration: 2000,
  delay: 300,
  // reset: true, // Repetições de Animações
})

sr.reveal(`.home__data, .sobre__data, .footer__container`)
sr.reveal(`.home__images`, {delay: 1000})
sr.reveal(`.home__dam-1`, {delay: 1000, scale: 0, rotate: {z: 45}})
sr.reveal(`.home__dam-2, .home__dam-3`, {delay: 1400, scale: 0, rotate: {z: 45}})
sr.reveal(`.home__dam-4`, {delay: 1700, scale: 0, rotate: {z: 45}})
sr.reveal(`.home__dam-5`, {delay: 1800, scale: 0, rotate: {z: 45}})
sr.reveal(`.sobre__img-1`, {delay: 600, origin: 'right'})
sr.reveal(`.sobre__img-2`, {delay: 800, origin: 'left'})
sr.reveal(`.sobre__tooltip-1`, {delay: 1600, origin: 'left'})
sr.reveal(`.sobre__tooltip-2`, {delay: 1800, origin: 'right'})
sr.reveal(`.servicos__card:nth-child(1)`, {origin: 'right'})
sr.reveal(`.servicos__card:nth-child(2)`, {origin: 'left'})
sr.reveal(`.servicos__tooltip-1`, {delay: 800, origin: 'right'})
sr.reveal(`.servicos__tooltip-2`, {delay: 800, origin: 'left'})
sr.reveal(`.portfolio__titulos`, {origin: 'bottom'})
sr.reveal(`.portfolio__img`, {delay: 1000})
sr.reveal(`.portfolio__data`, {delay: 1600})
sr.reveal(`.portfolio__numeros`, {delay: 1600, origin: 'bottom'})
sr.reveal(`.contato__data`, {origin: 'right'})
sr.reveal(`.contato__info`, {origin: 'left'})
sr.reveal(`.contato__img-1`, {delay: 1000, distance: 0, scale: 0, rotate: {z: -45}})
sr.reveal(`.contato__img-2`, {delay: 1200, distance: 0, scale: 0, rotate: {z: 45}})
sr.reveal(`.contato__dam-1`, {delay: 1400, scale: 0, rotate: {z: 45}})
sr.reveal(`.contato__dam-3`, {delay: 1600, scale: 0, rotate: {z: 45}})
sr.reveal(`.contato__dam-2`, {delay: 1800, scale: 0, rotate: {z: 45}})
sr.reveal(`.contato__dam-4`, {delay: 2000, scale: 0, rotate: {z: 45}})