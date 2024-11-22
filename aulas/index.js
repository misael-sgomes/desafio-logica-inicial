let nomeHeroi = "Stark";
let xpHeroi = 8000;

if (xpHeroi <= 1000) {
    console.log("O herói " + nomeHeroi + " está no nível " + "Ferro " + xpHeroi + " XP");
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    console.log("O herói " + nomeHeroi + " está no nível " + "Bronze " + xpHeroi + " XP");
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    console.log("O herói " + nomeHeroi + " está no nível " + "Prata " + xpHeroi + " XP");
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    console.log("O herói " + nomeHeroi + " está no nível " + "Ouro " + xpHeroi + " XP");
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    console.log("O herói " + nomeHeroi + " está no nível " + "Platina " + xpHeroi + " XP");
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    console.log("O herói " + nomeHeroi + " está no nível " + "Ascendente " + xpHeroi + " XP");
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    console.log("O herói " + nomeHeroi + " está no nível " + "Imortal " + xpHeroi + " XP");
} else if (xpHeroi >= 10001) {
    console.log("O herói " + nomeHeroi + " está no nível " + "Radiante " + xpHeroi + " XP");
}
