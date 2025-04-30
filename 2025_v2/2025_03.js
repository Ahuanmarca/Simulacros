const preguntas = [
  {
    pregunta: "1. ¿Cuál de las siguientes afirmaciones sobre el viaje con armas no es correcta?",
    opciones: [
      "a) Renfe viajeros admitirá que los viajeros porten armas en los trenes cuando, entre otros requisitos, vayan acompañadas de las correspondientes guías, licencias y demás documentación exigida legalmente.",
      "b) Renfe viajeros admitirá que los viajeros porten armas en los trenes cuando, entre otros requisitos, vayan desmotadas o dentro de sus cajas o fundas.",
      "c) Renfe viajeros admitirá que los viajeros porten armas en los trenes cuando, entre otros requisitos, se trate de armas de deportistas.",
      "d) Renfe Viajeros no admitirá viajeros que porten armas en los trenes en ningún caso.",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `2. Cuando el personal de las Fuerzas Armadas, Fuerzas y Cuerpos de Seguridad del Estado, del Servicio de Vigilancia Aduanera o de personal de empresas de seguridad que realicen funciones de custodia o vigilancia porten armas, ¿qué es necesario?
a) La exhibición de su guía de pertenencia y su Tarjeta de Identidad Militar o, en su caso, el carné profesional.
b) Nada, ya que están actuando como autoridad.
c) Que vayan uniformados, únicamente.
d) Autorización del maquinista.`,
  },
  {
    pregunta: "2. Atender las indicaciones que les formule el personal de Renfe Viajeros o el personal autorizado por esta en relación con la correcta prestación del servicio, así como lo indicado en los carteles colocados a la vista en instalaciones y trenes, y permanecer únicamente en las instalaciones ferroviarias en el horario en que esté prevista su uti- lización para los clientes”,",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `---------- TO FIX ----------
3. Arecibir antes del viaje, cuando así lo soliciten, la siguiente información:
- Horarios y condiciones del viaje más rápido y de las opciones de precio y tarifas más económicas.
- Accesibilidad, condiciones de acceso y disponibilidad de instalaciones para per- sonas con discapacidad o movilidad reducida.
- Asientos o plazas disponibles”.`,
  },
  {
    pregunta: "4. Para la recogida de objetos olvidados, perdidos o abandonados en trenes, andenes u otras dependencias de la estación dentro del plazo previsto, ¿qué es necesario?",
    opciones: [
      "a) El mero testimonio de la persona que lo reclame.",
      "b) Nada.",
      "c) La justificación de su propiedad.",
      "d) La exhibición del título de viaje.",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `5. Conocer los asientos o plazas disponibles es:
a) Un derecho de los viajeros.
b) Una obligación de los viajeros.
c) Una facultad de Renfe Viajeros.
d) Un servicio complementario que implica costes para el viajero.`,
  },
  {
    pregunta: "5. a) Un derecho de los viajeros.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `6. ¿Tiene derecho el viajero a recibir información de la siguiente estación con parada?
a) Sí, pero dicha información puede suponer costes adicionales.
b) No, es una obligación del viajero conocer previamente las paradas del viaje que va a realizar.
c) Sí, el viajero tiene derecho a recibir información durante su viaje de la estación siguiente con parada.
d) No es un derecho, pero Renfe Viajeros suele ofrecer esa posibilidad.`,
  },
  {
    pregunta: "6. c) Sí, el viajero tiene derecho a recibir información durante su viaje de la esta- ción siguiente con parada.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `7. ¿Cuál de las siguientes no es una obligación que deben cumplir los viajeros?
a) Adquirir el título de transporte conforme al trayecto deseado.
b) Atender las indicaciones que les formule el personal de Renfe Viajeros o el personal autorizado por ésa en relación con la correcta prestación del servicio.
c) A ser informaos de las pólizas de seguro y afianzamiento que Renfe Viajeros tenga contratada para garantizar su responsabilidad.
d) Abstenerse de mendigar.`,
  },
  {
    pregunta: "7. c) A ser informaos de las pólizas de seguro y afianzamiento que Renfe Viajeros tenga contratada para garantizar su responsabilidad.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `8. ¿Debe el viajero permanecer únicamente en las instalaciones ferroviarias en el horario en que esté prevista su utilización para los clientes?
a) Sí, es una obligación del viajero.
b) No, el viajero puede acceder cuando quiera a las instalaciones ferroviarias en cualquier horario.
c) No, es un derecho del viajero pero no una obligación.
d) Sí, el viajero tiene prohibida la entrada en las instalaciones ferroviarias hasta 2 minutos antes de la salida del tren.`,
  },
  {
    pregunta: "8. a) Sí, es una obligación del viajero.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `---------- TO FIX ----------
9. ¿Es posible fumar en las instalaciones y dependencias de Renfe, sin autorización expresa previa? a b C d — Sí, es un derecho del viajero. No, el viajero tiene la obligación de abstenerse de fumar. Sí, sin necesidad de consultar al personal de Renfe. Sí, previa consulta al personal de Renfe. A a`,
  },
  {
    pregunta: "9. b) No, el viajero tiene la obligación de abstenerse de fumar.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `10. ¿Es posible distribuir publicidad en las instalaciones y dependencias de Renfe, sin autorización expresa previa?
