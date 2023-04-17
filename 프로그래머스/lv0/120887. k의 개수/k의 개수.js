function solution(i, j, k) {
  let count = "";
  for (i; i <= j; i++) {
    count += i;
  }
  return count.split(k).length - 1;
}