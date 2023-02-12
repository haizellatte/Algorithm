function solution(s) {
    let ss = s.split(' ')
    console.log(ss)
    let sum = 0;
    for(let i = 0 ; i < ss.length ; i += 1){
        if(ss[i] !== 'Z') {
            sum += Number(ss[i]);
            console.log(sum)
        } else if(ss[i] === 'Z'){
            sum -= Number(ss[i-1]);
            console.log(sum)
        }
    }
    return sum;
}