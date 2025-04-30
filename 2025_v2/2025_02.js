const preguntas = [
  {
    pregunta: "1. ¿Puede realizarse el acceso al tren en una estación distinta de la que conste como estación de origen del viaje en el título de transporte?",
    opciones: [
      "a) Sí, puede realizarse el acceso desde cualquier estación del trayecto.",
      "b) No, el acceso al tren debe realizarse en la estación de origen del viaje que figure en el título de transporte.",
      "c) Sí, puede realizarse el acceso al tren en una estación distinta de la que conste como estación de origen siempre que sea posterior a esta respecto del trayecto contratado.",
      "d) No puede realizarse el acceso al tren en una estación anterior a la contratada, pero sí en una posterior.",
    ],
    correcta: "b)",
    comentario: `“El acceso al tren debe realizarse en la estación de origen del viaje que figure en el título de transporte”.`,
  },
  {
    pregunta: "2. En caso de que el cliente no ocupe la plaza a la que tenga derecho en la estación de origen del viaje, ¿puede Renfe Viajeros hacer uso de la plaza disponible?",
    opciones: [
      "a) Sí, Renfe Viajeros podrá hacer uso de la plaza.",
      "b) Renfe Viajeros podrá hacer uso de la plaza en los servicios de Alta Velocidad-Larga Distancia, Larga Distancia-, Alta Velocidad-Media Distancia y Media Distancia Convencional con asignación de plaza.",
      "c) Renfe Viajeros podrá hacer uso de la plaza en los servicios de Alta Velocidad-Larga Distancia, Larga Distancia, Alta Velocidad-Media Distancia y Media Distancia Convencional con asignación de plaza y Cercanías.",
      "d) En ningún caso Renfe Viajeros podrá hacer uso de la plaza disponible de un cliente.",
    ],
    correcta: "b)",
    comentario: `“En caso de no ser ocupada la plaza a la que se tenga derecho, en función del título adquirido en dicha estación de origen, en los servicios de Alta Velocidad-Larga Dis- tancia, Larga Distancia, Alta Velocidad-Media Distancia y Media Distancia Convencio- nal con asignación de plaza, Renfe Viajeros podrá hacer uso de la plaza disponible, sin que el cliente tenga derecho a reintegro alguno”.`,
  },
  {
    pregunta: "3. En caso de que el cliente no ocupe la plaza a la que tenga derecho en la estación de origen del viaje y el tipo de servicio habilite a Renfe Viajeros a poder hacer uso de la plaza disponible, ¿tiene derecho el cliente a algún tipo de reintegro?",
    opciones: [
      "a) Sí, Renfe Viajeros deberá reintegrar al cliente la totalidad de los costes del título de transporte.",
      "b) Sí, Renfe Viajeros deberá reintegrar al cliente la totalidad de los costes del título de transporte y cualquiera otros daños y perjuicios que haya podido sufrir.",
      "c) No, en aquellos servicios que contemplan que Renfe Viajeros pueda hacer uso de la plaza disponible por no haber sido ocupada por el cliente en la estación de origen no existirá derecho a reintegro alguno.",
      "d) Sí, en aquellos casos en que el cliente acredite la concurrencia de causas de fuerza mayor que le hayan impedido ocupar su plaza en la estación de origen, en cuyo Caso podrá solicitar el reintegro de la mitad del coste abonado por el título de transporte.",
    ],
    correcta: "c)",
    comentario: `“En caso de no ser ocupada la plaza a la que se tenga derecho, en función del título adquirido en dicha estación de origen, en los servicios de Alta Velocidad-Larga Dis- tancia, Larga Distancia, Alta Velocidad-Media Distancia y Media Distancia Convencio- nal con asignación de plaza, Renfe Viajeros podrá hacer uso de la plaza disponible, sin que el cliente tenga derecho a reintegro alguno”.`,
  },
  {
    pregunta: "4. ¿En qué momentos puede el personal encargado de la supervisión, u otro personal autorizado por Renfe Viajeros, requerir al viajero el documento que acredite su identidad, en relación con el título de transporte?",
    opciones: [
      "a) En el control de acceso.",
      "b) Al acceder al tren.",
      "c) Durante su recorrido o antes de abandonar la estación de destino.",
      "d) Todas las anteriores son correctas.",
    ],
    correcta: "d)",
    comentario: `“El personal encargado de la supervisión, u otro personal autorizado por Renfe Viaje- ros, podrá requerir al viajero el documento que acredite su identidad, en relación con el título de transporte, en el control de acceso, al acceder al tren, durante su recorrido o antes de abandonar la estación de destino”.`,
  },
  {
    pregunta: "5. Un viajero a bordo sin título de transporte que hubiera accedido al tren en una estación sin posibilidad de venta de título de transporte deberá:",
    opciones: [
      "a) Abstenerse de subir al tren.",
      "b) Apearse en la siguiente estación.",
      "c) Regularizar su situación ante el personal encargado de la supervisión o intervención en ruta.",
      "d) Abonar la sanción correspondiente.",
    ],
    correcta: "c)",
    comentario: `“El viajero a bordo sin título de transporte que hubiera accedido al tren en una esta- ción sin posibilidad de venta de título de transporte deberá regularizar su situación ante el personal encargado de la supervisión o intervención en ruta, u otro agente que Renfe Viajeros haya autorizado”.`,
  },
  {
    pregunta: "6. ¿Tiene derecho a reintegro el viajero que voluntariamente decide interrumpir el viaje en una estación intermedia?",
    opciones: [
      "a) Sí, tiene derecho al reintegro de la parte proporcional del importe del título de transporte no disfrutada.",
      "b) No tendrá derecho a ningún reintegro respecto del trayecto no utilizado, quedando invalidado el título para viajar.",
      "c) No tendrá derecho a ningún reintegro respecto del trayecto no utilizado, pudiendo utilizar el mismo título en otros viajes que realice en el mismo día.",
      "d) Sí, tendrá derecho a la devolución del importe completo del importe del título de transporte.",
    ],
    correcta: "b)",
    comentario: `“Si el viajero decide voluntariamente interrumpir el viaje en una estación intermedia, no tendrá derecho a ningún reintegro respecto del trayecto no utilizado, quedando invalidado el título para viajar”.`,
  },
  {
    pregunta: "7. Una vez iniciado el viaje, ¿puede realizarse un cambio de plaza dentro del mismo tipo de asiento o clase o a una inferior?",
    opciones: [
      "a) Sí, siempre que existan plazas disponibles, sin que sea necesaria la solicitud al personal encargado de la supervisión.",
      "b) Sí, previa solicitud al personal encargado de la supervisión o intervención en ruta y siempre que existan plazas disponibles.",
      "c) No, en ningún caso.",
      "d) No, puede realizarse el cambio a un asiento o clase superior pero no igual o inferior.",
    ],
    correcta: "b)",
    comentario: `“Se podrá realizar un cambio de plaza dentro del mismo tipo de asiento o clase o a una inferior, previa solicitud al personal encargado de la supervisión o intervención en ruta y siempre que existan plazas disponibles. Si se realiza el cambio de plaza, a una de infe- rior tipo de asiento o clase, el cliente no tendrá derecho a reintegro alguno”.`,
  },
  {
    pregunta: "8. En los supuestos de cambio de plaza decididos por el personal encargado de la supervisión o intervención en ruta, como consecuencia de una incidencia relacionada con la prestación del servicio y le sea concedida al viajero una plaza más cara, ¿deberá abonar la diferencia de precio?",
    opciones: [
      "a) No, no abonará diferencia de precio alguna por la acomodación en plaza más cara.",
      "b) Sí, abonará la diferencia de precio existente entre la plaza contratada por el viajero y la finalmente disfrutada. y",
      "c) No, no abonará diferencia de precio alguna por la acomodación en plaza más cara y podrá solicitar el reintegro del precio abonado por su título.",
      "d) Sí, abonara la mitad de la diferencia de precio existente entre la plaza contratada por el viajero y la finalmente disfrutada.",
    ],
    correcta: "a)",
    comentario: `“Cuando el cambio de plaza fuera decidido por el personal encargado de la supervi- sión o intervención en ruta, como consecuencia de una incidencia relacionada con la prestación del servicio el viajero no abonará diferencia de precio alguna por la acomodación en plaza más cara".`,
  },
  {
    pregunta: "9. En los supuestos de cambio de plaza decididos por el personal encargado de la supervisión o intervención en ruta, como consecuencia de una incidencia relacionada con la prestación del servicio y le sea concedida al viajero una plaza de menor coste, ¿se le devolverá al cliente la diferencia de precio?",
    opciones: [
      "a) No, el cliente no tendrá derecho a devolución de importe alguno.",
      "b) Sí, se devolverá al cliente la diferencia de precio.",
      "c) Sí, el cliente tendrá derecho a la devolución de la mitad de la diferencia de precio existente entre ambas plazas.",
      "d) Todas las opciones son correctas.",
    ],
    correcta: "b)",
    comentario: `“Cuando el cambio de plaza fuera decidido por el personal encargado de la supervi- sión o intervención en ruta, como consecuencia de una incidencia relacionada con la prestación del servicio el viajero no abonará diferencia de precio alguna por la acomodación en plaza más cara. Si el cambio se realiza a Una plaza de menor coste, se devolverá al cliente la diferencia de precio”.`,
  },
  {
    pregunta: "10. ¿Cuándo puede el cliente solicitar la mejora de tipo de asiento?",
    opciones: [
      "a) Con anterioridad a la adquisición del título.",
      "b) En cualquier momento del trayecto, debiendo ser reubicado por el personal encargado de la supervisión o intervención en ruta a la mayor brevedad.",
      "c) Cuando ostente un título válido, previa solicitud al personal encargado de la supervisión o intervención en ruta, autorizándose siempre que lo permitan las condiciones del tren, las plazas, la opción de precio, o tarifa aplicada en el título de transporte.",
      "d) La mejora de asiento se encuentra prohibida, debiendo el cliente ocupar la plaza que consta en el título adquirido.",
    ],
    correcta: "c)",
    comentario: `“El cliente que ostente un título válido podrá solicitar la mejora de tipo de asiento, de tarifa, opción de precio o de clase, previa solicitud al personal encargado de la super- visión o intervención en ruta, autorizándose siempre que lo permitan las condiciones del tren, las plazas, la opción de precio, o tarifa aplicada en el título de transporte”.`,
  },
  {
    pregunta: "11. Si un cliente solicita la mejora de asiento y el personal encargado de la supervisión o intervención en ruta se lo autoriza, ¿deberá abonar alguna cantidad?",
    opciones: [
      "a) No, al haber abonado previamente un título válido para viajar y obedecer la mejora de asientos a la disponibilidad de plazas no vendidas.",
      "b) Sí, deberá abonar en el acto, la diferencia de precio, conforme a las condiciones establecidas y las tarifas vigentes para el título de transporte con el que viajaba en el momento de la solicitud.",
      "c) Sí, deberá abonar el precio de la nueva plaza solicitada, quedando anulado el título anterior.",
      "d) Deberá abonar la parte proporcional del importe de la plaza solicitada en relación con el trayecto pendiente de recorrer en el momento de la solicitud.",
    ],
    correcta: "b)",
    comentario: `“El cliente que ostente un título válido podrá solicitar la mejora de tipo de asiento, de tarifa, opción de precio o de clase, previa solicitud al personal encargado de la super- visión o intervención en ruta, autorizándose siempre que lo permitan las condiciones   del tren, las plazas, la opción de precio, o tarifa aplicada en el título de transporte. En tal caso, el cliente deberá abonar en el acto, la diferencia de previo, conforme a las  condiciones establecidas y las tarifas vigentes para el título de transporte con el que viajaban en el momento de la solicitud”.`,
  },
  {
    pregunta: "12. ¿Puede el cliente, una vez iniciado el viaje prolongar el recorrido del mismo?",
    opciones: [
      "a) Sí, en los servicios que lo contemplen, previa comunicación al personal encargado de la supervisión o intervención en ruta, autorizándose siempre que lo permitan las condiciones del tren, la disponibilidad de plazas y la opción de precio o tarifa aplicada en el título de transporte, abonándose en el acto el precio adicional del nuevo trayecto.",
      "b) No, la modificación del origen y destino del viaje contratado por el cliente está prohibida.",
      "c) No, ya que posiblemente su asiento esté vendido a otro viajero para un trayecto posterior al contratado por el cliente.",
      "d) La prolongación del recorrido únicamente se encuentra prevista para su solicitud 24 horas entes antes del inicio del viaje.",
    ],
    correcta: "a)",
    comentario: `“En los servicios de Alta Velocidad-Larga Distancia, Larga Distancia, Alta Velocidad- Media Distancia y Media Distancia Convencional, el viajero que desee prolongar el recorrido, lo deberá comunicar previamente al personal encargado de la supervisión o intervención en ruta, autorizándose siempre que lo permitan las condiciones del tren, la disponibilidad de plazas y la opción de precio o tarifa aplicada en el título  de transporte. En tal caso, el cliente deberá abonar en el acto el precio adicional del nuevo trayecto”.`,
  },
  {
    pregunta: "13. En los servicios de Cercanías, ¿puede el cliente provisto de título válido podrá prolongar su viaje dentro y fuera del Núcleo?",
    opciones: [
      "a) Sí, previa comunicación y regularización de su pago en la estación de origen.",
      "b) No, en los servicios de Cercanías no es posible prolongar el recorrido.",
      "c) Sí, abonando la diferencia de trayecto en la estación de destino.",
      "d) No, deberá apearse en la estación que indique su título y adquirir un nuevo para el tramo siguiente.",
    ],
    correcta: "a)",
    comentario: `“En los servicios de Cercanías, el cliente provisto de título válido podrá prolongar su viaje dentro y fuera del Núcleo, previa comunicación y regularización de su pago en la estación de origen. Únicamente en el caso de que la estación de origen no tenga venta asistida, la regularización del pago se hará en ruta”.`,
  },
  {
    pregunta: "14. Si en el servicio de Cercanías un cliente provisto de título válido decide prolongar su viaje dentro y fuera del Núcleo, ¿dónde debe regularizar su pago?",
    opciones: [
      "a) Regularizará su pago en ruta, en cualquier caso.",
      "b) En la estación de destino.",
      "c) En la estación de origen.",
      "d) No deberá regularizar el pago.",
    ],
    correcta: "c)",
    comentario: `“En los servicios de Cercanías, el cliente provisto de título válido podrá prolongar su viaje dentro y fuera del Núcleo, previa comunicación y regularización de su pago en la estación de origen. Únicamente en el caso de que la estación de origen no tenga venta asistida, la regularización del pago se hará en ruta".`,
  },
  {
    pregunta: "15. Si en el servicio de Cercanías un cliente provisto de título válido decide prolongar su viaje dentro y fuera del Núcleo, y la estación de origen no dispone de venta asistida, ¿dónde debe regularizar su pago?",
    opciones: [
      "a) Regularizará su pago en ruta.",
      "b) En la estación de destino.",
      "c) En la estación de origen.",
      "d) No deberá regularizar el pago.",
    ],
    correcta: "a)",
    comentario: `“En los servicios de Cercanías, el cliente provisto de título válido podrá prolongar su viaje dentro y fuera del Núcleo, previa comunicación y regularización de su pago en la estación de origen. Únicamente en el caso de que la estación de origen no tenga venta asistida, la regularización del pago se hará en ruta”.`,
  },
  {
    pregunta: "16. ¿Puede un viajero con Título Multiviaje prolongar su recorrido fuera del Núcleo? Sí, debiendo regularizar su pago en ruta. Sí, previa comunicación y regularización de su pago en la estación de origen. No, la prolongación del recorrido está prohibida para todos los títulos y servicios. No, los Títulos Multiviaje no admiten prolongación del recorrido fuera del Núcleo. a b C o d ==",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "d)",
    comentario: `“Los Títulos Multiviaje y los emitidos por los Consorcios de Transporte o asimilados no admiten prolongación del recorrido fuera del Núcleo”.`,
  },
  {
    pregunta: "17. En los servicios de Alta Velocidad-Larga Distancia, Larga Distancia y Alta Velocidad-Media Distancia, ¿qué menores de edad deben de disponer de título de transporte válido?",
    opciones: [
      "a) Únicamente los menores de edad que viajen solos.",
      "b) Todos los menores de edad.",
      "c) Los menores de edad mayores de 14 años.",
      "d) Los menores de edad no tienen obligación de disponer de título de transporte válido en ningún caso.",
    ],
    correcta: "b)",
    comentario: `“Con independencia de la edad de los menores, todos deben disponer de un título de transporte válido en Alta Velocidad-Larga Distancia, Larga Distancia y Alta Veloci- dad-Media Distancia. En esto servicios, los menores de 14 años deberán viajar con la compañía de una persona adulta”.`,
  },
  {
    pregunta: "18. ¿Puede un menor de 13 años viajar solo en el servicio de Alta Velocidad-Larga Distancia?",
    opciones: [
      "a) Sí, como en resto de servicios ofrecidos por Renfe Viajeros.",
      "b) No, todos los menores de edad deben viajar acompañados de un adulto en todos los servicios ofrecidos por Renfe Viajeros.",
      "c) No, en el servicio de Alta Velocidad-Larga Distancia los menores de 14 años deben iracompañados de un adulto.",
      "d) No, en el servicio de Alta Velocidad-Larga Distancia los menores de 16 años deben ir acompañados de un adulto.",
    ],
    correcta: "c)",
    comentario: `“Con independencia de la edad de los menores, todos deben disponer de un título de transporte válido en Alta Velocidad-Larga Distancia, Larga Distancia y Alta Veloci- dad-Media Distancia. En esto servicios, los menores de 14 años deberán viajar con la compañía de una persona adulta”,`,
  },
  {
    pregunta: "19. ¿Quién ostenta la responsabilidad de los menores de 18 años que viajen sin su madre, padre o tutor legal?",
    opciones: [
      "a) Grupo Renfe.",
      "b) La persona mayor de edad con plaza o asiento más cercano al/os menor/es.",
      "c) Los propios menores.",
      "d) Su madre, padre o tutor legal, con independencia de que no los acompañen en el viaje.",
    ],
    correcta: "d)",
    comentario: `“Para todos los servicios, los menores de 18 años que viajen sin su madre, padre o tutor legal lo harán siempre bajo la responsabilidad de estos”.`,
  },
  {
    pregunta: "20. ¿Pueden las personas con discapacidad o movilidad reducida viajar sin ir acompañados de otra persona?",
    opciones: [
      "a) No, en ningún caso.",
      "b) Si, siempre que la discapacidad o reducción de la movilidad le permitan desplazarse autónomamente junto con su equipaje.",
      "c) Únicamente en los servicios de Cercanías.",
      "d) Sí, salvo que sea estrictamente necesario para garantizar que el viaje se desarrolle en condiciones adecuadas de seguridad, atendiendo a la normativa aplicable.",
    ],
    correcta: "d)",
    comentario: `“Las personas con discapacidad o movilidad reducida podrán hacer reservas u ob- tener títulos de transporte sin necesidad de viajar acompañados de otra persona, a menos que sea estrictamente necesario para garantizar que el viaje se desarrolle en condiciones adecuadas de seguridad, atendiendo a la normativa aplicable”.`,
  },
  {
    pregunta: "21. ¿Cómo se denomina el servicio prestado por el Administrador de Infraestructuras Ferroviarias especializado para facilitarles el transporte en ferrocarril a personas con discapacidad o movilidad reducida?",
    opciones: [
      "a) “Programa Lázaro”.",
      "b) “Complemento a la movilidad”.",
      "c) “Servicio de Asistencia”.",
      "d) “Ayuda a la discapacidad”.",
    ],
    correcta: "c)",
    comentario: `22. ¿Cómo se denomina el equipaje, animales de compañía, elementos de movilidad individual y cualquier bulto que el viajero pueda válidamente llevar consigo?
a) Pertenencias del viajero.
b) Equipaje facturado.
c) Artículos de bodega.
d) Servicios complementarios.`,
  },
  {
    pregunta: "22. d) Servicios complementarios.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `23. ¿Cuál de los siguientes objetos sí puede llevar el viajero?
a) Materiales susceptibles de explosión o inflamación.
b) Bultos que por su naturaleza, tamaño, tipología, volumen, olor o contenido puedan ser considerados como peligrosos.
c) Bultos que por su naturaleza, tamaño, tipología, volumen, olor o contenido puedan dañar, molestar o manchar a los demás viajeros y a sus equipajes.
d) Animales de compañía (mascotas).`,
  },
  {
    pregunta: "23. d) Animales de compañía (mascotas).",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `---------- TO FIX ----------
