const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Colores para resaltado en terminal
const verde = '\x1b[32m';
const reset = '\x1b[0m';
const separador = '\x1b[90m' + '-'.repeat(60) + reset;

// Interfaz CLI
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function preguntar(pregunta) {
  return new Promise(resolve => rl.question(pregunta, resolve));
}

function cargarEtiquetasJSON(ruta) {
  if (fs.existsSync(ruta)) {
    return new Set(JSON.parse(fs.readFileSync(ruta, 'utf-8')));
  }
  return new Set();
}

function guardarEtiquetasJSON(etiquetas, ruta) {
  fs.writeFileSync(ruta, JSON.stringify([...etiquetas].sort(), null, 2), 'utf-8');
}

async function main() {
  const archivo = process.argv[2];
  if (!archivo) {
    console.error("❌ Debes indicar el archivo JS como argumento.");
    process.exit(1);
  }

  const contenido = fs.readFileSync(archivo, 'utf-8');
  const nombreVariable = contenido.match(/const (\w+)\s*=\s*\[/)[1];
  const preguntas = eval(contenido + `\n${nombreVariable}`);

  const etiquetasPath = path.join(path.dirname(archivo), 'etiquetas.json');
  const etiquetasGlobales = cargarEtiquetasJSON(etiquetasPath);

  // Primer loop: recolectar etiquetas existentes
  for (const item of preguntas) {
    if (Array.isArray(item.etiquetas)) {
      item.etiquetas.forEach(et => etiquetasGlobales.add(et));
    }
  }

  guardarEtiquetasJSON(etiquetasGlobales, etiquetasPath);

  // Segundo loop: asignar etiquetas nuevas
  for (const item of preguntas) {
    console.log(`\n${separador}`);
    console.log("📘 Pregunta:");
    console.log(item.pregunta);
    console.log("\n✅ Correcta:");
    console.log(item.correcta);
    console.log("\n📝 Comentario:");
    console.log(item.comentario || "(sin comentario)");

    // console.log(`\n🔖 Etiquetas existentes: ${verde}${[...etiquetasGlobales].join(" ")}${reset}`);
    console.log(`\n🔖 Etiquetas existentes: ${verde}${[...etiquetasGlobales].sort().join(" ")}${reset}`);
    const respuesta = await preguntar("\nEscribe las etiquetas que deseas agregar (separadas por espacio): ");
    const nuevas = respuesta.trim().split(/\s+/).filter(Boolean);

    if (!Array.isArray(item.etiquetas)) item.etiquetas = [];

    for (const etiqueta of nuevas) {
      if (!item.etiquetas.includes(etiqueta)) {
        item.etiquetas.push(etiqueta);
        etiquetasGlobales.add(etiqueta);
      }
    }

    guardarEtiquetasJSON(etiquetasGlobales, etiquetasPath);
  }

  // Asegura que todos tengan el campo
  for (const item of preguntas) {
    if (!Array.isArray(item.etiquetas)) item.etiquetas = [];
  }

  // Guardar nuevo archivo
  const { name, ext, dir } = path.parse(archivo);
  const nuevoNombre = path.join(dir, `${name}_etiqueta${ext}`);
  const nuevoContenido = `const ${nombreVariable} = ${JSON.stringify(preguntas, null, 2)};\n`;

  fs.writeFileSync(nuevoNombre, nuevoContenido, 'utf-8');
  console.log(`\n✅ Archivo guardado como: ${nuevoNombre}`);
  console.log(`📁 Etiquetas guardadas en: ${etiquetasPath}`);

  rl.close();
}

main();
