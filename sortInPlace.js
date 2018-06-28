// took one of array
// math.random to pick a random integer in
// the other half
// swap 'em


function shuffle(arr){
  const mid = Math.floor(arr.length/2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);

  for (let i = 0; i < left.length; i++){
    const random = Math.floor((Math.random() * (arr.length-mid)) + mid);
    const temp = arr[random];
    arr[random] = arr[i];
    arr[i] = temp;
  }

  for (let i = 0; i < right.length; i++){
    const random = Math.floor((Math.random() * (arr.length-mid)) + mid);
    const temp = arr[random];
    arr[random] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

console.log(shuffle([1,2,3,4,5,6,7,8,9,0]));