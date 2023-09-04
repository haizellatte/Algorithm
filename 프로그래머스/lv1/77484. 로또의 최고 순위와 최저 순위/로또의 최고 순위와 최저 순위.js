
const ranking = [
  { 0: 6 },
  { 1: 6 },
  { 2: 5 },
  { 3: 4 },
  { 4: 3 },
  { 5: 2 },
  { 6: 1 },
]

function solution(lottos, win_nums) {
  const minPoint = lottos.filter(l => win_nums.includes(l)).length;
  const zero = lottos.filter((l) => l === 0).length;

  return [
    Number(Object.values(ranking[minPoint + zero])),
    Number(Object.values(ranking[minPoint])),
  ];
}