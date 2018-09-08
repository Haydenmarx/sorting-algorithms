const selection_sort = (arr) => {
  arr = arr.slice();
  let start = 0;
  let min = 0;
  let current = 0;
  while (current<arr.length-1) {
    // console.log('|', arr, arr[start], arr[current+1], '|');
    if(arr[min] > arr[current+1]) min = current+1;
    if(current===arr.length-2) {
      [arr[start], arr[min]] = [arr[min], arr[start]];
      current=start;
      start++;
      min=start;
    }
    current++;
  }
  return arr;
}
arr = [5,4,3,2,1];
console.log(selection_sort(arr));
