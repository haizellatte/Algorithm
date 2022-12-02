function solution(n) {              //15
let pizza = 7;


if(n <= pizza){
    return 1;
}else if(n > pizza){
    for(let i = 0 ; i < n ; i++){
        if(n > pizza){              //8,
            pizza++;
        }
    }
}
  return Math.ceil(pizza/7);
}