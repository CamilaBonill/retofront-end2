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
  ScrollReveal().reveal('.sobre', { origin: 'top', distance:'20px'})
  ScrollReveal().reveal('#parrafo_sobre_mi', {delay: 500, origin: 'right'})

// cambiar background con js

const animado = document.querySelector(".animacion");
const animado2 = document.querySelector(".sticky_ele");
/*let contador = 0;


window.addEventListener('scroll', function() {
  console.log(contador, window.scrollY)
  if (window.scrollY > contador) {
    console.log("hola mundo")
  } else {
    console.log("adio mundo")
  }
  contador = window.scrollY;
  

});*/


/*
let y = 150
let ultimoScrollY = 0;

window.addEventListener("scroll", ()=>{
  let pantalla = window.innerHeight;
  let ubicacion = animado.getBoundingClientRect().top
  let ubicacion2 = animado2.getBoundingClientRect().top
  console.log(pantalla, ubicacion, ubicacion2)
 if(ubicacion < -2000){
  y -= 10;
  let x = y + "px"
  console.log(x)
   document.getElementById("k1").style.top= x
  }
})*/
/*
let y = 0; // Inicializa y en 0
let ultimoScrollY = 0; // Inicializa ultimoScrollY en 0


window.addEventListener("scroll", () => {
  // Obtiene la cantidad de pixeles que se han desplazado desde el inicio de la página
  let scrollY = window.scrollY;
  // Obtiene las coordenadas del elemento "animado" en relación con el borde de la ventana del navegador
  let ubicacion = animado.getBoundingClientRect().top;
  // Si el scrollY es mayor que el último scrollY, significa que se ha hecho scroll hacia abajo
  if (scrollY > ultimoScrollY ) {
    // Decrementa y
    y -= 1;
  } else {
    // Incrementa y
    y += 1;
  }

  // Obtiene la altura de la ventana del navegador
  let pantalla = window.innerHeight;

  

  // Obtiene las coordenadas del elemento "animado2" en relación con el borde de la ventana del navegador
  let ubicacion2 = animado2.getBoundingClientRect().top;

  //console.log( ubicacion, ubicacion2);
  console.log(scrollY, ubicacion)

  // Convierte y en una cadena seguida de "px"
  let x = y + "px";

  // Si la ubicación del elemento "animado" es menor que -1000, cambia la propiedad "top" del elemento con id "k1"
  if (ubicacion < -2000) {
    console.log(x);
    document.getElementById("k1").style.top = x;
  }
});*/
let y = 150; // Inicializa y en 0
let ultimoScrollY = 0; // Inicializa ultimoScrollY en 0

window.addEventListener("scroll", () => {
  // Obtiene la cantidad de pixeles que se han desplazado desde el inicio de la página
  let scrollY = window.scrollY;
  console.log(ultimoScrollY, window.scrollY, y)

  // Obtiene las coordenadas del elemento "animado" en relación con el borde de la ventana del navegador
  let ubicacion = animado.getBoundingClientRect().top;

  // Si el scrollY es mayor que el último scrollY, significa que se ha hecho scroll hacia abajo
  if (scrollY > ultimoScrollY && (ubicacion <= -1500)) {
    // Decrementa y
    y -= 1;
    console.log("hola mundo")
  } else if((ubicacion <= -2000)){
    // Incrementa y
    y += 1;
    console.log("adio mundo")
  }else{
    console.log(y)
  }

  // Actualiza ultimoScrollY
  ultimoScrollY = scrollY;

  // Obtiene la altura de la ventana del navegador
  let pantalla = window.innerHeight;

  // Obtiene las coordenadas del elemento "animado2" en relación con el borde de la ventana del navegador
  let ubicacion2 = animado2.getBoundingClientRect().top;
  console.log(ubicacion, ubicacion2)

 

  // Convierte y en una cadena seguida de "px"
  let x = y + "px";

  // Si la ubicación del elemento "animado" es mayor o igual a -1000, cambia la propiedad "top" del elemento con id "k1"
  if (ubicacion <= -1500) {
    
    document.getElementById("k1").style.top = x;
  }else if((ubicacion >= -1700)){
    animado2.classList.remove(".sticky_ele")
  }
});

/*
  let ultimoScrollY = 0
  let y = 4000
  window.addEventListener("scroll", function(){
    let pixel = window.scrollY
    
    
    console.log(pixel, ultimoScrollY)
    // Convierte y en una cadena seguida de "px"
    // Si el scrollY es mayor que el último scrollY, significa que se ha hecho scroll hacia abajo
    let r = 5
    /*if (pixel > ultimoScrollY) {
      // Decrementa y
      y -= r;
      console.log("hola mundo")
    } else{
      // Incrementa y
      y += r;
      console.log("adio mundo")
    }
    ultimoScrollY = pixel
    let x = y-pixel + "px";

    // Si la ubicación del elemento "animado" es mayor o igual a -1000, cambia la propiedad "top" del elemento con id "k1"
    //if (ubicacion <= q) {
      document.getElementById("z1").style.top = x;
    //}

  })*/
/*// cambiar background con js
const animado = document.querySelector(".animacion");
const animado2 = document.querySelector(".sticky_ele");

let y = 150; // Inicializa y en 0
let ultimoScrollY = 0; // Inicializa ultimoScrollY en 0

window.addEventListener("scroll", () => {
  // Obtiene la cantidad de pixeles que se han desplazado desde el inicio de la página
  let q = -100
  let r= 1
  let scrollY = window.scrollY;
  console.log(ultimoScrollY, window.scrollY, y)

  // Obtiene las coordenadas del elemento "animado" en relación con el borde de la ventana del navegador
  let ubicacion = animado.getBoundingClientRect().top;

  // Si el scrollY es mayor que el último scrollY, significa que se ha hecho scroll hacia abajo
  if (scrollY > ultimoScrollY && (ubicacion <= q)) {
    // Decrementa y
    y -= r;
    console.log("hola mundo")
  } else if((ubicacion <= q)){
    // Incrementa y
    y += r;
    console.log("adio mundo")
  }else{
    console.log("que pasa")
    y= 150
  }

  // Actualiza ultimoScrollY
  ultimoScrollY = scrollY;

  // Obtiene la altura de la ventana del navegador
  let pantalla = window.innerHeight;

  // Obtiene las coordenadas del elemento "animado2" en relación con el borde de la ventana del navegador
  let ubicacion2 = animado2.getBoundingClientRect().top;
  console.log(ubicacion, ubicacion2)

 

  // Convierte y en una cadena seguida de "px"
  let x = y + "px";

  // Si la ubicación del elemento "animado" es mayor o igual a -1000, cambia la propiedad "top" del elemento con id "k1"
  //if (ubicacion <= q) {
    document.getElementById("k1").style.top = x;
  //}
});*/


 