import { obtenerCarrito } from "./storage.js";
import { eliminarProducto, vaciarCarrito } from "./funcionesCarrito.js";
import { actualizarContador } from "./ui.js";

const renderizarCarrito = () => {
  const carrito = obtenerCarrito() || [];
  actualizarContador(carrito);

  const contenedor = document.getElementById("contenedor-carrito");
  const divAcciones = document.getElementById("acciones-carrito");

  contenedor.innerHTML = "";
  divAcciones.innerHTML = "";

  if (!carrito.length) {
    const mensaje = document.createElement("p");
    mensaje.classList.add("mensaje-carrito-vacio");
    mensaje.textContent = "Tu carrito está vacío ☹️";

    contenedor.appendChild(mensaje);
    return;
  }

  carrito.forEach((producto, indice) => {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta-producto");

    const img = document.createElement("img");
    img.src = `../${producto.img}`;
    img.alt = producto.nombre;

    const titulo = document.createElement("h3");
    titulo.textContent = producto.nombre;

    const descripcion = document.createElement("p");
    descripcion.classList.add("descripcion");
    descripcion.textContent = producto.descripcion;

    const precio = document.createElement("p");
    precio.textContent = producto.precio;

    const btnEliminar = document.createElement("button");
    btnEliminar.classList.add("btn-carrito", "btn-eliminar-carrito");
    btnEliminar.textContent = "Eliminar producto 🗑️";

    btnEliminar.addEventListener("click", () => {
      eliminarProducto(indice);
      renderizarCarrito();
    });

    tarjeta.appendChild(img);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(descripcion);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(btnEliminar);

    contenedor.appendChild(tarjeta);
  });

  const btnVaciar = document.createElement("button");
  btnVaciar.classList.add("btn-carrito", "btn-vaciar-carrito");
  btnVaciar.textContent = "Vaciar carrito 🧺";

  btnVaciar.addEventListener("click", () => {
    vaciarCarrito();
    renderizarCarrito();
  });

  divAcciones.appendChild(btnVaciar);
};

document.addEventListener("DOMContentLoaded", () => {
  renderizarCarrito();
});
