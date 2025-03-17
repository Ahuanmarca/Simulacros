# Lee preguntas de archivo .txt y crea un script de Google App Script para generar un formulario de Google Forms

import json
import re
import os


def leer_preguntas_desde_txt(nombre_archivo):
    with open(nombre_archivo, "r", encoding="utf-8") as file:
        contenido = file.read()

    # Expresión regular para capturar cada pregunta completa con numeración
    preguntas_raw = re.findall(
        r"Q\)\s(\d+\..*?)(?=\nQ\)\s\d+\.|\Z)", contenido, re.DOTALL
    )

    preguntas = []

    for pregunta_completa in preguntas_raw:
        lineas = pregunta_completa.strip().split("\n")

        # La primera línea es la pregunta sin las opciones
        pregunta_texto = lineas[0].strip()

        opciones = []
        respuesta_correcta = ""

        # Extraer opciones y conservar las letras (a), b), c), d))
        for linea in lineas[1:]:
            match = re.match(r"([a-d])\)\s(.+)", linea.strip())
            if match:
                letra, opcion_texto = match.groups()
                opcion_completa = f"{letra}) {opcion_texto.replace(' ✅', '').strip()}"  # Mantener la letra y eliminar "✅"
                opciones.append(opcion_completa)

                if "✅" in linea:  # Si la línea tiene el ✅, es la respuesta correcta
                    respuesta_correcta = opcion_completa

        # Agregar la pregunta al array
        preguntas.append(
            {
                "pregunta": pregunta_texto,  # Solo la pregunta sin respuestas pegadas
                "opciones": opciones,
                "correcta": respuesta_correcta,
            }
        )

    return preguntas


def guardar_json_como_js(archivo_entrada, datos):
    # Extraer el nombre del archivo sin la extensión para usarlo en el formulario
    nombre_sin_extension = os.path.splitext(archivo_entrada)[0]

    # Código que irá antes del array de preguntas
    codigo_inicio = f"""function crearFormularioQuiz() {{
  // Crear un nuevo formulario
  var form = FormApp.create("{nombre_sin_extension}");

  // Convertir el formulario en un quiz
  form.setIsQuiz(true);

  // Array con las preguntas, opciones y respuesta correcta
"""

    # Código que irá después del array de preguntas
    codigo_final = """
  // Recorrer cada pregunta y agregarla al formulario
  preguntas.forEach(function (item) {
    var preguntaItem = form.addMultipleChoiceItem();
    preguntaItem.setTitle(item.pregunta)
      .setChoices(item.opciones.map(opcion => preguntaItem.createChoice(opcion, opcion === item.correcta)))
      .showOtherOption(false); // No permitir "otra respuesta"

    // Asignar puntuación (Opcional)
    preguntaItem.setPoints(1);
  });

  // Obtener y mostrar la URL del formulario creado
  Logger.log("Formulario creado: " + form.getPublishedUrl());
}"""

    # Cambiar la extensión de .txt a .js para generar el archivo de salida
    archivo_salida = nombre_sin_extension + ".gs"

    with open(archivo_salida, "w", encoding="utf-8") as file:
        file.write(codigo_inicio + "\n\n")  # Agregar código antes del array
        file.write("var preguntas = ")
        json.dump(datos, file, indent=4, ensure_ascii=False)
        file.write(";\n\n")  # Separación antes del código final
        file.write(codigo_final)  # Agregar código después del array

    print(f"✅ Archivo generado: {archivo_salida}")


# Solicitar el nombre del archivo de entrada
archivo_entrada = input("📂 Ingresa el nombre del archivo de entrada (.txt): ").strip()

# Ejecutar el proceso con el nombre de salida generado automáticamente
preguntas_json = leer_preguntas_desde_txt(archivo_entrada)
guardar_json_como_js(archivo_entrada, preguntas_json)
