
// 조건 1 확인
function checkI(s, e, i) {
  return (s <= i && i <= e);
}

// 조건 2 확인
function checkMultiple(i, k) {
  return (i % k === 0);
}

function solution(arr, queries) {
    arr.map((v, i) => {
      queries.map(([s, e, k]) => {
        if (checkI(s, e, i) && checkMultiple(i, k)) {
          arr[i] += 1;
        }
      });
    })
  return arr;
}