a) Sí, es un derecho del viajero.
b) No, el viajero tiene la obligación de abstenerse de distribuir publicidad.
c) Sí, sin necesidad de consultar al personal de Renfe.
d) Sí, previa consulta al personal de Renfe.`,
  },
  {
    pregunta: "10. b) No, el viajero tiene la obligación de abstenerse de distribuir publicidad.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `11. ¿Qué consecuencias puede tener el incumplimiento por el viajero de sus obligaciones recogidas en el Título VIII de las Condiciones Generales?
a) El cese de la obligación para Renfe Viajeros de transporte del viajero y los objetos que porte, sin derecho a devolución de importe alguno.
b) La exigencia de la indemnización de daños y perjuicios.
c) Sanción administrativa o de otro orden.
d) Todas las anteriores son correctas.`,
  },
  {
    pregunta: "11. d) Todas las anteriores son correctas.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `12. ¿Cuál es la penalización prevista para el cliente de Alta Velocidad-Larga Distancia desprovisto de título de transporte válido que accede al tren desde una estación con venta de billetes donde era posible su adquisición?
a) Deberá abonar el importe del título de transporte del trayecto, incluyendo los gastos de gestión establecidos por Renfe Viajeros y una penalización por acceder de forma indebida de 300 euros.
b) Deberá abonar el importe del título de transporte del trayecto, incluyendo los gastos de gestión establecidos por Renfe Viajeros y una penalización por acceder de forma indebida de 200 euros.
c) Deberá abonar el importe del título de transporte del trayecto, incluyendo los gastos de gestión establecidos por Renfe Viajeros.
d) Deberá abonar una penalización de 100 euros en lugar de título de transporte.`,
  },
  {
    pregunta: "12. a) Deberá abonar el importe del título de transporte del trayecto, incluyendo los gastos de gestión establecidos por Renfe Viajeros y una penalización por acceder de forma indebida de 300 euros.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `13. ¿Cuál de la penalización prevista para el cliente de Media Distancia desprovisto de título de transporte válido que accede al tren desde una estación con venta de billetes donde era posible su adquisición?
a) Deberá abonar el importe del título de transporte del trayecto, incluyendo los gastos de gestión establecidos por Renfe Viajeros y una penalización por acceder de forma indebida de 300 euros.
b) Deberá abonar el importe del título de transporte del trayecto, incluyendo los gastos de gestión establecidos por Renfe Viajeros y una penalización por acceder de forma indebida de 200 euros.
c) Deberá abonar el importe del título de transporte del trayecto, incluyendo los gastos de gestión establecidos por Renfe Viajeros.
d) Deberá abonar una penalización de 100 euros en lugar de título de transporte.`,
  },
  {
    pregunta: "13. b) Deberá abonar el importe del título de transporte del trayecto, incluyendo  los gastos de gestión establecidos por Renfe Viajeros y una penalización por acceder de forma indebida de 200 euros.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `14. ¿Cuál es la penalización prevista para el cliente de Cercanías desprovisto de título de transporte válido que accede al tren desde una estación con venta de billetes donde era posible su adquisición?
a) Deberá abonar el importe del título de transporte del trayecto, incluyendo los gastos de gestión establecidos por Renfe Viajeros y una penalización por acceder de forma indebida de 300 euros.
b) Deberá abonar el importe del título de transporte del trayecto, incluyendo los gastos de gestión establecidos por Renfe Viajeros y una penalización por acceder de forma indebida de 100 euros.
c) Deberá abonar el importe del título de transporte del trayecto, incluyendo los gastos de gestión establecidos por Renfe Viajeros.
d) Deberá abonar una penalización de 100 euros en lugar de título de transporte.`,
  },
  {
    pregunta: "14. b) Deberá abonar el importe del título de transporte del trayecto, incluyendo    los gastos de gestión establecidos por Renfe Viajeros y una penalización por acceder de forma indebida de 100 euros.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `15. Si un cliente desprovisto de título de transporte válido que accede al tren desde una estación con venta de billetes donde era posible su adquisición es penalizado por ello, ¿puede acogerse a alguna reducción de la penalización si la abona antes de 30 días naturales?
a) Sí, se aplicará una reducción del 30% de la cantidad a pagar por estas penalizaciones, conforme a las normas, procedimientos particulares y en los canales de venta que se establezcan para cada servicio ferroviario.
b) Sí, se aplicará una reducción del 50% de la cantidad a pagar por estas penalizaciones, conforme a las normas, procedimientos particulares y en los canales de venta que se establezcan para cada servicio ferroviario.
c) Sí, se aplicará una reducción del 75% de la cantidad a pagar por estas penalizaciones, conforme a las normas, procedimientos particulares y en los canales de venta que se establezcan para cada servicio ferroviario.
d) No, no es posible beneficiarse de ninguna reducción por pronto pago.`,
  },
  {
    pregunta: "15. b) Sí, se aplicará una reducción del 50% de la cantidad a pagar por estas pena- lizaciones, conforme a las normas, procedimientos particulares y en los canales de venta que se establezcan para cada servicio ferroviario.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `16. ¿Cuál de los siguientes vehículos no tiene prohibido el acceso a los vehículos de Renfe Viajeros?
