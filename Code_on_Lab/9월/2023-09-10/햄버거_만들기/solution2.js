// https://school.programmers.co.kr/learn/courses/30/lessons/133502

//* if문에 조건이 해당되면 i-3을 해서 다시 배열의 처음부터 반복문을 돌게 설정해서 해결했다 !

function solution(ingredient) {
  let hamburger = 0;
  const recipe = [1, 2, 3, 1];
  
  for (let i = 0; i < ingredient.length; i++) {
    const isHamburger = ingredient.slice(i, i + 4);
    if (isHamburger.toString() === recipe.toString()) {
      hamburger++;
      ingredient.splice(i, 4);
      i = i - 3;
    }
  }
  return hamburger;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])); // 2
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])); // 0
console.log(
  solution([
    1, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1,
  ])
); // 5