24. En los casos en que Rede Viajeros decida limitar o excluir el transporte de mascotas, ¿cuándo debe informar al cliente de esta circunstancia? == a b C d Durante el trayecto. Antes de la compra del viaje. Antes de acceder al tren. Antes de acceder a la estación de origen. a A E`,
  },
  {
    pregunta: "24. b) Antes de la compra del viaje.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `25. En el transporte con animales de compañía (mascotas), ¿quién es el responsable de la mascota cumpla las condiciones higiénico-sanitarias y de seguridad?
a) Grupo Renfe.
b) El propietario de la mascota.
c) La persona que viaje con la mascota.
d) Grupo Renfe y la persona que viaje con la mascota, solidariamente.`,
  },
  {
    pregunta: "25. c) La persona que viaje con la mascota.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `26. ¿Cómo es considerado todo bulto de mano que contenga prendas y objetos de uso personal o profesional que el cliente lleve consigo, cuya naturaleza no contravenga las disposiciones de seguridad establecidas en la legislación vigente, y no suponga peligro para la seguridad del transporte, ni obstaculice la explotación ferroviaria, ni represente peligro o molestia para otros viajeros?
a) Exceso de equipaje.
b) Equipaje admisible.
c) Equipaje adicional.
d) Equipaje de valor declarado.`,
  },
  {
    pregunta: "26. b) Equipaje admisible.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `27. ¿Cuál de los siguientes puede llevar consigo el viajero?
