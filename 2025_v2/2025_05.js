const preguntas = [
  {
    pregunta: "1. En AVLO, el cliente tiene la opción de añadir como servicio adicional:",
    opciones: [
      "a) Anulación.",
      "b) Selección de asiento.",
      "c) Equipaje adicional.",
      "d) Todas las respuestas anteriores son correctas.",
    ],
    correcta: "d)",
    comentario: `Además, el cliente tiene la opción de añadir a su viaje unos servicios adicionales:
- Anulación o Cambio.
- Selección de asiento.
- Equipaje adicional.`,
  },
  {
    pregunta: "2. AVLO puede ofrecer el siguiente Servicio a Bordo:",
    opciones: [
      "a) Servicios de Vending de bebidas.",
      "b) Acceso a las Salas Club con Tarjetas Más Renfe Oro y Más Renfe Platino en vigor.",
      "c) Atención en Centros de Servicios.",
      "d) Atención en Puntos de Última Hora.",
    ],
    correcta: "a)",
    comentario: `AVLO puede ofrecer los siguientes Servicios a Bordo:
- Servicio de máquinas Vending con bebidas frías / calientes y snacks. Facultativo según tipo de tren.
- Enchufes en cada asiento para carga de teléfonos y ordenadores.
- Servicio PlayRenfe, conectividad, contenidos y servicios digitales bajo demanda en el propio dispositivo del cliente.
—- Atención a bordo.`,
  },
  {
    pregunta: "3. AVLO puede ofrecer el siguiente Servicio en Tierra: Bar Móvil. Enchufes en cada asiento para carga de teléfonos y ordenadores. Servicio PlayRenfe y conexión. Servicio de asistencia para personas con discapacidad o movilidad reducida. — a b c d a E",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "d)",
    comentario: `AVLO ofrece los siguientes Servicios en Tierra:
- Acceso a las Salas Club con Tarjetas Más Renfe Plata (4 accesos anuales); Más Renfe Oro y Más Renfe Platino en vigor, debiendo figurar el número de la tarjeta  impreso en el billete AVLO, en las condiciones establecidas en la Tarifa Especial n.o 1 1V,3“Salas Club”.
- Servicio de asistencia para personas con discapacidad o movilidad reducida.
- Control de acceso al tren.
El acceso al tren se inicia al menos 30 minutos antes de la hora de salida y finaliza 2 minutos antes de la salida del tren.
Se recomienda a los viajeros presentarse con al menos 30 minutos de antelación a la salida del tren.
- Atención en Centros de Servicios.
— Atención en Puntos de Última Hora.`,
  },
  {
    pregunta: "4. Marca la respuesta correcta en relación con los billetes de AVLO. Estos son:",
    opciones: [
      "a) Nominativos.",
      "b) No es obligatorio introducir los datos personales solicitados en el momento de la compra.",
      "c) Se adquiere cambio de titularidad dentro del primer mes de compra.",
      "d) Se admite cambio de titularidad antes del viaje.",
    ],
    correcta: "a)",
    comentario: `Todos los billetes son nominativos, impri  miéndose en el billete el nombre del viajero,  por lo que es obligatorio introducir los datos personales solicitados en el momento  de la compra.
Renfe Viajeros podrá solicitar la identificación a los clientes mediante documentos identificativos vigentes con fotografía (Documento Nacional de Identidad, Permiso de Conducir, Tarjeta de Residencia, Pasaporte, para los niños menores de 14 años se  acepta Libro de Familia).
Una vez adquirido el billete, no se admite el cambio de titularidad del mismo.`,
  },
  {
    pregunta: "5. La reserva y emisión de billetes de AVLO se realizará:",
    opciones: [
      "a) Hasta 10 minutos antes de la salida del tren del origen que figura en el billete.",
      "b) Hasta 20 minutos antes de la salida del tren del origen que figura en el billete.",
      "c) Hasta 30 minutos antes de la salida del tren del origen que figura en el billete.",
      "d) Hasta 1 hora antes de la salida del tren del origen que figura en el billete.",
    ],
    correcta: "c)",
    comentario: `La reserva y emisión de billetes es obligatoria y se realizará, hasta 30 minutos antes  de la salida del tren del origen que figur nales de venta.`,
  },
  {
    pregunta: "6. Los gastos de gestión que se aplican para la venta de billetes de AVLO en ruta es del:",
    opciones: [
      "a) 1%.",
      "b) 2%",
      "c) 3,5%.",
      "d) 5%.",
    ],
    correcta: "c)",
    comentario: `a en el billete, a través de los siguientes ca-  Los gastos de gestión que se aplican en función del canal de venta son los siguientes:
Taquillas  Máquinas Autoventa  Venta en ruta  App Renfe  www.avlorenfe.com 0% www.renfe.com 0%  5,3%  3,5%  3,5%  Fijado por cada agencia u oficina, deben emitir  Agencias de viajes presenciales y virtuales  Sobre el precio de los complementos no  la factura correspondiente aparte  se aplican gastos de gestión.`,
  },
  {
    pregunta: "7. En AVLO se considerarán títulos de transporte válidos para viajar:",
    opciones: [
      "a) Los billetes en formato ATB.",
      "b) Los billetes en formato Passbook / Passwallet.",
      "c) Los billetes emitidos en papel térmico por terminales SerTren.",
      "d) Todas las respuestas anteriores son correctas.",
    ],
    correcta: "d)",
    comentario: `Se considerarán títulos de transporte válidos para viajar en estos trenes:
Billete en formato ATB.
Los billetes en formato PDF, tanto físicos como en dispositivos móviles.
-=  Losbilletes en formato Passbook / Passwallet.
Los billetes emitidos en papel térmico por terminales SerTren.`,
  },
  {
    pregunta: "8. En AVLO se permitirá la anulación por error, sin gastos, dentro de las:",
    opciones: [
      "a) 2 horas siguientes a la compra con un límite de hasta 30 minutos antes de la salida del tren de la estación de origen que figura en el billete.",
      "b) 4 horas siguientes a la compra con un límite de hasta 30 minutos antes de la salida del tren de la estación de origen que figura en el billete.",
      "c) 14 horas siguientes a la compra con un límite de hasta 30 minutos antes de la salida del tren de la estación de origen que figura en el billete.",
      "d) 20 horas siguientes a la compra con un límite de hasta 30 minutos antes de la salida del tren de la estación de origen que figura en el billete.",
    ],
    correcta: "a)",
    comentario: `Se permitirá la anulación por error, sin gastos, dentro de las 2 horas siguientes a la compra con un límite de hasta 30 minutos antes de la salida del tren de la estación de origen que figura en el billete.`,
  },
  {
    pregunta: "9. A los billetes de menores de 14 años con precio fijo también se les puede asociar el complemento de anulación:",
    opciones: [
      "a) A un coste de 5 euros.",
      "b) En este caso de forma gratuita.",
      "c) Con el mismo coste que en los billetes de los mayores de edad.",
      "d) A un coste fijo de 10 euros.",
    ],
    correcta: "b)",
    comentario: `A los billetes de menores de 14 años con precio fijo también se les puede asociar el complemento, en este caso de forma gratuita.`,
  },
  {
    pregunta: "10. Al pagar el complemento de anulación de billete:",
    opciones: [
      "a) Al efectuar la operación de anulación, el sistema de venta devolverá el 100 % del importe cobrado excepto el importe del complemento “Cambio o Anulación”.",
      "b) Al efectuar la operación de anulación, el sistema de venta devolverá el 90 % del importe cobrado excepto el importe del complemento “Cambio o Anulación”.",
      "c) Al efectuar la operación de anulación, el sistema de venta devolverá el 70 % del importe cobrado excepto el importe del complemento “Cambio o Anulación”,",
      "d) Al efectuar la operación de anulación, el sistema de venta devolverá el 100 % del importe cobrado incluido el importe del complemento “Cambio o Anulación”.",
    ],
    correcta: "a)",
    comentario: `Al efectuar la operación de anulación, el sistema de venta devolverá el 100 % del importe cobrado excepto el importe del complemento “Cambio o Anulación”. No se admite la anulación independiente de complementos.`,
  },
  {
    pregunta: "11. La opción de Cambio de billete de AVLO permite realizar un cambio en su billete:",
    opciones: [
      "a) O una anulación.",
      "b) Solo en la fecha.",
      "c) Solo en la hora, pero debe utilizarse en la fecha indicada.",
      "d) En el tren y la fecha.",
    ],
    correcta: "d)",
    comentario: `La opción de Cambio permite realizar un cambio en su billete: tren y fecha.`,
  },
  {
    pregunta: "12. La opción de Cambio de billete de AVLO permite realizar un cambio en su billete:",
    opciones: [
      "a) En relación con el titular.",
      "b) En relación con el origen del viaje.",
      "c) En relación con el destino del viaje.",
      "d) En relación con tren y la fecha.",
    ],
    correcta: "d)",
    comentario: `La opción de Cambio permite realizar un cambio en su billete: tren y fecha. No se admite el cambio del titular del billete, ni tampoco del origen ni del destino del viaje.`,
  },
  {
    pregunta: "13. En el caso de proceder a un cambio de billete de AVLO por otro de mayor precio:",
    opciones: [
      "a) La diferencia se entiende compensada por el pago de complemento.",
      "b) Se percibirá la diferencia entre el importe del billete original, exceptuando el importe del complemento de Cambio o Anulación, y el importe del nuevo billete.",
      "c) Se deberá pagar el 40 % de la diferencia entre ambos billetes.",
      "d) Se deberá pagar el 10 % de la diferencia entre ambos billetes.",
    ],
    correcta: "b)",
    comentario: `Cambio a un billete de mayor precio:
Se percibirá la diferencia entre el importe del billete original, exceptuando el importe del complemento de Cambio o Anulación, y el importe del nuevo billete.`,
  },
  {
    pregunta: "14. En el caso de proceder a un cambio de billete de AVLO por otro de menor precio:",
    opciones: [
      "a) No se compensará la diferencia.",
      "b) Se abonará la diferencia entre el importe del billete original, exceptuando el importe del complemento de Cambio o Anulación, y el importe del nuevo billete.",
      "c) Se abonará la diferencia entre el importe del billete original, incluido el importe del complemento de Cambio o Anulación, y el importe del nuevo billete.",
      "d) Se devolverá el 10 % de la diferencia entre ambos billetes.",
    ],
    correcta: "b)",
    comentario: `Se abonará la diferencia entre el importe del billete original, exceptuando el importe del complemento de Cambio o Anulación, y el importe del nuevo billete.`,
  },
  {
    pregunta: "15. Tienen consideración de equipaje:",
    opciones: [
      "a) Las maletas.",
      "b) Los maletines porta ordenadores.",
      "c) Los patinetes eléctricos dentro de su funda.",
      "d) Todas las respuestas anteriores son correctas.",
    ],
    correcta: "d)",
    comentario: `Tienen consideración de equipaje las maletas, bolsos de mano, maletines porta orde- nadores, sillas y coches de bebé plegados, y también plegados y dentro de su funda los patinetes eléctricos y las bicicletas urbanas.`,
  },
  {
    pregunta: "16. Se trata de un equipaje de mano gratuito incluido en el billete de AVLO:",
    opciones: [
      "a) 1 bolso de mano, maletín o mochila de dimensiones máximas 15x20x25 cm.",
      "b) 1 maleta de cabina, o un patinete plegado dentro de su funda, de dimensiones máximas 55x35x25 cm.",
      "c) 1 bolso de mano, maletín o mochila de dimensiones máximas 100x27x54 cm.",
      "d) 1 maleta de cabina, o un patinete plegado dentro de su funda, de dimensiones máximas 55x35x25 cm.",
    ],
    correcta: "b)",
    comentario: `Equipaje de mano gratuito incluido en el billete
- 1 bolso de mano, maletín o mochila de dimensiones máximas 36x27x25 cm y,
- 1 maleta de cabina, o un patinete plegado dentro de su funda, de dimensiones máximas 55x35X25 cm.`,
  },
  {
    pregunta: "17. Los viajeros que dispongan de un billete AVLO de niño podrán viajar con sillas y coches de bebés plegados:",
    opciones: [
      "a) Máximo uno por cada billete de niño.",
      "b) Máximo dos por cada billete de niño.",
      "c) Máximo tres por cada billete de niño.",
      "d) Máximo cuatro por cada billete de niño.",
    ],
    correcta: "a)",
    comentario: `Además de los elementos descritos anteriormente, los viajeros que dispongan de un billete de niño podrán viajar con sillas y coches de bebés plegados, máximo uno por cada billete de niño.`,
  },
  {
    pregunta: "18. En el AVLO se permitirá un equipaje adicional por viajero:",
    opciones: [
      "a) Siempre que sus dimensiones máximas sean de 85x60x35 cm, o cuyas dimensiones no supere, entre las tres 180 cm.",
      "b) Siempre que sus dimensiones máximas sean de 105x70x35 cm, o cuyas dimensiones no supere, entre las tres 200 cm.",
      "c) Siempre que sus dimensiones máximas sean de 45x60x25 cm, o cuyas dimensiones no supere, entre las tres 100 cm.",
      "d) Siempre que sus dimensiones máximas sean de 60x60x40 cm, o cuyas dimensiones no supere, entre las tres 150 cm.",
    ],
    correcta: "a)",
    comentario: `Se permitirá un equipaje adicional por viajero, al precio único establecido, siempre que sus dimensiones máximas sean de 85x60x35 cm, o cuyas dimensiones no supe- re, entre las tres 180 cm.`,
  },
  {
    pregunta: "19. La opción de equipajes adicionales:",
    opciones: [
      "a) Es ilimitada.",
      "b) Tiene una limitación de 100 equipajes adicionales por cada composición sencilla (200 en doble).",
      "c) Tiene una limitación de 400 equipajes adicionales por cada composición sencilla (800 en doble).",
      "d) Tiene una limitación de 500 equipajes adicionales por cada composición sencilla (1000 en doble).",
    ],
    correcta: "b)",
    comentario: `Esta opción tiene una limitación de 100 equipajes adicionales por cada composición sencilla (200 en doble).`,
  },
  {
    pregunta: "20. La distribución de los espacios para equipajes adicionales:",
    opciones: [
      "a) Se hará atendiendo al precio del billete.",
      "b) Se hará atendiendo a las necesidades del viajero.",
      "c) Se hará por orden de solicitud.",
      "d) Se hará por sorteo.",
    ],
    correcta: "c)",
    comentario: `La distribución de los espacios para equipajes adicionales se hará por orden de soli- citud, hasta agotar los espacios disponibles.`,
  },
  {
    pregunta: "21. Todos los menores de 14 años:",
    opciones: [
      "a) Viajan en su asiento y deben adquirir un billete.",
      "b) No viajan en asiento pero deben adquirir un billete.",
      "c) Viajan en su asiento y no deben adquirir un billete.",
      "d) Ni cuentan con asiento ni deben adquirir billete. a",
    ],
    correcta: "a)",
    comentario: `Todos los menores de 14 años viajan en su asiento y deben adquirir un billete.`,
  },
  {
    pregunta: "22. La Entidad Pública Empresarial Renfe-Operadora quedó constituida como cabecera de un grupo de sociedades, 100 % de Renfe, que tienen la forma jurídica de sociedades anónimas y la consideración de:",
    opciones: [
      "a) Sociedades Mercantiles Estatales.",
      "b) Sociedades Autónomas Estatales.",
      "c) Sociedades Administrativas Estatales.",
      "d) Sociedades Laborales Estatales.",
    ],
    correcta: "a)",
    comentario: `Entidad Pública Empresarial Renfe-Operadora quedó constituida como cabecera de un grupo de sociedades, 100 % de Renfe, que tienen la forma jurídica de sociedades anónimas y la consideración de Sociedades Mercantiles Estatales:
- Renfe Viajeros Sociedad Mercantil Estatal, S.A.
- Renfe Mercancías Sociedad Mercantil Estatal, S.A.
- Renfe Fabricación y Mantenimiento Sociedad Mercantil Estatal, S.A.
- Renfe Alquiler de Material Ferroviario Sociedad Mercantil Estatal, S.A.
- Renfe of América.`,
  },
  {
    pregunta: "23. Según los datos de 2020, en término de género, la plantilla está compuesta:",
    opciones: [
      "a) Por más mujeres que hombres.",
      "b) Por más hombres que mujeres.",
      "c) Por el mismo número de hombres que de mujeres.",
      "d) No cuenta con mujeres.",
    ],
    correcta: "b)",
    comentario: `A diciembre de 2020, la plantilla en la EPE se ha incrementado en 332 personas, dis- minuyendo ligeramente el porcentaje de representación femenina.
- Hombres 728 (68,87 %)
- Mujeres 329 (31,13 %)
- Total 1.057`,
  },
  {
    pregunta: "24. La mayor concentración de personas se produce en el tramo denominado:",
    opciones: [
      "a) “Menores de 25 años”",
      "b) “Menores de 35 años”",
      "c) “Mayores de 45 años”.",
      "d) “Mayores de 60 años”.",
    ],
    correcta: "c)",
    comentario: `25. En 2020:
a) Se incrementan los contratos temporales.
b) Se incrementan los contratos fijos discontinuos.
c) Se incrementan los contratos indefinidos.
d) Disminuye la contratación respeto las últimas tres décadas.`,
  },
  {
    pregunta: "25. a) Se incrementan los contratos temporales.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `26. En base a los datos de 2020, de los puestos de la estructura de Dirección:
a) Las mujeres suponen un 50 %.
b) Las mujeres suponen un 70 %.
c) Los hombres suponen casi el 80 %.
d) Los hombres suponen un 60 %.`,
  },
  {
    pregunta: "26. c) Los hombres suponen casi el 80 %.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `27. Es donde mayor representación de mujeres existe dentro del Grupo Renfe, aunque sigue siendo una plantilla donde existe un claro desequilibrio en favor de los hombres:
