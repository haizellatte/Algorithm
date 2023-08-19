// https://school.programmers.co.kr/learn/courses/30/lessons/86491

/*
* 아이디어 노트 :
* 반복문을 돌면서 sizes[0][0] * sizes[0][1], sizes[0][0] * sizes[1][1], sizes[0][0] * sizes[2][1], sizes[0][0] * sizes[3][1], sizes[1][0] * sizes[1][1], sizes[1][0] * sizes[2][1] ... 각 값을 새 배열에 담고 그중 가장 작은 값(Math.min)을 찾아 리턴한다.
* --> ❌ 그럼 모든 지갑을 수납한다는 조건에 맞지 않는다. 바보
*/

function solution(sizes) {
    let arr = [];
    
    for (let i = 0; i < sizes.length; i++) {
      for (let j = 0; j < sizes.length; j++) {
            arr.push(sizes[i][0] * sizes[j][1]);
        }
    }
  console.log(arr);
  return Math.min(...arr);
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
); // 4000
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
); // 120
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
); // 133