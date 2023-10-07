// https://school.programmers.co.kr/learn/courses/30/lessons/178871?language=javascript

function solution(players, callings) {
  const obj = {};

  for (let i = 0; i < players.length; i++) {
    obj[players[i]] = i;
  }

  console.log(obj);

  for (let i = 0; i < callings.length; i++) {
    console.log(players);
    // { mumu: 0, soe: 1, poe: 2, kai: 3, mine: 4 }
    // 등수 ["mumu", "soe", "poe", "kai", "mine"]
    // 불림 ["kai", "kai", "mine", "mine"]
    const player = callings[i];
    const rank = obj[player];
    const prePlayer = players[rank - 1];
    const preRank = obj[prePlayer];
    // console.log(player, rank, prePlayer, preRank);

    players[preRank] = player;
    players[rank] = prePlayer;

    obj[player] = preRank;
    obj[prePlayer] = rank;

    // console.log(obj);
  }

  return Object.values(players);
}

console.log(solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]));
// ["mumu", "kai", "mine", "soe", "poe"]