a) Renfe Mercancías Sociedad Mercantil Estatal, S.A.
b) La Entidad Pública Empresarial Renfe Operadora.
c) Renfe Fabricación y Mantenimiento Sociedad Mercantil Estatal, S.A.
d) Renfe Alquiler de Material Ferroviario Sociedad Mercantil Estatal, S.A.`,
  },
  {
    pregunta: "27. b) La Entidad Pública Empresarial Renfe Operadora.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `28. En 2020, y en relación con el permiso de lactancia acumulada:
a) Ningún hombre la solicitó.
b) Ninguna mujer la solicitó.
c) 20 hombres la solicitaron.
d) 50 hombres la solicitaron.`,
  },
  {
    pregunta: "28. c) 20 hombres la solicitaron.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `29. La sociedad Renfe Alquiler está compuesta por las áreas:
a) Material, Gestión financiera y presupuestaria, asesoría jurídica, desarrollo de negocios y comercialización.
b) Material y administrativa.
c) Financiera y administrativa.
d) Administrativa, comercialización y postventa.`,
  },
  {
    pregunta: "29. a) Material, Gestión financiera y presupuestaria, asesoría jurídica, desarrollo de negocios y comercialización.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `30. En 2020, en puestos de conducción hay una plantilla del:
a) 70% hombres y 30 % mujeres.
b) 60 % hombres y 40 % mujeres.
c) 80 % hombres y 20 % mujeres.
d) 90 % hombres y 10 % mujeres.`,
  },
  {
    pregunta: "30. a) 70 % hombres y 30 % mujeres.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `31. En diciembre de 2020, la plantilla en Renfe Alquiler se incrementó en:
