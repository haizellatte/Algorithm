// https://school.programmers.co.kr/learn/courses/30/lessons/178871

function MakeObject(players, keyOption){
  return players.reduce((acc, cur, i) => {
    keyOption ? (acc[cur] = i + 1) : (acc[i+1] = cur);
    return acc;
  }, {});
}

function solution(players, callings) {
  const keyPlayers = MakeObject(players, true); //* 선수를 key로 갖는 객체 --> { mumu: 1, soe: 2, poe: 3, kai: 4, mine: 5 }
  const keyRanks = MakeObject(players, false); //* 현재 등수를 key로 갖는 객체 --> { '1': 'mumu', '2': 'soe', '3': 'poe', '4': 'kai', '5': 'mine' }

  for (let i = 0; i < callings.length; i++) {
    const beforeCallingPlayer = keyRanks[keyPlayers[callings[i]] - 1];
    keyRanks[keyPlayers[callings[i]]] = beforeCallingPlayer;
    keyRanks[keyPlayers[beforeCallingPlayer]] = callings[i];
    keyPlayers[callings[i]] -= 1;
    keyPlayers[beforeCallingPlayer] += 1;
  }

  return Object.values(keyRanks);
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
); // ["mumu", "kai", "mine", "soe", "poe"]