function crearFormularioQuiz() {
  // Crear un nuevo formulario
  var form = FormApp.create("2024-01");

  // Convertir el formulario en un quiz
  form.setIsQuiz(true);

  // Array con las preguntas, opciones y respuesta correcta


var preguntas = [
    {
        "pregunta": "1. De las que se citan, indica la/s que creas es/son respuesta/s correcta/s. RENFE VIAJEROS SOCIEDAD MERCANTIL ESTATAL, S.A., tiene por objeto social:",
        "opciones": [
            "a) La prestación de servicios de transporte de viajeros por ferrocarril, tanto nacional como internacional.",
            "b) La mediación en la prestación de cualesquiera servicios turísticos, organización, oferta y/o comercialización de viajes combinados o productos turísticos.",
            "c) La prestación de otros servicios o actividades complementarias o vinculadas al transporte ferroviario.",
            "d) Todas las anteriores de forma conjunta."
        ],
        "correcta": "d) Todas las anteriores de forma conjunta."
    },
    {
        "pregunta": "2. Renfe Viajeros tiene suscritas pólizas de seguro o afianzamientos que cubren su responsabilidad civil, teniendo también satisfechas las coberturas del seguro obligatorio de viajeros. Dicha información está disponible en las dependencias dedicadas:",
        "opciones": [
            "a) A la atención al cliente.",
            "b) En la web de Renfe.",
            "c) En los diferentes canales de venta autorizados.",
            "d) Todas las respuestas son correctas."
        ],
        "correcta": "d) Todas las respuestas son correctas."
    },
    {
        "pregunta": "3. Indica la respuesta correcta. En los títulos de transporte, tanto de adultos como de niño, con tarifa Billete gratuito de niño:",
        "opciones": [
            "a) No aparece impreso el nombre del adulto.",
            "b) Aparece impreso el nombre del adulto.",
            "c) En los denominados Billetes Personalizados aparecen impresos los datos personales.",
            "d) Todas las respuestas son falsas."
        ],
        "correcta": "b) Aparece impreso el nombre del adulto."
    },
    {
        "pregunta": "4. Indica la respuesta correcta. De los que se citan, indica el/los títulos de transporte que admiten cambios:",
        "opciones": [
            "a) Los Títulos de transporte de los servicios de cercanías.",
            "b) Los Títulos Multiviaje y sus formalizaciones en los servicios de Alta Velocidad-Larga Distancia.",
            "c) Los Títulos Multiviaje y sus formalizaciones en los servicios de Alta Velocidad-Media Distancia.",
            "d) Ninguno admite cambios."
        ],
        "correcta": "d) Ninguno admite cambios."
    },
    {
        "pregunta": "5. Indica los títulos de transporte que NO admiten prolongación del viaje fuera del Núcleo:",
        "opciones": [
            "a) Los Títulos Multiviaje y los emitidos por los Consorcios de Transporte.",
            "b) Los Títulos de Transporte Colectivo.",
            "c) Los Títulos de Transporte Combinado.",
            "d) Todos admiten la prolongación del viaje fuera del Núcleo."
        ],
        "correcta": "a) Los Títulos Multiviaje y los emitidos por los Consorcios de Transporte."
    },
    {
        "pregunta": "6. Si un cliente se encuentra desprovisto de título de transporte válido, deberá abonar el importe del título de transporte del trayecto correspondiente y, además, una penalización de 200 € si se trata de:",
        "opciones": [
            "a) Alta Velocidad-Larga Distancia.",
            "b) Alta Velocidad-Media Distancia.",
            "c) Media distancia Convencional.",
            "d) Ninguna es correcta."
        ],
        "correcta": "b) Alta Velocidad-Media Distancia."
    },
    {
        "pregunta": "7. Señala la respuesta correcta. De los que se citan, ¿qué vehículo de movilidad personal puede ir a bordo de un tren?",
        "opciones": [
            "a) Patinete.",
            "b) Monociclos.",
            "c) Bicicleta eléctrica.",
            "d) Ninguno puede circular en un tren."
        ],
        "correcta": "c) Bicicleta eléctrica."
    },
    {
        "pregunta": "8. La última modificación de la Ley del sector Ferroviario se ha producido con la publicación de la ley:",
        "opciones": [
            "a) 26/2022, de 19 de diciembre.",
            "b) 16/2022, de 19 de diciembre.",
            "c) 26/2022, de 29 de diciembre.",
            "d) 16/2022, de 19 de diciembre."
        ],
        "correcta": "a) 26/2022, de 19 de diciembre."
    },
    {
        "pregunta": "9. Tendrán la consideración de infracciones leves en materia de transporte ferroviario:",
        "opciones": [
            "a) La obstrucción o el uso indebido de los mecanismos de apertura o cierre de las puertas de los coches del tren.",
            "b) El acceso no autorizado a las cabinas de conducción de los trenes.",
            "c) El acceso no autorizado a instalaciones reservadas para el uso exclusivo de personas autorizadas.",
            "d) Todas las anteriores."
        ],
        "correcta": "d) Todas las anteriores."
    },
    {
        "pregunta": "10. Como norma general, Renfe Viajeros garantiza el enlace entre sus trenes, excepto en:",
        "opciones": [
            "a) Alta Velocidad-Larga distancia.",
            "b) Cercanías.",
            "c) Alta Velocidad. Media Distancia.",
            "d) Alta Velocidad."
        ],
        "correcta": "b) Cercanías."
    },
    {
        "pregunta": "11. Los Sistemas de Venta son estructuras informáticas responsables de gestionar y comercializar la oferta comercial de los diferentes productos y servicios. Las siglas VERTA hacen alusión a:",
        "opciones": [
            "a) Venta de títulos de transporte con reserva de plaza.",
            "b) Venta de títulos de transporte sin reserva de plaza.",
            "c) Venta de títulos de transporte a bordo de los trenes.",
            "d) Venta de títulos de transporte para ampliación de recorridos."
        ],
        "correcta": "c) Venta de títulos de transporte a bordo de los trenes."
    },
    {
        "pregunta": "12. El Sistema de venta asistida, a bordo del tren o en la estación, que permite la venta de títulos de transporte para trenes sin reserva y sin asignación de plaza se conoce por las siglas:",
        "opciones": [
            "a) SIVER.",
            "b) VISIR.",
            "c) VERTA.",
            "d) Ninguno de los anteriores."
        ],
        "correcta": "c) VERTA."
    },
    {
        "pregunta": "13. Las operaciones correspondientes a la venta de billetes en la estación origen del viajero finalizan:",
        "opciones": [
            "a) 5 minutos antes de la hora de salida del tren.",
            "b) 10 minutos antes de la hora de salida del tren.",
            "c) 15 minutos antes de la hora de salida del tren.",
            "d) 30 minutos antes de la hora de salida del tren."
        ],
        "correcta": "a) 5 minutos antes de la hora de salida del tren."
    },
    {
        "pregunta": "14. Las operaciones de venta de billetes por Internet para particulares en www.renfe.com finalizan:",
        "opciones": [
            "a) 5 minutos antes de la hora de salida del tren de la estación de origen.",
            "b) 10 minutos antes de la hora de salida del tren de la estación de origen.",
            "c) 15 minutos antes de la hora de salida del tren de la estación de origen.",
            "d) 30 minutos antes de la hora de salida del tren de la estación de origen."
        ],
        "correcta": "c) 15 minutos antes de la hora de salida del tren de la estación de origen."
    },
    {
        "pregunta": "15. Como norma general el periodo de venta anticipada, para los trenes de Alta Velocidad AVLO, es de:",
        "opciones": [
            "a) Seis meses.",
            "b) Tres meses.",
            "c) Doce meses.",
            "d) No tiene límite de tiempo."
        ],
        "correcta": "c) Doce meses."
    },
    {
        "pregunta": "16. Los trenes AVLO disponen de dos plazas H que se encuentran ubicadas en el coche 7, plazas 11H y 12H para viajeros con discapacidad o movilidad reducida. Se pueden solicitar estas plazas:",
        "opciones": [
            "a) En el momento de la compra del billete.",
            "b) Hasta 30 minutos antes de la salida del tren.",
            "c) No existen este tipo de plazas.",
            "d) Las respuestas a) y b) son correctas."
        ],
        "correcta": "d) Las respuestas a) y b) son correctas."
    },
    {
        "pregunta": "17. El cliente afectado por la cancelación de un tren AVLO tendrá derecho, en los términos establecidos en las Condiciones Generales de los Contratos de Transporte de Renfe Viajeros:",
        "opciones": [
            "a) Al cambio sin gastos del título de transporte para otro tren AVLO.",
            "b) Al cambio sin gastos del título de transporte AVLO para otra fecha.",
            "c) Al reintegro del precio pagado por el viaje, incluidos todos los complementos.",
            "d) Todas son correctas."
        ],
        "correcta": "d) Todas son correctas."
    },
    {
        "pregunta": "18. Ante una queja por deficiencia en la climatización de un tren AVLO se intentará dar solución inmediata a la misma o se ubicará al viajero en otro asiento. Si no fuera posible la corrección de la incidencia, ni con un cambio de plaza, y se produce una reclamación, el cliente tendrá derecho a una indemnización, sobre el importe total del billete abonado, equivalente al:",
        "opciones": [
            "a) 50 % del billete.",
            "b) 100 % del billete.",
            "c) 75 % del billete.",
            "d) No se contempla la indemnización por ese tipo de deficiencia."
        ],
        "correcta": "b) 100 % del billete."
    },
    {
        "pregunta": "19. Para ser titular de la Tarjeta Más Renfe Platino se requiere:",
        "opciones": [
            "a) Un consumo de más de 10.000 € en un periodo máximo de 12 meses consecutivos en viajes bonificables.",
            "b) Un consumo de más de 8.000 € en un periodo máximo de 12 meses consecutivos en viajes bonificables.",
            "c) Un consumo de más de 6.000 € en un periodo máximo de 12 meses consecutivos en viajes bonificables.",
            "d) Un consumo de más de 5.000 € en un periodo máximo de 12 meses consecutivos en viajes bonificables."
        ],
        "correcta": "a) Un consumo de más de 10.000 € en un periodo máximo de 12 meses consecutivos en viajes bonificables."
    },
    {
        "pregunta": "20. En el caso del viaje de un menor sin acompañante, tanto el menor como el responsable del mismo que hace la entrega del menor, deberán personarse en el Centro de Servicios Renfe o, en su defecto, en las taquillas de la estación con una antelación mínima de:",
        "opciones": [
            "a) 30 minutos antes de la salida del tren.",
            "b) 45 minutos antes de la salida del tren.",
            "c) 60 minutos antes de la salida del tren.",
            "d) 15 minutos antes de la salida del tren."
        ],
        "correcta": "b) 45 minutos antes de la salida del tren."
    },
    {
        "pregunta": "21. El precio anual de la Tarjeta Más Renfe Joven es de:",
        "opciones": [
            "a) 25 €.",
            "b) 30 €.",
            "c) 40 €.",
            "d) 50 €."
        ],
        "correcta": "d) 50 €."
    },
    {
        "pregunta": "22. Los Títulos Multiviaje para estudiantes incluidos en la oferta comercial de servicios de Media Distancia son:",
        "opciones": [
            "a) Abono Mensual Estudiante Exprés.",
            "b) Tarjeta Mensual 40 Sencilla.",
            "c) Tarjeta Mensual Libre 40.",
            "d) Todos son correctos."
        ],
        "correcta": "d) Todos son correctos."
    },
    {
        "pregunta": "23. Los abonos para el segundo y tercer cuatrimestre para el “ABONO RECURRENTE” en los Servicios de Cercanías 2024 se podrán adquirir con una antelación de:",
        "opciones": [
            "a) Diez días antes del inicio de la vigencia de cada uno de ellos.",
            "b) Quince días antes del inicio de la vigencia de cada uno de ellos.",
            "c) Veinte días antes del inicio de la vigencia de cada uno de ellos.",
            "d) Un mes antes del inicio de la vigencia de cada uno de ellos."
        ],
        "correcta": "d) Un mes antes del inicio de la vigencia de cada uno de ellos."
    },
    {
        "pregunta": "24. El abono gratuito para viajeros recurrentes denominado “ABONO RECURRENTE” en los Servicios de Cercanías 2024, conlleva una fianza. Para el reintegro de esta fianza se requiere que el viajero haya efectuado:",
        "opciones": [
            "a) Como mínimo 12 viajes durante el tiempo de validez del abono.",
            "b) Como mínimo 14 viajes durante el tiempo de validez del abono.",
            "c) Como mínimo 16 viajes durante el tiempo de validez del abono.",
            "d) No se requiere un mínimo de viajes."
        ],
        "correcta": "c) Como mínimo 16 viajes durante el tiempo de validez del abono."
    },
    {
        "pregunta": "25. El abono gratuito para viajeros recurrentes denominado “ABONO RECURRENTE” en los Servicios de Media Distancia y Servicios Regionales de Cataluña 2024, conlleva una fianza, para el viajero y para cualquier cuatrimestre, de:",
        "opciones": [
            "a) 20 €.",
            "b) 15 €.",
            "c) 12 €.",
            "d) No tiene fianza."
        ],
        "correcta": "a) 20 €."
    },
    {
        "pregunta": "26. Las indemnizaciones que los clientes tienen derecho a percibir en el caso de que se produzca un retraso se encuentran reguladas en:",
        "opciones": [
            "a) La Ley de Ordenación del Transporte Terrestre (LOTT).",
            "b) El Reglamento del Sector Ferroviario.",
            "c) El Reglamento del Parlamento Europeo y del Consejo.",
            "d) Las respuestas b) y c) son correctas."
        ],
        "correcta": "d) Las respuestas b) y c) son correctas."
    },
    {
        "pregunta": "27. Indica la respuesta correcta. En el AVE internacional España-Francia independientemente de la causa que origine el retraso, se aplicarán las siguientes indemnizaciones en el recorrido interior español:",
        "opciones": [
            "a) 50 % del precio del billete en caso de retraso mayor de 15 minutos.",
            "b) 25 % del precio del billete en caso de retraso mayor de 15 minutos.",
            "c) 30 % del precio del billete en caso de retraso mayor de 15 minutos.",
            "d) 100 % del precio del billete en caso de retraso mayor de 15 minutos."
        ],
        "correcta": "a) 50 % del precio del billete en caso de retraso mayor de 15 minutos."
    },
    {
        "pregunta": "28. La comunicación de una incidencia indemnizable será recogida en la aplicación denominada:",
        "opciones": [
            "a) Mercurio.",
            "b) Apolo.",
            "c) Copérnico.",
            "d) Maquiavelo."
        ],
        "correcta": "c) Copérnico."
    },
    {
        "pregunta": "29. El Eurail Global Pass Senior es una variante del Eurail Global Pass válido en 1.ª o 2.ª Clase de uso exclusivo para:",
        "opciones": [
            "a) Mayores de 50 años.",
            "b) Mayores de 60 años.",
            "c) Mayores de 45 años.",
            "d) Ninguna respuesta es correcta."
        ],
        "correcta": "b) Mayores de 60 años."
    },
    {
        "pregunta": "30. El portador de un pase Eurail que sufra un retraso superior a 60 minutos, imputable a la compañía ferroviaria, tendrá derecho a una indemnización que deberá ser solicitada, como máximo:",
        "opciones": [
            "a) 3 meses después del último día de validez del pase.",
            "b) Dentro de los 15 días siguientes a la incidencia.",
            "c) Dentro de los 20 días siguientes a la incidencia.",
            "d) Dentro de los 30 días siguientes a la incidencia."
        ],
        "correcta": "a) 3 meses después del último día de validez del pase."
    },
    {
        "pregunta": "31. El pase Eurail se encuentra disponible en el móvil a partir del mes de septiembre del año:",
        "opciones": [
            "a) 2019.",
            "b) 2020.",
            "c) 2021.",
            "d) 2022."
        ],
        "correcta": "b) 2020."
    },
    {
        "pregunta": "32. Si hacemos alusión a la inspección del billete de día del Pase Móvil, en el encabezado del billete figurará el texto \"Ticket\" sobre un fondo de color:",
        "opciones": [
            "a) Verde azulado.",
            "b) Amarillo.",
            "c) Rojo.",
            "d) Violeta."
        ],
        "correcta": "a) Verde azulado."
    },
    {
        "pregunta": "33. Indica la respuesta correcta. La gama de pases Interrail comprende los Interrail Global Pass e Interrail One Country Pass. El primero citado, en su modalidad flexible, puede usarse:",
        "opciones": [
            "a) 10 días por adultos en 2 meses.",
            "b) 15 días por adultos en 2 meses.",
            "c) 20 días por adultos en 2 meses.",
            "d) Las respuestas a) y b) son correctas."
        ],
        "correcta": "d) Las respuestas a) y b) son correctas."
    },
    {
        "pregunta": "34. RENFE SPAIN PASS se podrá adquirir en puntos de venta (taquillas) en las estaciones y, además, en:",
        "opciones": [
            "a) Oficina de Ventas de Ceuta.",
            "b) Agencias virtuales.",
            "c) www.renfe.com.",
            "d) Todas las anteriores."
        ],
        "correcta": "d) Todas las anteriores."
    },
    {
        "pregunta": "35. En la Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, se fijan los objetivos y las acciones que permitirán avanzar hacia la representación equilibrada y garantizar la igualdad efectiva entre ambos. Indica la/s que crea son objetivos de la citada ley:",
        "opciones": [
            "a) Contribuir a la conciliación de la vida laboral y familiar para ambos sexos.",
            "b) Aumentar las medidas efectivas para prevenir y erradicar las conductas discriminatorias de género y de acoso.",
            "c) Influir de forma positiva en el ambiente de trabajo, lo que también repercute en la competitividad y productividad de la empresa.",
            "d) Todas las anteriores."
        ],
        "correcta": "d) Todas las anteriores."
    },
    {
        "pregunta": "36. El grupo Renfe ha integrado en la estrategia empresarial los Objetivos de Desarrollo Sostenible (ODS) que marcan la Agenda de las Naciones Unidas para esta década. Este número de objetivos es de:",
        "opciones": [
            "a) 17.",
            "b) 13.",
            "c) 15.",
            "d) 19."
        ],
        "correcta": "a) 17."
    },
    {
        "pregunta": "37. La Entidad Pública Empresarial Renfe-Operadora se constituye como cabecera de un grupo de sociedades, 100 % de Renfe, que tienen la consideración de Sociedades Mercantiles Estatales. De las que se citan indica la/s que tienen/n la forma jurídica de sociedades anónimas:",
        "opciones": [
            "a) Renfe Mercancías Sociedad Mercantil Estatal, S.A.",
            "b) Renfe Alquiler de Material Ferroviario Sociedad Mercantil Estatal, S.A.",
            "c) Renfe de América.",
            "d) Todas tienen la forma jurídica de sociedad anónima."
        ],
        "correcta": "d) Todas tienen la forma jurídica de sociedad anónima."
    },
    {
        "pregunta": "38. El protocolo para la prevención y el tratamiento de los casos de acoso sexual se aprueba por:",
        "opciones": [
            "a) Resolución de 10 de marzo de 2010, de la Dirección General de Trabajo.",
            "b) Resolución de 12 de marzo de 2010, de la Dirección General de Trabajo.",
            "c) Resolución de 14 de marzo de 2010, de la Dirección General de Trabajo.",
            "d) Resolución de 22 de marzo de 2010, de la Dirección General de Trabajo."
        ],
        "correcta": "a) Resolución de 10 de marzo de 2010, de la Dirección General de Trabajo."
    },
    {
        "pregunta": "39. La sociedad Renfe Alquiler de Material Ferroviario está dividida en diferentes áreas. Indica la/s que crea que forman parte de ella:",
        "opciones": [
            "a) Gestión financiera y presupuestaria.",
            "b) Asesoría Jurídica.",
            "c) Desarrollo de Negocios.",
            "d) Todas son correctas."
        ],
        "correcta": "d) Todas son correctas."
    },
    {
        "pregunta": "40. La igualdad retributiva entre mujeres y hombres se encuentra reconocida en el artículo 5 del:",
        "opciones": [
            "a) Real Decreto 902/2020, de 13 de octubre.",
            "b) Real Decreto 802/2020, de 13 de octubre.",
            "c) Real Decreto 702/2020, de 13 de octubre.",
            "d) Ninguno de los anteriores."
        ],
        "correcta": "a) Real Decreto 902/2020, de 13 de octubre."
    },
    {
        "pregunta": "41. Dentro de los Factores usados para la valoración de los diferentes puestos de trabajo indica, de los que se citan, los relacionados con la \"responsabilidad\":",
        "opciones": [
            "a) La experiencia práctica requerida en determinadas funciones.",
            "b) La necesidad de organizar el trabajo propio y de otras personas.",
            "c) El nivel de esfuerzo que supone la realización de las funciones del puesto.",
            "d) El ámbito geográfico de la responsabilidad que conlleva el puesto."
        ],
        "correcta": "d) El ámbito geográfico de la responsabilidad que conlleva el puesto."
    },
    {
        "pregunta": "42. Cada factor de valoración para los diferentes puestos de trabajo tiene una puntuación comprendida entre:",
        "opciones": [
            "a) 0 y 10.",
            "b) 0 y 20.",
            "c) 0 y 50.",
            "d) 0 y 100."
        ],
        "correcta": "d) 0 y 100."
    },
    {
        "pregunta": "43. El Sistema de Valoración de los puestos de trabajo cumple con los criterios de adecuación, totalidad y objetividad. El criterio de totalidad:",
        "opciones": [
            "a) Implica que los factores relevantes para la valoración son aquellos relacionados con la actividad y que concurren efectivamente en la misma.",
            "b) Implica que, para constatar si existe igual valor, se tienen en cuenta todas las condiciones que singularizan el puesto de trabajo.",
            "c) Implica que no existen factores que reflejen estereotipos de género.",
            "d) Las respuestas a) y c) son correctas."
        ],
        "correcta": "b) Implica que, para constatar si existe igual valor, se tienen en cuenta todas las condiciones que singularizan el puesto de trabajo."
    },
    {
        "pregunta": "44. “El registro deberá reflejar, además, las medias aritméticas y las medianas de las agrupaciones de trabajos de igual valor en la empresa, conforme a los resultados de la valoración de puestos de trabajo descrita en los artículos 4 y 8.1.a) aunque pertenezcan a diferentes apartados de la clasificación profesional, desglosados por sexo y desagregados conforme a lo establecido en el citado artículo 5.2.” Esta afirmación se contempla en:",
        "opciones": [
            "a) El artículo 3 del RD 902/2020, de 13 de octubre, de igualdad retributiva entre mujeres y hombres.",
            "b) El artículo 4 del RD 902/2020, de 13 de octubre, de igualdad retributiva entre mujeres y hombres.",
            "c) El artículo 5 del RD 902/2020, de 13 de octubre, de igualdad retributiva entre mujeres y hombres.",
            "d) El artículo 6 del RD 902/2020, de 13 de octubre, de igualdad retributiva entre mujeres y hombres."
        ],
        "correcta": "d) El artículo 6 del RD 902/2020, de 13 de octubre, de igualdad retributiva entre mujeres y hombres."
    },
    {
        "pregunta": "45. Los objetivos que se derivan del registro salarial y del informe de auditoría retributiva son:",
        "opciones": [
            "a) Prevenir la discriminación por razón de sexo en el acceso al empleo de Renfe.",
            "b) Asegurar la igualdad de trato en las condiciones de trabajo y oportunidades en la carrera profesional en Renfe.",
            "c) Incidir en un sistema retributivo que no genere discriminación entre ambos sexos.",
            "d) Todos los anteriores."
        ],
        "correcta": "d) Todos los anteriores."
    },
    {
        "pregunta": "46. La mayoría de los Puestos Tipo de la sociedad Renfe tienen sus funciones definidas en un documento denominado:",
        "opciones": [
            "a) Acuerdo de Desarrollo Profesional.",
            "b) Relación de Puestos de Trabajo.",
            "c) Acuerdo de Puestos de Trabajo.",
            "d) Ninguno de los anteriores."
        ],
        "correcta": "a) Acuerdo de Desarrollo Profesional."
    },
    {
        "pregunta": "47. Se entiende por \"importes efectivos\":",
        "opciones": [
            "a) Los importes correspondientes a las retribuciones satisfechas a cada persona y para cada una de sus diferentes situaciones contractuales.",
            "b) Son las situaciones contractuales diferentes cuando haya cambios de puesto de trabajo, modalidad contractual, tipo de jornada, retribución, etc.",
            "c) El importe resultante de equiparar el importe percibido al 100 % de la jornada anual mediante la análisis de los datos de salario efectivo.",
            "d) Las respuestas a) y b) son correctas."
        ],
        "correcta": "a) Los importes correspondientes a las retribuciones satisfechas a cada persona y para cada una de sus diferentes situaciones contractuales."
    },
    {
        "pregunta": "48. “El registro deberá reflejar, además, las medias aritméticas y las medianas de las agrupaciones de trabajos de igual valor en la empresa, conforme a los resultados de la valoración de puestos de trabajo descrita en los artículos 4 y 8.1 a) aunque pertenezcan a diferentes apartados de la clasificación profesional”. Dicha aseveración se encuentra recogida en:",
        "opciones": [
            "a) El artículo 3 del RD 902/2020, de 13 de octubre, de igualdad retributiva entre mujeres y hombres.",
            "b) El artículo 4 del RD 902/2020, de 13 de octubre, de igualdad retributiva entre mujeres y hombres.",
            "c) El artículo 5 del RD 902/2020, de 13 de octubre, de igualdad retributiva entre mujeres y hombres.",
            "d) El artículo 6 del RD 902/2020, de 13 de octubre, de igualdad retributiva entre mujeres y hombres."
        ],
        "correcta": "c) El artículo 5 del RD 902/2020, de 13 de octubre, de igualdad retributiva entre mujeres y hombres."
    },
    {
        "pregunta": "49. El sistema de valoración de puestos cumple con los criterios de adecuación, totalidad y objetividad. El criterio de \"totalidad\" implica:",
        "opciones": [
            "a) Que los factores relevantes para la valoración son aquellos relacionados con la actividad y que concurren efectivamente en la misma.",
            "b) Que para constatar si existe igual valor, se tienen en cuenta todas las condiciones que singularizan el puesto de trabajo.",
            "c) Que no existen factores que reflejen estereotipos de género.",
            "d) Todos los anteriores."
        ],
        "correcta": "b) Que para constatar si existe igual valor, se tienen en cuenta todas las condiciones que singularizan el puesto de trabajo."
    },
    {
        "pregunta": "50. Especialmente, los objetivos que se derivan del registro salarial y del informe de auditoría retributiva son:",
        "opciones": [
            "a) Prevenir la discriminación por razón de sexo en el acceso al empleo de Renfe.",
            "b) Asegurar la igualdad de trato en las condiciones de trabajo y oportunidades en la carrera profesional en Renfe.",
            "c) Incidir en un sistema retributivo que no genere discriminación entre ambos sexos.",
            "d) Todos los anteriores."
        ],
        "correcta": "d) Todos los anteriores."
    },
    {
        "pregunta": "51. Indica, de los que se citan, el/los que creas que forman parte de los objetivos que se derivan del registro salarial y del informe de auditoría retributiva:",
        "opciones": [
            "a) Abordar nuevas medidas que permitan conciliar la vida personal, laboral y familiar de mujeres y hombres.",
            "b) Reducir las diferencias entre ambos sexos, a través del fomento de la correspondencia salarial.",
            "c) Asegurar la igualdad de trato en las condiciones de trabajo y oportunidades en la carrera profesional en Renfe.",
            "d) Todas son correctas."
        ],
        "correcta": "d) Todas son correctas."
    },
    {
        "pregunta": "52. En el Protocolo para la Prevención y Tratamiento de los casos de Acoso Sexual, Acoso por razón de Sexo y Acoso Moral se consideran varios tipos de actuaciones. Indica la/s correcta/s:",
        "opciones": [
            "a) Establecimiento de medidas mediante las cuales Renfe-Operadora prevenga y evite situaciones de acoso o susceptibles de constituir acoso.",
            "b) Prevenir la discriminación por razón de sexo en el acceso al empleo de Renfe.",
            "c) Asegurar la igualdad de trato en las condiciones de trabajo y oportunidades en la carrera profesional en Renfe.",
            "d) Todas las anteriores."
        ],
        "correcta": "a) Establecimiento de medidas mediante las cuales Renfe-Operadora prevenga y evite situaciones de acoso o susceptibles de constituir acoso."
    },
    {
        "pregunta": "53. “Cualquier comportamiento, verbal o físico, de naturaleza sexual, desarrollado en el ámbito de organización y dirección de la Empresa por quien pertenece a la misma, que tenga el propósito o produzca el efecto de atentar contra la dignidad de una persona, en particular cuando se crea un entorno intimidatorio, degradante u ofensivo” se conoce con el nombre de:",
        "opciones": [
            "a) Acoso sexual.",
            "b) Acoso por razón de sexo.",
            "c) Acoso moral o psicológico (mobbing).",
            "d) Ninguno de los anteriores."
        ],
        "correcta": "a) Acoso sexual."
    },
    {
        "pregunta": "54. Indica el/los que creas que es/son elemento/s fundamental/es y que constituyen el concepto de acoso moral o psicológico:",
        "opciones": [
            "a) Que la conducta vejatoria esté dotada de intencionalidad y voluntariedad, siendo su finalidad de causar un mal o daño al trabajador/a acosado.",
            "b) Que entre la conducta de acoso moral y la actuación o comportamiento del sujeto activo exista una clara y patente relación de causalidad susceptible de ser probada.",
            "c) Que se produzca una reiteración de los comportamientos humillantes o vejatorios, pues resulta esencial que exista una continuidad en el comportamiento del acosador, sin que los citados comportamientos sean idénticos, ni de la misma intensidad, debiendo mantenerse durante un plazo de tiempo prolongado para que efectivamente se produzca una perturbación anímica en quien los sufre.",
            "d) Todos los anteriores."
        ],
        "correcta": "d) Todos los anteriores."
    },
    {
        "pregunta": "55. Las conductas reiteradas dirigidas a menospreciar a la persona tienen la consideración de:",
        "opciones": [
            "a) Acoso sexual.",
            "b) Acoso por razón de sexo.",
            "c) Acoso moral o psicológico (mobbing).",
            "d) Ninguno de los anteriores."
        ],
        "correcta": "c) Acoso moral o psicológico (mobbing)."
    },
    {
        "pregunta": "56. El Informe Final de una denuncia por acoso deberá incluir:",
        "opciones": [
            "a) La denuncia.",
            "b) Las conclusiones.",
            "c) La calificación de la infracción que proceda.",
            "d) Todas las anteriores."
        ],
        "correcta": "d) Todas las anteriores."
    },
    {
        "pregunta": "57. El Plan de Igualdad del Grupo Renfe incorpora un sistema de gestión cuyo propósito es dotarle de una metodología e instrumentos que le permitan alcanzar:",
        "opciones": [
            "a) Sus compromisos.",
            "b) Sus metas.",
            "c) Sus objetivos.",
            "d) Todos los anteriores."
        ],
        "correcta": "d) Todos los anteriores."
    },
    {
        "pregunta": "58. Al referirnos a la Metodología de Trabajo y a su Ciclo de Mejora Continua este consta de varias fases o etapas. Si decimos “fase de ejecución de la programación: objetivos, medidas e instrumentos de gobernanza” nos estamos refiriendo a la fase de:",
        "opciones": [
            "a) Seguimiento.",
            "b) Planificación.",
            "c) Aplicación.",
            "d) Propuesta de mejora."
        ],
        "correcta": "c) Aplicación."
    },
    {
        "pregunta": "59. El número de miembros de la Comisión de Igualdad es de:",
        "opciones": [
            "a) 7.",
            "b) 8.",
            "c) 9.",
            "d) 11."
        ],
        "correcta": "b) 8."
    },
    {
        "pregunta": "60. Las conclusiones que se realizan sobre las habilidades o capacidades de una persona en función del sexo al que pertenece, sin tener conocimiento cierto de que eso sea así, se conocen como:",
        "opciones": [
            "a) Estereotipos de género.",
            "b) Prejuicios de género.",
            "c) Brecha de Género.",
            "d) Ninguno de los anteriores."
        ],
        "correcta": "b) Prejuicios de género."
    },
    {
        "pregunta": "61. A la identificación y valoración de los diferentes resultados y efectos de una norma o una política pública en uno y otro sexo, con objeto de neutralizar los mismos para evitar sus posibles efectos discriminatorios, se conoce con el nombre de:",
        "opciones": [
            "a) Impacto de Género.",
            "b) Análisis de Género.",
            "c) Perspectiva de Género.",
            "d) Estudio y Análisis de Género."
        ],
        "correcta": "a) Impacto de Género."
    },
    {
        "pregunta": "62. El hecho de que las mujeres se aglutinen en aquellas actividades relacionadas con las tareas habitualmente femeninas (asistencia sanitaria, servicios sociales, educación, trabajos administrativos…) se conoce como:",
        "opciones": [
            "a) Segregación sexual.",
            "b) Segregación vertical.",
            "c) Segregación horizontal.",
            "d) Techo vertical."
        ],
        "correcta": "c) Segregación horizontal."
    },
    {
        "pregunta": "63. La Agencia Ferroviaria de la UE (ERA) ha formulado una declaración a favor de una Cultura de Seguridad Ferroviaria en Europa. El Reglamento Delegado es el:",
        "opciones": [
            "a) 2018/762.",
            "b) 2108/762.",
            "c) 2018/672.",
            "d) 2108/672."
        ],
        "correcta": "a) 2018/762."
    },
    {
        "pregunta": "64. Logirail Sociedad Mercantil Estatal, S.A. es una sociedad cuya propiedad es de las sociedades del grupo Renfe que comenzó a funcionar en el año:",
        "opciones": [
            "a) 2008.",
            "b) 2009.",
            "c) 2010.",
            "d) 2019."
        ],
        "correcta": "b) 2009."
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