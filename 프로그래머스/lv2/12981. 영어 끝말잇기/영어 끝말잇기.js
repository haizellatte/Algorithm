function solution(n, words) {
  let savedLastWord = words[0].at(0);
  console.log(savedLastWord);
  const passWords = [];
  let [failPerson, failTurn] = [0, 0];

  words.every((w, i) => {
    //* 중복단어 사용
    if (passWords.includes(w)) {
      failPerson = (i % n) + 1;
      failTurn = Math.floor(i / n) + 1;
      return false;
    }
    //* 끝말잇기 실패
    if (w[0].at(0) !== savedLastWord) {
      failPerson = (i % n) + 1;
      failTurn = Math.floor(i / n) + 1;
      return false;
    }
    savedLastWord = w.slice(-1); // startIndex가 0보다 작은 경우에 startIndex + array.length의 값으로 사용된다.
    passWords.push(w);

    return true;
  })

  return [failPerson, failTurn];
}