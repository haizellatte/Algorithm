// arr1[0][0] = arr1[0][0] + arr2[0][0] / arr1[0][1] =arr1[0][1] + arr2[0][1]

function solution(arr1, arr2) {
  return arr1.map((arr, aIndex) => arr.map((n, bIndex) => n + arr2[aIndex][bIndex]))
}