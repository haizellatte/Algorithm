function solution(numbers, k) {
//첫번쨰 선수가 공을 갖고 있음
let getball = 1;
//마지막 공을 던질 선수를 찾기 위해  (k-1)번까지 반복하고, 다음 선수는 건너뛰도록 getball에 +2를 한다.
 for(let i = 0 ; i < k-1 ; i++){
    getball +=2;
    //마지막 번호를 넘어가는 경우 -> 처음 선수에게 공이 전달되도록 배열의 크기만큼 마이너스 해준다.
     if(getball > numbers.length-1){
         getball -=numbers.length
     }
  }
   return getball;
}

//numbers = [1, 2, 3, 4] -> length : 4 / k = 2
 // let getball = 1;
 // for(let i = 0 ; i < 1; i++){  //--> k-1 = 2-1 = 1
 //    getball +=2;  //--> getball = 3 -> 5
 //     if(getball > numbers.length-1){   // --> getball  = 3 -> 5/ numbers.length-1 = 3
 //         getball -=numbers.length  // --> getball = 5 - 4
 //     }
//}
