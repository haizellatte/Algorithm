function solution(progresses, speeds) {
  let result = [];

  while (speeds.length > 0) {
    progresses.forEach((_, i) => (progresses[i] += speeds[i]));

    let deployDay = 0;
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      deployDay++; // 배포는 하루에 한번만 할 수 있기 때문에 배포하면 하루가 지나가게된다.
    }

    if (deployDay > 0) {
      result.push(deployDay);
    }
  }

  return result;
}