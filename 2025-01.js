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
  {
    pregunta: "4. ¿Cómo se denomina el documento que formaliza el contrato de transporte, tanto oneroso como gratuito, entre Renfe Viajeros y la persona que viaja, para la prestación de uno o más servicios de transporte, y que faculta al viajero para hacer uso del servicio?",
    opciones: [
      "a) Billete.",
      "b) Título de transporte.",
      "c) Tarjeta de embarque.",
      "d) Cédula.",
    ],
    correcta: "b) Título de transporte.",
    comentario: `"El título de transporte es el documento que formaliza el contrato de transporte, tanto oneroso como gratuito, entre Renfe Viajeros y la persona que viaja, para la prestación de uno o más servicios de transporte, y que faculta al viajero para hacer uso del servicio."`,
  },
  {
    pregunta: "5. ¿Cuál de las siguientes afirmaciones sobre el título de transporte es falsa?",
    opciones: [
      "a) El cliente tiene la obligación de conservar el título de transporte desde el embarque en la estación hasta que acceda al vehículo y tome asiento.",
      "b) Todos los títulos de transporte están provistos de un sistema de seguridad, con el objetivo de evitar el fraude.",
      "c) En caso de ser solicitado por el personal de Renfe Viajeros, o el personal autorizado, el cliente deberá presentarlo, junto con los documentos acreditativos correspondientes.",
      "d) El título de transporte puede ser oneroso o gratuito.",
    ],
    correcta: "a) El cliente tiene la obligación de conservar el título de transporte desde el embarque en la estación hasta que acceda al vehículo y tome asiento.",
    comentario: `"El cliente debe disponer de un título de transporte válido durante todo el viaje, que deberá conservar desde la entrada a la estación de origen hasta la salida de la estación de destino."`,
  },
  {
    pregunta: "6. ¿Cuál de las siguientes informaciones no se encuentra en que las que debe incluir el título de transporte?",
    opciones: [
      "a) El origen del viaje y la hora de salida.",
      "b) El coche, la clase o tipo de asiento y el número de plaza.",
      "c) El sexo del cliente.",
      "d) El peso y volumen del equipaje admitido, o la indicación de dónde se puede consultar dicha información.",
    ],
    correcta: "c) El sexo del cliente.",
    comentario: `"El título de transporte de los servicios con asignación de plaza deberá incluir la siguiente información:
– La determinación de la empresa ferroviaria que realiza el transporte.
– El origen del viaje y la hora de salida.
– El destino del viaje y la hora de llegada.
– Identificador del número de tren.
– Los transbordos que pudieran producirse con cambio de tren, especificando lugar y hora, en su caso.
– El coche, la clase o tipo de asiento y el número de plaza.
– El peso y volumen del equipaje admitido, o la indicación de dónde se puede consultar dicha información.
– El precio total del transporte, incluidos los complementos adicionales del transporte, los gastos de gestión de los billetes, así como la forma de pago.
– El precio de facturación, en su caso.
– La información sobre los seguros u otros afianzamientos mercantiles que el servicio pudiera cubrir.
– La hora límite, si la hubiere, de presentación en los controles de seguridad para el acceso al tren, si el administrador de infraestructuras lo establece.
– Indicación de que el transporte queda sometido a las Reglas Uniformes relativas al contrato de transporte internacional de viajeros y equipajes por ferrocarril (CIV)."`,
  },
  {
    pregunta: "7. Desde el punto de vista tarifario, ¿cómo estructura Renfe Viajeros el servicio que ofrece a los viajeros?",
    opciones: [
      "a) En servicios públicos y privados.",
      "b) En servicios de baja, media o alta velocidad.",
      "c) En servicios comerciales y servicios sujetos a obligaciones de servicio público.",
      "d) En servicios de precios populares y servicios de primera clase.",
    ],
    correcta: "c) En servicios comerciales y servicios sujetos a obligaciones de servicio público.",
    comentario: `"Desde el punto de vista tarifario, Renfe Viajeros estructura el servicio que ofrece a los viajeros en: servicios comerciales y servicios sujetos a obligaciones de servicio público."`,
  },
  {
    pregunta: "8. ¿Cuál de los siguientes factores no afecta al precio ofertado por Renfe Viajeros en los trenes de Servicios Comerciales?",
    opciones: [
      "a) Tren-fecha.",
      "b) Origen-destino.",
      "c) Acuerdo del Consejo de Ministros.",
      "d) Oferta-demanda.",
    ],
    correcta: "c) Acuerdo del Consejo de Ministros.",
    comentario: `"Los precios ofertados para los viajes en los trenes de Servicios Comerciales dependen de: tren-fecha, origen-destino, del canal de venta y de las condiciones comerciales que seleccione el cliente, así como de los tributos que legalmente existan en cada momento."`,
  },
  {
    pregunta: "9. ¿Cuál de las siguientes afirmaciones sobre los sistemas tarifarios de los servicios de Media Distancia es correcta?",
    opciones: [
      "a) Las estructuras de los sistemas tarifarios, de los cuales derivan los precios autorizados de los servicios de Media Distancia, son múltiples y se aplican en función del origen-destino.",
      "b) Las estructuras de los sistemas tarifarios, de los cuales derivan los precios autorizados de los servicios de Media Distancia, son únicas y se aplican en cada oferta de servicio.",
      "c) Las estructuras de los sistemas tarifarios, de los cuales derivan los precios autorizados de los servicios de Media Distancia, son múltiples y se aplican en función del trayecto.",
      "d) Las estructuras de los sistemas tarifarios, de los cuales derivan los precios autorizados de los servicios de Media Distancia, dependen de las condiciones comerciales que seleccione el cliente.",
    ],
    correcta: "b) Las estructuras de los sistemas tarifarios, de los cuales derivan los precios autorizados de los servicios de Media Distancia, son únicas y se aplican en cada oferta de servicio.",
    comentario: `"Las estructuras de los sistemas tarifarios, de los cuales derivan los precios autorizados de los servicios de Media Distancia, son únicas y se aplican en cada oferta de servicio."`,
  },
  {
    pregunta: "10. ¿Cuáles son las modalidades de títulos de transporte que Renfe Viajeros pone a disposición de sus clientes?",
    opciones: [
      "a) Títulos de transporte personal, colectivo, combinado y tarifa plana.",
      "b) Títulos de transporte individual, de grupo, con transporte y movilidad.",
      "c) Títulos de transporte diario, semanal, mensual y anual.",
      "d) Títulos de transporte sencillo, colectivo, combinado y multiviaje.",
    ],
    correcta: "d) Títulos de transporte sencillo, colectivo, combinado y multiviaje.",
    comentario: `"Renfe Viajeros pone a disposición de los clientes las siguientes modalidades de títulos de transporte: sencillo, colectivo, combinado y multiviaje."`,
  },
  {
    pregunta: "11. ¿Cómo se denomina el título de transporte cuya adquisición da derecho a viajar a una sola persona en un único trayecto y fecha, en tren o encamimiento complementario?",
    opciones: [
      "a) Título de transporte sencillo.",
      "b) Título de transporte individual.",
      "c) Título de transporte combinado.",
      "d) Título de transporte personal.",
    ],
    correcta: "a) Título de transporte sencillo.",
    comentario: `"Títulos de transporte SENCILLO:
Son aquellos cuya adquisición da derecho a viajar a una sola persona en un único trayecto y fecha, en tren o encamimiento complementario."`,
  },
  {
    pregunta: "12. ¿Cómo se denomina el título de transporte cuya adquisición da derecho a más de una persona en un mismo trayecto y fecha, con un único título, en tren o, en su caso, encamimiento complementario?",
    opciones: [
      "a) Título de transporte sencillo.",
      "b) Título de transporte combinado.",
      "c) Título de transporte de grupo.",
      "d) Título de transporte colectivo.",
    ],
    correcta: "d) Título de transporte colectivo.",
    comentario: `"Títulos de transporte COLECTIVO:
Son aquellos cuya adquisición da derecho a viajar a más de una persona en un mismo trayecto y fecha con único título, en tren o, en su caso, encamimiento complementario. Estos títulos de transporte son por condiciones personalizadas."`,
  },
  {
    pregunta: "13. ¿Cómo se denomina el título de transporte que formalizan distintos contratos de transporte y que dan derecho a viajar en diferentes modos de transporte, incluyendo, en su caso, otros servicios asociados, en un único título?",
    opciones: [
      "a) Título de transporte sencillo.",
      "b) Título de transporte integral.",
      "c) Título de transporte completo.",
      "d) Título de transporte combinado.",
    ],
    correcta: "d) Título de transporte combinado.",
    comentario: `"Títulos de transporte COMBINADO:
Son aquellos que formalizan distintos contratos de transporte y que dan derecho a viajar en diferentes modos de transporte, incluyendo, en su caso, otros servicios asociados, en un único título."`,
  },
  {
    pregunta: "14. ¿Cómo se denomina el título que permite realizar distintos viajes, bien limitados a un número o ilimitados, durante su período de validez?",
    opciones: [
      "a) Título de transporte multiviaje.",
      "b) Título de transporte integral.",
      "c) Título de transporte de grupo.",
      "d) Título de transporte combinado.",
    ],
    correcta: "a) Título de transporte multiviaje.",
    comentario: `"Títulos de transporte MULTIVIAJE:
Son aquellos que permiten realizar distintos viajes, bien limitados a un número o ilimitados, durante su período de validez."`,
  },
  {
    pregunta: "15. ¿Cuáles son las formas de pago admitidas por Renfe Viajeros?",
    opciones: [
      "a) Metálico en moneda de curso legal en España.",
      "b) Tarjetas de crédito / débito aceptadas por Renfe Viajeros.",
      "c) Puntos de las tarjetas del programa de fidelización de Renfe Viajeros.",
      "d) Todas las anteriores son correctas.",
    ],
    correcta: "d) Todas las anteriores son correctas.",
    comentario: `"Las formas de pago admitidas por Renfe Viaje son:
a) Metálico en moneda de curso legal en España.
b) Tarjetas de crédito / débito aceptadas por Renfe Viajeros.
c) Puntos de las tarjetas del programa de fidelización de Renfe Viajeros.
d) Cualquier otra regulada al efecto."`,
  },
  {
    pregunta: "16. ¿Cuál o cuáles de las siguientes afirmaciones sobre los gastos de gestión en la venta de títulos de transporte no es o son correctas?",
    opciones: [
      "a) La venta de títulos de transporte para los servicios comerciales puede conllevar gastos de gestión.",
      "b) Los gastos de gestión se calculan como un porcentaje sobre el precio del transporte.",
      "c) Los gastos de gestión no podrán superar el 10 % del importe del título de transporte.",
      "d) Los gastos de gestión se calculan como un importe fijo.",
    ],
    correcta: "c) Los gastos de gestión no podrán superar el 10 % del importe del título de transporte.",
    comentario: `"La venta de títulos de transporte para los servicios comerciales puede conllevar gastos de gestión, que se calculan como un porcentaje sobre el precio del transporte o un importe fijo."`,
  },
  {
    pregunta: "17. ¿Cuáles de las siguientes afirmaciones sobre la validez de los títulos de transporte no es correcta?",
    opciones: [
      "a) Los títulos de transporte son válidos desde su adquisición y hasta la finalización del viaje.",
      "b) Los billetes nominativos son válidos para cualquier cliente que sea portador del mismo.",
      "c) Se deberá portar durante el viaje el título de transporte en un soporte autorizado por Renfe Viajeros.",
      "d) Los viajeros deberán conservar el título de transporte hasta la finalización de los servicios contratados.",
    ],
    correcta: "b) Los billetes nominativos son válidos para cualquier cliente que sea portador del mismo.",
    comentario: `"5.1.- Los títulos de transporte solamente son válidos desde su adquisición y hasta la finalización del viaje (o viajes, en el caso de títulos combinados o multiviajes). En algunos servicios serán válidos durante un plazo determinado, para las fechas, tramos de trayectos, zonas y tipos de asientos o clases figurados en los mismos. Los clientes deberán conservar el título de transporte hasta la finalización de los servicios contratados.
Se deberá portar durante el viaje el título de transporte, en un soporte autorizado por Renfe Viajeros, formalizado o validado en su caso, con los documentos originales en vigor que acrediten la identidad del viajero, cuando sea necesario, y las credenciales justificativas para la obtención de los descuentos a los que tenga derecho."`,
  },
  {
    pregunta: "18. ¿Cuándo son válidos los títulos de transporte?",
    opciones: [
      "a) Desde su adquisición y hasta la finalización del viaje (o viajes, en el caso de títulos combinados o multiviajes).",
      "b) Desde la entrada del viajero en el tren hasta la salida de la estación de destino.",
      "c) Desde su adquisición hasta los 30 días en los abonos multiviaje.",
      "d) Desde la entrada del viajero en la estación de origen hasta su entrada en el tren.",
    ],
    correcta: "a) Desde su adquisición y hasta la finalización del viaje (o viajes, en el caso de títulos combinados o multiviajes).",
    comentario: `"5.1.- Los títulos de transporte solamente son válidos desde su adquisición y hasta la finalización del viaje (o viajes, en el caso de títulos combinados o multiviajes). En algunos servicios serán válidos durante un plazo determinado, para las fechas, tramos de trayectos, zonas y tipos de asientos o clases figurados en los mismos. Los clientes deberán conservar el título de transporte hasta la finalización de los servicios contratados.
Se deberá portar durante el viaje el título de transporte, en un soporte autorizado por Renfe Viajeros, formalizado o validado en su caso, con los documentos originales en vigor que acrediten la identidad del viajero, cuando sea necesario, y las credenciales justificativas para la obtención de los descuentos a los que tenga derecho."`,
  },
  {
    pregunta: "19. ¿Qué documentación debe portar el viajero durante el viaje?",
    opciones: [
      "a) El título de transporte, en un soporte autorizado por Renfe Viajeros, formalizado y validado en su caso.",
      "b) Los documentos originales en vigor que acrediten la identidad del viajero, cuando sea necesario.",
      "c) Las credenciales justificativas para la obtención de los descuentos a los que tenga derecho.",
      "d) Todas las anteriores son correctas.",
    ],
    correcta: "d) Todas las anteriores son correctas.",
    comentario: `"Se deberá portar durante el viaje el título de transporte, en un soporte autorizado por Renfe Viajeros, formalizado o validado en su caso, con los documentos originales en vigor que acrediten la identidad del viajero, cuando sea necesario, y las credenciales justificativas para la obtención de los descuentos a los que tenga derecho."`,
  },
  {
    pregunta: "20. Si un viajero adquiere un título de transporte y entre la adquisición del mismo y la fecha del viaje se produce una revisión de precio al alza o a la baja, ¿es válido ese título de transporte?",
    opciones: [
      "a) No; quedando anulado de manera automática por la revisión de precios, devolviéndose el importe al cliente quien deberá adquirir un nuevo título conforme a los nuevos precios.",
      "b) Únicamente será válido si el nuevo precio del título es inferior al que pagó el viajero, procediendo la diferencia que pudiera existir.",
      "c) Únicamente será válido si el nuevo precio del título es superior al que pagó el viajero, debiendo abonar la diferencia antes de la fecha o periodo de utilización previsto para el viaje.",
      "d) Será válido para su fecha o periodo de utilización, sin que el viajero deba abonar, o le sea abonada, diferencia alguna.",
    ],
    correcta: "d) Será válido para su fecha o periodo de utilización, sin que el viajero deba abonar, o le sea abonada, diferencia alguna.",
    comentario: `"Cualquier título de transporte adquirido antes de una revisión de precios al alza o a la baja, será válido para su fecha o periodo de utilización, sin que el viajero deba abonar, o le sea abonada, diferencia alguna."`,
  },
  {
    pregunta: "21. ¿En cuál de los siguientes supuestos se considera no válido el título de transporte?",
    opciones: [
      "a) Cuando se ha manipulado o falsificado.",
      "b) Si presenta cualquier deterioro que impida comprobar sus datos.",
      "c) Si está plastificado.",
      "d) Todas las anteriores son correctas.",
    ],
    correcta: "d) Todas las anteriores son correctas.",
    comentario: `"5.2.- El título de transporte se considera no válido si no se ha efectuado su formalización o validación, obligación por parte del viajero, o cuando se haya manipulado o se haya falsificado. También se considera inválido: si presenta cualquier deterioro que impida comprobar sus datos, si contiene cualquier enmienda, si está plastificado, si no se acredita con el documento necesario habilitante para la modalidad de reducción correspondiente, o si ha sido anulado, si está caducado, agotado o no se han respetado las condiciones propias del viajero o del trayecto."`,
  },
  {
    pregunta: "22. ¿Cuál de los siguientes servicios no admiten cambio de los títulos de transporte?",
    opciones: [
      "a) Los servicios de Alta Velocidad-Larga Distancia para una fecha y hora determinados.",
      "b) Los servicios de Alta Velocidad-Media Distancia para una fecha y hora determinados.",
      "c) Los servicios de Cercanías.",
      "d) Los servicios de Media Distancia Convencional para una fecha y hora determinados.",
    ],
    correcta: "c) Los servicios de Cercanías.",
    comentario: `"En los servicios de Alta Velocidad-Larga Distancia, Larga Distancia, Alta Velocidad-Media Distancia y Media Distancia Convencional, los títulos de transporte para una fecha y hora determinados podrán ser cambiados por otras fechas u horarios, en función de las condiciones comerciales de cada uno de los productos, y de los derechos que los clientes adviertan expresamente que no se admiten cambios (...).
*Los títulos de transporte de los servicios de Cercanías no admiten cambios.*"`,
  },
  {
    pregunta: "23. ¿Puede conllevar gastos el cambio del título de transporte?",
    opciones: [
      "a) No; en ningún caso.",
      "b) Sí, con un máximo de tres euros.",
      "c) Sí, puede conllevar gastos excepto en aquellas ofertas en las que se especifique que dicho cambio se realizará de forma gratuita.",
      "d) Sí, el cambio del título de transporte será siempre gratuito excepto en el servicio de Alta Velocidad.",
    ],
    correcta: "c) Sí, puede conllevar gastos excepto en aquellas ofertas en las que se especifique que dicho cambio se realizará de forma gratuita.",
    comentario: `"El cambio puede conllevar costes, aplicables sobre el precio del título de transporte, una vez deducido el gasto de gestión, excepto en aquellas ofertas en las que se especifique que dicho cambio se realizará de forma gratuita."`,
  },
  {
    pregunta: "24. ¿Cómo se producirá el reintegro o el abono generado por un cambio de títulos de transporte?",
    opciones: [
      "a) Mediante el mismo medio de pago previamente utilizado para la compra del título de transporte.",
      "b) En metálico en las oficinas de Renfe, en todo caso.",
      "c) Mediante cargo o devolución en tarjeta de crédito, en todo caso.",
      "d) Mediante reintegro o abono en la tarjeta de puntos del cliente.",
    ],
    correcta: "a) Mediante el mismo medio de pago previamente utilizado para la compra del título de transporte.",
    comentario: `"El reintegro o abono generado, en su caso, se producirá mediante el mismo medio de pago previamente utilizado para la compra del título de transporte."`,
  },
  {
    pregunta: "25. ¿Pueden ser anulados los títulos de transporte de Alta Velocidad-Larga Distancia?",
    opciones: [
      "a) No, en ningún caso.",
      "b) Sí, podrán ser anulados en general, dentro de su periodo de validez, excepto los correspondientes a aquellas opciones de precios y tarifas que expresamente indiquen que no admiten anulaciones.",
      "c) No, únicamente dentro del periodo de validez.",
      "d) Sí; incluso superado ese periodo pueden anularse los títulos de transporte de Media Distancia Convencional.",
    ],
    correcta: "b) Sí, podrán ser anulados en general, dentro de su periodo de validez, excepto los correspondientes a aquellas opciones de precios y tarifas que expresamente indiquen que no admiten anulaciones.",
    comentario: `"En los servicios de Alta Velocidad-Larga Distancia, Larga Distancia, Alta Velocidad-Media Distancia y Media Distancia Convencional, los títulos de transporte podrán ser anulados en general, dentro de su periodo de validez, excepto los correspondientes a aquellas opciones de precios y tarifas que expresamente indiquen que no admiten anulaciones."`,
  },
  {
    pregunta: "26. ¿Se admiten anulaciones de los títulos de transporte en los servicios de Cercanías?",
    opciones: [
      "a) Únicamente en el momento de la compra y siempre que no se haya realizado la validación en los equipos destinados a ello.",
      "b) Sí, en cualquier momento.",
      "c) Sí; a decisión del cliente abonar un recargo por la anulación.",
      "d) No, la anulación no se encuentra prevista en el servicio de Cercanías.",
    ],
    correcta: "a) Únicamente en el momento de la compra y siempre que no se haya realizado la validación en los equipos destinados a ello.",
    comentario: `"En los servicios de Cercanías solo se admiten las anulaciones de los títulos de transporte en el momento de la compra y siempre que no se haya realizado la validación en los equipos destinados a ello. Esta anulación no generará coste alguno para el cliente."`,
  },
  {
    pregunta: "27. ¿Cómo se denomina el ejercicio del derecho que tiene el cliente de ocupar el espacio sentado, con o sin garantía de plaza, en un tren y trayecto concreto, mediante la adquisición de un título de transporte válido, en función del servicio ofrecido en cada caso?",
    opciones: [
      "a) Acceso al tren.",
      "b) Ocupación de la plaza.",
      "c) Transbordo.",
      "d) Multiviaje.",
    ],
    correcta: "b) Ocupación de la plaza.",
    comentario: `"Se considera ocupación de la plaza el ejercicio del derecho que tiene el cliente de ocupar el espacio sentado, con o sin garantía de plaza, en un tren y trayecto concreto, mediante la adquisición de un título de transporte válido, en función del servicio ofrecido en cada caso."`,
  },
  {
    pregunta: "28. ¿Cuántas personas, como máximo, pueden ocupar un asiento o cama?",
    opciones: [
      "a) Únicamente la persona con título de transporte válido y derecho a ocupar una plaza.",
      "b) Como máximo dos personas: una persona con título de transporte válido y derecho a ocupar una plaza y un menor que cumpla los requisitos para viajar sin ocupar plaza.",
      "c) Tantas como voluntariamente decidan compartir dicho asiento o cama considerando que todas ellas cuenten con título de transporte válido y derecho a ocupar una plaza.",
      "d) Un máximo de 3.",
    ],
    correcta: "b) Como máximo dos personas: una persona con título de transporte válido y derecho a ocupar una plaza y un menor que cumpla los requisitos para viajar sin ocupar plaza.",
    comentario: `"En todo caso, cada asiento o cama podrán ser ocupados como máximo por dos personas: una persona con título de transporte válido y derecho a ocupar una plaza y un menor que cumpla los requisitos para viajar sin ocupar plaza."`,
  },
  {
    pregunta: "29. En el servicio de Alta Velocidad-Larga Distancia, ¿puede el viajero cambiarse de plaza y ocuparla durante el trayecto sin consultar?",
    opciones: [
      "a) Sí, en todo caso.",
      "b) La gestión de las plazas libres estará a cargo del personal encargado de la supervisión o intervención en ruta, por lo que deberá consultar a dicho personal cualquier modificación de plaza.",
      "c) La modificación de plaza durante el trayecto es considerada expresamente prohibida en todos los servicios.",
      "d) La modificación de plaza durante el trayecto se encuentra expresamente prohibida en el servicio de Cercanías.",
    ],
    correcta: "b) La gestión de las plazas libres estará a cargo del personal encargado de la supervisión o intervención en ruta, por lo que deberá consultar a dicho personal cualquier modificación de plaza.",
    comentario: `"En Alta Velocidad-Larga Distancia, Larga Distancia, Alta Velocidad-Media Distancia y Media Distancia Convencional con plazas asignadas, la gestión de las plazas libres estará a cargo del personal encargado de la supervisión o intervención en ruta. Cualquier modificación de plaza a lo largo del viaje deberá ser solicitada previamente al citado personal."`,
  },
  {
    pregunta: "30. Según el análisis cuantitativo de la plantilla del Renfe Viajeros a fecha de 31 de diciembre de 2017, en relación con la distribución por sexos de la misma, ¿cuál de las siguientes afirmaciones es correcta?",
    opciones: [
      "a) La distribución de la plantilla de la empresa a fecha 31 de diciembre de 2017 presentaba más de un 80 % de hombres.",
      "b) La distribución de la plantilla de la empresa a fecha 31 de diciembre de 2017 presentaba más de un 50 % de mujeres y un 50 % de hombres.",
      "c) La distribución de la plantilla de la empresa a fecha 31 de diciembre de 2017 presentaba más de un 90 % de hombres.",
      "d) La distribución de la plantilla de la empresa a fecha 31 de diciembre de 2017 presentaba un 100 % de hombres.",
    ],
    correcta: "a) La distribución de la plantilla de la empresa a fecha 31 de diciembre de 2017 presentaba más de un 80 % de hombres.",
    comentario: `"Distribución de la plantilla por sexo:
– Hombres 8.314   87,10 %
– Mujeres 1.231   12,90 %"`,
  },
  {
    pregunta: "31. ¿En qué norma se detallan los criterios generales sobre el registro retributivo?",
    opciones: [
      "a) En el artículo 14 de la Constitución Española.",
      "b) En el Real Decreto 902/2020, de 13 de octubre, de igualdad retributiva entre mujeres y hombres.",
      "c) En la Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres.",
      "d) En la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas.",
    ],
    correcta: "b) En el Real Decreto 902/2020, de 13 de octubre, de igualdad retributiva entre mujeres y hombres.",
    comentario: `"Inclusión de valores medios de salarios, complementos salariales y percepciones extrasalariales: El RD 902/2020, de 13 de octubre, de igualdad retributiva entre mujeres y hombres establece un registro retributivo que debe incluir todos estos valores y describir en sus normas generales sobre el registro retributivo indicando lo siguiente (...)."`,
  },
  {
    pregunta: "32. Según lo dispuesto en el artículo 6 del RD 902/2020, de 13 de octubre, de igualdad retributiva entre mujeres y hombres, existirá brecha salarial cuando la diferencia entre las retribuciones totales efectivas percibidas por el colectivo hombres y por el colectivo mujeres en esas escalas concretas sea:",
    opciones: [
      "a) Una diferencia de más del 50 %.",
      "b) Una diferencia de más de un 25 %.",
      "c) Cuando exista acusada diferencia salarial entre ambos colectivos.",
      "d) Una diferencia de más de un 10 %.",
    ],
    correcta: "b) Una diferencia de más de un 25 %.",
    comentario: `"El análisis de los importes efectivos percibidos por los colectivos de mujeres y hombres realizados agrupando los puestos en diferentes escalas en función del resultado de la evaluación de puestos, conforme con el RD 902/2020, nos permite identificar que existen 4 niveles o escalas de valoración en las que hay una diferencia salarial media superior al 25 % entre hombres y mujeres, por tanto, debe justificarse la diferencia percibida por el colectivo hombres y por el colectivo mujeres en esas escalas concretas."`,
  },
  {
    pregunta: "33. Además del RD 902/2020, de 13 de octubre, de igualdad retributiva entre mujeres y hombres, ¿qué otra norma regula el registro distributivo desagregado por sexos que debe llevar el empresario?",
    opciones: [
      "a) Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas.",
      "b) El artículo 14 de la Constitución Española.",
      "c) El artículo 28.2 del Estatuto de los Trabajadores.",
      "d) Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales.",
    ],
    correcta: "c) El artículo 28.2 del Estatuto de los Trabajadores.",
    comentario: `"Para realizar el registro retributivo conforme con lo indicado en el 28.2 del Estatuto de los Trabajadores y el RD 902/2020 se han revisado las descripciones de los Puestos Tipo de la sociedad con el detalle de las funciones y responsabilidades de cada puesto."`,
  },
  {
    pregunta: "34. ¿Cómo se denomina el instrumento que tiene por objeto obtener la información necesaria para comprobar si el sistema retributivo de la empresa, de manera transversal y completa, cumple con la aplicación del principio de igualdad entre mujeres y hombres en materia de retribución?",
    opciones: [
      "a) Negociación colectiva.",
      "b) Acta de inspección.",
      "c) Plan de Prevención de Riesgos Laborales.",
      "d) Auditoría retributiva.",
    ],
    correcta: "d) Auditoría retributiva.",
    comentario: `"La auditoría retributiva tiene por objeto obtener la información necesaria para comprobar si el sistema retributivo de la empresa, de manera transversal y completa, cumple con la aplicación efectiva del principio de igualdad entre mujeres y hombres en materia de retribución."`,
  },
  {
    pregunta: "35. ¿Cuáles de los siguientes valores debe incluir el registro distributivo?",
    opciones: [
      "a) Los valores medios de los salarios.",
      "b) Los complementos salariales.",
      "c) Las percepciones extrasalariales.",
      "d) Todas las anteriores son correctas.",
    ],
    correcta: "d) Todas las anteriores son correctas.",
    comentario: `"El registro retributivo deberá incluir los valores medios de los salarios, los complementos salariales y las percepciones extrasalariales de la plantilla desagregados por sexo y distribuidos por grupos profesionales conforme al artículo 28.2 del Estatuto de los trabajadores."`,
  },
  {
    pregunta: "36. La mayoría de los Puestos tipo de la sociedad tienen sus funciones descritas en un documento elaborado, revisado y acordado entre la empresa la representación de los trabajadores en el contexto de la negociación colectiva. ¿Cómo se denomina ese documento?",
    opciones: [
      "a) Acuerdo de Desarrollo Profesional.",
      "b) Convenio Colectivo.",
      "c) Acuerdo de derechos consolidados.",
      "d) Descuelgue salarial.",
    ],
    correcta: "a) Acuerdo de Desarrollo Profesional.",
    comentario: `"La mayoría de los Puestos Tipo de la sociedad tienen sus funciones descritas en un documento definido como 'Acuerdo de Desarrollo Profesional' que luego de elaborado, revisado y acordado entre la empresa y la representación de los trabajadores en el contexto de la negociación colectiva."`,
  },
  {
    pregunta: "37. ¿Cuáles de los siguientes no es uno de los objetivos que se derivan del registro salarial y del informe de auditoría retributiva del Renfe?",
    opciones: [
      "a) Prevenir la discriminación por razón de sexo en el acceso al empleo de Renfe.",
      "b) Abordar nuevas medidas que permitan conciliar la vida personal, laboral y familiar de mujeres y hombres, y reducir las diferencias entre ambos sexos, a través del fomento de la corresponsabilidad.",
      "c) Asegurar la igualdad de trato en las condiciones de trabajo y oportunidades en la carrera profesional en Renfe.",
      "d) Reducir los costes asociados a accidentes laborales y enfermedades profesionales.",
    ],
    correcta: "d) Reducir los costes asociados a accidentes laborales y enfermedades profesionales.",
    comentario: `"Especialmente los objetivos que se derivan del registro salarial y del informe de auditoría retributiva son los siguientes:
– Prevenir la discriminación por razón de sexo en el acceso al empleo de Renfe.
– Asegurar la igualdad de trato en las condiciones de trabajo y oportunidades en la carrera profesional en Renfe.
– Abordar nuevas medidas que permitan conciliar la vida personal, laboral y familiar de mujeres y hombres, y reducir las diferencias entre ambos sexos, a través del fomento de la corresponsabilidad.
– Incluir en un sistema retributivo que no discrimine entre sexos ambos aspectos."`,
  },
  {
    pregunta: "38. ¿Cómo se denomina el instrumento que tiene por objeto prevenir y eliminar las situaciones constitutivas de acoso sexual y de acoso por razón de sexo mediante un procedimiento de actuación a seguir cuando se produzcan conductas que puedan ser constitutivas de acoso sexual y/o acoso por razón de sexo en el ámbito de organización y dirección de la empresa Renfe?",
    opciones: [
      "a) El protocolo para la prevención de los casos de acoso sexual, acoso por razón de sexo y acoso moral de Renfe.",
      "b) El plan de prevención de riesgos laborales de Renfe.",
      "c) El Convenio Colectivo de Renfe.",
      "d) Código Ético de Renfe.",
    ],
    correcta: "a) El protocolo para la prevención de los casos de acoso sexual, acoso por razón de sexo y acoso moral de Renfe.",
    comentario: `"2. Objetivo del presente protocolo
El presente Protocolo tiene por objeto prevenir y eliminar las actuaciones constitutivas de acoso, así como establecer un procedimiento de actuación a seguir cuando se produzcan conductas que puedan suponer acoso sexual, acoso por razón de sexo y/o acoso moral en el ámbito de organización y dirección de la Empresa."`,
  },
  {
    pregunta: "39. ¿Cómo se denomina la obra que tiene como objetivo presentar la Cultura de Seguridad Operacional revisada que el Grupo Renfe quiere implantar y el Plan de Transformación que la hará posible, con una visión plenamente alineada con el Plan Estratégico 2019-2023-2028 del Grupo?",
    opciones: [
      "a) Libro Blanco de la Cultura de Seguridad Operacional del Grupo Renfe.",
      "b) Libro Verde de la Cultura del Grupo Renfe.",
      "c) Código de Seguridad Ferroviaria Europea.",
      "d) Manual Técnico de Seguridad Operacional Ferroviaria.",
    ],
    correcta: "a) Libro Blanco de la Cultura de Seguridad Operacional del Grupo Renfe.",
    comentario: `"El Libro Blanco de la Cultura de Seguridad Operacional del Grupo Renfe tiene como objetivo presentar la Cultura de Seguridad Operacional revisada que el Grupo Renfe quiere implantar y el Plan de Transformación que la hará posible, con una visión plenamente alineada con el Plan Estratégico 2019-2023-2028 del Grupo."`,
  },
  {
    pregunta: "40. ¿Con qué término se identifica el “conjunto de hábitos, creencias, valores, tradiciones, interacciones y relaciones sociales típicas de cada organización, los cuales representan las normas informales y no escritas que orientan la conducta de los miembros de la organización, en el día a día, y que dan sentido a sus acciones” (Chiavenato, 2005)?",
    opciones: [
      "a) Responsabilidad social corporativa.",
      "b) Marketing digital.",
      "c) Cultura empresarial.",
      "d) Capital humano.",
    ],
    correcta: "c) Cultura empresarial.",
    comentario: `"La cultura empresarial es el 'conjunto de hábitos, creencias, valores, tradiciones, interacciones y relaciones sociales típicas de cada organización, los cuales representan las normas informales y no escritas que orientan la conducta de los miembros de la organización, en el día a día, y que dan sentido a sus acciones' (Chiavenato, 2005)"`,
  },
  {
    pregunta: "41. El origen de la Cultura de Seguridad se debe al análisis de accidentes ocurridos en los sectores nuclear y petroquímico, ¿en qué fecha?",
    opciones: [
      "a) Último tercio del siglo XX.",
      "b) Primer tercio del siglo XX.",
      "c) Último tercio del siglo XIX.",
      "d) Primer tercio del siglo XIX.",
    ],
    correcta: "a) Último tercio del siglo XX.",
    comentario: `"El concepto de Cultura de Seguridad surge en el último tercio del siglo pasado a partir del análisis de accidentes ocurridos en los sectores nuclear y petroquímico, y que pretendía posteriormente trasladarse al transporte."`,
  },
  {
    pregunta: "42. ¿Cómo se denomina la gestión del conjunto de medidas que establece la empresa para garantizar que sus operaciones sean seguras?",
    opciones: [
      "a) Prevención de Riesgos Laborales (PRL).",
      "b) Sistema de Gestión de Seguridad (SGS).",
      "c) Compliance.",
      "d) Plan de negocios.",
    ],
    correcta: "b) Sistema de Gestión de Seguridad (SGS).",
    comentario: `"Un Sistema de Gestión de Seguridad (SGS) es la gestión del conjunto de medidas que establece la empresa para garantizar que sus operaciones sean seguras."`,
  },
  {
    pregunta: "43. ¿Cuál es la norma que, desde mediados de 2020, exige como requisito a la Cultura de Seguridad las evidencias de su aplicación?",
    opciones: [
      "a) El Reglamento Delegado (UE) 2018/762.",
      "b) Ley 38/2015 de 29 de septiembre, del sector ferroviario.",
      "c) Real Decreto 627/2014 de 18 de julio, de asistencia a las víctimas de accidentes ferroviarios y sus familiares.",
      "d) Ley 2/2024, de 1 de agosto, de creación de la Autoridad Administrativa Independiente para la Investigación Técnica de Accidentes e Incidentes Ferroviarios, marítimos y de aviación civil.",
    ],
    correcta: "a) El Reglamento Delegado (UE) 2018/762.",
    comentario: `"La normativa asociada al Cuarto Paquete Ferroviario incorpora el Reglamento Delegado (UE) 2018/762 de la Comisión Europea de 8 de marzo de 2018, por el que se establecen métodos comunes de seguridad sobre los requisitos del Sistema de Gestión de la Seguridad ferroviaria. Este reglamento, de obligado cumplimiento a partir de mediados de 2020, exige como requisito la Cultura de la Seguridad y las evidencias de su existencia."`,
  },
  {
    pregunta: "44. La definición ofrecida por la Agencia Ferroviaria Europea consistente en “la interacción entre los requisitos del Sistema de Gestión de Seguridad (SGS) y cómo las personas los comprenden en función de sus actitudes, valores y creencias que se reflejan en sus comportamientos y decisiones”; ¿a qué término hace referencia?",
    opciones: [
      "a) A la prevención de la siniestralidad.",
      "b) Al cumplimiento normativo.",
      "c) A la satisfacción del cliente.",
      "d) A la cultura de seguridad.",
    ],
    correcta: "d) A la cultura de seguridad.",
    comentario: `"La Agencia Ferroviaria Europea proporciona una definición más formal, que traduce su entendimiento común en la interacción entre los requisitos del Sistema de Gestión de Seguridad (SGS) y cómo las personas los comprenden en función de sus actitudes, valores y creencias que se reflejan en sus comportamientos y decisiones."`,
  },
  {
    pregunta: "45. El Grupo Renfe ha definido sus seis principios, que son los cimientos de su modelo de Cultura de Seguridad. ¿Cuál de los siguientes no es uno de esos seis principios?",
    opciones: [
      "a) Seguridad como valor especial.",
      "b) Compromiso y liderazgo.",
      "c) Velocidad por encima de todo.",
      "d) Aprendizaje y mejora continua.",
    ],
    correcta: "c) Velocidad por encima de todo.",
    comentario: `"Nuestros principios de Cultura de Seguridad:
P1: Seguridad como valor esencial.
P2: Compromiso y liderazgo.
P3: Responsabilidad personal.
P4: Apertura y confianza.
P5: Vigilancia de la seguridad.
P6: Aprendizaje y mejora continua."`,
  },
  {
    pregunta: "46. ¿Cómo se denomina el conjunto de percepciones, emociones y sensaciones que un cliente experimenta durante todas las interacciones con una empresa a lo largo del ciclo de vida de su relación?",
    opciones: [
      "a) Encuesta de Satisfacción del Cliente.",
      "b) Experiencia de Cliente (CX).",
      "c) Fidelización del Cliente.",
      "d) Reseña.",
    ],
    correcta: "b) Experiencia de Cliente (CX).",
    comentario: `"La Experiencia de Cliente se refiere a todo lo que una persona vive con una empresa, a lo largo de todas las interacciones que tiene con ella, durante toda su relación y a través de todos los canales. También es importante tener en cuenta que los proveedores o servicios que se subcontratan influyen también en la experiencia del cliente. En definitiva, es el conjunto de percepciones, emociones y sensaciones que un cliente experimenta durante todas las interacciones con una empresa a lo largo del ciclo de vida de su relación."`,
  },
  {
    pregunta: "47. ¿Cuál es la diferencia fundamental entre la atención al cliente y la Experiencia de Cliente?",
    opciones: [
      "a) La atención al cliente se centra en la resolución de necesidades inmediatas y problemas de los clientes, mientras que la Experiencia de Cliente abarca un enfoque más holístico que considera todas las interacciones y percepciones que los clientes tienen con una empresa a lo largo del tiempo y engloba muchos aspectos y herramientas.",
      "b) La Experiencia de Cliente se centra en la resolución de necesidades inmediatas y problemas de los clientes, mientras que la atención al cliente abarca un enfoque más holístico que considera todas las interacciones y percepciones que los clientes tienen con una empresa a lo largo del tiempo y engloba muchos aspectos y herramientas.",
      "c) La atención al cliente se hace referencia a la relación con las personas físicas mientras que la Experiencia de Cliente hace referencia al soporte informático del ciclo del cliente.",
      "d) La Experiencia de Cliente se dirige al cliente que consume el servicio con frecuencia semanal, mientras que la atención al cliente se refiere a clientes ocasionales.",
    ],
    correcta: "a) La atención al cliente se centra en la resolución de necesidades inmediatas y problemas de los clientes, mientras que la Experiencia de Cliente abarca un enfoque más holístico que considera todas las interacciones y percepciones que los clientes tienen con una empresa a lo largo del tiempo y engloba muchos aspectos y herramientas.",
    comentario: `"La atención al cliente y la Experiencia de Cliente son dos conceptos relacionados pero distintos en enfoque y objetivos dentro de la estrategia empresarial. Mientras que la atención al cliente se centra en la resolución de necesidades inmediatas y problemas de los clientes, la Experiencia de Cliente abarca un enfoque más holístico que considera todas las interacciones y percepciones que los clientes tienen con una empresa a lo largo del tiempo y engloba muchos aspectos y herramientas, siendo la atención al cliente una de ellas."`,
  },
  {
    pregunta: "48. Dentro de las diferencias entre Atención al Cliente y Experiencia de Cliente, ¿cuál depende de un área concreta?",
    opciones: [
      "a) La Atención al Cliente.",
      "b) La Experiencia de Cliente.",
      "c) Ambas.",
      "d) Ninguna.",
    ],
    correcta: "a) La Atención al Cliente.",
    comentario: `"7 diferencias entre Atención al Cliente y Experiencia de Cliente
¿De quién depende?
Atención al Cliente: De un área concreta
Experiencia de Cliente: De toda la organización"`,
  },
  {
    pregunta: "49. Dentro de las diferencias entre Atención al Cliente y Experiencia de Cliente, ¿cuál se basa en las emociones?",
    opciones: [
      "a) La Atención al Cliente.",
      "b) La Experiencia de Cliente.",
      "c) Ambas.",
      "d) Ninguna.",
    ],
    correcta: "b) La Experiencia de Cliente.",
    comentario: `"7 diferencias entre Atención al Cliente y Experiencia de Cliente
¿En qué se basa?
Atención al Cliente: Calidad
Experiencia de Cliente: Emociones"`,
  },
  {
    pregunta: "50. ¿Cómo se denomina al conjunto de acciones y procesos destinados a ayudar a los clientes en la resolución de consultas, problemas o quejas?",
    opciones: [
      "a) Servicio posventa.",
      "b) Atención al cliente.",
      "c) Experiencia del Cliente.",
      "d) Garantía.",
    ],
    correcta: "b) Atención al cliente.",
    comentario: `"La atención al cliente se refiere al conjunto de acciones y procesos destinados a ayudar a los clientes en la resolución de consultas, problemas o quejas."`,
  },
  {
    pregunta: "51. ¿Cuál de los siguientes se centra en la reactividad y capacidad de la empresa para responder eficazmente a las necesidades y preocupaciones de los clientes en el momento en que surgen?",
    opciones: [
      "a) Servicio posventa.",
      "b) Atención al cliente.",
      "c) Experiencia del cliente.",
      "d) Garantía.",
    ],
    correcta: "b) Atención al cliente.",
    comentario: `"La atención al cliente se refiere al conjunto de acciones y procesos destinados a ayudar a los clientes en la resolución de consultas, problemas o quejas. Este aspecto se centra en la reactividad y en la capacidad de la empresa para responder eficazmente a las necesidades y preocupaciones de los clientes en el momento en que surgen."`,
  },
  {
    pregunta: "52. ¿Cuál de los siguientes implica la implementación de sistemas de soporte, como líneas telefónicas de atención al cliente, chat en línea, correo electrónico de soporte y otros servicios de asistencia técnica, con el objetivo de garantizar que los clientes reciban respuestas rápidas y soluciones efectivas?",
    opciones: [
      "a) Servicio posventa.",
      "b) Experiencia al cliente.",
      "c) Atención al cliente.",
      "d) Garantía.",
    ],
    correcta: "c) Atención al cliente.",
    comentario: `"La atención al cliente se refiere al conjunto de acciones y procesos destinados a ayudar a los clientes en la resolución de consultas, problemas o quejas. Este aspecto se centra en la reactividad y en la capacidad de la empresa para responder eficazmente a las necesidades y preocupaciones de los clientes en el momento en que surgen."`,
  },
  {
    pregunta: "53. ¿Cuál de los siguientes implica aspectos emocionales, como la satisfacción, la confianza y la conexión emocional con la marca, así como aspectos prácticos, como la calidad del producto, la eficiencia del servicio y la facilidad de uso?",
    opciones: [
      "a) Atención al cliente.",
      "b) Experiencia al cliente.",
      "c) Servicio de Atención al Público.",
      "d) Servicio de Reclamaciones.",
    ],
    correcta: "b) Experiencia al cliente.",
    comentario: `"Por otro lado, la Experiencia de Cliente, como se ha expuesto anteriormente, se refiere al conjunto de percepciones, emociones y sensaciones que una persona experimenta durante todas las interacciones con una empresa a lo largo del ciclo de vida de su relación.
Esto implica aspectos emocionales, como la satisfacción, la confianza y la conexión emocional con la marca, así como aspectos prácticos, como la calidad del producto, la eficiencia del servicio y la facilidad de uso. Además de las interacciones directas, desde la primera impresión hasta el servicio posventa y más allá."`,
  },
  {
    pregunta: "54. ¿Cuál de los siguientes implica un enfoque más estratégico y a largo plazo?",
    opciones: [
      "a) Atención al cliente.",
      "b) Experiencia al cliente.",
      "c) Servicio de Atención al Público.",
      "d) Servicio de Reclamaciones.",
    ],
    correcta: "b) Experiencia al cliente.",
    comentario: `"Al fin y al cabo, la Experiencia de Cliente implica un enfoque más estratégico y a largo plazo, busca construir relaciones sólidas y duraderas con los clientes y va más allá de la simple atención que el cliente recibe en un momento puntual."`,
  },
  {
    pregunta: "55. ¿Cuál de los siguientes no es un motivo de la importancia de la Experiencia de Cliente en las organizaciones?",
    opciones: [
      "a) Generar una visión homogénea y las mejores prácticas a nivel internacional.",
      "b) Sensibilizar a toda la organización en la importancia de orientar la compañía hacia el cliente y ponerle en el centro de las decisiones.",
      "c) Generar una sensación de confianza en el cliente que, a largo plazo, contribuirá en su fidelización y en las ganancias del Grupo.",
      "d) Implicar a todo el mundo en la transformación de la organización hacia la experiencia, identificando el rol personal y la contribución a la consecución de este objetivo.",
    ],
    correcta: "c) Generar una sensación de confianza en el cliente que, a largo plazo, contribuirá en su fidelización y en las ganancias del Grupo.",
    comentario: `"Es muy importante trabajar la estrategia de Experiencia de Cliente en las organizaciones por varios motivos:
– Sensibilizar a toda la organización en la importancia de orientar la compañía hacia el cliente y ponerle en el centro de las decisiones.
– Generar una visión homogénea y las mejores prácticas a nivel internacional.
– Implicar a todo el mundo en la transformación de la organización hacia la experiencia, identificando el rol personal y la contribución a la consecución de este objetivo.
– Conocer las principales herramientas y claves que se pueden aplicar en el día a día, con fines de responsabilidad y funciones, para contribuir al objetivo de involucrar la mirada de toda la compañía hacia el cliente.
– Modelo de acompañamiento y medición de resultados con el objetivo de una mejora continua que se transforme en rentabilidad sostenible."`,
  },
  {
    pregunta: "56. ¿En qué año comenzó la era de la producción, caracterizada por la estandarización de productos y la optimización de procesos, permitiendo a las empresas alcanzar economías de escala y reducir costes?",
    opciones: [
      "a) 1800.",
      "b) 1900.",
      "c) 1960.",
      "d) 2010.",
    ],
    correcta: "b) 1900.",
    comentario: `"En la era de la producción, que comenzó en 1900, el enfoque estaba en la eficiencia y la producción en masa, liderada por visionarios como Henry Ford y Boeing, que revolucionaron la industria con sus innovaciones en fabricación. Esta época se caracterizó por la estandarización de productos y la optimización de procesos, lo que permitió a las empresas alcanzar economías de escala y reducir costes. Además, la proliferación de bienes asequibles para las masas ya estableció los bases para la economía de consumo que conocemos hoy en día."`,
  },
  {
    pregunta: "57. ¿Cómo se denomina la era que se enfocó en la eficiencia y la producción en masa, mediante la estandarización de productos y la optimización de procesos?",
    opciones: [
      "a) Era de la producción.",
      "b) Era de la distribución.",
      "c) Era de la información.",
      "d) Era del cliente.",
    ],
    correcta: "a) Era de la producción.",
    comentario: `"En la era de la producción, que comenzó en 1900, el enfoque estaba en la eficiencia y la producción en masa, liderada por visionarios como Henry Ford y Boeing, que revolucionaron la industria con sus innovaciones en fabricación. Esta época se caracterizó por la estandarización de productos y la optimización de procesos, lo que permitió a las empresas alcanzar economías de escala y reducir costes. Además, la proliferación de bienes asequibles para las masas ya estableció los bases para la economía de consumo que conocemos hoy en día."`,
  },
  {
    pregunta: "58. ¿Cómo se denomina la era que se centró en la accesibilidad y la globalización, cuyos avances en logística y transporte permitieron llevar los productos a los consumidores de la manera más eficiente posible?",
    opciones: [
      "a) Era de la producción.",
      "b) Era de la distribución.",
      "c) Era de la información.",
      "d) Era del cliente.",
    ],
    correcta: "b) Era de la distribución.",
    comentario: `"La era de la distribución, que floreció en la década de 1960, se centró en la accesibilidad y la globalización, con gigantes minoristas como Walmart y marcas automotrices como Toyota, que aprovecharon al máximo los avances en logística y transporte, lo que llevó los productos a los consumidores de la manera más eficiente posible. Esta era elevó la clave al llevar los productos al acceso a una variedad cada vez mayor de artículos, abriendo mercados y facilitando el consumo de cadenas de suministro globales de productos. Esta era también marcó el surgimiento de la competencia basada en la disponibilidad y competencia en precio como principales impulsores del éxito empresarial."`,
  },
  {
    pregunta: "59. ¿En cuál de las siguientes fechas floreció la era de la distribución?",
    opciones: [
      "a) 1900.",
      "b) 2010.",
      "c) 1945.",
      "d) 1960.",
    ],
    correcta: "d) 1960.",
    comentario: `"La era de la distribución, que floreció en la década de 1960, se centró en la accesibilidad y la globalización, con gigantes minoristas como Walmart y marcas automotrices como Toyota, que aprovecharon al máximo los avances en logística y transporte, lo que llevó los productos a los consumidores de la manera más eficiente posible. Esta era elevó la clave al llevar los productos al acceso a una variedad cada vez mayor de artículos, abriendo mercados y facilitando el consumo de cadenas de suministro globales de productos. Esta era también marcó el surgimiento de la competencia basada en la disponibilidad y competencia en precio como principales impulsores del éxito empresarial."`,
  },
  {
    pregunta: "60. ¿Cómo se denomina la era donde el acceso y la gestión de datos se convirtieron en un activo estratégico y, con el surgimiento de Internet y las tecnologías de la información, las empresas comenzaron a recopilar datos sobre sus clientes de manera más sistemática?",
    opciones: [
      "a) Era de la información.",
      "b) Era de la distribución.",
      "c) Era digital.",
      "d) Era de la producción.",
    ],
    correcta: "a) Era de la información.",
    comentario: `"La década de 1990 marcó el inicio de la era de la información, donde el acceso y la gestión de datos se convirtieron en un activo estratégico, permitiendo una personalización sin precedentes y dando lugar a empresas emblemáticas como Amazon y Google, que capitalizaron el poder de la información para satisfacer las necesidades individuales de los consumidores. Con el surgimiento de Internet y las tecnologías de la información, las empresas comenzaron a recopilar datos sobre sus clientes de manera más sistemática, lo que les permitió comprender mejor sus comportamientos y preferencias, y ofrecer productos y servicios más personalizados."`,
  },
  {
    pregunta: "61. ¿Puede un cliente de Cercanías y Media Distancia Convencional sin plazas asignadas viajar de pie?",
    opciones: [
      "a) Tanto en Cercanías como en Media Distancia Convencional podrá viajar de pie si ocupa un asiento, si está libre.",
      "b) Tanto en Cercanías como en Media Distancia Convencional se encuentra prohibido viajar de pie.",
      "c) Podrá viajar de pie en Cercanías pero no en Media Distancia Convencional.",
      "d) Podrá viajar de pie en Media Distancia Convencional pero no en Cercanías.",
    ],
    correcta: "a) Tanto en Cercanías como en Media Distancia Convencional podrá viajar de pie si ocupa un asiento, si está libre.",
    comentario: `"En Cercanías y Media Distancia Convencional sin plazas asignadas, el cliente podrá ocupar un asiento, si está libre, o viajar de pie."`,
  },
  {
    pregunta: "62. ¿Cuál es el ámbito personal de aplicación del Protocolo para la prevención de los casos de acoso sexual, acoso por razón de sexo y acoso moral de Renfe?",
    opciones: [
      "a) El protocolo rige para la totalidad de las personas pertenecientes a la empresa Renfe-Operadora.",
      "b) El protocolo rige para el personal directivo de Renfe-Operadora.",
      "c) El protocolo rige para los empleados de Renfe-Operadora que denuncien conductas de acoso sexual, acoso por razón de sexo o acoso moral.",
      "d) El protocolo rige para todos los clientes de Renfe-Operadora.",
    ],
    correcta: "a) El protocolo rige para la totalidad de las personas pertenecientes a la empresa Renfe-Operadora.",
    comentario: `"*3. Ámbito personal de aplicación*
El presente Protocolo regirá para la totalidad de las personas pertenecientes a la empresa Renfe-Operadora. El carácter laboral se presume al producirse en el ámbito de organización de la Empresa, así como cuando la conducta tenga relación con las condiciones de empleo, formación o promoción en el trabajo."`,
  },
  {
    pregunta: "63. ¿Cuál de los siguientes no es uno de los principios de Cultura de Seguridad del Grupo Renfe?",
    opciones: [
      "a) Seguridad como valor esencial.",
      "b) Apertura y confianza.",
      "c) Responsabilidad personal.",
      "d) Principio de legalidad.",
    ],
    correcta: "d) Principio de legalidad.",
    comentario: `"Nuestros principios de Cultura de Seguridad:
P1. Seguridad como valor esencial.
P2. Compromiso y liderazgo.
P3. Responsabilidad personal.
P4. Apertura y confianza.
P5. Vigilancia de la seguridad.
P6. Aprendizaje y mejora continua."`,
  },
  {
    pregunta: "64. ¿Cuál de las siguientes fechas marcó el inicio de la era de la información?",
    opciones: [
      "a) 1960.",
      "b) 1990.",
      "c) 2010.",
      "d) 1998.",
    ],
    correcta: "b) 1990.",
    comentario: `"La década de 1990 marcó el inicio de la era de la información, donde el acceso y la gestión de datos se convirtieron en un activo estratégico, permitiendo una personalización sin precedentes y dando lugar a empresas emblemáticas como Amazon y Google, que capitalizaron el poder de la información para satisfacer las necesidades individuales de los consumidores. Con el surgimiento de Internet y las tecnologías de la información, las empresas comenzaron a recopilar datos sobre sus clientes de manera más sistemática, lo que les permitió comprender mejor sus comportamientos y preferencias, y ofrecer productos y servicios más personalizados."`,
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
