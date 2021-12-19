import { getImagen } from "../../base/11-async-await";

describe("Pruebas con async-await y Fecth", () => {
  test("Debe de retornar el url de la imagen", async () => {
    /* const url = getImagen(); // Retorna una promesa. */
    const url = await getImagen();
    console.log(url);
    expect(typeof url).toBe("string");
    expect(url.includes("https://")).toBe(true);
  });
});
