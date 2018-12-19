function merge(L, R) {
  let Rpr = 0;
  let Lpr = 0;
  let output = [];
  do {
    if (L[Lpr] < R[Rpr] || R[Rpr] === undefined) {
      output.push(L[Lpr]);
      Lpr++;
    } else {
      output.push(R[Rpr]);
      Rpr++;
    }
  } while (output.length < L.length + R.length);
  return output;
}

function mergeSort(list) {
  let l = list.length;
  if (l < 2) return list;
  let mid = Math.floor(l / 2);
  let left = list.slice(0, mid);
  let right = list.slice(mid, l);
  let lsort = mergeSort(left);
  let rsort = mergeSort(right);
  return merge(lsort, rsort);
}
mergeSort([34, 23, 98, 12, 27, 109, 8]);