function insertionSort(a) {
  let copy = [];
  copy.push(a[0]);
  for (var i = 1; i < a.length; i++) {
    for (var j = 0; j < copy.length; j++) {
      if (a[i] < copy[j]) {
        copy.splice(j, 0, a[i]);
        break;
      }
      if (copy[j+1] === undefined) {
        copy.push(a[i]);
        break;
      }
    }
  }
  return copy;
}