a) Mascotas, según las condiciones comerciales específicas de cada servicio ferroviario.
b) Materiales susceptibles de explosión o inflamación.
c) Bultos que por su naturaleza, tamaño, tipología, volumen, olor o contenido puedan ser considerados como peligrosos.
d) Bultos que por su naturaleza, tamaño, tipología, volumen, olor o contenido puedan manchar a los demás viajeros y a sus equipajes.`,
  },
  {
    pregunta: "27. a) Mascotas, según las condiciones comerciales específicas de cada servicio ferroviario.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `28. ¿Quién responderá por la pérdida, deterioro o daños a los equipajes?
a) El viajero.
b) Renfe Viajeros, en los supuestos y en los términos previstos en el Título IX“Responsabilidad de Renfe Viajeros” de las presentes Condiciones Generales.
c) El maquinista, en los supuestos y en los términos previstos en el Título IX“Responsabilidad de Renfe Viajeros” de las presentes Condiciones Generales.
d) Nadie.`,
  },
  {
    pregunta: "28. b) Renfe Viajeros, en los supuestos y en los términos previstos en el Título IX “Responsabilidad de Renfe Viajeros” de las presentes Condiciones Generales.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `29. ¿Cómo se considera el equipaje que por sus dimensiones o características no cumpla los requisitos para ser considerado equipaje de mano?
