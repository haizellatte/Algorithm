// https://school.programmers.co.kr/learn/courses/30/lessons/42840

//! 각 person의 길이를 덧붙이는 대신 -> i % length으로 대체하니 문제가 해결되었다 !

function f1(arr, n) {
  for (let i = 0; i < n; i++) {
    console.log(arr[i % arr.length]);
  }
}

// f1([1, 2, 3], 10);

function f2(answers, arr) {
  for (let i = 0; i < answers.length; i++) {
    console.log(answers[i], arr[i % arr.length], answers[i] === arr[i % arr.length]);
  }
}

f2([1, 3, 2, 4, 2], [1, 2, 3, 4, 5]);
f2([1, 3, 2, 4, 2], [2, 1, 2, 3, 2, 4, 2, 5]);
f2([1, 3, 2, 4, 2], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]);

function f3(answers, arr) {
  return answers.filter((x, i) => x === arr[i % arr.length]);
}

console.log(f3([1, 3, 2, 4, 2], [1, 2, 3, 4, 5]));
console.log(f3([1, 3, 2, 4, 2], [2, 1, 2, 3, 2, 4, 2, 5]));
console.log(f3([1, 3, 2, 4, 2], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]));

function grading(answers, arr) {
  let score = 0;
  answers.forEach((a, i) => {
    if (a === arr[i % arr.length]) {
      score++;
    }
  });
  return score;
}

function solution(answers) {
  const person1 = [1, 2, 3, 4, 5];
  const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const gradePerson1 = grading(answers, person1);
  const gradePerson2 = grading(answers, person2);
  const gradePerson3 = grading(answers, person3);
  const max = Math.max(gradePerson1, gradePerson2, gradePerson3);
  let answer = [];

  if (gradePerson1 === max) {
    answer.push(1);
  }
  if (gradePerson2 === max) {
    answer.push(2);
  }
  if (gradePerson3 === max) {
    answer.push(3);
  }

  return answer;
}

// console.log(solution([1, 2, 3, 4, 5])); // [1]
// console.log(solution([1, 3, 2, 4, 2])); // [1,2,3]
// console.log(solution([5, 5, 5, 5, 5, 5, 5, 5, 5, 5])); // [1, 3]
// console.log(solution([1, 1, 1, 1, 1, 1, 1, 1, 1])); // [1, 3]
