function mostrarPagina(nombrePagina) {
  const paginas = document.querySelectorAll(".page");

  paginas.forEach(function (pagina) {
    pagina.classList.remove("active");
  });

  document.getElementById(nombrePagina).classList.add("active");
  window.scrollTo(0, 0);
}
