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