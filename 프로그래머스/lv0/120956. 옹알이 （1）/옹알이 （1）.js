function solution(babbling) {
  return babbling
    .map((v) => v.replace(/(aya|ye|woo|ma)/g, ""))
    .filter((v) => !v).length;
}