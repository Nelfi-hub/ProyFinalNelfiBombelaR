export function calcularTotal(productos) {
  if (productos.length === 0) {
    return 0;
  }

  return productos.reduce((total, p) => total + p.precio, 0);
}