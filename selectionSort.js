function selectionSort(a) {
  let temp = [];
  let len = a.length;
  let min;
  let pos = 0;
  let count = 0;
  while(count < len) {
    min = a[0];
    for (var i = 0; i < len; i++) {
      if (min === undefined && a[i] !== undefined) {
        min = a[i];
      }
      if (a[i] <= min) {
        min = a[i];
        pos = i;
      }
    }
    temp.push(min);
    a[pos] = undefined;
    count++;
  }
  return temp;
}