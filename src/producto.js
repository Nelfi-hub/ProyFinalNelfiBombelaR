export function crearProducto(nombre, precio) {
  if (!nombre || precio <= 0) {
    throw new Error("Datos inválidos");
  }
  return { nombre, precio };
}