a) Una mujer.
b) Dos mujeres.
c) Cinco mujeres.
d) Diez mujeres.`,
  },
  {
    pregunta: "31. b) Dos mujeres.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `32. En relación con la formación, en Renfe Alquiler de Material Ferroviario:
a) Los hombres hicieron el 80 % de las horas de formación y las mujeres el 20 %.
b) Los hombres hicieron el 70 % de las horas de formación y las mujeres el 30 %.
c) Los hombres hicieron el 60 % de las horas de formación y las mujeres el 40 %.
d) Los hombres hicieron el 20 % de las horas de formación y las mujeres el 80 %.`,
  },
  {
    pregunta: "32. d) Los hombres hicieron el 20 % de las horas de formación y las mujeres el 80 %.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `33. El sistema de valoración de los puestos de trabajo contempla:
a) 20 escalas.
b) 35 escalas.
c) 57 escalas.
d) 64 escalas.`,
  },
  {
    pregunta: "33. c) 57 escalas.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `34. Marca en qué categorías se detecta que puede haber brecha salarial según el Informe de Auditoría Retributiva de la EPE Renfe-Operadora:
a) K11 y G12.
b) K11, 112, L22 y G10,
c) K10, G9 y R4.
d) K11 y L24.`,
  },
  {
    pregunta: "34. b) K11,L12,L22 y G10.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `---------- TO FIX ----------
