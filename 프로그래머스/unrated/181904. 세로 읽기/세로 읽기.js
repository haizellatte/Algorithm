function solution(my_string, m, c) { 
    let result = []; // ["ihrh","bakr","fpnd","oplj","hygc"]
    let answer = "";
    
    for (let i = 0; i < my_string.length ; i += m) {
        let row = my_string.slice(i, i + m)
        result.push(row);
    }
     result.map((el) => answer += el[c - 1]);
     return answer;
}