// https://school.programmers.co.kr/learn/courses/30/lessons/133502

//* 50%는 통과되지만 나머지는 시간 초과된다 --> continue & 재귀 함수 때문인듯 !

function solution(ingredient) {
  let hamburger = 0;
  const recipe = [1, 2, 3, 1];

  const packing = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      const isHamburger = arr.slice(i, i + 4);
      if (isHamburger.toString() === recipe.toString()) {
        hamburger++;
        arr.splice(i, 4);
      } else {
        continue;
      }
      packing(arr);
    } 
    return hamburger;
  }
  
  return packing(ingredient);
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])); // 2
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])); // 0
console.log(solution([1, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1])); // 5