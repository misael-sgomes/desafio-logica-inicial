let saldoVitorias = playerScore(77, 49)
let playerName = "Stark"

function playerScore(defeats, wins){
    let score = defeats - wins
    return score
}

if (saldoVitorias <= 10) {
    console.log("O herói " + playerName + " possui o saldo de " + saldoVitorias + " vitórias " + "seu nivel é Ferro");
} else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    console.log("O herói " + playerName + " possui o saldo de " + saldoVitorias + " vitórias " + "seu nivel é Bronze");
} else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    console.log("O herói " + playerName + " possui o saldo de " + saldoVitorias + " vitórias " + "seu nivel é Prata");
} else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    console.log("O herói " + playerName + " possui o saldo de " + saldoVitorias + " vitórias " + "seu nivel é Ouro");
} else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    console.log("O herói " + playerName + " possui o saldo de " + saldoVitorias + " vitórias " + "seu nivel é Diamante");
} else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    console.log("O herói " + playerName + " possui o saldo de " + saldoVitorias + " vitórias " + "seu nivel é Lendário");
} else if (saldoVitorias >= 101) {
    console.log("O herói " + playerName + " possui o saldo de " + saldoVitorias + " vitórias " + "seu nivel é Imortal");
}
