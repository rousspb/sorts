/** quick sort **/
function swap(a, start, end){
  let temp = a[start];
  a[start] = a[end];
  a[end] = temp;
}

function partition(a, start, end) {
  let j = start;
  let pivot = a[end];
  for (var i = start; i < end; i++) {
    if (a[i] <= pivot) {
      swap(a, i, j);
      j++;
    }
  }
  swap(a, j, end);
  return j;
}

function quickSort(a, start = 0, end) {
  let len = a.length - 1;
  end = end || len;
  let pivot = partition(a, start, end);
  if (start < pivot - 1) {
    quickSort(a, start, pivot -1);
  }
  if (pivot < end) {
    quickSort(a, pivot, end);
  }
  return a;
}