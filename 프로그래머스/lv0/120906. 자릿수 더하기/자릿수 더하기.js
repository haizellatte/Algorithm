function solution(n) {
let str = String(n);
let result = [...str].reduce((acc,ele)=>{
    return Number(acc)+ Number(ele)
}, 0)
return result;
}