a) Patinetes.
b) Bicicletas eléctricas.
c) Monociclos.
d) Cualquier otro dispositivo de movilidad personal eléctricos o dotados de baterías, por considerarse que constituyen un peligro para la seguridad y el buen funcionamiento de la explotación del transporte y de los viajeros.`,
  },
  {
    pregunta: "16. b) Bicicletas eléctricas.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `17. Si un viajero es obligado a abandonar el tren por haber accedido al mismo con un patinete dotado de batería, ¿tiene derecho al reembolso del precio pagado?
a) No, en ningún caso.
b) Sí, en todo caso.
c) Sí, cuando demuestre que el patinete no perturbaba al resto de viajeros ni suponía un peligro para la seguridad.
d) Sí, cuando no se hubiera anunciado previamente por megafonía.`,
  },
  {
    pregunta: "17. a) No, en ningún caso.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `18. ¿Qué sucede si un viajero es obligado a abandonar el tren por haber accedido al mismo con un patinete dotado de batería y el tren se encontrase ya en tránsito?
a) Se le permitirá acabar el trayecto previsto.
b) Se avisará al maquinista para estacionar el tren en la primera zona segura disponible para que el viajero abandone el mismo.
c) El viajero deberá abandonar el tren en la siguiente estación en la que efectúe parada.
d) El patinete se considerará apto para el trayecto por haberse iniciado el viaje sin su detección previa.`,
  },
  {
    pregunta: "18. c) El viajero deberá abandonar el tren en la siguiente estación en la que efectúe parada.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `19. Si una persona se niega a someterse a los controles de seguridad establecidos...
a) Podrá denegarse el acceso a los vehículos de transporte.
b) Podrá denegarse el acceso a las salas de embarque.
c) Podrá denegarse el acceso a los vehículos de transporte y a las salas de embarque.
d) Deberá permitírsele el paso a las salas de embarque, pero podrá denegársele el acceso a los vehículos de transporte.`,
  },
  {
    pregunta: "19. c) Podrá denegarse el acceso a los vehículos de transporte y a las salas de embarque.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `20. ¿Cuál de las siguientes afirmaciones sobre la responsabilidad civil de Renfe Viajeros por los daños causados a los viajeros y al equipaje es correcta?
a) Renfe Viajeros no tiene garantizada la cobertura de la responsabilidad civil en la que pueda incurrir, en particular, la derivada de los daños causados a los viajeros y al equipaje.
b) Renfe Viajeros tiene garantizada la cobertura de la responsabilidad civil en la que pueda incurrir, en particular, la derivada de los daños causados a los viajeros y al equipaje.
c) La responsabilidad civil en que pueda incurrir Renfe Viajeros por los daños causados a los viajeros y al equipaje no está sujeta a plazo.
d) Cualquier daño causado a los viajeros y al equipaje se presume que es responsabilidad de Renfe Viajeros.`,
  },
  {
    pregunta: "20. b) Renfe Viajeros tiene garantizada la cobertura de la responsabilidad civil en la que pueda incurrir, en particular, la derivada de los daños causados a los viaje- ros y al equipaje.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `21. De manera general, ¿en qué casos podrán ser indemnizados los viajeros, conforme a la legislación vigente y a la Normativa Comercial?
a) En todo caso, sin excepción.
b) En ningún caso.
c) Cuando quede probado un incumplimiento del contrato de transporte por causa imputable a Renfe Viajeros.
d) Cuando el viajero haya sufrido daños a consecuencia de su actuación negligente.`,
  },
  {
    pregunta: "21. c) Cuando quede probado un incumplimiento del contrato de transporte por causa imputable a Renfe Viajeros.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `22. ¿Qué instrumentos tendrá Renfe Viajeros a disposición de los Viajeros para la canalización de sus reclamaciones?
a) Un libro u hojas de reclamaciones en los términos previstos en la normativa sectorial ferroviaria.
b) Un teléfono gratuito específico para atención de reclamaciones.
c) Un buzón de Atención al Cliente de la web de Renfe.
d) Todas las respuestas anteriores son correctas.`,
  },
  {
    pregunta: "22. d) Todas las respuestas anteriores son correctas.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `23. ¿Cómo se denomina la no realización del viaje, es decir, la imposibilidad de que se lleve a cabo en las condiciones previstas en el título de transporte?
a) Suspensión del viaje.
b) Cancelación del viaje.
c) Retraso del viaje.
d) Interrupción del viaje.`,
  },
  {
    pregunta: "23. b) Cancelación del viaje.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `---------- TO FIX ----------
24. ¿Cuándo está obligada Renfe Viajeros a proporcionar asistencia al viajero en los términos establecidos en la legislación vigente? — a b c d En el caso de que el retraso de la salida o de la llegada sea superior a 60 minutos. En el caso de que el retraso de la salida o de la llegada sea superior a 120 minutos. En el caso de que el retraso de la salida o de la llegada sea superior a 30 minutos. Ante cualquier retraso en la salida o la llegada.`,
  },
  {
    pregunta: "24. a) En el caso de que el retraso de la salida o de la llegada sea superior a 60 minutos.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `25. En el caso de que se produzca la cancelación del viaje por causa atribuible a la empresa operadora en las 48 horas previas a la salida que figura en el billete, ¿a qué tiene derecho el viajero?
