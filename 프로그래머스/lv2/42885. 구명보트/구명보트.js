function solution(people, limit) {
  // people 오름차순 정렬
  people.sort((a, b) => a - b);
  let count = 0;
  let [light, heavy] = [0, people.length - 1];

  while (light <= heavy) {
    if (light === heavy) {
      count++; 
      break; //light와 heavy가 같아지면 두 포인터가 겹쳐진 순간으로 모든 요소에 대한 점검이 끝났기에 while문을 종료한다.
    }
    if (people[light] + people[heavy] <= limit) {
      count++;
      light++;
      heavy--;
    } else {
      count++;
      heavy--;
    }
  }

  return count;
}