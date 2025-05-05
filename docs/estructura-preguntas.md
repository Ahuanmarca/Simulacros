# Estructura de las preguntas

Estructura de preguntas sin separación por "libros" ni "etiquetas".

``` js
const preguntas = [
  {
    pregunta: "¿Lorem Ipsum?",
    opciones: [
      "a) Lorem.",
      "b) Ipsum.",
      "c) Dolor.",
      "d) Asimet.",
    ],
    correcta: "c) Dolor.",
    comentario: `“Lorem Ipsum Dolor Asimet:
- Hello, world.
- Foo, bar, baz.`,
  },
]
```

Estructura de preguntas con separación por "libros" (temas) y "etiquetas".

``` js
const preguntas = [
  {
    libro: "Título del libro",
    pregunta: "¿Lorem Ipsum?",
    opciones: [
      "a) Lorem.",
      "b) Ipsum.",
      "c) Dolor.",
      "d) Asimet.",
    ],
    correcta: "c) Dolor.",
    comentario: `“Lorem Ipsum Dolor Asimet:
- Hello, world.
- Foo, bar, baz.`,
    etiquetas: ["leyes", "cifras", "lista"]
  },
]
```