35. Marca en qué categorías se detecta que puede haber brecha salarial según el Informe de Auditoría Retributiva de Renfe Viajeros:
d) Son correctas las respuestas a) y b).`,
  },
  {
    pregunta: "35. d) Son correctas las respuestas a) y b).",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `36. Marca en qué categorías se detecta que puede haber brecha salarial según el Informe de Auditoría Retributiva de Renfe Mercancías:
a) Todas.
b) Hay 2 a favor de las mujeres y 4 a favor de los hombres.
c) Hay 10 a favor de las mujeres y 1 a favor de los hombres.
d) Hay 5 a favor de las mujeres.`,
  },
  {
    pregunta: "36. b) Hay 2 a favor de las mujeres y 4 a favor de los hombres.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `37. El Concepto de Cultura de Seguridad surge:
a) En el último tercio del siglo pasado.
b) A principios de este siglo.
c) Hace 10 años.
d) Recientemente.`,
  },
  {
    pregunta: "37. a) En el último tercio del siglo pasado.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `38. El SGS es:
a) El sistema de gestión superior.
b) El sistema de gestión de seguridad.
c)  El sistema de gestión sencilla.
d) Score Gestión de Seguridad.`,
  },
  {
    pregunta: "38. b) El sistema de gestión de seguridad.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `---------- TO FIX ----------
