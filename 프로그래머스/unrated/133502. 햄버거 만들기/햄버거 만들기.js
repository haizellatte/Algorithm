function solution(ingredient) {
  let hamburger = 0;
  const recipe = [1, 2, 3, 1];

  const packing = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      const isHamburger = arr.slice(i, i + 4);
      if (isHamburger.toString() === recipe.toString()) {
        hamburger++;
        arr.splice(i, 4);
        i = i-3;
      } 
    }
    return hamburger;
  }; 

  return packing(ingredient);
}