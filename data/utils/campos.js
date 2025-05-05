const fs = require('fs');
const path = require('path');

const CAMPOS_NUEVOS = {
  aciertos_consecutivos: 0,
  fallos_totales: 0,
  veces_vista: 0,
  ultima_vez_vista: null,
  ultima_vez_acertada: null,
  descartada: false,
  proxima_revision: null,
  notas_personales: "",
};

function main() {
  const archivo = process.argv[2];
  if (!archivo) {
    console.error("❌ Debes indicar el archivo JS como argumento.");
    process.exit(1);
  }

  const contenido = fs.readFileSync(archivo, 'utf-8');
  const nombreVariable = contenido.match(/const (\w+)\s*=\s*\[/)[1];
  const preguntas = eval(contenido + `\n${nombreVariable}`);

  for (const item of preguntas) {
    for (const [clave, valor] of Object.entries(CAMPOS_NUEVOS)) {
      if (!(clave in item)) {
        item[clave] = valor;
      }
    }
  }

  const nuevoContenido = `const ${nombreVariable} = ${JSON.stringify(preguntas, null, 2)};\n`;
  fs.writeFileSync(archivo, nuevoContenido, 'utf-8');

  console.log(`\n✅ Archivo actualizado: ${archivo}`);
}

main();
