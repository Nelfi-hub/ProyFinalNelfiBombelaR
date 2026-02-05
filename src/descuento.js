export function aplicarDescuento(total, porcentaje) {
  if (porcentaje < 0 || porcentaje > 50) {
    throw new Error("Descuento no permitido");
  }
  return total - (total * porcentaje / 100);
}