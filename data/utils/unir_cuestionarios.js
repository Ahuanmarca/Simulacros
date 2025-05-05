const fs = require('fs');
const path = require('path');

// Lista de archivos a unir
const archivos = [
  '2025-01.js',
  '2025-02.js',
  '2025-03.js',
  '2025-04.js',
  '2025-05.js',
];

const nombreFinal = 'cuestionario_completo.js';
const nombreVariable = 'cuestionario_completo';

function obtenerNombreVariable(contenido) {
  const match = contenido.match(/const (\w+)\s*=\s*\[/);
  return match ? match[1] : null;
}

function main() {
  const todos = [];

  for (const archivo of archivos) {
    const contenido = fs.readFileSync(archivo, 'utf-8');
    const nombreVar = obtenerNombreVariable(contenido);
    if (!nombreVar) {
      console.error(`❌ No se pudo extraer variable del archivo: ${archivo}`);
      continue;
    }

    const preguntas = eval(contenido + `\n${nombreVar}`);
    const origen = path.basename(archivo, '.js');

    for (const item of preguntas) {
      item.origen = origen;
      todos.push(item);
    }
  }

  const salida = `const ${nombreVariable} = ${JSON.stringify(todos, null, 2)};\n`;
  fs.writeFileSync(nombreFinal, salida, 'utf-8');
  console.log(`\n✅ Archivo creado: ${nombreFinal}`);
  console.log(`📦 Total de preguntas: ${todos.length}`);
}

main();
