"""
Lee preguntas de archivo .txt y genera archivo .js con pretuntas en array

Ejemplo de input
Las preguntas deben tener la siguiente estructura:

QUESTIONS
"1. Los Servicios Comerciales son aquellos que atienden las necesidades de demanda de movilidad del mercado y se prestan en régimen de libre competencia y pluralidad de oferta. ¿Cuál de los siguientes no es considerado un servicio comercial?"
"a) Alta Velocidad-Larga Distancia."
"b) Larga Distancia."
"c) Servicios de Cercanías."
"d) Trenes Turísticos."
"2. ¿Cuál de las siguientes opciones no es una de las que regulan los servicios sujetos a obligaciones de servicio público por la Administración General del Estado que debe prestar Renfe Viajeros en la red ferroviaria de interés general?"
"a) Acuerdo del Consejo de Ministros."
"b) Reglamento (CE) 1370/2007 del Parlamento y Consejo, de 23 de octubre de 2007 sobre los servicios públicos de transporte de viajeros por ferrocarril y carretera."
"c) Ley 38/2015, de 29 de septiembre del sector ferroviario."
"d) Real Decreto Legislativo 6/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley sobre Tráfico, Circulación de Vehículos a Motor y Seguridad Vial."
ANSWERS
"1. c) Servicios de Cercanías"
`Los Servicios Comerciales son aquellos que atienden las necesidades de demanda de movilidad del mercado y se prestan en régimen de libre competencia y pluralidad de oferta.
Los servicios considerados comerciales son:
– Alta Velocidad-Larga Distancia.
– Larga Distancia.
– Trenes Turísticos, cuyas Condiciones Generales de contratación se encuentran a disposición de los clientes en la web de Renfe.`
"2. d) Real Decreto Legislativo 6/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley sobre Tráfico, Circulación de Vehículos a Motor y Seguridad Vial."
`Los servicios sujetos a obligaciones de servicio público por la Administración General del Estado, que debe prestar Renfe Viajeros en la red ferroviaria de interés general, son los definidos en Acuerdo del Consejo de Ministros, de conformidad con el Reglamento (CE) 1370/2007 del Parlamento y Consejo, de 23 de octubre de 2007 sobre los servicios públicos de transporte de viajeros por ferrocarril y carretera y lo dispuesto en el artículo 59.1 de la Ley 38/2015, de 29 de septiembre del sector ferroviario.`

Ejemplo de output

const preguntas = [
  {
    pregunta: "1. Los Servicios Comerciales son aquellos que atienden las necesidades de demanda de movilidad del mercado y se prestan en régimen de libre competencia y pluralidad de oferta. ¿Cuál de los siguientes no es considerado un servicio comercial?",
    opciones: [
      "a) Alta Velocidad-Larga Distancia.",
      "b) Larga Distancia.",
      "c) Servicios de Cercanías.",
      "d) Trenes Turísticos.",
    ],
    correcta: "c) Servicios de Cercanías",
    comentario: `Los Servicios Comerciales son aquellos que atienden las necesidades de demanda de movilidad del mercado y se prestan en régimen de libre competencia y pluralidad de oferta.
Los servicios considerados comerciales son:
– Alta Velocidad-Larga Distancia.
– Larga Distancia.
– Trenes Turísticos, cuyas Condiciones Generales de contratación se encuentran a disposición de los clientes en la web de Renfe.`,
  },
  {
    pregunta: "2. ¿Cuál de las siguientes opciones no es una de las que regulan los servicios sujetos a obligaciones de servicio público por la Administración General del Estado que debe prestar Renfe Viajeros en la red ferroviaria de interés general?",
    opciones: [
      "a) Acuerdo del Consejo de Ministros.",
      "b) Reglamento (CE) 1370/2007 del Parlamento y Consejo, de 23 de octubre de 2007 sobre los servicios públicos de transporte de viajeros por ferrocarril y carretera.",
      "c) Ley 38/2015, de 29 de septiembre del sector ferroviario.",
      "d) Real Decreto Legislativo 6/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley sobre Tráfico, Circulación de Vehículos a Motor y Seguridad Vial.",
    ],
    correcta: "d) Real Decreto Legislativo 6/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley sobre Tráfico, Circulación de Vehículos a Motor y Seguridad Vial.",
    comentario: `Los servicios sujetos a obligaciones de servicio público por la Administración General del Estado, que debe prestar Renfe Viajeros en la red ferroviaria de interés general, son los definidos en Acuerdo del Consejo de Ministros, de conformidad con el Reglamento (CE) 1370/2007 del Parlamento y Consejo, de 23 de octubre de 2007 sobre los servicios públicos de transporte de viajeros por ferrocarril y carretera y lo dispuesto en el artículo 59.1 de la Ley 38/2015, de 29 de septiembre del sector ferroviario.`,
  },
];
"""