a) A que se le reintegre el precio pagado por el billete o al cambio sin gastos del título de transporte para otro tren u otra fecha.
b) A que se le reintegre el precio pagado.
c) A que se le reintegre el precio pagado o a que se le proporcione el transporte en otro tren u otro modo de transporte en condiciones equivalentes a las pactadas.
d) No tiene derecho a compensación alguna por cancelaciones con esa antelación a la salida.`,
  },
  {
    pregunta: "25. c) A que se le reintegre el precio pagado o a que se le proporcione el transpor- te en otro tren u otro modo de transporte en condiciones equivalentes a las pactadas.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `26. ¿Qué se entiende por interrupción del viaje?
a) Se entenderá por interrupción del viaje la salida de la estación de origen con un retraso superior a 15 minutos.
b) Se entenderá por interrupción del viaje la llegada a la estación de destino con un retraso superior a 15 m.
c) Se entenderá por interrupción del viaje la paralización de este una vez iniciado cuyo reinicio no se produzca antes de 5 minutos.
d) Se entenderá por interrupción del viaje la paralización de este una vez iniciado.`,
  },
  {
    pregunta: "26. d) Se entenderá por interrupción del viaje la paralización de este una vez  iniciado.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `27. ¿Qué se considera retraso?
a) Se considera retraso el tiempo transcurrido entre la hora programada de llegada del viajero, según el horario publicado, y la hora real de llegada a la estación del destino indicada en el billete.
b) Se considera retraso el tiempo transcurrido entre la hora programada de llegada del viajero, según el horario publicado, y la hora real de llegada a la estación del destino indicada en el billete, siempre que este supere los 10 minutos.
c) Se considera retraso el tiempo transcurrido entre la hora programada de llegada del viajero, según el horario publicado, y la hora real de llegada a la estación del destino indicada en el billete, siempre que este no obedezca a circunstancias climatológicas.
d) Se considera retraso el tiempo transcurrido entre la hora anunciada en las pantallas de la estación y la hora real de llegada a la estación del destino indicada en el billete.`,
  },
  {
    pregunta: "27. a) Se considera retraso el tiempo transcurrido entre la hora programada de lle-  gada del viajero, según el horario publicado, y la hora real de llegada a la esta- ción del destino indicada en el billete.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `28. Cuando se prevea que el tren saldrá de origen con retraso respecto al horario publicado, ¿a cuál de las siguientes no tiene derecho el viajero?
a) Al cambio sin gastos del título de transporte para otro tren u otra fecha.
b) Al reintegro del precio pagado por el viaje no realizado.
c) A continuar el viaje en el mismo tren.
d) A la concesión de un billete del mismo tipo de servicio al adquirido para consumir en los tres meses siguientes.`,
  },
  {
    pregunta: "28. d) A la concesión de un billete del mismo tipo de servicio al adquirido para con- sumir en los tres meses siguientes.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `29. Si durante el viaje se produce un retraso igual o superior a 60 minutos en la llegada al destino que figura en el título de transporte, ¿por qué podrá optar el viajero?
a) Por el reintegro del importe del título de transporte correspondiente a la parte del viaje no efectuada.
b) Por percibir también el importe del título de transporte correspondiente a la parte del viaje efectuado, si a causa de este retraso el viaje ha perdido la razón de ser para el viajero o no desea continuar el viaje.
c) Por la continuación del viaje hasta el punto de destino ya sea por la ruta prevista o por otra vía alternativa, en unas condiciones de transporte similares a las contratadas.
d) Todas las anteriores son correctas.`,
  },
  {
    pregunta: "29. d) Todas las anteriores son correctas.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `30. En caso de que se repitan unos hechos de posible acoso que ya han sido objeto de estudio en su fase preliminar, la persona afectada podrá seguir el procedimiento formal, Si tras recibir el escrito y valorar la documentación aportada se considera que puede tratare de uno de los supuestos recogidos en el Protocolo, ¿qué expediente deberá incoarse?
a) Expediente Administrativo.
b) Expediente Penal.
c) Expediente Disciplinario.
d) Expediente de Conciliación. EA`,
  },
  {
    pregunta: "30. c) Expediente Disciplinario.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `6.2.2 Fase formal  En caso contrario, y valorado que puede tratarse de uno de los supuestos recogidos en el Protocolo, se procederá a la incoación del oportuno Expediente Disciplinario conforme la normativa laboral vigente en la Empresa”.`,
  },
  {
    pregunta: "31. ¿Cómo terminará el procedimiento iniciado tras la denuncia de la persona en materia de acoso al Responsable de la Jefatura de Recursos Humanos?",
    opciones: [
      "a) Con sanción, en todo caso.",
      "b) Con un informe final.",
      "c) Con una pena de multa.",
      "d) Con una sentencia.",
    ],
    correcta: "b)",
    comentario: `“6.2.2 Fase formal  Informe final.
El procedimiento terminará con un informe final, que incluirá la denuncia, la informa-  ción recabada, relación de las gestiones efectuadas, las conclusiones y la calificación de la infracción que proceda”.`,
  },
  {
    pregunta: "32. ¿Cuál de las siguientes no es una medida complementaria contemplada en el Protocolo para la prevención y el tratamiento de los casos de acoso sexual, acoso por razón de sexo y acoso moral?",
    opciones: [
      "a) Asistencia psicológica.",
      "b) Restitución de las víctimas.",
      "c) Seguimiento de incidentes de acoso.",
      "d) Retribución de las víctimas.",
    ],
    correcta: "d)",
    comentario: `“7. Medidas complementarias
