import { test, expect } from "vitest";
import { verificarAcceso } from "../src/edad.js";

test("Lanza error si la edad es menor a 21", () => {
  expect(() => verificarAcceso(18)).toThrow();  // se valida el manejo de errorescuando no se cumplen 
});                                              //las condiosiones 