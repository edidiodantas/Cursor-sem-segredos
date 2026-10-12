import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = dirname(fileURLToPath(import.meta.url));
const arquivos = ["js/basico.js", "js/intermediario.js", "js/avancado.js"];
const texto = arquivos.map((arquivo) => readFileSync(join(raiz, arquivo), "utf8")).join("\n");
const ids = [...texto.matchAll(/id:\s*"([^"]+)"/g)].map((achado) => achado[1]);
const niveis = [...texto.matchAll(/nivel:\s*"([^"]+)"/g)].map((achado) => achado[1]);
const titulos = [...texto.matchAll(/titulo:\s*"([^"]+)"/g)].map((achado) => achado[1]);
const erros = [];

if (ids.length < 20) erros.push("Poucos capítulos: " + ids.length);
if (new Set(ids).size !== ids.length) erros.push("Id de capítulo repetido.");
if (ids.length !== niveis.length || ids.length !== titulos.length) {
  erros.push("Algum capítulo está sem id, nível ou título.");
}

const permitidos = new Set(["inicio", "basico", "intermediario", "avancado"]);
for (const nivel of niveis) {
  if (!permitidos.has(nivel)) erros.push("Nível desconhecido: " + nivel);
}

const kbds = [...texto.matchAll(/<kbd\b([^>]*)>/g)].map((achado) => achado[1]);
for (const atributos of kbds) {
  const temMac = atributos.includes("data-mac=");
  const temWin = atributos.includes("data-win=");
  if (temMac !== temWin) erros.push("kbd com só um sistema: " + atributos);
}

const esperados = ["porques", "b01", "pc", "tela", "usb", "i01", "a01", "a10", "inicio"];
for (const id of esperados) {
  if (!ids.includes(id)) erros.push("Capítulo ausente: " + id);
}

if (erros.length) {
  console.error(erros.join("\n"));
  process.exit(1);
}

console.log("Capítulos conferidos: " + ids.length);
