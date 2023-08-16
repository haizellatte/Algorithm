//

const toBinary = (arr, n) => {
  let num = [];
  arr.map(v => {
    let transNum = v.toString(2);
    // 앞에 0이 생략된 경우 
    while (transNum.length < n) {
      transNum = "0" + transNum;
    }
    num.push(transNum);
  });
  return num;
}

const changeWall = (arr) => {
  return arr.map((v) =>
    [...v]
      .map((k) => {
        if (Number(k) >= 1) {
          return "#";
        }
        return " ";
      })
      .join("")
  );
}

function solution(n, arr1, arr2) {
  const BinaryArr1 = toBinary(arr1, n);
  const BinaryArr2 = toBinary(arr2, n);
  console.log(BinaryArr2);

  const map = BinaryArr1.map((row, rowIndex) => [...row].map((c, cIndex) => {
    return c = Number(c) + Number(BinaryArr2[rowIndex][cIndex]);
  }).join(''));

  console.log(map);
  return changeWall(map);
}