-> a) Asistencia psicológica. -En el supuesto de que se haya constatado la existencia de acoso, y a petición de la persona afectada, el Responsable de Psicología Labo- ral de la Empresa determinará la necesidad o no de asistencia psicológica tanto de la persona que haya sido víctima de la conducta de acoso, como de la persona que ha realizado este comportamiento no deseado.
-> b) Restitución de las víctimas. -En el caso de haberse constatado represalias o per- juicios de carácter laboral para la víctima durante el acoso, esta tendrá derecho a ser restituida en las condiciones en que se encontraba antes del mismo, sin perjuicio de las facultades organizativas de la Empresa e igualmente sin perjuicio para la víctima.
-> c) Seguimiento de incidentes de acoso. -Si en la aplicación del presente Protocolo se produjera alguna duda sobre su interpretación, la Comisión de Igualdad de Oportunidades será competente para la resolución de la misma”.`,
  },
  {
    pregunta: "33. ¿En qué artículo de la Constitución Española de 1978 se proclama la igualdad y no discriminación por razón de sexo?",
    opciones: [
      "a) En su artículo 14.",
      "b) En su artículo 24.",
      "c) En su artículo 53.",
      "d) En su artículo 136.",
    ],
    correcta: "a)",
    comentario: `“En España, la Constitución de 1978 proclama en su artículo 14 el derecho a la igual- dad y la no discriminación por razón de sexo y sobre esta base se construyó la Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, considerada esencial en materia de igualdad, ya que sienta las bases, desde diferen- tes campos, para la construcción de una sociedad basada en la igualdad de oportu- nidades entre mujeres y hombres”.`,
  },
  {
    pregunta: "34. ¿Cuál de los siguientes no es un principio rector del Plan de Igualdad del Grupo Renfe?",
    opciones: [
      "a) Diseñado para todas las personas que conforman la totalidad de la plantilla.",
      "b) Innovación y mejora continua para la implementación inmediata de medidas correctoras o de prevención.",
      "c) Es estático y cerrado a los cambios, no alterándose por las necesidades que vayan surgiendo de su seguimiento y evaluación.",
      "d) Tiene naturaleza correctora, con el objetivo de eliminar discriminaciones futuras por razón de sexo.",
    ],
    correcta: "c)",
    comentario: `“Es un conjunto ordenado de medidas y acciones negociadas con la representación de los trabajadores y las trabajadoras, que se guían por los siguientes principios:
