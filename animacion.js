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
  ScrollReveal().reveal('#saludos, #presentancion', {delay: 500, origin: 'top'})
  ScrollReveal().reveal('#nombre2', {delay: 2000, origin: 'left'})
  //ScrollReveal().reveal('.sobre', { origin: 'top', distance:'20px'})
  ScrollReveal().reveal('#parrafo_sobre_mi', {delay: 500, origin: 'bottom', distance: "40px"})

  ScrollReveal().reveal('.link_red li', {delay: 500, origin: 'bottom', interval: 200})

  ScrollReveal().reveal('.skill', {delay: 500, origin: 'bottom', interval: 200})

  ScrollReveal().reveal('#titulo_1, #titulo_2', {delay: 500, origin: 'let'})
  ScrollReveal().reveal('#info div', {delay: 500, origin: 'let', interval: 1000})

/*
  let ultimoScrollY = 0
  let y = 100
  window.addEventListener("scroll", function(){
    let pixel = window.scrollY
    console.log(pixel)
    
    
    //console.log(pixel, ultimoScrollY)
    // Convierte y en una cadena seguida de "px"
    // Si el scrollY es mayor que el último scrollY, significa que se ha hecho scroll hacia abajo
    let r = 5
    if (pixel > ultimoScrollY) {
      // Decrementa y
      y -= r;
      console.log("hola mundo")
    } else{
      // Incrementa y
      y += r;
      console.log("adio mundo")
    }
    ultimoScrollY = pixel
    let x = y-(pixel/100) + "px";
    //let s = pixel %= 2
    let h = y - 1 + "%"
    let f = "inset("+h+ "0px 0px)";
    console.log(pixel)
    //console.log(x, s, f)

    // Si la ubicación del elemento "animado" es mayor o igual a -1000, cambia la propiedad "top" del elemento con id "k1"
    if (pixel >= 2029) {
     // document.getElementById("z1").style.clipPath = f;
    }

  })*/
