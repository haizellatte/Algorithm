2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
function solution(my_string) {
    let answer = [""];

    for(let i=0;i<my_string.length;i++) {
        if(my_string[i] === " ") {
            if(answer[answer.length - 1] !== "")
                answer.push("");
        } else {
            answer[answer.length - 1] += my_string[i];
        }
    }

    if(answer[answer.length - 1] === "")
        answer.pop();

    return answer;
}