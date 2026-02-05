import { test, expect,} from "vitest";
import { crearProducto } from "../src/producto.js";

test("Crear producto válido", () => {
  const producto = crearProducto("Mouse", 50);
  expect(producto.precio).toBe(50);
});

test("Error si el precio es inválido", () => {
  expect(() => crearProducto("Teclado", -10)).toThrow();
});