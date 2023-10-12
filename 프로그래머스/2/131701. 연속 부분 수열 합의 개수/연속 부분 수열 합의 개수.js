function solution(elements) {
  const set = new Set();
  const len = elements.length;

  for (let i = 0; i < len; i++) {
    let sum = 0;
    for (let j = 0; j < len; j++) {
      sum += elements[(i + j) % len]; // 확장하지 않고 elements길이를 나눈 나머지값을 통해 i부터 j개의 값을 누적해 더한다.
      set.add(sum);
    }
  }
  // console.log(set)
  return set.size;
}