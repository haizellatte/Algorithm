function solution(strings, n) {
  strings.sort((a, b) => {
    // 1. 각 단어의 n자리 비교
    if (a[n] > b[n]) {
      return 1;
    }
    if (a[n] < b[n]) {
      return -1;
    }

    else {
      // 2. n자리가 같을 시 전체 단어를 비교
      return a > b ? 1 : -1;
    }

  })
  return strings;
} 