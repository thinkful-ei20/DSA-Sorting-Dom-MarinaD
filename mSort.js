const data = [89, 30, 25, 32, 72, 70, 51, 42, 25,
  24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14,
  33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93,
  98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16,
  85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88,
  3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69,
  90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87,
  49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];

// find the midpoint
// slice the array so that 1 side is from index 0 to index midpoint
// the other side is from midpoint to end of array
// recursively do it again on both sides
// until we reach a base case, in which both sides
// only have 1 element it its array

// we look first elements on the left and right sides
// compare them and place them in a new array in order
// return the array to the recursive call that called it


/*
                        [1, 3, 4, 5]
  [1, 3, 4, 5]            /       \
                      [1, 3]      [4, 5]
              [1,3]   /   \         /   \  [4, 5]
                    [1]   [3]      [4]   [5]
                    arr[0] < arr[0]
[1] [3]        [4]
*/

const mSort = arr => {
  // Base case if the array has only 1 element
  // or nothing, return the array
  if(arr.length <= 1){
    return arr;
  }
  // find the midpoint
  const midpoint = Math.floor(arr.length/2);
  // slice the array so that 1 side is from index 0 to index midpoint
  let left = arr.slice(0, midpoint);
  // the other side is from midpoint to end of array
  let right = arr.slice(midpoint, arr.length);
  left = mSort(left); right = mSort(right);
  let leftI = 0; let rightI = 0; let resultI = 0;
  while (leftI < left.length && rightI < right.length) {
    
  }
};
