function selectionSortInplace(a) {
  let len = a.length;
  let max;
  let pos = len-1;
  let i;
  for (let j = len - 1; j > 0; j--) {
    i = j;
    max = a[j];
    pos = j;
    while(i >= 0) {
      if (a[i] > max) {
        max = a[i];
        pos = i;
      }
      i--;
    }
    let temp = a[j];
    a[j] = max;
    a[pos] = temp;
  }
  return a;
}