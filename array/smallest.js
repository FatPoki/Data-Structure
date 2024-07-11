// In this smallest.js file i have created a algo that will find smallest value from the given array in js .

function findSmallest(arr) {
    if (arr.length === 0) {
      return null; 
    }
  
    let smallest = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
    }
  
    return smallest;
  }
  
  
  let numbers = [20,19,10,92,9,18,45,67,33,20,10,9];
  console.log(findSmallest(numbers)); 
  
