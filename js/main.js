const listaProductos = document.querySelector(".main-product-list");

if (listaProductos) {
  renderProductos(listaProductos);

  const controles = document.querySelectorAll("[data-product-scroll]");

  function actualizarControles() {
    const final = listaProductos.scrollWidth - listaProductos.clientWidth;

    controles.forEach((boton) => {
      boton.disabled =
        Number(boton.dataset.productScroll) < 0
          ? listaProductos.scrollLeft <= 1
          : listaProductos.scrollLeft >= final - 1;
    });
  }

  controles.forEach((boton) => {
    boton.addEventListener("click", () => {
      listaProductos.scrollBy({
        left: Number(boton.dataset.productScroll) * listaProductos.clientWidth,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
    });
  });

  listaProductos.addEventListener("scroll", actualizarControles);
  window.addEventListener("resize", actualizarControles);
  actualizarControles();
}

const vistaProducto = document.querySelector(".producto-main");

if (vistaProducto) {
  renderDetalleProducto(vistaProducto);
}
