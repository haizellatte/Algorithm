// https://school.programmers.co.kr/learn/courses/30/lessons/42840

//! 테스트케이스는 통과하지만 채점결과 불합격이다. 왜지 !?!!?|

// 점수 확인
function grading(arr, answers) {
  let score = 0;
  arr.map((v, i) => {
    if (v === answers[i]) {
      score++;
    }
  })
  return score;
}

function addAnswers(arr, answers) {
  let add = answers.length - arr.length;
  return arr.concat(arr.slice(0, add));
}

function solution(answers) {
  const person1 = [1, 2, 3, 4, 5];
  const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const gradePerson1 = grading(addAnswers(person1, answers), answers);
  const gradePerson2 = grading(addAnswers(person2, answers), answers);
  const gradePerson3 = grading(addAnswers(person3, answers), answers);
  const max = Math.max(gradePerson1, gradePerson2, gradePerson3);
  console.log(gradePerson1, max, gradePerson1 === max);
  console.log(gradePerson2, max, gradePerson2 === max);
  console.log(gradePerson3, max, gradePerson3 === max);
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


console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1,2,3]
console.log(solution([5, 5, 5, 5, 5, 5, 5, 5, 5, 5])); // [1, 3]
console.log(solution([1, 1, 1, 1, 1, 1, 1, 1, 1])); // [1, 3]