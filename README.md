Creación automática de forms en Google Forms a partir de preguntas y respuestas (de opción múltiple) contenidas en un archivo .txt, con el objetivo de entrenar para exámentes de opción múltiple.

El script preguntas_4.py lee preguntas de un archivo .txt y genera un script de Google App Script, el cual genera un formulario de Google Forms con todas las preguntas y respuestas (un Quiz).

Las preguntas y respuestas deben seguir el siguiente formato:


```
Q) 1. De las que se citan, indica la/s que creas es/son respuesta/s correcta/s. RENFE VIAJEROS SOCIEDAD MERCANTIL ESTATAL, S.A., tiene por objeto social:

a) La prestación de servicios de transporte de viajeros por ferrocarril, tanto nacional como internacional.
b) La mediación en la prestación de cualesquiera servicios turísticos, organización, oferta y/o comercialización de viajes combinados o productos turísticos.
c) La prestación de otros servicios o actividades complementarias o vinculadas al transporte ferroviario.
d) Todas las anteriores de forma conjunta. ✅

Q) 2. Renfe Viajeros tiene suscritas pólizas de seguro o afianzamientos que cubren su responsabilidad civil, teniendo también satisfechas las coberturas del seguro obligatorio de viajeros. Dicha información está disponible en las dependencias dedicadas:

a) A la atención al cliente.
b) En la web de Renfe.
c) En los diferentes canales de venta autorizados.
d) Todas las respuestas son correctas. ✅
```

Uso ChatGPT para formatear el .txt a partir de otros archivos, documentos escaneados, etc.
