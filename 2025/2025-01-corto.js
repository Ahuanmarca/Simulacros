const preguntas = [
  {
    pregunta: "1. Los Servicios Comerciales son aquellos que atienden las necesidades de demanda de movilidad del mercado y se prestan en régimen de libre competencia y pluralidad de oferta. ¿Cuál de los siguientes no es considerado un servicio comercial?",
    opciones: [
      "a) Alta Velocidad-Larga Distancia.",
      "b) Larga Distancia.",
      "c) Servicios de Cercanías.",
      "d) Trenes Turísticos.",
    ],
    correcta: "c) Servicios de Cercanías.",
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
  {
    pregunta: "3. ¿Cuál de las siguientes opciones no es uno de los servicios de Renfe Viajeros sometidos a obligaciones de servicio público?",
    opciones: [
      "a) Alta Velocidad-Media Distancia.",
      "b) AVE, Avlo, Alvia, Euromed e Intercity.",
      "c) Servicios de Media Distancia que circulan por vías de ancho métrico o ibérico/red de ancho convencional.",
      "d) Servicios de Cercanías que discurren por vías de ancho métrico o ibérico/red de ancho convencional.",
    ],
    correcta: "b) AVE, Avlo, Alvia, Euromed e Intercity.",
    comentario: `Los tipos de servicios sometidos a obligaciones de servicio público son:
– Alta Velocidad-Media Distancia.
– Servicios de Media Distancia que circulan por vías de ancho métrico o ibérico/red de ancho convencional.
– Servicios de Cercanías que discurren por vías de ancho métrico o ibérico/red de ancho convencional.
Por el contrario, “b) AVE, Avlo, Alvia, Euromed e Intercity” son servicios comerciales regulados por las condiciones de mercado (tarifas y descuentos/beneficios que no pueden ser fijados por financiación pública) porque supondría una competencia desleal para el resto de operadores de transporte de viajeros.`,
  },
];


// === VALIDACIÓN DE RESPUESTAS ===

let errores = [];

preguntas.forEach((pregunta, index) => {
  const { opciones, correcta } = pregunta;
  const coincidencia = opciones.includes(correcta);
  if (!coincidencia) {
    errores.push(index + 1); // sumamos 1 para que el número coincida con la pregunta real
  }
});

if (errores.length === 0) {
  console.log("✅ Todas las preguntas tienen una opción que coincide exactamente con la respuesta correcta.");
} else {
  console.log("❌ Las siguientes preguntas NO tienen una opción que coincida con la respuesta correcta:");
  errores.forEach(num => console.log(`  - Pregunta ${num}`));
}