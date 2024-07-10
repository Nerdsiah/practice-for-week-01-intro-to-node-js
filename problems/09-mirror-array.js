/***********************************************************************
Write a function `mirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples:

Examples:

mirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

function mirrorArray(array) {
  let mirroredArr = [];

  for (let i = 0; i < array.length; i++) {
    let num = array[i];

    mirroredArr.push(num);
  }
  for (let i = mirroredArr.length - 1; i >= 0; i--) {
    let num = mirroredArr[i];

    mirroredArr.push(num);
  }
  return mirroredArr;
}

/****************** DO NOT MODIFY ANYTHING UNDER THIS  LINE ******************/
module.exports = mirrorArray;