- Diseñado para todas las personas que conforman la totalidad de la plantilla.
- Aplica la igualdad de género como estrategia transversal para hacer efectiva la igualdad entre mujeres y hombres.
- Innovación y mejora continua para la implementación inmediata de medidas co- rrectoras o de prevención.
- Compromiso de gestión, diálogo e igualdad participativa entre todas las partes implicadas para aportar los recursos necesarios que permitan alcanzar los objeti- vos acordados.
- Tiene naturaleza correctora, con el objetivo de eliminar discriminaciones futuras por razón de sexo.
- Es dinámico y abierto a los cambios, en función de las necesidades que vayan surgiendo a partir de su seguimiento y evaluación”.`,
  },
  {
    pregunta: "35. ¿Qué tipos de objetivos contempla en Plan de Igualdad del Grupo Renfe?",
    opciones: [
      "a) Masculinos y femeninos.",
      "b) Generales y específicos.",
      "c) Para directivos y para empleados.",
      "d) Inmediatos y futuribles.",
    ],
    correcta: "b)",
    comentario: `“Los objetivos están referidos a la totalidad del Plan y se expresan en dos tipos de objetivos, generales y específicos".`,
  },
  {
    pregunta: "36. ¿Cuál es el alcance y ámbito de aplicación del Plan de Igualdad del Grupo Renfe?",
    opciones: [
      "a) Es de aplicación en todas las sociedades que conforman el Grupo Renfe y ámbitos geográficos donde las diferentes empresas del Grupo Renfe tengan implantación y englobará a la totalidad de su plantilla.",
      "b) Es de aplicación en todas las sociedades que conforman el Grupo Renfe y ámbitos geográficos donde las diferentes empresas del Grupo Renfe tengan implantación y englobará a la totalidad de su plantilla con exclusión de los cargos directivos.",
      "c) Es de aplicación en todas las sociedades que conforman el Grupo Renfe y ámbitos geográficos donde las diferentes empresas del Grupo Renfe tengan implantación.",
      "d) Es de aplicación en todas las sociedades que conforman el Grupo Renfe y ámbitos geográficos donde las diferentes empresas del Grupo Renfe tengan implantación y englobará a la totalidad de su plantilla de sexo femenino.",
    ],
    correcta: "a)",
    comentario: `“Este Plan será de aplicación en todas las sociedades que conforman el Grupo Renfe y ámbitos geográficos donde las diferentes empresas del Grupo Renfe tengan implan- tación y englobará a la totalidad de su plantilla”.`,
  },
  {
    pregunta: "37. ¿Cuál es la vigencia temporal del Plan de Igualdad del Grupo Renfe?",
    opciones: [
      "a) Seis años.",
      "b) Un año.",
      "c) Dos años.",
      "d) Cuatro años.",
    ],
    correcta: "d)",
    comentario: `“El plan establece una vigencia temporal de cuatro años, aunque tomando en considera- ción el sistema de evaluación continua que establece el propio plan, y con la finalidad de que se pueda evaluar el impacto de las acciones concretas y el resultado de las mismas, en tanto si cumplen o no con los objetivos marcados, se considera necesaria una revisión integral del plan una vez transcurridos dos años desde la implantación del mismo”.`,
  },
  {
    pregunta: "38. ¿A qué corresponden las siglas MTIASL?",
    opciones: [
      "a) Mesa Técnica de Igualdad y Aspectos Sociolaborales.",
      "b) Ministerio de Trabajo, Industria, Asuntos Sociales y Larga Distancia.",
      "c) Movimiento por la Tolerancia, la Igualdad, Aspectos Sociolaborales y Libertad de empresa.",
      "d) Medidas de Tratamiento para la Inclusión, Asimilación y Superación del Trastorno Límite.",
    ],
    correcta: "a)",
    comentario: `“7.2.1. Mesa Técnica de Igualdad y Aspectos Sociolaborales (MTIASL)”.`,
  },
  {
    pregunta: "39. ¿Cuál de los siguientes no es uno de los factores clave del modelo de cultura de seguridad del Grupo Renfe?",
    opciones: [
      "a) Cultura justa y notificación.",
      "b) Principio de transparencia.",
      "c) Procedimiento y formación.",
      "d) Comunicación y aprendizaje.",
    ],
    correcta: "b)",
    comentario: `“F1. Compromiso con los gestores y gestoras (...).
F2. Colaboración y participación (...).
F3. Cultura justa y notificación (...).
F4. Comunicación y aprendizaje (...)  F5. Gestión de riesgos (...)  F6. Compromiso entre compañeros y compañeras (...) F7. Personal y equipamiento (...)  F8. Procedimiento y formación (...)”.`,
  },
  {
    pregunta: "40. ¿Qué factor clave del modelo de cultura de seguridad del Grupo Renfe se encuentra vinculado con la forma de participación de las personas en actividades relacionadas con la seguridad, tales como proyectos, encuestas, formación o campañas de sensibilización?",
    opciones: [
      "a) Cultura justa y notificación.",
      "b) Colaboración y participación.",
      "c) Procedimiento y formación.",
      "d) Comunicación y aprendizaje.",
    ],
    correcta: "b)",
    comentario: `“F2. Colaboración y participación  Factor clave vinculado con la forma de participación de las personas en actividades relacionadas con la seguridad, tales como proyectos, encuestas, formación o campa-  ñas de sensibilización”.`,
  },
  {
    pregunta: "41. ¿Qué factor clave del modelo de cultura de seguridad del Grupo Renfe se encuentra vinculado a la forma en que los recursos se ponen a disposición de la gestión de la seguridad: si son suficientes, si son adecuados y si se utilizan conforme a las prioridades reales?",
    opciones: [
      "a) Personal y equipamiento.",
      "b) Colaboración y participación.",
      "c) Procedimiento y formación.",
      "d) Comunicación y aprendizaje.",
    ],
    correcta: "a)",
    comentario: `“F7. Personal y equipamiento  Factor clave vinculado con la forma en que los recursos se a disposición de la gestión  de la seguridad: si son suficientes, si son adecuados y si se utilizan conforme a las prioridades reales”,`,
  },
  {
    pregunta: "42. ¿A quiénes se dirigen los principios de la Cultura de Seguridad del Grupo Renfe?",
    opciones: [
      "a) A todas las personas que trabajan en el Grupo Renfe.",
      "b) A organismos o grupos de interés.",
      "c) A otras empresas.",
      "d) Todas las anteriores son correctas.",
    ],
    correcta: "d)",
    comentario: `“Los principios de la Cultura de Seguridad se dirigen a todas las personas que traba- jan en el Grupo Renfe, así como a otras empresas y a sus empleados/as que trabajan para el Grupo, y a organismos o grupos de interés, independientemente de la posi- ción que ocupen y de las funciones que desempeñen”:`,
  },
  {
    pregunta: "43. ¿A quiénes se dirigen los principios de la Cultura de Seguridad del Grupo Renfe?",
    opciones: [
      "a) Asindicatos.",
      "b) A Alta dirección.",
      "c) A viajeros.",
      "d) Todas las anteriores son correctas.",
    ],
    correcta: "d)",
    comentario: `“Los principios de la Cultura de Seguridad se dirigen a todas las personas que traba- jan en el Grupo Renfe, así como a otras empresas y a sus empleados/as que trabajan para el Grupo, y a organismos o grupos de interés, independientemente de la posi- ción que ocupen y de las funciones que desempeñen.
Sociedades: EPE, Viajeros, Mercancías, Fab. y Mant. S. Participadas, Alquiler.
Organización: Alta dirección, Estructura gestión operación, Mandos intermedios cua- dros, Personal Operativo.
Grupos de interés: ADIF, Sindicatos, Proveedores/as, Socios/as, Puertos del Estado, Otras instituciones”.`,
  },
  {
    pregunta: "44. ¿Cuál de las siguientes no es una de las Líneas estratégicas para el cambio de la Cultura de Seguridad del Grupo Renfe?",
    opciones: [
      "a) Capacitación de las personas para que puedan afrontar con éxito sus responsabilidades en seguridad.",
      "b) Implicación de toda la organización en la gestión de los riesgos de la operación ferroviaria: la gestión de los riesgos nos compete a todos y todas.",
      "c) Mejora de los sistemas informáticos para garantizar el equilibrio financiero.",
      "d) Vigilancia y digitalización.",
    ],
    correcta: "c)",
    comentario: `“LE.01. Refuerzo del compromiso y la responsabilidad con los principios de Cultura de Seguridad a fin de generar comportamientos seguros en la operación ferroviaria.
LE.02. Capacitación de las personas para que puedan afrontar con éxito sus respon- sabilidades en seguridad.
LE. 03. Implicación de toda la organización en la gestión de los riesgos de la opera- ción ferroviaria: la gestión de los riesgos nos compete a todos y todas.
LE. 04. Mejora de los sistemas de relación con los grupos externos de interés y de la coordinación interna.
LE.O5. Vigilancia y digitalización”.`,
  },
  {
    pregunta: "45. ¿Cómo se denomina el instrumento para transformar la Cultura de Seguridad existente en el Grupo Renfe, actualizando los sistemas de gestión vigentes para incluir los facilitadores que permitan alinear las subculturas de los diferentes colectivos de la organización con la Cultura de Seguridad que se desea?",
    opciones: [
      "a) Cultura de Seguridad Global.",
      "b) Plan de Transformación de la Cultura de Seguridad Operacional.",
      "c) Proyecto de Cultura de Seguridad Integrada.",
      "d) Mecanismo de Coordinación de Seguridad.",
    ],
    correcta: "b)",
    comentario: `“Para transformar la Cultura de Seguridad existente en el Grupo Renfe es necesario actualizar los sistemas de gestión vigentes para incluir los facilitadores que permitan alinear estas subculturas con la Cultura de Seguridad que se desea. EL objetivo del Plan de Transformación de la Cultura de Seguridad Operacional es realizar los cam- bios necesarios para lograr el alineamiento cultural”`,
  },
  {
    pregunta: "46. Cuando hablamos de gestionar y diseñar la experiencia de cliente, ¿cómo se denomina la herramienta o metodología que persigue analizar el porqué de lo que está pasando, empleando ambientes naturales y buscando significado en la información recogida, empleando técnicas como entrevistas o focus groups? Investigación cuantitativa. Investigación cualitativa. Arquetipos de cliente. Perfil de cliente. a b C a a d A",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "b)",
    comentario: `“Sin embargo, la investigación cualitativa persigue analizar el porqué de lo que está pasando, empleando ambientes naturales y buscando significado en la información recogida. Algunas de las técnicas más utilizadas en la investigación cualitativa son las encuestas abiertas, las entrevistas, los focus groups (foros de discusión) o el mystery shopping (técnica del cliente misterioso), entre otras”,`,
  },
  {
    pregunta: "47. ¿Cómo se denominan las entrevistas en que se busca conocer en mayor profundidad a los clientes y consisten en la reunión de un conjunto de clientes con el objetivo de generar una discusión y un espacio de diálogo donde puedan surgir ideas de mejora de los productos o servicios?",
    opciones: [
      "a) Elevator pitch.",
      "b) Reunión de ventas.",
      "c) Mystery shoppings.",
      "d) Focus groups (foros de discusión).",
    ],
    correcta: "d)",
    comentario: `“Los focus groups consisten en la reunión de un conjunto de clientes con el objetivo  de generar una discusión y un espacio de diálogo donde puedan surgir ideas de me- jora de los productos o servicios”.`,
  },
  {
    pregunta: "48. ¿Cómo se denominan las entrevistas en que se busca conocer en mayor profundidad a los clientes y obtener información de primera línea para evaluar la calidad percibida por los diferentes clientes y averiguar el grado de satisfacción, calidad o seguimiento de protocolos de atención?",
    opciones: [
      "a) Elevator pitch.",
      "b) Reunión de ventas.",
      "c) Mystery shoppings.",
      "d) Focus groups (foros de discusión).",
    ],
    correcta: "c)",
    comentario: `“Los mystery shoppings buscan obtener información de primera línea para evaluar la calidad percibida por los diferentes clientes y averiguar el grado de satisfacción, calidad o seguimiento de protocolos de atención. El hecho de que el nombre de esta  última técnica haga referencia al cliente misterioso es resultado de que esta técnica es abordada en incógnito por la empresa”.`,
  },
  {
    pregunta: "49. ¿Cuál de las siguientes no es una herramienta para el diagnóstico de la Experiencia de Cliente?",
    opciones: [
      "a) Arquetipos de clientes.",
      "b) Pasillo del Cliente.",
      "c) Grado de satisfacción.",
      "d) Mapa de procesos (Service Blueprint).",
    ],
    correcta: "c)",
    comentario: `“3.1.1. Arquetipos de clientes. (...)`,
  },
  {
    pregunta: "",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `50. Dentro de las Herramientas para el diagnóstico de la Experiencia de Cliente, ¿cómo se denomina la ficha visual que ayuda a empatizar con los clientes de una compañía entendiendo cómo es y lo que vive en su relación con la empresa obteniendo el detalle de los elementos de conexión y desconexión, así como los momentos clave de la relación?
a) Arquetipo de cliente.
b) Pasillo del Cliente.
c) Perfil del contratante.
d) Historial del cliente.`,
  },
  {
    pregunta: "50. a) Arquetipo de cliente.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `51. Dentro de las Herramientas para el diagnóstico de la Experiencia de Cliente, ¿Cómo se denomina la herramienta que sirve para representar gráficamente el detalle de la relación que viven los clientes con la compañía, a lo largo del tiempo ya través de todos los canales?
a) Arquetipo de cliente.
b) Pasillo del Cliente.
c) Canal del Cliente.
d) Historial del cliente.`,
  },
  {
    pregunta: "51. b) Pasillo del Cliente.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `---------- TO FIX ----------
