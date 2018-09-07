const bubble_sort = (arr) => {
  arr = arr.slice();
  let sorted = true;
  let final_digit=arr.length-1;
  let current = 0;
  while (current<final_digit) {
    // console.log('|', arr, arr[current], arr[current+1], '|');
    if (arr[current] > arr[current+1]) {
      [arr[current], arr[current+1]] = [arr[current+1], arr[current]]
      sorted = false;
    }
    if (current===final_digit-1 && sorted === false) {
      current=0;
      final_digit--;
      sorted=true;
    } else {
      current++;
    }
  }
  return arr;
}

console.log(bubble_sort([5,4,3,2,1]));
console.log(bubble_sort([1,4,3,2,1]));
console.log(bubble_sort([8,1,2,3,4,5,6,7]));