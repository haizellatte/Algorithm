function solution(my_string) {
const result = my_string.replace(/[^0-9]/g, "");
[...result].sort((a,b) => a-b);
result.split(',');

return result;
}