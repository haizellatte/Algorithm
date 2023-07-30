function f(arr, query) {
  const [s, e, k] = query;
  const filtered = arr
    .slice(s, e + 1)
    .filter((x) => x > k)
    .sort((a, b) => a - b);

  return filtered[0] !== undefined ? filtered[0] : -1;
}

function solution(arr, queries) {
  return queries.map((query) => f(arr, query));
}