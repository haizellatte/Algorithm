
function solution(phone_number) {
  const e = phone_number.length - 4;
  return [...phone_number].fill("*", 0, e).join("")      
}
