function bubble(a) {
  var len = a.length;
  for (var i = 0; i < len-1; i++) {
    for (var j = 0; j < len-1; j++) {
      if (a[j] > a[j+1]) {
        let left = a[j];
        let right = a[j+1];
        a[j] = right;
        a[j+1] = left;
      }
    }
  }
  return a;
}