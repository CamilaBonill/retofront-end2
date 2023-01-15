// Obtenemos el elemento body
const body = document.querySelector("body");

// Añadimos un manejador de evento para el evento scroll
window.addEventListener("scroll", function() {
  // Calculamos el porcentaje de scroll realizado
  const scrollPorcentaje = window.scrollY / (document.body.offsetHeight - window.innerHeight);

  // Ajustamos el color del fondo en consecuencia
  body.style.backgroundColor = `rgb(255, ${Math.round(scrollPorcentaje * 255)}, ${Math.round(scrollPorcentaje * 255)})`;
});
