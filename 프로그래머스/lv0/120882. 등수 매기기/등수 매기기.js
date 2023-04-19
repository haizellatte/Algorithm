function solution(score) {
    let EachEverage = score.map((el) => {
    return (el[0] + el[1]) / 2;
  }); // [75, 70, 55, 65]
  let sorted = [...EachEverage].sort((a, b) => b - a); // [75, 70, 65, 55];
    return EachEverage.map((el) => {
    return sorted.indexOf(Number(el))+1;
    })
}