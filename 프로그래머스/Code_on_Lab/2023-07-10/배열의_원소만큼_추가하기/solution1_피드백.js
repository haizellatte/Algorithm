// https://school.programmers.co.kr/learn/courses/30/lessons/181861#

// range
// range fill
function range(n, fv) {
    if (fv === undefined) {
        fv = 0;
    }

    const result = [];

    for (let i = 0; i < n; i++) {
        result.push(fv);
    }

    return result;
}

// console.log(range(5)); // [0, 0, 0, 0, 0]
// console.log(range(5, 3)); // [3, 3, 3, 3, 3]


function solution(arr) {
  let result = [];
  
  for (let i = 0; i < arr.length; i++) {
      // console.log(range(arr[i], arr[i]));
      result = result.concat(range(arr[i], arr[i]));
  }

  return result;
}

console.log(solution([5, 1, 4])); // [5, 5, 5, 5, 5, 1, 4, 4, 4, 4]
console.log(solution([6, 6])); // [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
console.log(solution([1])); // [1]