52. Dentro de las Herramientas para el diagnóstico de la Experiencia de Cliente, ¿cómo se denomina la técnica para un análisis holístico, desde la perspectiva del cliente, integrando la estructura y procesos de la compañía, los cuales resultan claves en el ofrecimiento de una experiencia memorable para el cliente? ) Arquetipo de cliente. ) Pasillo del Cliente. ) Mapa de procesos (Service Blueprint). ) Historial del cliente. O gw o`,
  },
  {
    pregunta: "52. c) Mapa de procesos (Service Blueprint).",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `53. ¿Con cuál de las siguientes opciones se identifican los modelos de Voz de Cliente?
a) Un instrumento para diseñar cuestionarios.
b) Una herramienta de investigación de mercados.
c) Un programa de voz de cliente diseñado para hacer encuestas.
d) Una herramienta de transformación organizacional que se enfoca en establecer los canales para canalizar las opiniones de los clientes.`,
  },
  {
    pregunta: "53. d) Una herramienta de transformación organizacional que se enfoca en estable- cer los canales para canalizar las opiniones de los clientes.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `54. ¿Cuál de los siguientes no es uno de los pasos imprescindibles para construir un modelo de Voz de Cliente sólido?
a) Configuración del pasillo de cliente.
b) Definir un marco estratégico de medición (herramientas cuantitativas y cualitativas).
c) Apoyo en una tecnología adecuada que permita poder desarrollar un programa de Voz de Cliente potente y avanzado.
d) Capturar información verdaderamente accionable.`,
  },
  {
    pregunta: "54. a) Configuración del pasillo de cliente.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `55. ¿Qué término relativo al modelo de Voz de Cliente se refiere a cerrar el ciclo de retroalimentación garantizando que se tomen medidas adecuadas en respuesta a los comentarios, quejas o sugerencias de los clientes?
