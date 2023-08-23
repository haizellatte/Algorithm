// https://school.programmers.co.kr/learn/courses/30/lessons/159994

//* length 비교

function solution(cards1, cards2, goal) {
  let goalIdx = 0;
  let result = [];

  while (goalIdx !== goal.length) {
    if (cards1[0] === goal[goalIdx]) {
      result.push(cards1[0]);
      cards1.shift();
      goalIdx++;
    }
    else if (cards2[0] === goal[goalIdx]) {
      result.push(cards2[0]);
      cards2.shift();
      goalIdx++;
    }
    else {
      break;
    }
  }

  return goal.length === result.length ? "Yes" : "No";
}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
); // "Yes"
console.log(
  solution(
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
); // "No"