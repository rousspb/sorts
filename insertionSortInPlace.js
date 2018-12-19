function insertionSortInPlace(a) {
  for (var i = 1; i < a.length; i++) {
    for (var j = 0; j < a.length; j++) {
      if (a[i] < a[j]) {
        let aFirst = a[i];
        let aSecond = a[j];
        a[i] = aSecond;
        a[j] = aFirst;
      }
    }
  }
  return a;
}