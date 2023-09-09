// https://school.programmers.co.kr/learn/courses/30/lessons/12950

// ❌ for문으로 구현하려 했으나 1차원 배열로만 만들어졌다.

function solution(arr1, arr2) {
  var answer = [];
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr1[i].length; j++) {
      answer.push(arr1[i][j] + arr2[i][j]);
    }
  }
  return answer;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
); // [[4, 6], [7, 9]]
console.log(solution([[1], [2]], [[3], [4]])); // [[4], [6]]
