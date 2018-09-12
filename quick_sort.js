const pivot = (arr, start=0, end=arr.length-1) => {
  var pivot_point = arr[start];
  var swap = start;
  for (var x = start+1; x<=end; x++) {
    if(pivot_point>arr[x]) {
      swap++;
      [arr[swap], arr[x]] = [arr[x], arr[swap]];
    }
  }
  [arr[start], arr[swap]] = [arr[swap], arr[start]];
  return swap;
}

const quick_sort = (arr, l=0, r=arr.length-1) => {
  if (l < r) {
    let sorted = pivot(arr, l, r);
    quick_sort(arr, l, sorted-1);
    quick_sort(arr, sorted+1, r);  
  }
  return arr;
}