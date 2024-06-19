// Função para calcular o saldo de partidas
function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Função para determinar o nível com base nas vitórias
function determinarNivel(vitorias) {
    let nivel;

    switch (true) {
        case (vitorias < 10):
            nivel = "Ferro";
            break;
        case (vitorias >= 11 && vitorias <= 20):
            nivel = "Bronze";
            break;
        case (vitorias >= 21 && vitorias <= 50):
            nivel = "Prata";
            break;
        case (vitorias >= 51 && vitorias <= 80):
            nivel = "Ouro";
            break;
        case (vitorias >= 81 && vitorias <= 90):
            nivel = "Diamante";
            break;
        case (vitorias >= 91 && vitorias <= 100):
            nivel = "Lendário";
            break;
        case (vitorias >= 101):
            nivel = "Imortal";
            break;
        default:
            nivel = "Desconhecido";
    }

    return nivel;
}

// Parâmetros de entrada
let vitorias = 55; // Exemplo de número de vitórias
let derrotas = 20; // Exemplo de número de derrotas

// Chama a função de saldo
let saldoVitorias = calcularSaldo(vitorias, derrotas);
// Chama a função de nível
let nivel = determinarNivel(vitorias);

// Exibe a mensagem final
console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
