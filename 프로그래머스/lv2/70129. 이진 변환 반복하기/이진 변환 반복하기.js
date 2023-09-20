const ToBinary = (n) => {
  return n.toString(2);
}

const CountZero = (n) => {
  return [...n.toString(2)].filter((v) => v === "0").length;
};

function solution(s) {
  let [count, deleteZero] = [0, 0];
  while (s !== '1') {
    count++;
    deleteZero += CountZero(s);
    s = ToBinary(s.length - CountZero(s));
  }
  return [count, deleteZero]; 
}