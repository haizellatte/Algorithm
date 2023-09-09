// https://school.programmers.co.kr/learn/courses/30/lessons/176963

const checkMissingPoint = (arr, name, yearning) => {
  return arr.map(p => {
    let person = name.indexOf(p);
    return person >= 0 ? yearning[person] : 0;
    })
}

function solution(name, yearning, photos) {
  const missingPont = photos
    .map(photo => checkMissingPoint(photo, name, yearning)
  );

  return missingPont.map(p => p.reduce((a, b) => a + b));
}

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
); // [19, 15, 6]
console.log(
  solution(
    ["kali", "mari", "don"],
    [11, 1, 55],
    [
      ["kali", "mari", "don"],
      ["pony", "tom", "teddy"],
      ["con", "mona", "don"],
    ]
  )
); // [67, 0, 55]
console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [["may"], ["kein", "deny", "may"], ["kon", "coni"]]
  )
); // [5, 15, 0]