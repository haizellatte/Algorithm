function solution(name, yearning, photos) {
  const missingPont = photos.map(photo =>
    photo.map(p => {
      let person = name.indexOf(p);
      if (person > -1) {
        return yearning[person];
      }
      return 0;
    })
  );

  return missingPont.map(p => p.reduce((a, b) => a + b));
}