a) Elevator Pitch.
b) Mystery shoppings.
c) Mapa de procesos (Service Blueprint).
d) “Close The Loop”.`,
  },
  {
    pregunta: "55. d) “Close The Loop”.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `56. Dentro de los indicadores clave de rendimiento en la Experiencia de Cliente, ¿con qué término hacemos referencia a la medida cuantitativa del grado en que una estrategia, sistema, componente o proceso cumple un atributo dado, entendiendo como medida una indicación cuantitativa de la extensión, cantidad, dimensión, capacidad o tamaño de algunos atributos de un producto, proceso o servicio?
a) Métrica.
b) KPI.
c) Metadato.
d) Encuesta de satisfacción.`,
  },
  {
    pregunta: "56. a) Métrica.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `57. Dentro de los indicadores clave de rendimiento en la Experiencia de Cliente, ¿con qué término hacemos referencia al tipo especial de métrica que debe estar alineada con una estrategia de comprensión del negocio?
a) Métrica.
b) KPI.
c) Compliance.
d) Campaña.`,
  },
  {
    pregunta: "57. b) KPI.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `58. ¿Con qué índice se mide la propensión a la recomendación de los clientes de una empresa?
a) Métrica.
b) KPI.
c) CES (Customer Effort Score).
d) NPS (Net Promoter Score).`,
  },
  {
    pregunta: "58. d) NPS (Net Promoter Score).",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `59. Para calcular el NPS se pide a los clientes calificar en una escala de:
a) 0 a 10, donde 0 es*Muy improbable” y 10 es “Definitivamente lo recomendaría”.
b) O a 100, donde 0 es“Muy improbable” y 100 es “Definitivamente lo recomendaría”.
c)  0 a 50, donde 0 es “Muy improbable” y 50 es “Definitivamente lo recomendaría”.
d) El NPS no se calcula con escala.`,
  },
  {
    pregunta: "59. a) 0a10,donde0es“Muyimprobable”y 10es“Definitivamentelo recomendaría”.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `60. c) CES (Customer Effort Score).`,
  },
  {
    pregunta: "",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `61. c) A una indemnización equivalente al 50 por ciento del precio del título de transporte utilizado.`,
  },
  {
    pregunta: "",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `62. b) Mediante la comunicación y la formación.`,
  },
  {
    pregunta: "",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `63. c) Ciclo de mejora continua.`,
  },
  {
    pregunta: "",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `64. a) La actitud.`,
  },
  {
    pregunta: "",
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
