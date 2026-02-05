import { test, expect,} from "vitest";
import { aplicarDescuento } from "../src/descuento.js";

test("Aplicar descuento correcto", () => {
  const total = aplicarDescuento(100, 10);
  expect(total).toBe(90);
});

test("Descuento mayor a 50% genera error", () => {
  expect(() => aplicarDescuento(100, 60)).toThrow();
});