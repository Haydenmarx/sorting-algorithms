const insertion_sort = (arr) => {
  let pointer;
  let swap;
  for (var x=0; x<arr.length; x++) {
    pointer = x - 1;
    swap = arr[x];
    while(pointer>=0 && arr[pointer]>swap) {
      arr[pointer+1] = arr[pointer];
      pointer--;
    }
    arr[pointer+1] = swap;
  }
  return arr;
}
