// https://school.programmers.co.kr/learn/courses/30/lessons/12950

// 아이디어 노트 : arr1[0][0] = arr1[0][0] + arr2[0][0] / arr1[0][1] =arr1[0][1] + arr2[0][1]...

function solution(arr1, arr2) {
  return arr1.map((arr, aIndex) =>
    arr.map((n, bIndex) => n + arr2[aIndex][bIndex])
  );
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
