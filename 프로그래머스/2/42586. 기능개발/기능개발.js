function solution(progresses, speeds) {
  let result = [];

  while (speeds.length > 0) {
    // 개발
    for (let i in speeds) {
      if (progresses[i] < 100) {
        progresses[i] += speeds[i];
      }
    }
    
    // 배포
    let deployDay = 0;
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      deployDay++;
    }

    if (deployDay > 0) {
      result.push(deployDay);
    }
  }

  return result;
}