a) Bultos de mano.
b) Mascota.
c) Equipaje especial.
d) Exceso de equipaje.`,
  },
  {
    pregunta: "29. c) Equipaje especial.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `30. ¿Cómo es definido el acoso por razón de sexo?
a) Cualquier comportamiento, verbal o físico, de naturaleza sexual, desarrollado en el ámbito de organización y dirección de la Empresa por quien pertenece a la misma, que tenga el propósito o produzca el efecto de atentar contra la dignidad de una persona, en particular cuando se crea un entorno intimidatorio, degradante u ofensivo.
b) Cualquier comportamiento realizado en función del sexo de una persona, desarrollado en el ámbito de organización y dirección de la Empresa por quien pertenece a la misma, con el propósito o el efecto de atentar contra su dignidad y de crear un entorno intimidatorio, degradante u ofensivo.
c) El ejercicio de una violencia psicológica extrema, abusiva e injusta de forma sistemática y recurrente, durante un tiempo prolongado, sobre otro trabajador o trabajadores desarrollado en el ámbito de organización y dirección de la Empresa por quien o quienes pertenecen a la misma, con la finalidad de atentar contra la dignidad de la persona y crear un entorno intimidatorio, hostil, degradante, humillante u ofensivo.
d) Todas la anteriores son correctas.`,
  },
  {
    pregunta: "30. b) Cualquier comportamiento realizado en función del sexo de una persona, desarrollado en el ámbito de organización y dirección de la Empresa por quien pertenece a la misma, con el propósito o el efecto de atentar contra su dignidad y de crear un entorno intimidatorio, degradante u ofensivo.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `31. ¿A cuál de los siguientes términos pertenece la siguiente definición? “Cualquier comportamiento, verbal o físico, de naturaleza sexual, desarrollado en el ámbito de organización y dirección de la Empresa por quien pertenece a la misma, que tenga el propósito o produzca el efecto de atentar contra la dignidad de una persona, en particular cuando se crea un entorno intimidatorio, degradante u ofensivo”.
