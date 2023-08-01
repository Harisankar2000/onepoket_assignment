function sumArr(arr) {
    // Check if the input is an array
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array.');
    }
  
    // Check if the array contains only integers
    if (!arr.every(Number.isInteger)) {
      throw new Error('Array must contain only integers.');
    }

    const sum = arr.reduce((acc, num) => acc + num, 0);
  
    return sum;
  }
  const result = sumArr([1, 2, 3, 4, 5]);
  console.log(result); 
    