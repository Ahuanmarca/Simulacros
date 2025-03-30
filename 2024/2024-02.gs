function crearFormularioQuiz() {
  // Crear un nuevo formulario
  var form = FormApp.create("2024-02");

  // Convertir el formulario en un quiz
  form.setIsQuiz(true);

  // Array con las preguntas, opciones y respuesta correcta


var preguntas = [
    {
        "pregunta": "1. Renfe Viajeros presta el servicio de transporte de viajeros por ferrocarril bajo el principio de:",
        "opciones": [
            "a) Eficiencia.",
            "b) Calidad.",
            "c) Seguridad.",
            "d) Todas las respuestas son correctas."
        ],
        "correcta": "c) Seguridad."
    },
    {
        "pregunta": "2. Los servicios que atienden las necesidades de demanda de movilidad del mercado y se prestan en régimen de libre competencia y pluralidad de oferta, se conocen con el nombre genérico de:",
        "opciones": [
            "a) Servicios Comerciales.",
            "b) Alta velocidad-media distancia.",
            "c) Alta velocidad-larga distancia.",
            "d) Las respuestas b) y c) son correctas."
        ],
        "correcta": "a) Servicios Comerciales."
    },
    {
        "pregunta": "3. Los títulos de transporte que formalizan distintos contratos de transporte y que dan derecho a viajar en diferentes medios de transporte, incluyendo, en su caso, otros servicios asociados, en un único título, se conocen con el nombre de:",
        "opciones": [
            "a) Título de transporte SENCILLO.",
            "b) Título de transporte COLECTIVO.",
            "c) Título de transporte COMBINADO.",
            "d) Título de transporte MULTIVIAJE."
        ],
        "correcta": "c) Título de transporte COMBINADO."
    },
    {
        "pregunta": "4. Cuando un cambio de plaza fuera decidido por el personal encargado de la supervisión o intervención en ruta, como consecuencia de una incidencia relacionada con la prestación del servicio, el viajero afectado:",
        "opciones": [
            "a) No abonará diferencia de precio alguna por la acomodación en una plaza de categoría superior.",
            "b) Si el cambio se realiza a una plaza de coste inferior, se devolverá al cliente la diferencia de precio.",
            "c) En ningún caso habrá abono de la diferencia si el trayecto contratado ha superado la mitad del mismo.",
            "d) Las respuestas a) y b) son correctas."
        ],
        "correcta": "d) Las respuestas a) y b) son correctas."
    },
    {
        "pregunta": "5. Los menores de 14 años deberán viajar acompañados de una persona adulta en los servicios de:",
        "opciones": [
            "a) Alta Velocidad-Larga Distancia.",
            "b) Larga Distancia.",
            "c) Alta Velocidad-Media Distancia.",
            "d) En todos los anteriores."
        ],
        "correcta": "d) En todos los anteriores."
    },
    {
        "pregunta": "6. Cuando se prevea que el tren saldrá de origen con retraso respecto al horario publicado, el cliente tendrá derecho:",
        "opciones": [
            "a) Al cambio sin gastos del título de viaje para otro tren u otra fecha.",
            "b) Al reintegro del precio pagado por el viaje no realizado.",
            "c) A continuar el viaje en el mismo tren.",
            "d) Todas las respuestas son correctas."
        ],
        "correcta": "d) Todas las respuestas son correctas."
    },
    {
        "pregunta": "7. La última actualización de las Condiciones Generales de los Contratos de Transporte entró en vigor:",
        "opciones": [
            "a) El 12 de diciembre de 2023.",
            "b) El 12 de noviembre de 2023.",
            "c) El 21 de diciembre de 2023.",
            "d) El 21 de noviembre de 2023."
        ],
        "correcta": "a) El 12 de diciembre de 2023."
    },
    {
        "pregunta": "8. La Ley del Sector Ferroviario es la:",
        "opciones": [
            "a) Ley 38/2015, de 29 de septiembre.",
            "b) La Ley 28/2015, de 29 de septiembre.",
            "c) La Ley 38/2015, de 19 de septiembre.",
            "d) La Ley 28/2015, de 19 de septiembre."
        ],
        "correcta": "a) Ley 38/2015, de 29 de septiembre."
    },
    {
        "pregunta": "9. Tendrán la consideración de infracciones muy graves en materia ferroviaria:",
        "opciones": [
            "a) Infracciones a la seguridad del sistema ferroviario.",
            "b) La circulación ferroviaria o la prestación de servicios de transporte sin contar con la preceptiva licencia de empresa ferroviaria.",
            "c) La cesión de la licencia de empresa ferroviaria.",
            "d) Todas las anteriores."
        ],
        "correcta": "d) Todas las anteriores."
    },
    {
        "pregunta": "10. Los Sistemas de Venta son estructuras informáticas responsables de gestionar y comercializar la oferta comercial de los diferentes productos y servicios. Las siglas SIVER hacen alusión a:",
        "opciones": [
            "a) Venta de títulos de transporte con reserva de plaza.",
            "b) Venta de títulos de transporte sin reserva de plaza.",
            "c) Venta de títulos de transporte a bordo de los trenes.",
            "d) Venta de títulos de transporte para ampliación de recorridos."
        ],
        "correcta": "a) Venta de títulos de transporte con reserva de plaza."
    },
    {
        "pregunta": "11. Las aplicaciones de los Sistemas de venta son herramientas informáticas, adaptadas a las necesidades y características de cada canal de venta, capaces de comercializar los servicios de viajeros de Renfe. A través del canal de “venta telefónica” se pueden adquirir títulos de viaje:",
        "opciones": [
            "a) VISIR.",
            "b) SIVER.",
            "c) VERTA.",
            "d) Ninguno de los anteriores."
        ],
        "correcta": "b) SIVER."
    },
    {
        "pregunta": "12. Los dispositivos de control de acceso (VCK) son los mecanismos encargados de verificar los títulos de transporte emitidos por el sistema:",
        "opciones": [
            "a) VISIR.",
            "b) SIVER.",
            "c) VERTA.",
            "d) Ninguno de los anteriores."
        ],
        "correcta": "b) SIVER."
    },
    {
        "pregunta": "13. Las operaciones correspondientes a la venta de billetes mediante “venta telefónica” finalizan:",
        "opciones": [
            "a) 5 minutos antes de la hora de salida del tren de la estación de origen.",
            "b) 10 minutos antes de la hora de salida del tren de la estación de origen.",
            "c) 15 minutos antes de la hora de salida del tren de la estación de origen.",
            "d) 30 minutos antes de la hora de salida del tren de la estación de origen."
        ],
        "correcta": "d) 30 minutos antes de la hora de salida del tren de la estación de origen."
    },
    {
        "pregunta": "14. Las operaciones correspondientes a la formalización de abonos a través de la app “Renfe Ticket” para dispositivos móviles finalizan:",
        "opciones": [
            "a) 5 minutos antes de la hora de salida del tren de la estación de origen.",
            "b) 10 minutos antes de la hora de salida del tren de la estación de origen.",
            "c) 15 minutos antes de la hora de salida del tren de la estación de origen.",
            "d) 30 minutos antes de la hora de salida del tren de la estación de origen."
        ],
        "correcta": "a) 5 minutos antes de la hora de salida del tren de la estación de origen."
    },
    {
        "pregunta": "15. Una vez adquirido un billete AVLO:",
        "opciones": [
            "a) Se admite el cambio de titularidad del mismo.",
            "b) No se admite el cambio de titularidad del mismo.",
            "c) Se admite el cambio de titularidad del mismo si también se cambia la fecha del viaje.",
            "d) Ninguna respuesta es correcta."
        ],
        "correcta": "b) No se admite el cambio de titularidad del mismo."
    },
    {
        "pregunta": "16. Los trabajadores en activo, prejubilados y pensionistas de Renfe, Adif y Adif AV, tanto titulares como beneficiarios, así como los trabajadores en activo de Logirail, que estén en posesión de la Tarjeta Ferroviaria emitida por su empresa correspondiente, podrán beneficiarse en sus viajes de ocio de la tarifa ferroviaria cuando adquieran sus billetes AVLO en puntos de venta con VCX, agencias de viajes y en www.renfe.com., abonando:",
        "opciones": [
            "a) El 20 % del importe del billete.",
            "b) El 30 % del importe del billete.",
            "c) El 40 % del importe del billete.",
            "d) El 50 % del importe del billete."
        ],
        "correcta": "b) El 30 % del importe del billete."
    },
    {
        "pregunta": "17. En caso de interrupción o de cancelación del servicio de un tren AVLO, si el cliente opta por viajar en un transporte alternativo por carretera se le indemnizará:",
        "opciones": [
            "a) Con un 5 % del importe del billete.",
            "b) Con un 10 % del importe del billete.",
            "c) Con un 15 % del importe del billete.",
            "d) Con un 25 % del importe del billete."
        ],
        "correcta": "c) Con un 15 % del importe del billete."
    },
    {
        "pregunta": "18. Indica la/s respuesta/s que creas es/son correcta/s. Los servicios de Cercanías, con emisión de billete o a través de la lectura del código impreso en el billete, podrán utilizarse durante las 4 horas previas a la hora de salida de origen y durante las cuatro horas siguientes a la hora de llegada a destino del tren AVE, Alvia, Euromed o Intercity:",
        "opciones": [
            "a) Siempre que los horarios de apertura y cierre del servicio de Cercanías de cada núcleo lo permitan.",
            "b) Incluido el posible desplazamiento entre las estaciones de la misma ciudad.",
            "c) No habrá limitación de coronas.",
            "d) Todas son correctas."
        ],
        "correcta": "d) Todas son correctas."
    },
    {
        "pregunta": "19. El titular de una Tarjeta Más Renfe Plata tendrá que permanecer obligatoriamente en dicho nivel (Plata) durante:",
        "opciones": [
            "a) Un año.",
            "b) Seis meses.",
            "c) Tres meses.",
            "d) Una vez obtenida la Tarjeta Más Renfe Plata esta se mantiene indefinidamente."
        ],
        "correcta": "a) Un año."
    },
    {
        "pregunta": "20. Las reclamaciones relacionadas con “puntos” carecerán de validez a partir de:",
        "opciones": [
            "a) Un mes desde la fecha de la incidencia que ocasione la reclamación.",
            "b) Dos meses desde la fecha de la incidencia que ocasione la reclamación.",
            "c) Tres meses desde la fecha de la incidencia que ocasione la reclamación.",
            "d) No se puede reclamar por incidencias relacionadas con “puntos”."
        ],
        "correcta": "c) Tres meses desde la fecha de la incidencia que ocasione la reclamación."
    },
    {
        "pregunta": "21. La tarjeta Más Renfe Joven se puede usar en todos los servicios nacionales de Renfe Viajeros excepto en:",
        "opciones": [
            "a) Media Distancia Convencional (ancho métrico).",
            "b) Cercanías (ancho métrico).",
            "c) AVLO y trenes turísticos.",
            "d) En ninguno de los anteriores."
        ],
        "correcta": "c) AVLO y trenes turísticos."
    },
    {
        "pregunta": "22. El abono gratuito para viajeros recurrentes denominado “ABONO RECURRENTE” en los Servicios de Cercanías 2024 ha sido regulado por:",
        "opciones": [
            "a) El Real Decreto-ley 18/2023, de 27 de diciembre.",
            "b) El Real Decreto-ley 8/2023, de 27 de diciembre.",
            "c) El Real Decreto-ley 8/2023, de 29 de diciembre.",
            "d) El Real Decreto-ley 8/2024, de 27 de enero."
        ],
        "correcta": "c) El Real Decreto-ley 8/2023, de 29 de diciembre."
    },
    {
        "pregunta": "23. El abono gratuito para viajeros recurrentes denominado “ABONO RECURRENTE” en los Servicios de Cercanías 2024, conlleva una fianza, para el viajero y para cualquier cuatrimestre, de:",
        "opciones": [
            "a) 20 €.",
            "b) 10 €.",
            "c) 12 €.",
            "d) No tiene fianza."
        ],
        "correcta": "c) 12 €."
    },
    {
        "pregunta": "24. La Tarjeta Plus 10-45 no podrá ser usada a partir del:",
        "opciones": [
            "a) 31 de enero de 2025.",
            "b) 31 de diciembre de 2024.",
            "c) 31 de marzo de 2025.",
            "d) No tiene caducidad."
        ],
        "correcta": "a) 31 de enero de 2025."
    },
    {
        "pregunta": "25. Se elimina la devolución al viajero por falta de confort (falta o avería) en el audio/vídeo en todos los trenes de Servicios Comerciales para aquellos billetes emitidos a partir del:",
        "opciones": [
            "a) 1 de abril de 2024.",
            "b) 30 de abril de 2024.",
            "c) 1 de julio de 2024.",
            "d) 31 de julio de 2024."
        ],
        "correcta": "c) 1 de julio de 2024."
    },
    {
        "pregunta": "26. Cuando por causa de cancelación de un servicio AVLO se ofrezca al cliente un transporte alternativo por carretera, incluidos los supuestos de causa de fuerza mayor, tendrá derecho a una devolución:",
        "opciones": [
            "a) Del 15 % del importe del billete.",
            "b) Del 5 % del importe del billete.",
            "c) Del 10 % del importe del billete.",
            "d) Del 25 % del importe del billete."
        ],
        "correcta": "c) Del 10 % del importe del billete."
    },
    {
        "pregunta": "27. En supuestos de retrasos por causa de fuerza mayor se aplicarán las indemnizaciones contempladas en:",
        "opciones": [
            "a) El Reglamento (EU) 2021/782 del Parlamento Europeo y del Consejo del 29 de abril de 2021.",
            "b) El Reglamento (EU) 2021/872 del Parlamento Europeo y del Consejo del 29 de abril de 2021.",
            "c) El Reglamento (EU) 2021/782 del Parlamento Europeo y del Consejo del 19 de abril de 2021.",
            "d) El Reglamento (EU) 2021/782 del Parlamento Europeo y del Consejo del 9 de abril de 2021."
        ],
        "correcta": "a) El Reglamento (EU) 2021/782 del Parlamento Europeo y del Consejo del 29 de abril de 2021."
    },
    {
        "pregunta": "28. Indica la respuesta correcta. En el AVE internacional España-Francia independientemente de la causa que origine el retraso, se aplicarán las siguientes indemnizaciones en el recorrido interior francés:",
        "opciones": [
            "a) 25 % del precio del billete a partir de 30 minutos de retraso.",
            "b) 50 % del precio del billete a partir de 30 minutos de retraso.",
            "c) 75 % del precio del billete a partir de 120 minutos de retraso.",
            "d) 100 % del precio del billete a partir de 180 minutos de retraso."
        ],
        "correcta": "b) 50 % del precio del billete a partir de 30 minutos de retraso."
    },
    {
        "pregunta": "29. El Reglamento del Sector Ferroviario, aprobado por el Real Decreto 2387/2004, de 30 de diciembre, ha sido modificado últimamente por:",
        "opciones": [
            "a) El Real Decreto 438/2022, de 14 de junio.",
            "b) El Real Decreto 448/2022, de 14 de junio.",
            "c) El Real Decreto 428/2022, de 14 de junio.",
            "d) El Real Decreto 418/2022, de 14 de junio."
        ],
        "correcta": "b) El Real Decreto 448/2022, de 14 de junio."
    },
    {
        "pregunta": "30. Indica la respuesta correcta. El título Eurail Global Pass Adult es un pase continuo utilizable en 1.ª o 2.ª clase en las compañías participantes de 33 países europeos, disponible para viajar:",
        "opciones": [
            "a) 15 días.",
            "b) 22 días.",
            "c) 3 meses.",
            "d) Todas las respuestas son correctas."
        ],
        "correcta": "d) Todas las respuestas son correctas."
    },
    {
        "pregunta": "31. Indica la respuesta correcta. La gama de pases Interrail comprende los Interrail Global Pass e Interrail One Country Pass. El primero citado, en su modalidad flexible, puede usarse:",
        "opciones": [
            "a) 4 días en un mes.",
            "b) 5 días en un mes.",
            "c) 7 días en un mes.",
            "d) Todas las respuestas son correctas."
        ],
        "correcta": "d) Todas las respuestas son correctas."
    },
    {
        "pregunta": "32. El Pase Renfe Spain Pass es personal e intransferible y permite realizar:",
        "opciones": [
            "a) 4 viajes en los trenes Renfe Viajeros.",
            "b) 8 viajes en los trenes Renfe Viajeros.",
            "c) 10 viajes en los trenes Renfe Viajeros.",
            "d) Todas las respuestas son correctas."
        ],
        "correcta": "d) Todas las respuestas son correctas."
    },
    {
        "pregunta": "33. La validez de RENFE SPAIN PASS, desde su adquisición, es de:",
        "opciones": [
            "a) 1 mes.",
            "b) 3 meses.",
            "c) 6 meses.",
            "d) 9 meses."
        ],
        "correcta": "c) 6 meses."
    },
    {
        "pregunta": "34. Indica la respuesta correcta. En el caso de haber hecho alguna operación con el pase Renfe Spain Pass, pero no se haya utilizado ningún viaje, se podrá anular:",
        "opciones": [
            "a) Con un coste del 15 % del precio de dicho pase en concepto de gastos de anulación.",
            "b) Con un coste del 5 % del precio de dicho pase en concepto de gastos de anulación.",
            "c) Nunca se puede anular.",
            "d) No lleva coste de anulación."
        ],
        "correcta": "a) Con un coste del 15 % del precio de dicho pase en concepto de gastos de anulación."
    },
    {
        "pregunta": "35. La igualdad entre mujeres y hombres y la eliminación de las desigualdades entre ambos sexos es un objetivo transversal reconocido en la normativa internacional y estatal. Este principio fundamental ha sido desarrollado:",
        "opciones": [
            "a) En la Ley Orgánica 13/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres.",
            "b) En la Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres.",
            "c) En la Ley Orgánica 23/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres.",
            "d) En la Ley Orgánica 2/2007, de 12 de marzo, para la igualdad efectiva de mujeres y hombres."
        ],
        "correcta": "b) En la Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres."
    },
    {
        "pregunta": "36. Renfe Operadora procede de la escisión de la antigua RENFE y está adscrita al Ministerio de Transportes, Movilidad y Agenda Urbana. Nace en el año:",
        "opciones": [
            "a) 1995.",
            "b) 2005.",
            "c) 2007.",
            "d) 2009."
        ],
        "correcta": "b) 2005."
    },
    {
        "pregunta": "37. Uno de los Objetivos de Desarrollo Sostenible (ODS) alude a la igualdad de género y persigue alcanzar la igualdad entre mujeres y hombres en todo el mundo y acabar con la discriminación y violencia por motivo de género. Se trata del objetivo número:",
        "opciones": [
            "a) 3.",
            "b) 5.",
            "c) 11.",
            "d) 15."
        ],
        "correcta": "b) 5."
    },
    {
        "pregunta": "38. En la EPE se imparten diferentes contenidos de formación. Teniendo en cuenta la composición de la Plantilla de Renfe, indica, de los que se citan, la formación que eligen las mujeres de forma mayoritaria (datos 2020):",
        "opciones": [
            "a) Habilidades.",
            "b) Seguridad Integral.",
            "c) Fabricación y mantenimiento.",
            "d) Proyectos internacionales."
        ],
        "correcta": "a) Habilidades."
    },
    {
        "pregunta": "39. El III Convenio Colectivo del Grupo Renfe se registra y publica por Resolución de la Dirección General de Trabajo de fecha:",
        "opciones": [
            "a) Resolución de 17 de julio del 2023.",
            "b) Resolución de 27 de julio del 2023.",
            "c) Resolución de 27 de junio del 2023.",
            "d) Ninguna de las anteriores."
        ],
        "correcta": "a) Resolución de 17 de julio del 2023."
    },
    {
        "pregunta": "40. El resultado de equiparar el importe percibido al 100 % de la jornada anual mediante la anualización de los datos de salario efectivo se conoce con el nombre de:",
        "opciones": [
            "a) Importe efectivo.",
            "b) Importe equiparado.",
            "c) Importe nominal.",
            "d) Salario base."
        ],
        "correcta": "b) Importe equiparado."
    },
    {
        "pregunta": "41. Dentro de los Factores usados para la valoración de los diferentes puestos de trabajo indica, de los que se citan, los relacionados con el “conocimiento y aptitudes”:",
        "opciones": [
            "a) La experiencia práctica requerida en determinadas funciones.",
            "b) La necesidad de organizar el trabajo propio o de otras personas.",
            "c) El nivel de esfuerzo que supone la realización de las funciones del puesto.",
            "d) El ámbito geográfico de la responsabilidad que conlleva el puesto."
        ],
        "correcta": "a) La experiencia práctica requerida en determinadas funciones."
    },
    {
        "pregunta": "42. El Sistema de Valoración de los puestos de trabajo contempla:",
        "opciones": [
            "a) 47 escalas.",
            "b) 57 escalas.",
            "c) 37 escalas.",
            "d) 27 escalas."
        ],
        "correcta": "b) 57 escalas."
    },
    {
        "pregunta": "43. El Sistema de Valoración de puestos cumple con el/los criterio/s de:",
        "opciones": [
            "a) Adecuación.",
            "b) Totalidad.",
            "c) Objetividad.",
            "d) Todos los anteriores."
        ],
        "correcta": "d) Todos los anteriores."
    },
    {
        "pregunta": "44. Dentro del Grupo Renfe existen diferentes “colectivos” contemplados en el Acuerdo de Desarrollo Profesional. Indica, de los que se citan, el/los que creas que forman parte de esos “colectivos”:",
        "opciones": [
            "a) Fabricación y Mantenimiento.",
            "b) Comercial.",
            "c) MMII y Cuadros Técnicos.",
            "d) Todos los anteriores."
        ],
        "correcta": "d) Todos los anteriores."
    },
    {
        "pregunta": "45. “El registro retributivo deberá incluir los valores medios de los salarios, los complementos salariales y las percepciones extrasalariales de la plantilla desagregados por sexo y distribuidos conforme a lo establecido en el artículo 28.2 del Estatuto de los trabajadores”. Esta afirmación se contempla en:",
        "opciones": [
            "a) El artículo 3 del RD 902/2020, de 13 de octubre, de igualdad retributiva entre mujeres y hombres.",
            "b) El artículo 4 del RD 902/2020, de 13 de octubre, de igualdad retributiva entre mujeres y hombres.",
            "c) El artículo 5 del RD 902/2020, de 13 de octubre, de igualdad retributiva entre mujeres y hombres.",
            "d) El artículo 6 del RD 902/2020, de 13 de octubre, de igualdad retributiva entre mujeres y hombres."
        ],
        "correcta": "c) El artículo 5 del RD 902/2020, de 13 de octubre, de igualdad retributiva entre mujeres y hombres."
    },
    {
        "pregunta": "46. En el Informe de Auditoría Retributiva Renfe Mercancías se incluye:",
        "opciones": [
            "a) La metodología utilizada en el registro retributivo.",
            "b) La descripción de los datos de dicho registro.",
            "c) La identificación de las diferencias y posibles brechas salariales.",
            "d) Todas son correctas."
        ],
        "correcta": "d) Todas son correctas."
    },
    {
        "pregunta": "47. Indica la respuesta totalmente correcta. El documento denominado como “Acuerdo de Desarrollo Profesional”:",
        "opciones": [
            "a) Ha sido elaborado, revisado y acordado entre la empresa y la representación de los trabajadores en el contexto de la negociación colectiva.",
            "b) Ha sido elaborado y acordado entre la empresa y la representación de los trabajadores en el contexto de la negociación colectiva.",
            "c) Ha sido elaborado y revisado entre la empresa y la representación de los trabajadores en el contexto de la negociación colectiva.",
            "d) Ha sido elaborado entre la empresa y la representación de los trabajadores en el contexto de la negociación colectiva."
        ],
        "correcta": "a) Ha sido elaborado, revisado y acordado entre la empresa y la representación de los trabajadores en el contexto de la negociación colectiva."
    },
    {
        "pregunta": "48. Los puestos no descritos en el “Acuerdo de Desarrollo Profesional” corresponden a la categoría de:",
        "opciones": [
            "a) Estructura de Mantenimiento.",
            "b) Estructura de Dirección.",
            "c) Negociado de Compras.",
            "d) Negociado de Personal."
        ],
        "correcta": "d) Negociado de Personal."
    },
    {
        "pregunta": "49. La auditoría que tiene por objeto obtener la información necesaria para comprobar si se cumple con la aplicación efectiva del principio de igualdad entre mujeres y hombres en materia económica es:",
        "opciones": [
            "a) La Auditoría Económica.",
            "b) La Auditoría Retributiva.",
            "c) La Auditoría Salarial.",
            "d) Ninguna de las anteriores."
        ],
        "correcta": "b) La Auditoría Retributiva."
    },
    {
        "pregunta": "50. En el informe de auditoría se presentan varios análisis que permiten identificar las diferencias salariales entre hombres y mujeres, así como la posible existencia de brechas salariales no justificadas. El número de estos análisis es de:",
        "opciones": [
            "a) 4.",
            "b) 5.",
            "c) 6.",
            "d) 7."
        ],
        "correcta": "c) 6."
    },
    {
        "pregunta": "51. El sistema de valoración de puestos cumple con los criterios de adecuación, totalidad y objetividad. El criterio de “objetividad” implica que:",
        "opciones": [
            "a) Que los factores relevantes para la valoración son aquellos relacionados con la actividad y que concurren efectivamente en la misma.",
            "b) Que para constatar si existe igual valor, se tienen en cuenta todas las condiciones que singularizan el puesto de trabajo.",
            "c) Que no existan factores que reflejen estereotipos de género.",
            "d) Todos los anteriores."
        ],
        "correcta": "d) Todos los anteriores."
    },
    {
        "pregunta": "52. En el Protocolo para la Prevención y Tratamiento de los casos de Acoso Sexual, Acoso por razón de Sexo y Acoso Moral se consideran varios tipos de actuaciones. Indica la/s correcta/s:",
        "opciones": [
            "a) Establecimiento de un procedimiento interno de actuación para los casos en los que, aun tratando de prevenir dichas situaciones, se produce una denuncia o queja interna por acoso, por parte de algún trabajador/a de la Empresa.",
            "b) Prevenir la discriminación por razón de sexo en el acceso al empleo de Renfe.",
            "c) Asegurar la igualdad de trato en las condiciones de trabajo y oportunidades en la carrera profesional en Renfe.",
            "d) Todas las anteriores."
        ],
        "correcta": "d) Todas las anteriores."
    },
    {
        "pregunta": "53. “El ejercicio de una violencia psicológica extrema, abusiva e injusta de forma sistemática y recurrente, durante un tiempo prolongado, sobre otro trabajador o trabajadores desarrollado en el ámbito de organización y dirección de la Empresa por quien o quienes pertenecen a la misma, con la finalidad de atentar contra la dignidad de la persona y crear un entorno intimidatorio, hostil, degradante, humillante u ofensivo” recibe el nombre de:",
        "opciones": [
            "a) Acoso sexual.",
            "b) Acoso por razón de sexo.",
            "c) Acoso moral o psicológico (mobbing).",
            "d) Ninguno de los anteriores."
        ],
        "correcta": "c) Acoso moral o psicológico (mobbing)."
    },
    {
        "pregunta": "54. El envío reiterado de gráficos, viñetas, dibujos, fotografías o imágenes de contenido sexualmente explícito se considera:",
        "opciones": [
            "a) Acoso sexual.",
            "b) Acoso por razón de sexo.",
            "c) Acoso moral o psicológico (mobbing).",
            "d) Ninguno de los anteriores."
        ],
        "correcta": "a) Acoso sexual."
    },
    {
        "pregunta": "55. El Informe Final de una denuncia por acoso deberá incluir:",
        "opciones": [
            "a) La denuncia.",
            "b) La información recabada.",
            "c) La relación de las gestiones efectuadas.",
            "d) Todas las anteriores."
        ],
        "correcta": "d) Todas las anteriores."
    },
    {
        "pregunta": "56. Indica la respuesta totalmente exacta. El Plan de Igualdad establece una vigencia temporal de:",
        "opciones": [
            "a) 4 años.",
            "b) 5 años.",
            "c) 4 años, con revisión a los 2 años de su implantación.",
            "d) 5 años, con revisión a los 3 años de su implantación."
        ],
        "correcta": "c) 4 años, con revisión a los 2 años de su implantación."
    },
    {
        "pregunta": "57. Al referirnos a la Metodología de Trabajo y a su Ciclo de Mejora Continua este consta de varias fases o etapas. Si decimos “la fase de preparación en la cual se incorporan las necesidades, carencias y mejoras. Asumen los nuevos compromisos y se ordenan las acciones a realizar” nos estamos refiriendo a la fase de:",
        "opciones": [
            "a) Seguimiento.",
            "b) Planificación.",
            "c) Medición/Diagnóstico.",
            "d) Propuesta de mejora."
        ],
        "correcta": "b) Planificación."
    },
    {
        "pregunta": "58. El Observatorio de Igualdad de Género cuenta, entre sus cometidos:",
        "opciones": [
            "a) Detectar, analizar y proponer mejoras para corregir situaciones de desigualdad entre hombres y mujeres en el Grupo Renfe.",
            "b) Realizar el seguimiento periódico y análisis de las medidas del Plan de Igualdad.",
            "c) Identificar las novedades y tendencias que se vayan produciendo en la Sociedad.",
            "d) Todas las anteriores."
        ],
        "correcta": "d) Todas las anteriores."
    },
    {
        "pregunta": "59. La designación de las desigualdades entre mujeres y hombres en la formación y en el uso de las nuevas tecnologías se conoce con el nombre de:",
        "opciones": [
            "a) Brecha Tecnológica.",
            "b) Brecha de Género.",
            "c) Brecha Salarial.",
            "d) Ninguna de las anteriores."
        ],
        "correcta": "a) Brecha Tecnológica."
    },
    {
        "pregunta": "60. Las creencias sobre las características que los hombres y las mujeres tienen que tener y desarrollar se conocen como:",
        "opciones": [
            "a) Estereotipos de género.",
            "b) Prejuicios de género.",
            "c) Brecha de Género.",
            "d) Ninguno de los anteriores."
        ],
        "correcta": "a) Estereotipos de género."
    },
    {
        "pregunta": "61. Cuando se toma en consideración y se presta atención a las diferencias entre mujeres y hombres en cualquier actividad o ámbito, estamos aludiendo a:",
        "opciones": [
            "a) Impacto de Género.",
            "b) Análisis de Género.",
            "c) Perspectiva de Género.",
            "d) Techo de cemento."
        ],
        "correcta": "c) Perspectiva de Género."
    },
    {
        "pregunta": "62. El estudio de los límites que tienen las mujeres para crecer política, social o empresarialmente, debido a la falta de referentes se conoce como:",
        "opciones": [
            "a) Impacto de Género.",
            "b) Análisis de Género.",
            "c) Perspectiva de Género.",
            "d) Techo de cemento."
        ],
        "correcta": "d) Techo de cemento."
    },
    {
        "pregunta": "63. Indica la/s que creas forma/n parte de la cultura empresarial del Grupo Renfe:",
        "opciones": [
            "a) La propia experiencia y las relaciones con los compañeros y compañeras.",
            "b) El ejemplo de los líderes que refleja su compromiso con la organización.",
            "c) El sistema de reconocimientos, recompensas y sanciones que expresa el comportamiento deseado por la organización.",
            "d) Todos los anteriores."
        ],
        "correcta": "d) Todos los anteriores."
    },
    {
        "pregunta": "64. La primera línea de alta velocidad que comenzó a funcionar en España, unió las ciudades de:",
        "opciones": [
            "a) Madrid y Barcelona.",
            "b) Madrid y Sevilla.",
            "c) Madrid y Valencia.",
            "d) Madrid y Alicante."
        ],
        "correcta": "b) Madrid y Sevilla."
    }
];


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
}