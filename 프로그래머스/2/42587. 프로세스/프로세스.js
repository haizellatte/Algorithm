// https://school.programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
  let result = 0;

  const list = priorities.map((t, i) => ({
    location: i === location,
    priority: t,
  }));

  while (true) {
    //* list의 첫번째 요소를 뽑음
    const firstEle = list.shift();
    //* list 안에 더 높은 우선 순위가 있는지 확인)
    const ListhasMoreHighPriority = list.some(
      (el) => el.priority > firstEle.priority
    );

    if (ListhasMoreHighPriority) {
      //* list 안에 더 높은 우선순위인 숫자가 있으면(true) firstEle를 list의 맨뒤에 push
      list.push(firstEle);
    } else {
      //* firstEle가 가장 높은 순위라면 result++;
      result++;
      //* 이때 firstEle의 location이 true라면 즉시 result를 리턴
      if (firstEle.location) {
        return result;
      }
    }
  }
}

console.log(solution([2, 1, 3, 2], 2)); // 1
// console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5
