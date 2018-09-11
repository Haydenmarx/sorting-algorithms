
const merge = (arr1, arr2) => {
  let pointer1 = 0;
  let pointer2 = 0;
  let new_arr= [];
  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    if(arr1[pointer1] < arr2[pointer2]) {
      new_arr.push(arr1[pointer1])
      pointer1++;
    } else {
      new_arr.push(arr2[pointer2])
      pointer2++;
    }    
  }
  return new_arr.concat(arr1.slice(pointer1)).concat(arr2.slice(pointer2));
}

const merge_sort = (arr) => {
  if (arr.length <= 1) return arr;
  let half = Math.floor(arr.length/2);
  let head = merge_sort(arr.slice(0,half));
  let tail = merge_sort(arr.slice(half));
  return merge(head, tail);
}

merge_sort([3,1,17,2])