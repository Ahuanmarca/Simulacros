const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Opciones disponibles para el campo "libro"
const opcionesLibro = [
  "Condiciones Generales",
  "Normativa Comercial",
  "Pases Internacionales",
  "Plan de Igualdad de Género",
  "Cultura de Seguridad",
  "Experiencia de Cliente",
];

// Utilidad para hacer preguntas en CLI
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function preguntar(pregunta) {
  return new Promise(resolve => rl.question(pregunta, resolve));
}

async function main() {
  const archivoOriginal = process.argv[2];
  if (!archivoOriginal) {
    console.error('❌ Debes pasar el archivo JS como argumento');
    process.exit(1);
  }

  const contenido = fs.readFileSync(archivoOriginal, 'utf-8');
  const nombreVariable = contenido.match(/const (\w+)\s*=\s*\[/)[1];
  const jsonData = eval(contenido + `\n${nombreVariable}`);

  for (const item of jsonData) {
    console.log('\n📘 Pregunta:');
    console.log(item.pregunta);
    console.log('\n✅ Correcta:');
    console.log(item.correcta);
    console.log('\n📝 Comentario:');
    console.log(item.comentario || '(sin comentario)');

    console.log('\n📚 Opciones de libro:');
    opcionesLibro.forEach((op, i) => {
      console.log(`  ${i + 1}) ${op}`);
    });

    let index;
    while (true) {
      const respuesta = await preguntar('\n👉 Selecciona el número correspondiente al "libro": ');
      index = parseInt(respuesta.trim(), 10) - 1;
      if (index >= 0 && index < opcionesLibro.length) break;
      console.log('❌ Opción inválida. Intenta de nuevo.');
    }

    item.libro = opcionesLibro[index];
  }

  rl.close();

  // Generar nuevo nombre de archivo
  const { name, ext, dir } = path.parse(archivoOriginal);
  const nuevoNombre = path.join(dir, `${name}_libro${ext}`);
  const nuevaVariable = `const ${nombreVariable} = ${JSON.stringify(jsonData, null, 2)};\n`;

  fs.writeFileSync(nuevoNombre, nuevaVariable, 'utf-8');
  console.log(`\n✅ Archivo guardado como: ${nuevoNombre}`);
}

main();
