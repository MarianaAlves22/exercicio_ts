type pessoas = {
    nome: string;
    trabalho?: string[];
    idade: number;
}

const pessoa1: pessoas = {
        nome: "Julia",
        trabalho: ["Bombeira"],
        idade: 25
}

const pessoa2: pessoas = {
        nome: "Roberto",
        trabalho: ["Arquiteto"],
        idade: 30
}

console.log("olá " + pessoa1.nome);
console.log("olá " + pessoa2.nome);