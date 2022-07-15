import { Wrapper } from "../modelos/wrapper";

export async function mostrarMenuOtros(w: Wrapper) {

  let opcion: string;

  do {
    console.clear();
    console.log("MENÚ OTROS");
    console.log("-------------");
    console.log("1. Enviar correo");
    console.log("2. Atrás");

    opcion = await w.rlp.questionAsync("¿Qué opción deseas?\n");

    console.clear();

    // Opción 1 --> Enviar correo
    if (opcion === "1") {
      // await bancoGestores.insertarGestor();
      await w.rlp.questionAsync("");
    }

  } while (opcion !== "2");
}
