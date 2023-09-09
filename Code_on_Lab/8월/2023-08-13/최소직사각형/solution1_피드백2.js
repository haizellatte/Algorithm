// https://school.programmers.co.kr/learn/courses/30/lessons/86491

// ❌ 

function solution(sizes) {
  for (let i = 0; i < sizes.length; i++) {
      //  sizes[i] 마다 작은 값이 [0], 큰 값을 [1]로 정렬한다.
        sizes[i] = sizes[i].sort(); // [ [ 50, 60 ], [ 30, 70 ], [ 30, 60 ], [ 40, 80 ] ];
    }
  console.log(sizes);
  
    const wMax = Math.max(...sizes.map(arr => arr[0]));
    const hMax = Math.max(...sizes.map(arr => arr[1]));

    return wMax * hMax;
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