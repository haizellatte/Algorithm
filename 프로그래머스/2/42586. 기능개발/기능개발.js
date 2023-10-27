function solution(progresses, speeds) {
  let result = [];
  const leftDevelopDays = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));

  let currentProgress = leftDevelopDays[0];
  let progressDays = 0;
  leftDevelopDays.forEach((progress) => {
    if (currentProgress >= progress) {
      progressDays++;
    } else {
      currentProgress = progress;
      result.push(progressDays);
      progressDays = 1;
    }
  });

  if (progressDays) {
    result.push(progressDays);
  }

  return result;
}