import re
import os


def parse_txt_to_js(input_file, output_file):
    with open(input_file, "r", encoding="utf-8") as f:
        content = f.read()

    # Separar bloques de preguntas y respuestas
    questions_block = (
        re.search(r"QUESTIONS(.*?)ANSWERS", content, re.DOTALL).group(1).strip()
    )
    answers_block = re.search(r"ANSWERS(.*)", content, re.DOTALL).group(1).strip()

    # Procesar preguntas
    lines = [
        line.strip().strip('"') for line in questions_block.split("\n") if line.strip()
    ]
    preguntas = []
    current_pregunta = {}
    opciones = []

    for line in lines:
        if re.match(r"^\d+\.\s", line):  # Línea de pregunta
            if current_pregunta:
                current_pregunta["opciones"] = opciones
                preguntas.append(current_pregunta)
                opciones = []
            current_pregunta = {"pregunta": line}
        elif re.match(r"^[a-d]\)", line):  # Opción de respuesta
            opciones.append(line)

    if current_pregunta:
        current_pregunta["opciones"] = opciones
        preguntas.append(current_pregunta)

    # Procesar respuestas (⬅️ esta parte está corregida)
    answer_lines = [line.strip() for line in answers_block.split("\n") if line.strip()]
    respuestas = []
    i = 0
    while i < len(answer_lines):
        if answer_lines[i].startswith('"'):
            correcta = answer_lines[i].strip('"')
            i += 1
            comentario_lines = []
            while i < len(answer_lines) and not answer_lines[i].startswith('"'):
                comentario_lines.append(answer_lines[i].strip("`"))
                i += 1
            comentario = "\n".join(comentario_lines)
            respuestas.append((correcta, comentario))
        else:
            i += 1

    # Combinar preguntas y respuestas
    for idx, pregunta in enumerate(preguntas):
        correcta_texto = respuestas[idx][0]
        comentario_texto = respuestas[idx][1]
        correcta_sola = correcta_texto.split(". ", 1)[1]
        pregunta["correcta"] = correcta_sola
        pregunta["comentario"] = comentario_texto

    # Generar archivo JS
    with open(output_file, "w", encoding="utf-8") as f:
        f.write("const preguntas = [\n")
        for p in preguntas:
            f.write("  {\n")
            f.write(f'    pregunta: "{p["pregunta"]}",\n')
            f.write("    opciones: [\n")
            for op in p["opciones"]:
                f.write(f'      "{op}",\n')
            f.write("    ],\n")
            f.write(f'    correcta: "{p["correcta"]}",\n')
            f.write(f'    comentario: `{p["comentario"]}`,\n')
            f.write("  },\n")
        f.write("];\n")

    print(f"✅ Archivo generado correctamente: {output_file}")


# === INICIO DEL SCRIPT ===

input_filename = input(
    "📄 Introduce el nombre del archivo .txt (con o sin la extensión): "
).strip()

if not input_filename.endswith(".txt"):
    input_filename += ".txt"

if not os.path.exists(input_filename):
    print(f"❌ El archivo '{input_filename}' no existe.")
else:
    output_filename = os.path.splitext(input_filename)[0] + ".js"
    parse_txt_to_js(input_filename, output_filename)