a) Acoso sexual.
b) Acoso por razón de sexo.
c) Acoso moral o psicológico (mobbing).
d) Acoso laboral.`,
  },
  {
    pregunta: "31. a) Acoso sexual.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `32. En función de los sujetos que intervienen en el acoso moral o psicológico (mobbing), ¿cuándo será calificada como “descendente”?
a) Cuando el acosador/s es de mayor edad que la víctima.
b) Cuando el acosador/a es una persona que ocupa un cargo superior a la víctima.
c) Cuando el acosador/s es una persona que ocupa un puesto de inferior nivel jerárquico que la víctima.
d) Cuando el acosador/s es una persona ajena a la empresa.`,
  },
  {
    pregunta: "32. b) Cuando el acosador/a es una persona que ocupa un cargo superior a la víctima.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `33. En función de los sujetos que intervienen en el acoso moral o psicológico (mobbing), ¿cuándo será calificada como “horizontal”?
a) Cuando el/los acosador/es es/son de mayor edad que la víctima.
b) Cuando el/la acosador/a es una persona que ocupa un cargo superior a la víctima.
c) Cuando el acosadores una persona que ocupa un puesto de inferior nivel jerárquico que la víctima.
d) Cuando el acosador es una persona ajena a la empresa.`,
  },
  {
    pregunta: "33. c) Cuando el acosadores una persona que ocupa un puesto de inferior nivel je- rárquico que la víctima.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `34. ¿Cuál de las siguientes conductas no es un ejemplo de acoso sexual?
