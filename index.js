// Importa a biblioteca prompt-sync
const prompt = require('prompt-sync')();

// Constantes para os níveis de herói
const NIVEIS_HEROI = {
    FERRO: "Ferro",
    BRONZE: "Bronze",
    PRATA: "Prata",
    OURO: "Ouro",
    PLATINA: "Platina",
    ASCENDENTE: "Ascendente",
    IMORTAL: "Imortal",
    RADIANTE: "Radiante",
};

// Limites de experiência para cada nível
const LIMITE_EXPERIENCIA = {
    [NIVEIS_HEROI.FERRO]: 1000,
    [NIVEIS_HEROI.BRONZE]: 2000,
    [NIVEIS_HEROI.PRATA]: 5000,
    [NIVEIS_HEROI.OURO]: 7000,
    [NIVEIS_HEROI.PLATINA]: 8000,
    [NIVEIS_HEROI.ASCENDENTE]: 9000,
    [NIVEIS_HEROI.IMORTAL]: 10000,
};

// Classe Heroi para encapsular a lógica do herói
class Heroi {
    constructor(nome, experiencia) {
        this.nome = nome;
        this.experiencia = experiencia;
        this.nivel = this.classificarHeroi();
    }

    classificarHeroi() {
        if (this.experiencia < LIMITE_EXPERIENCIA[NIVEIS_HEROI.FERRO]) {
            return NIVEIS_HEROI.FERRO;
        } else if (this.experiencia <= LIMITE_EXPERIENCIA[NIVEIS_HEROI.BRONZE]) {
            return NIVEIS_HEROI.BRONZE;
        } else if (this.experiencia <= LIMITE_EXPERIENCIA[NIVEIS_HEROI.PRATA]) {
            return NIVEIS_HEROI.PRATA;
        } else if (this.experiencia <= LIMITE_EXPERIENCIA[NIVEIS_HEROI.OURO]) {
            return NIVEIS_HEROI.OURO;
        } else if (this.experiencia <= LIMITE_EXPERIENCIA[NIVEIS_HEROI.PLATINA]) {
            return NIVEIS_HEROI.PLATINA;
        } else if (this.experiencia <= LIMITE_EXPERIENCIA[NIVEIS_HEROI.ASCENDENTE]) {
            return NIVEIS_HEROI.ASCENDENTE;
        } else if (this.experiencia <= LIMITE_EXPERIENCIA[NIVEIS_HEROI.IMORTAL]) {
            return NIVEIS_HEROI.IMORTAL;
        } else {
            return NIVEIS_HEROI.RADIANTE;
        }
    }

    // Método para formatar a saída
    getDescricao() {
        return `O Herói de nome ${this.nome} está no nível de ${this.nivel}.`;
    }
}

// Função para ler o nome do herói
function obterNomeHeroi() {
    return prompt("Digite o nome do herói (ex: Arthur): ");
}

// Função para ler e validar a experiência do herói
function obterExperienciaHeroi() {
    let experienciaHeroi;
    do {
        const experienciaInput = prompt("Digite a quantidade de experiência (XP) do herói (ex: 7500): ");
        experienciaHeroi = parseInt(experienciaInput);
        if (isNaN(experienciaHeroi) || experienciaHeroi < 0) {
            console.log("Por favor, insira um número válido para a experiência (XP).");
        }
    } while (isNaN(experienciaHeroi) || experienciaHeroi < 0);
    return experienciaHeroi;
}

// Função principal
function main() {
    const herois = []; // Array para armazenar os heróis
    let continuar; // Variável para controlar o loop

    do {
        const nomeHeroi = obterNomeHeroi();
        const experienciaHeroi = obterExperienciaHeroi();

        // Adiciona o herói ao array
        const novoHeroi = new Heroi(nomeHeroi, experienciaHeroi);
        herois.push(novoHeroi);

        // Pergunta se o usuário quer continuar
        continuar = prompt("Deseja adicionar outro herói? (s/n): ").toLowerCase();
    } while (continuar === 's');

    // Exibe todos os heróis cadastrados, se houver algum
    if (herois.length > 0) {
        console.log("Lista de heróis:");
        herois.forEach(heroi => {
            console.log(heroi.getDescricao());
        });
    } else {
        console.log("Nenhum herói foi cadastrado.");
    }
}

// Executa a função principal
main();
