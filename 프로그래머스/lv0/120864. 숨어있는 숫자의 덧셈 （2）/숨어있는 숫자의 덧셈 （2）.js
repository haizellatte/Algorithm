function solution(my_string) {
let numString = my_string.trim().replace(/[^0-9]/g, " ").split(" ").filter((el) => el !=="");
    return numString.reduce((a,b) => Number(a) + Number(b), 0);
}