function solution(my_string, queries) {
  const str = my_string.split('');

  queries.forEach(([s, e]) => {
    const reverseStr = [...str.slice(s, e + 1)].reverse();
    str.splice(s, reverseStr.length, ...reverseStr);
  });

  return str.join('');
}