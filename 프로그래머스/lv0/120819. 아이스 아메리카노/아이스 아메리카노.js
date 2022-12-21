function solution(money) {
const americano = 5500;
const cup = Math.floor(money / americano);
const change = money % americano;
const result = [cup, change];
return result;
}
//https://velog.io/@rkio/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-Javascript-%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%9E%85%EB%AC%B8-%EC%95%84%EC%9D%B4%EC%8A%A4-%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8

//내가 푼 풀이
// function solution(money) {
// let count = 0;
// let rest = 0;
    
// for(let i = 0 ; i < money; i++){
//      if(money >= 5500){
//      money -= 5500;
//      count++;
//      rest = money;
//  }
// }

// return [count, rest]
// }


//	5500   --〉 [1, 0]
//  15000  --> [2, 4000]