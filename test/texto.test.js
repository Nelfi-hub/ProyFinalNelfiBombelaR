import { test, expect } from "vitest";
import { generarMensaje } from "../src/texto.js";

test("El mensaje contiene la palabra calidad", () => {
  const mensaje = generarMensaje();
  expect(mensaje).toContain("calidad");  //se valida que un mensaje contenga palabras claves esperadas
});