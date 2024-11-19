import cs from "./cesar.js"

const mensagem = "ola mundo";
const mensagemCript = "rood qxpgr"
const chave = 3;

const criptografada = cs.criptografia(mensagem, chave, "c");
console.log("Criptografada:", criptografada); // Saída esperada: "rod pxqgr"

const decifrada = cs.criptografia(mensagemCript, chave, "d");
console.log("Decifrada:", decifrada); // Saída esperada: "ola mundo"
