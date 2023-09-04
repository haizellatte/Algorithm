function solution(lottos, win_nums) {
  const minPoint = lottos.filter((l) => win_nums.includes(l)).length;
  const zero = lottos.filter((l) => l === 0).length;
  const ranking = [6, 6, 5, 4, 3, 2, 1];

  return [ranking[minPoint+zero], ranking[minPoint]];
}