39. Es la gestión del conjunto de medidas que establece la empresa para garantizar que sus operaciones sean seguros:`,
  },
  {
    pregunta: "39. b) El SGS.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `40. Marca la respuesta correcta. Contar con un buen SGS:
a) Es necesario para una buena gestión de la seguridad.
b) Es suficiente para una buena gestión de la seguridad.
c) No es necesario para una buena gestión de la seguridad.
d) Ayuda a una buena gestión de la seguridad.`,
  },
  {
    pregunta: "40. a) Es necesario para una buena gestión de la seguridad.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `41. LaERA es:
a) La Agencia Ferroviaria de la UE.
b) La Estatal Real Agencia.
c) La Asociación Ferroviaria.
d) Los Ferroviarios Estatales.`,
  },
  {
    pregunta: "41. a) La Agencia Ferroviaria de la UE.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `42. ¿Cuántos son los tributos característicos de la Cultura de Seguridad Ferroviaria en Europa?
a) Tres.
b) Cuatro.
c) Cinco.
d) Ocho.`,
  },
  {
    pregunta: "42. d) Ocho.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `43. La Cultura de la Seguridad es el resultado de:
a) Los valores compartidos.
b) Las creencias compartidas.
c) Las buenas prácticas y comportamientos seguros.
d) Todas las respuestas anteriores son correctas.`,
  },
  {
    pregunta: "43. d) Todas las respuestas anteriores son correctas.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `44. De acuerdo con la Declaración de una Cultura de Seguridad Europea, Grupo Renfe ha definido:
