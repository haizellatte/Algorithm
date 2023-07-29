function solution(arr, queries) {
  queries.map(([i, j]) => {
    [arr[i], arr[j]] = [arr[j], arr[i]]
  });
    return arr;
}