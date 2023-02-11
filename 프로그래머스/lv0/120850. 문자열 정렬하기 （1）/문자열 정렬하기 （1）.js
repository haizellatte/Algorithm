function solution(my_string) {
const result = my_string.replace(/[^0-9]/g, "");
const final = [...result].sort((a,b) => a-b);
const last = final.map(el => parseInt(el))

return last;
}