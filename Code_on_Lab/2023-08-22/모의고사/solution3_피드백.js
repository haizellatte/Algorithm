// https://school.programmers.co.kr/learn/courses/30/lessons/42840

//* 함수 분리

function grading(answers, arr) {
  let score = 0;
  answers.forEach((a, i) => {
    if (a === arr[i % arr.length]) {
      score++;
    }
  });
  return score;
}

function returnResult(max, arr1, arr2, arr3) {
  // let answer = [];
  // if (arr1 === max) {
  //   answer.push(1);
  // }
  // if (arr2 === max) {
  //   answer.push(2);
  // }
  // if (arr3 === max) {
  //   answer.push(3);
  // }
  // return answer;

  return [arr1, arr2, arr3].reduce((acc, x, i) => {
    if (x === max) {
      acc.push(i + 1);
    }
    return acc;
  }, []);
}

function solution(answers) {
  const person1 = [1, 2, 3, 4, 5];
  const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const gradePerson1 = grading(answers, person1);
  const gradePerson2 = grading(answers, person2);
  const gradePerson3 = grading(answers, person3);
  const max = Math.max(gradePerson1, gradePerson2, gradePerson3);

  return returnResult(max, gradePerson1, gradePerson2, gradePerson3)
}

console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1,2,3]
console.log(solution([5, 5, 5, 5, 5, 5, 5, 5, 5, 5])); // [1, 3]
console.log(solution([1, 1, 1, 1, 1, 1, 1, 1, 1])); // [1, 3]
