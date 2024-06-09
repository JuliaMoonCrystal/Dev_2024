const player1 = {
    name: "Mario",
    speed: 4,
    power: 3,
    steering: 3,
    ponts: 0
}

const player2 = {
    name: "Luigi",
    speed: 3,
    power: 4,
    steering: 4,
    ponts: 0
}

const raceTrack = {

}

async function getRandomBlock() {
    let random = Math.random()
    let result

    switch (true) {
        case random < 0.33:
            result = "RETA"
            break;

        case random < 0.66:
            result = "CURVA"
            break;
        default:
            result = "CONFRONTO"
            break;
    }

    return result
}

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round}`);

        let block = await getRandomBlock()
        console.log(`Bloco: ${block}`);

        //roll dice  alt+shift+ baixo
        let diceResult1 = await rollDice()
        let diceResult2 = await rollDice()

        // test skill
        let testSkill1 = 0
        let testSkill2 = 0

        if (block === "RETA") {
            testSkill1 = diceResult1 + character1.speed
            testSkill2 = diceResult2 + character2.speed

            await logRollResult(player1.name, "velocidade", diceResult1, player1.speed)
            await logRollResult(player2.name, "velocidade", diceResult1, player2.speed)

        }
        else if (block === "CURVA") {
            testSkill1 = diceResult1 + character1.steering
            testSkill2 = diceResult2 + character2.steering

            await logRollResult(player1.name, "manobrabilidade", diceResult1, player1.steering)
            await logRollResult(player2.name, "manobrabilidade", diceResult2, player2.steering)
        }
        else {
            let powerResult1 = diceResult1 + character1.power
            let powerResult2 = diceResult2 + character2.power

            console.log(`${character1.name} batalhou com ${character2.name}`);

            await logRollResult(player1.name, "poder", diceResult1, player1.power)
            await logRollResult(player2.name, "poder", diceResult2, player2.power)

            if (powerResult1 > powerResult2) {
                if (character2.ponts > 0) {
                    character2.ponts--
                    console.log(`${character2.name} perdeu um ponto!`);
                }
            }
            else if (powerResult2 > powerResult1) {
                if (character1.ponts > 0) {
                    character1.ponts--
                    console.log(`${character1.name} perdeu um ponto!`);
                }
            }
            else {
                console.log(`Empate, nenhum ponto foi perdido!`);
            }
        }

        if (testSkill1 > testSkill2) {
            console.log(`${character1.name} marcou um ponto!`);
            character1.ponts++
        }
        else if (testSkill2 > testSkill1) {
            console.log(`${character2.name} marcou um ponto!`);
            character2.ponts++
        }

        console.log("---------------------------------------------------------------");
    }
}

async function winner(character1,character2){
    console.log("Resultado Final");
    console.log(`${character1.name}: ${character1.ponts} ponto(s)`);
    console.log(`${character2.name}: ${character2.ponts} ponto(s)`);

    if (character1.ponts > character2.ponts) {
        console.log(`${character1.name} Venceu`);
    }
    else if(character2.ponts > character1.ponts){
        console.log(`${character2.name} Venceu`);
    }
    else{
        console.log("Corrida empatada");
    }

}

(async function main() { //funçao autoinvocavel
    console.log("🚗 Corrida entre " + player1.name + " e " + player2.name + " .....\n")
    await playRaceEngine(player1, player2)
    await winner(player1,player2)
}
)()

//main()