a) Observaciones sugerentes, bromas o comentarios sobre la apariencia o condición sexual del trabajador/a.
b) Llamadas telefónicas, cartas, mensajes sms o mensajes de correo electrónico de carácter ofensivo y de contenido explícitamente sexual, siempre que sea de modo no consentido por quien lo recibe.
c) Actuaciones reiteradas dirigidas a desacreditar profesionalmente a la persona.
d) El contacto físico deliberado y no deseado ni solicitado, o un acercamiento físico excesivo o innecesario.`,
  },
  {
    pregunta: "34. c) Actuaciones reiteradas dirigidas a desacreditar profesionalmente a la persona.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `35. ¿Cuál de los siguientes elementos no es preceptivo que incluya la denuncia formulada por una persona que cree que está siendo víctima de acoso?
a) Nombre del denunciante.
b) Naturaleza de la reclamación en materia de acoso que se somete.
c) Firma de abogado.
d) Indicación sobre si el denunciante no le importa mantener una reunión con el/la denunciado/a.`,
  },
  {
    pregunta: "35. c) Firma de abogado.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `36. ¿En qué formato debe formular la denuncia la persona de la Empresa que cree que está siendo víctima de acoso?
a) Mediante declaración escrita.
b) Mediante declaración verbal.
c) Mediante denuncia anónima, cualquiera que sea su medio.
d) Mediante publicación en el tablón de anuncios.`,
  },
  {
    pregunta: "36. a) Mediante declaración escrita.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `37. La denuncia de la persona de la Empresa que cree que está siendo víctima de acoso, ¿a quién debe remitirse?
a) A los representantes de los trabajadores.
b) Al Director General de la empresa.
c) Al responsable de la Jefatura de Recursos Humanos.
d) Al Delegado de Prevención de Riesgos Laborales.`,
  },
  {
    pregunta: "37. c) Al responsable de la Jefatura de Recursos Humanos.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `38. Recibida una denuncia de una persona de la Empresa que cree que está siendo víctima de acoso por el responsable de la Jefatura de Recursos Humanos, este debe proceder a convocar una reunión. ¿Cuál de las siguientes personas no se encuentra entre las que deben asistir a dicha reunión?
a) El trabajador/a que presuntamente está realizando este comportamiento no deseado.
b) El Director General de la empresa.
c) El responsable de la Jefatura de Recursos Humanos.
d) El trabajador/a afectado por la conducta de acoso.`,
  },
  {
    pregunta: "38. b) El Director General de la empresa.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `39. ¿Qué principio de Cultura de Seguridad del Grupo Renfe se fundamenta en la creencia de que la seguridad es un valor irrenunciable y prevalente, consustancial a toda actividad, que conlleva un comportamiento asociado basado en que las personas demuestran que la seguridad no puede supeditarse a ningún otro objetivo?
a) Seguridad como valor esencial.
b) Apertura y confianza.
c) Responsabilidad personal.
d) Compromiso y liderazgo.`,
  },
  {
    pregunta: "39. a) Seguridad como valor esencial.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `40. ¿Qué principio de Cultura de Seguridad del Grupo Renfe se fundamenta en la creencia de que la forma de liderazgo influye, para bien o para mal, en el comportamiento de los grupos, lo que conlleva un comportamiento asociado basado en que las personas demuestran en su quehacer diario su compromiso con la seguridad?
