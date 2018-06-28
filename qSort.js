const data = [89, 30, 25, 32, 72, 70, 51, 42, 25,
  24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14,
  33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93,
  98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16,
  85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88,
  3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69,
  90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87,
  49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];


const babyData = [9, 2, 17, 3, 89, 30, 25, 32, 72, 70, 51, 42, 25,
  24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14];

function qSort(arr, start = 0, end= arr.length) {
  if (start >= end) {
    return arr;
  }

  //use the partition function 
  const middle = partition(arr, start, end);
  arr = qSort(arr, start, middle);
  arr = qSort(arr, start+1, end);
  return arr;
}

function partition(arr, start, end) {
  let pivot = arr[end-1];
  let j = start;
  for (let i = start; i < end-1; i ++){
    if (arr[i] <= pivot){
      const temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      j++;
    }
  }
  const temp = arr[j];
  arr[j] = pivot;
  arr[end-1] = temp;
  
  // console.log(j);
  return j;
}

qSort(babyData);
console.log(babyData);