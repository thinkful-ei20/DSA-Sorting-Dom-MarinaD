// sort an array of integers
// you know the heightest and the lowest
// must be O(n)

/*
  [ 4 , 1, 8, 3, 2, 6, 7, 5]

  we know that there is a 1 and that it is the lowest
  we know that there is a 8 and that it is the heighest

  inputs : the array, lowest value & heightest value
  output : the array sorted

  [1,      4, 5, 2, 3, 6, 7,    8] -> swap the known values to where they belong
      
  // start at index 2
  //is this item greater than previous item?
  // -> yes, increment i
  // -> no, 

  //max = 8
  // min = 1
  // n = 8 (length)
  // buckets = hashmap with keys 0-n-1

  //loop the array
  // Math.ceil(arr[i] / n) = key of the bucket we will put it in
  // each item arr[i] is inserted into bucket[Math.ceil(arr[i] / n)]
  // we are at O(n)
  // one item per bucket
  // know the max range of the values
  // % each value and that is your bucket
  // max range = 8 (max - min + 1)

  for stuff () {
    result[cool function here] = arr[i]
  }
 
  // takes a value, returns a bucket index
  // needs to give results that are already in order {
    maxRange = 11
    0 -> -2
    1 ->  
    2 -> 
    3 -> 1
    4 -> 
    5 -> 3
    6 -> 4
    7 -> 5
    8 -> 6
    9 -> 7
    10 -> 8
  }

  const arr = new Array(11)
  arr[9] = 8
  arr[8] = 8
  arr = [8, 9] 

  x     y
  -1000  0    (x- min) = 0
  -10001 1     = 1
  -10003 3     = 3
  

   
  

  [ 4, 5, 1,  -2, 3, 8, 6, 7]
  
 

  //is there a way to use max/min to make our bucket distro even


  //nBuckets = 8
  // bucket is an array with 8 spaces[x , x , x ,x x ,x, x]
*/

const babyData = [ 3, 5, 5, 6, -2, 12, 1, 9];

function bucketSort(arr, min, max){
  const range = max - min +1;
  const buckets = new Array(range);
  for (let i = 0; i < arr.length; i++){
    if (buckets[arr[i]- min]){
      buckets[arr[i]- min].push(arr[i]);
    }
    else {
      buckets[arr[i]- min] = [arr[i]];
    }    
  }
  const result = [];

  for (let i = 0; i < buckets.length; i++){
    if (buckets[i]){
      for (let k = 0; k < buckets[i].length; k++){
        result.push(buckets[i][k]);
      }
    }
  }

  return result;
}

console.log(bucketSort(babyData, -2, 15));
