import { test, expect,} from "vitest";
import { calcularTotal } from "../src/venta.js";

test("Calcular total de productos", () => {
  const productos = [
    { nombre: "Lapicero", precio: 5 },
    { nombre: "Cuaderno", precio: 10 }
  ];
  expect(calcularTotal(productos)).toBe(15);
});

test("Lista vacía devuelve 0", () => {
  expect(calcularTotal([])).toBe(0);
});