function pushKeypad(keymap, c) {
  return keymap
    .map((k) => k.indexOf(c) + 1)
    .sort((a, b) => a - b)
    .filter((v) => v > 0)[0];
}

function solution(keymap, targets) {
  let answer = [];
  
  for (let i = 0; i < targets.length; i++) {
    let count = 0;
    for (let j = 0; j < targets[i].length; j++) {
      count += pushKeypad(keymap, targets[i][j]); 
    }
    answer.push(count);
    count = 0;
  }

  return answer.map(a => !isNaN(a) ? a : -1);
}