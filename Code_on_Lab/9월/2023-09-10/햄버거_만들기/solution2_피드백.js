// https://school.programmers.co.kr/learn/courses/30/lessons/133502?language=javascript

// 빵-야채-고기-빵
// 1-2-3-1

function solution(ingredient) {
  let result = 0;
  const temp = [];

  for (let i = 0; i < ingredient.length; i++) {
    temp.push(ingredient[i]);

    // console.log(temp, temp.slice(-4).join(''));
    if (temp.slice(-4).join('') === '1231') {
      result += 1;
      temp.splice(-4);
    }
  }

  return result;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])); // 2
// console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])); // 0
