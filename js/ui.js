export const actualizarContador = (carrito) => {
  const contador = document.getElementById("contador-carrito");
  if (contador) {
    contador.textContent = carrito.length;
  }
};

// Función genérica
export const mostrarMensaje = (texto, tipo = "info") => {
  Swal.fire({
    title: texto,
    icon: tipo,
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });
};

// Al agregar → success toast
export const mensajeAgregar = () => {
  mostrarMensaje("Producto agregado al carrito", "success");
};

// Al eliminar → warning toast
export const mensajeEliminar = () => {
  mostrarMensaje("Producto eliminado", "warning");
};

// Carrito vacío → error
export const mensajeCarritoVacio = () => {
  mostrarMensaje("El carrito está vacío", "error");
};

// Vaciar carrito → confirmación
export const confirmarVaciado = (callback) => {
  Swal.fire({
    title: "¿Vaciar carrito?",
    text: "Se borrarán todos los productos",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, vaciar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      callback();
      mostrarMensaje("Carrito vaciado", "success");
    }
  });
};