a) Seguridad como valor esencial.
b) Apertura y confianza.
c) Responsabilidad personal.
d) Compromiso y liderazgo.`,
  },
  {
    pregunta: "40. d) Compromiso y liderazgo.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `41. ¿Qué principio de Cultura de Seguridad del Grupo Renfe se fundamenta en la creencia de que la seguridad es una responsabilidad individual, lo que conlleva un comportamiento asociado basado en que las personas son proactivas en la gestión de la seguridad?
a) Seguridad como valor esencial.
b) Vigilancia de la seguridad.
c) Responsabilidad personal.
d) Compromiso y liderazgo.`,
  },
  {
    pregunta: "41. c) Responsabilidad personal.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `42. ¿Qué principio de Cultura de Seguridad del Grupo Renfe se fundamenta en la creencia de que el respeto y la cooperación, en un clima de confianza mutua, fomenta la seguridad operacional?
a) Apertura y confianza.
b) Aprendizaje y mejora continua.
c) Responsabilidad personal.
d) Compromiso y liderazgo.`,
  },
  {
    pregunta: "42. a) Apertura y confianza.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `43. ¿Qué principio de Cultura de Seguridad del Grupo Renfe se fundamenta en la creencia de que la seguridad se puede y se debe medir, lo que conlleva, como comportamiento asociado, que la organización utilice indicadores para valorar el nivel de riesgo?
a) Seguridad como valor esencial.
b) Vigilancia de la seguridad.
c) Responsabilidad personal.
d) Compromiso y liderazgo.`,
  },
  {
    pregunta: "43. b) Vigilancia de la seguridad.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `44. ¿Qué principio de Cultura de Seguridad del Grupo Renfe se fundamenta en la creencia de que la experiencia adquirida permite mejorar el nivel de seguridad, por lo que la organización cambia en función de la evolución de los indicadores de seguridad y de las amenazas detectadas?
a) Seguridad como valor esencial.
b) Responsabilidad personal.
c) Aprendizaje y mejora continua.
d) Compromiso y liderazgo.`,
  },
  {
    pregunta: "44. c) Aprendizaje y mejora continua.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `45. ¿Cuál de los siguientes no es uno de los factores clave del modelo de cultura de seguridad del Grupo Renfe?
a) Compromiso de los gestores y gestoras.
b) Responsabilidad personal.
c) Movilidad geográfica.
d) Compromiso entre compañeros y compañeras.`,
  },
  {
    pregunta: "45. c) Movilidad geográfica.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `46. ¿Cómo se denomina la era caracterizada por una atención sin precedentes a las demandas y expectativas de los consumidores, que destaca por la importancia de la experiencia del cliente y la creación de relaciones duraderas?
a) Era de la información.
b) Era de la distribución.
c) Era del cliente.
d) Era de la producción.`,
  },
  {
    pregunta: "46. c) Era del cliente.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `47. ¿Cómo se denomina la era donde la diferenciación se encuentra en la capacidad de una marca para crear conexiones emocionales profundas con sus clientes, y donde la calidad del servicio y la Experiencia de Cliente son los pilares fundamentales que impulsan el éxito empresarial?
a) Era de la información.
b) Era de la distribución.
c) Era de las experiencias.
d) Era de la producción.`,
  },
  {
    pregunta: "47. c) Era de las experiencias.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `48. ¿Cómo se denominan las entidades abstractas y construcciones sociales que se forman a través de las interacciones y percepciones de los clientes?
a) Marcas.
b) Productos o servicios.
c) Experiencias.
d) Responsabilidad Social Corporativa.`,
  },
  {
    pregunta: "48. a) Marcas.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `49. ¿Cómo se denominan las interacciones que el cliente tiene con la empresa, desde la primera impresión hasta el servicio posventa y más allá?
a) Fidelización del cliente.
b) Interacción con la empresa a lo largo de todo el ciclo de vida del cliente.
c) Garantía.
d) Atención continua al cliente.`,
  },
  {
    pregunta: "49. b) Interacción con la empresa a lo largo de todo el ciclo de vida del cliente.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `50. ¿Cómo se denomina el concepto central en la gestión de relaciones con los clientes que abarca desde el primer contacto con la marca hasta la lealtad continua?
a) Fidelización del cliente.
b) Confidencialidad.
c) Clientela consolidada.
d) Ciclo de vida del cliente.`,
  },
  {
    pregunta: "50. d) Ciclo de vida del cliente.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `51. Antes de que un cliente potencial se convierta en un cliente adquirido, existe una fase crucial; ¿en qué consiste?
a) Fidelización.
b) Producción y distribución.
c) Atracción y captación.
d) Publicidad y visibilidad de la empresa.`,
  },
  {
    pregunta: "51. c) Atracción y captación.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `---------- TO FIX ----------
52. Una vez que un cliente potencial muestra interés en la marca o producto, comienza una fase en la que es esencial que la experiencia de compra sea fluida y satisfactoria, ¿cómo se denomina esa fase? a b C d map Fase de adquisición. Fase de consolidación. Apertura a nuevos mercados. Atracción y captación.`,
  },
  {
    pregunta: "52. a) Fase de adquisición.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `53. Tras la fase de adquisición, comienza una fase de retención y compromiso. ¿Qué busca la marca en esta fase?