a) Cuatro principios.
b) Cinco principios.
c) Seis principios.
d) Siete principios.`,
  },
  {
    pregunta: "44. c) Seis principios.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `---------- TO FIX ----------
45. El Principio de Grupo Renfe, relativo al Compromiso y al Liderazgo es el:`,
  },
  {
    pregunta: "45. b) P2.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `46. Atendiendo a la evolución histórica, la era de la producción empezó en el:
a) 1900.
b) 1990.
c) 1997.
d) 2005.`,
  },
  {
    pregunta: "46. a) 1900.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `47. Atendiendo a la evolución histórica, la era de la distribución empezó en el:
a) 1900.
b) 1960.
c) 1997.
d) 2011.`,
  },
  {
    pregunta: "47. b) 1960.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `48. Atendiendo a la evolución histórica, la era de la información empezó en el:
a) 1900.
b) 1990.
c) 1997.
d) 2005.`,
  },
  {
    pregunta: "48. b) 1990.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `49. La conveniencia y la simplicidad en las interacciones de un cliente con una empresa se conocen como:
a) Accesibilidad y facilidad de uso.
b) Atención directa.
c) Atención indirecta.
d) Aproximación.`,
  },
  {
    pregunta: "49. a) Accesibilidad y facilidad de uso.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `50. Son técnicas de investigación cualitativa:
a) Las entrevistas.
b) Los focus groups.
c) El mystery shopping.
d) Todas las anteriores son correctas.`,
  },
  {
    pregunta: "50. d) Todas las anteriores son correctas.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `51. Consisten en la reunión de un conjunto de clientes con el objetivo de generar una discusión y un espacio de diálogo donde puedan surgir ideas de mejora de los productos o servicios:
