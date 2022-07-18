function inSequence(A, B, C) {
  //code here
  if (C === 0) {
    if (A === B) {
      return 1;
    } else {
      return 0;
    }
  } else {
    if ((B - A) / C < 0) {
      return 0;
    } else {
      if ((B - A) % C === 0) {
        return 1;
      } else {
        return 0;
      }
    }
  }
}

console.log(inSequence(-2, -7, -9));
