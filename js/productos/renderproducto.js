function renderProductos(lista) {
  lista.innerHTML = productos
    .map(
      (producto, indice) => `
        <li class="main-product-article">
          <a class="product-link" href="./productview.html?id=${producto.id}">
            <div class="product-image-wrap">
              <img class="product-image" src="${producto.imagen}" alt="${producto.nombre}" loading="lazy" decoding="async" />
              <span class="product-number" aria-hidden="true">${String(indice + 1).padStart(2, "0")}</span>
            </div>
            <div class="product-info">
              <p class="product-title">${producto.nombre}</p>
              <span class="product-price">$ ${producto.precio.toLocaleString("es-UY")}</span>
            </div>
          </a>
        </li>
      `,
    )
    .join("");
}

function renderDetalleProducto(vista) {
  const id = Number(new URLSearchParams(window.location.search).get("id"));
  const producto = productos.find((producto) => producto.id === id);

  if (!producto) {
    vista.innerHTML = `
      <div class="producto-empty">
        <p class="eyebrow">La selección Vitrine</p>
        <h1 class="section-title">Producto no encontrado.</h1>
        <p class="body-text">Volvé a la colección para elegir una de nuestras prendas.</p>
        <a class="button" href="./index.html#productos">Ver la colección</a>
      </div>
    `;
    return;
  }

  document.title = `${producto.nombre} · Vitrine Brands`;
  vista.querySelector(".producto-nombre").textContent = producto.nombre;
  vista.querySelector(".producto-precio").textContent = `$ ${producto.precio.toLocaleString("es-UY")}`;
  const imagen = vista.querySelector(".producto-imagen");
  imagen.src = producto.imagen;
  imagen.alt = producto.nombre;
}
