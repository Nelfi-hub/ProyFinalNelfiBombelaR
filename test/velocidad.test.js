import { test, expect } from "vitest";
import { velocidadActual } from "../src/velocidad.js";

test("La velocidad está dentro del límite", () => {
  const velocidad = velocidadActual();
  expect(velocidad).toBeLessThan(100);  //se valida que un valor no supera el limite permitido
});