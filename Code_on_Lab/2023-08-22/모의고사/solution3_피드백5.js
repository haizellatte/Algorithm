// https://school.programmers.co.kr/learn/courses/30/lessons/42840

//* 함수 분리

function grading(answers, arr) {
  return answers.filter((x, i) => x === arr[i % arr.length]).length;
}

function returnResult(grade) {
  const max = Math.max(...grade);

  return grade.reduce((acc, x, i) => {
    if (x === max) {
      acc.push(i + 1);
    }
    return acc;
  }, []);
}

function solution(answers) {
  const pArr = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const grade = pArr.map(grading.bind(null, answers));
  return returnResult(grade);
}

console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1,2,3]
console.log(solution([5, 5, 5, 5, 5, 5, 5, 5, 5, 5])); // [1, 3]
console.log(solution([1, 1, 1, 1, 1, 1, 1, 1, 1])); // [1, 3]
