function subArray(arr) {
  let newArray1 = [], newArray2 = [], finalArray = [];
  for(let i = 0; i < arr.length; i++) {
      let arr2 = [...arr];
      arr2.splice(i, 1);
      newArray1.push(arr2);
      let sum = add(newArray1[i]);
      let product = multiply(newArray1[i]);
      let q = product / sum;
      q > 0 ? newArray2.push(q) : q === 0 ? 0 : newArray2.push(q * -1);
      newArray2.push(q);
  }
  newArray3 = [...newArray2];
    let smallest = newArray3.sort((a, b) => {
    return a - b;
  }).shift();
  
  let index = newArray2.findIndex((num) => {
    return num === smallest;
  });
  
  let smallestArray = newArray1[index];
  
  function add(arr) {
   return arr.reduce((acc, curr) => {
      acc = acc + curr;
      return acc;
    }, 0)
  }

  function multiply(arr) {
   return arr.reduce((acc, curr) => {
      acc = acc * curr;
      return acc;
    }, 1)
  }

  arr.forEach((num, i) => {
    if(smallestArray.indexOf(num) === -1) {
      finalArray.push(i, num);
    }
    
  });
  console.log(smallestArray);
  return finalArray;
}