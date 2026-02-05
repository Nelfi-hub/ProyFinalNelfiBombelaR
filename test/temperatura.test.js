import { test, expect, vi} from "vitest";
import { obtenerTemperatura } from "../src/temperatura.js";

test("Simular temperatura con mockReturnValue", () => {

  // 1️⃣ Forzamos el valor que devuelve Math.random
  vi.spyOn(Math, "random").mockReturnValue(0.3);  //se usa para controlar un valor aleatorio y poder validar el comportamiento

  // 2️⃣ Llamamos a la función
  const temp = obtenerTemperatura();

  // 3️⃣ Verificamos el valor simulado
  expect(temp).toBe(0.3);

  // 4️⃣ Restauramos el comportamiento normal
  Math.random.mockRestore();
});