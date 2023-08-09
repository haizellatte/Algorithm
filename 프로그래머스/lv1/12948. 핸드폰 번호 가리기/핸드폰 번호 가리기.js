function solution(phone_number) {
    const e = phone_number.length;
    const lastN = phone_number.substring(e-4, e);
    const ChangeN = [...phone_number.substring(0, e-4)].map(v => "*").join('')
   
   return ChangeN.concat(lastN);                                       
}