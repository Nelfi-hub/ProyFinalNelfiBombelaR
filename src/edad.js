export function verificarAcceso(edad) {
  if (edad < 21) {
    throw new Error("Acceso denegado");
  }
  return true;
}