a) Las entrevistas.
b) Los focus groups.
c) El mystery shopping.
d) Los test.`,
  },
  {
    pregunta: "51. b) Los focus groups.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `52. Buscan obtener información de primera línea para evaluar la calidad percibida por los diferentes clientes y averiguar el grado de satisfacción, calidad o seguimiento de protocolos de atención:
a) Las entrevistas.
b) Los focus groups.
c) El mystery shopping.
d) Los test.`,
  },
  {
    pregunta: "52. c) El mystery shopping.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `53. Es una herramienta que sirve para representar gráficamente el detalle de la relación que viven los clientes con la compañía, a lo largo del tiempo y a través de todos los canales:
a) La Costumer.
b) El pasillo del cliente.
c) El estatus del cliente.
d) La nivelación del cliente.`,
  },
  {
    pregunta: "53. b) El pasillo del cliente.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `54. Sirve para detectar los elementos críticos en la relación con el cliente en el presente, comprendiendo su impacto en la satisfacción, prescripción, lealtad y vinculación:
a) La Costumer.
b) El pasillo del cliente.
c) El estatus del cliente.
d) La nivelación del cliente.`,
  },
  {
    pregunta: "54. b) El pasillo del cliente.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `55. Permite diagnosticar la experiencia desde la perspectiva del cliente, evaluando tanto cualitativa como cuantitativamente dónde enfocar esfuerzos y desarrollar acciones de mejora: =_—
a) La Costumer.
b) El pasillo del cliente.
c) El estatus del cliente.
d) La nivelación del cliente. ==`,
  },
  {
    pregunta: "55. b) El pasillo del cliente.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `56. Una técnica para un análisis holístico, desde la perspectiva del cliente, integrando la estructura y procesos de la compañía, los cuales resultan claves en el ofrecimiento de una experiencia memorable para el cliente:
a) El pasillo del Cliente.
b) El pilar de la empresa.
c) El mapa de procesos.
d) La red de procesos.`,
  },
  {
    pregunta: "56. c) El mapa de procesos.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `57. Facilita la alineación entre la Experiencia de Cliente y los procesos internos de la compañía, asegurando una integración efectiva entre ambas dimensiones:
a) El pasillo del Cliente.
b) El pilar de la empresa.
c) El mapa de procesos.
d) La red de procesos.`,
  },
  {
    pregunta: "57. c) El mapa de procesos.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `---------- TO FIX ----------
58. Cerrar el ciclo de retroalimentación garantizando que se tomen medidas adecuadas en respuesta a los comentarios, quejas o sugerencias de los clientes se conoce como: Close The Loop.
d) Todas las respuestas anteriores son correctas.`,
  },
  {
    pregunta: "58. c) Close The Loop.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `59. NPS hace referencia a:
a) Non Push Service.
b) No People Stay.
c) Net Promoter Score.
d) New Personal Shop.`,
  },
  {
    pregunta: "59. c) Net Promoter Score.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `60. CES hace referencia a:
a) Can Esencial Service.
b) Cash Effort Stay.
c) Customer Effort Score.
d) Customer Exe Stay.`,
  },
  {
    pregunta: "60. c) Customer Effort Score.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `61. El precio del billete de AVLO de un niño es de:
a) 5 euros.
b) 10 euros.
c) 15 euros.
d) 20 euros.`,
  },
  {
    pregunta: "61. a) 5 euros.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `62. La sociedad Renfe Alquiler de Material Ferroviario:
a) Debe contar con un Plan de Igualdad.
b) Cuenta con un Plan de Igualdad.
c) Al tener 100 trabajadores en plantilla debe tener un plan de igualdad.
d) Al tener 500 trabajadores en plantilla debe tener un plan de igualdad.`,
  },
  {
    pregunta: "62. b) Cuenta con un Plan de Igualdad.",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `---------- TO FIX ----------
63. El Principio de Grupo Renfe, relativo a la Seguridad como valor esencial es:`,
  },
  {
    pregunta: "63. a) JPpi:",
    opciones: [
      "a) [FALTA OPCIÓN A]",
      "b) [FALTA OPCIÓN B]",
      "c) [FALTA OPCIÓN C]",
      "d) [FALTA OPCIÓN D]",
    ],
    correcta: "[RESPUESTA NO DETECTADA]",
    comentario: `64. Es un índice que mide la propensión a la recomendación de los clientes de una empresa:
a) NPS.
b) CES.
c) XAT.
d) PDA.`,
  },
  {
    pregunta: "64. a) NPS.",
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
