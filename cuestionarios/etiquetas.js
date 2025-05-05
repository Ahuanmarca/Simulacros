const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Colores para resaltado en terminal
const verde = '\x1b[32m';
const amarillo = '\x1b[33m';
const reset = '\x1b[0m';
const separador = '\x1b[90m' + '-'.repeat(60) + reset;

// CLI
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

function parseArgs() {
  const archivo = process.argv[2];
  let etiquetasFiltro = [];

  const eIndex = process.argv.indexOf('-e');
  if (eIndex !== -1 && process.argv[eIndex + 1]) {
    etiquetasFiltro = process.argv[eIndex + 1].split(/\s+/);
  }

  return { archivo, etiquetasFiltro };
}

function tieneTodasLasEtiquetas(item, etiquetasBuscadas) {
  if (!Array.isArray(item.etiquetas)) return false;
  return etiquetasBuscadas.every(e => item.etiquetas.includes(e));
}

async function main() {
  const { archivo, etiquetasFiltro } = parseArgs();
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
    if (etiquetasFiltro.length > 0 && !tieneTodasLasEtiquetas(item, etiquetasFiltro)) {
      continue;
    }

    console.log(`\n${separador}`);
    console.log("📘 Pregunta:");
    console.log(item.pregunta);
    console.log("\n✅ Correcta:");
    console.log(item.correcta);
    console.log("\n📝 Comentario:");
    console.log(item.comentario || "(sin comentario)");

    const etiquetasItem = Array.isArray(item.etiquetas) ? [...item.etiquetas].sort() : [];
    console.log(`\n🏷️ Etiquetas del ítem:     ${amarillo}${etiquetasItem.join(" ")}${reset}`);
    console.log(`🔖 Etiquetas disponibles: ${verde}${[...etiquetasGlobales].sort().join(" ")}${reset}`);

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
  // const { name, ext, dir } = path.parse(archivo);
  // const nuevoNombre = path.join(dir, `${name}_etiqueta${ext}`);
  // const nuevoContenido = `const ${nombreVariable} = ${JSON.stringify(preguntas, null, 2)};\n`;

  // fs.writeFileSync(nuevoNombre, nuevoContenido, 'utf-8');
  // console.log(`\n✅ Archivo guardado como: ${nuevoNombre}`);

  const nuevoContenido = `const ${nombreVariable} = ${JSON.stringify(preguntas, null, 2)};\n`;
  fs.writeFileSync(archivo, nuevoContenido, 'utf-8');
  console.log(`\n✅ Archivo actualizado: ${archivo}`);
  console.log(`📁 Etiquetas guardadas en: ${etiquetasPath}`);

  rl.close();
}

main();
