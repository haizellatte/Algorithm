const solution = (operations) => {
    let queue = [];

    for (op of operations) {
      const [char, n] = op.split(' ');
      const num = Number(n);

      switch (char) {
        case "I" : 
          queue.push(num);
          queue.sort((a, b) => a - b);
          break;
        case "D" :
          // "D 1" : 최대값 삭제
          if (num === 1) queue.pop();
          // "D -1" : 최소값 삭제
          else queue.shift();
          break;
      }
    }
    return queue.length === 0 ? [0, 0] : [queue.at(-1), queue.at(0)];
}