function solution(arr, delete_list) {

  for (let i = 0; i < arr.length ; i++) {
    for (let j = 0; j < delete_list.length ; j++) {
      if (arr[i] === delete_list[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(el => el !== null);
}