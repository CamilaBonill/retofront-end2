/*window.sr = ScrollReveal();
  sr.reveal('.text_hero', {
    reset: true,
    duration:4000,
    origin: 'botton',
    distance: '-200px',
  })*/
  ScrollReveal({
    reset: true,
    distance: '20px',
    duration: 2500,
  })
  //ScrollReveal().reveal('#saludos, #presentancion', {delay: 500, origin: 'top'})
  //ScrollReveal().reveal('#nombre2', {delay: 2000, origin: 'left'})
  //ScrollReveal().reveal('.sobre', { origin: 'top', distance:'20px'})
 // ScrollReveal().reveal('#parrafo_sobre_mi', {delay: 500, origin: 'bottom', distance: "40px"})

  //ScrollReveal().reveal('.link_red li', {delay: 500, origin: 'bottom', interval: 200})

  //ScrollReveal().reveal('.skill', {delay: 500, origin: 'bottom', interval: 200})

  //ScrollReveal().reveal('#titulo_1, #titulo_2', {delay: 500, origin: 'let'})

//animaciones con materialize
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {
      duration: 150,
      dist: -80,
      shift: 5,
      padding: 5,
      numVisible: 3,
      indicators: true,
      noWrap: false,

    });
  });

  $(document).ready(function() {
    $('#pagepiling').pagepiling({

    });
  });