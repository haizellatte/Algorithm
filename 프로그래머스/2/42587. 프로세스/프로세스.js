function solution(priorities, location) {
  const nQueue = [...priorities];
  const indexQueue = priorities.map((_, i) => i);
  const outTurn = [];

  while (nQueue.length > 0) {
    let outN = nQueue[0];
    let maxN = Math.max(...nQueue);

    if (outN === maxN) {
      outTurn.push(indexQueue[0]);
    } else {
      nQueue.push(outN);
      indexQueue.push(indexQueue[0]);
    }
    nQueue.shift();
    indexQueue.shift();


    if (outTurn.at(-1) === location) {
      break;
    }
  };

  return outTurn.length;
}