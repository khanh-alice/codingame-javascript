const Signs = {
  R: ["L", "C"],
  P: ["R", "S"],
  C: ["P", "L"],
  L: ["S", "P"],
  S: ["C", "R"],
};

const playerCount = parseInt(readline());
let players = [];

for (let i = 0; i < playerCount; i++) {
  const inputs = readline().split(" ");
  const id = parseInt(inputs[0]);
  const sign = inputs[1];

  players.push({ id, sign, opponents: [] });
}

while (players.length > 1) {
  const [winner, opponentId] = play(players.shift(), players.shift());

  winner.opponents.push(opponentId);
  players.push(winner);
}

console.log(players[0].id);
console.log(players[0].opponents.join(" "));

function play(player1, player2) {
  if (player1.sign === player2.sign) {
    if (player1.id < player2.id) return [player1, player2.id];
    return [player2, player1.id];
  }

  if (Signs[player1.sign].includes(player2.sign)) return [player1, player2.id];
  return [player2, player1.id];
}