a) Mantener la relación con el cliente proporcionando un excelente servicio postventa.
b) Mantener una comunicación regular con el cliente.
c) Ofrecer incentivos para compras repetidas.
d) Todas las anteriores son correctas.`,
  },
  {
    pregunta: "53. d) Todas las anteriores son correctas.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `54. ¿Cuál de las siguientes opciones no encontrarías dentro de las estrategias de retención?
a) Participación en programas de recompensas.
b) Anuncios en televisión en prime time.
c) Ofertas de descuentos exclusivos para clientes frecuentes.
d) Envío de correos electrónicos personalizados.`,
  },
  {
    pregunta: "54. b) Anuncios en televisión en prime time.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `55. ¿Qué fase es fundamental para recopilar retroalimentación del cliente y utilizarla para mejorar continuamente la experiencia el cliente y fortalecer la relación?
a) La fase de adquisición.
b) La fase de fidelización.
c) La fase de retención y compromiso.
d) Todas las anteriores son correctas.`,
  },
  {
    pregunta: "55. c) La fase de retención y compromiso.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `56. ¿Cómo se denomina la fase que es el objetivo final del ciclo de vida del cliente, en que la relación entre el cliente y la marca se ha fortalecido y el cliente repite sus compras de manera habitual?
a) Fase de mercadotecnia.
b) Fase de consolidación.
c) Fase de fidelización.
d) Fase de adquisición.`,
  },
  {
    pregunta: "56. c) Fase de fidelización.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `57. Dentro de los factores que incluyen en la experiencia del cliente, ¿con qué término hacemos referencia a comprender las preocupaciones, necesidades y emociones del cliente, poniéndonos en su lugar, y generando una conexión más profunda y significativa?
a) Disposición.
b) Simpatía.
c) Empatía.
d) Venta dirigida.`,
  },
  {
    pregunta: "57. c) Empatía.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `58. Dentro de los factores que incluyen en la experiencia del cliente, ¿con qué término hacemos referencia a tratar al cliente como único, con sus necesidades y preferencias individuales, adaptando el servicio a estas necesidades específicas?
a) Personalización.
b) Cortesía.
c) Comunicación efectiva.
d) Venta dirigida.`,
  },
  {
    pregunta: "58. a) Personalización.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `59. Dentro de los factores que incluyen en la experiencia del cliente, ¿con qué término hacemos referencia a mantener una comunicación clara, transparente y proactiva, evitando malentendidos y construyendo una relación de confianza, proporcionando información relevante y actualizada sobre productos, servicios y políticas?
a) Personalización.
b) Empatía.
c) Comunicación efectiva.
d) Capacidad para resolver problemas.`,
  },
  {
    pregunta: "59. c) Comunicación efectiva.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `60. Dentro de los factores que incluyen en la experiencia del cliente, ¿con qué término hacemos referencia a escuchar las preocupaciones del cliente con atención, mostrar disposición para encontrar soluciones creativas y trabajar en colaboración para resolver el problema de manera satisfactoria pueden convertir una experiencia negativa en una oportunidad para fortalecer la relación?
a) Personalización.
b) Empatía.
c) Comunicación efectiva.
d) Capacidad para resolver problemas.`,
  },
  {
    pregunta: "60. d) Capacidad para resolver problemas.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `61. ¿Cuándo es posible el acceso a los trenes con bicicletas?
a) Previo pago, cuando así se establezca expresamente para determinados servicios o trenes, en los términos indicados en las condiciones comerciales específicas.
b) Siempre que sean fácilmente manejables.
c) Siempre que no afecten de manera adversa al servicio ferroviario.
d) Todas las anteriores son correctas.`,
  },
  {
    pregunta: "61. d) Todas las anteriores son correctas.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `62. Recibida una denuncia de una persona de la Empresa que cree que está siendo víctima de acoso por el Responsable de la Jefatura de Recursos Humanos, este debe proceder a convocar una reunión informal, ¿en qué plazo?
a) En el plazo máximo de treinta días hábiles desde que el trabajador/a afectado lo hubiera puesto en su conocimiento.
b) En el plazo máximo de cinco días hábiles desde que el trabajador/a afectado lo hubiera puesto en su conocimiento.
c) En las 24 horas siguientes desde que el trabajador/a afectado lo hubiera puesto en su conocimiento.
d) Antes de la finalización del año natural.`,
  },
  {
    pregunta: "62. b) En el plazo máximo de cinco días hábiles desde que el trabajador/a afectado lo hubiera puesto en su conocimiento.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `63. ¿Cuál de los siguientes no es uno de los factores clave del modelo de cultura de seguridad del Grupo Renfe?
a) Gestión de riesgos.
b) Personal y equipamiento.
c) Unidad de mando.
d) Compromiso entre compañeros y compañeras.`,
  },
  {
    pregunta: "63. c) Unidad de mando.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `64. Cuando hablamos de gestionar y diseñar la experiencia de cliente, ¿cómo se denomina la herramienta o metodología encaminada a la búsqueda de muestras representativas y estadísticas, como encuestas numéricas?
a) Investigación cuantitativa.
b) Investigación cualitativa.
c) Arquetipos de cliente.
d) Metadatos.`,
  },
  {
    pregunta: "64. a) Investigación cuantitativa.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: ``,
  },
];
