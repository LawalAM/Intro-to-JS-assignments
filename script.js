//Create a function that checks if the input/parameter is an even number
function isEven(n) {
  if (n % 2 == 0) {
    console.log(n, ' is an even number')
  }
  else {
    console.log(n, 'is an odd number')
  }
}

isEven(500)

//Create a function that prints to the console n1 to n2
//where n1 is the first input/parameter and n2 is the second input/parameter
function numAp(n1, n2) {
  for (let i = n1; i <= n2; i++) {
    console.log(i)
  }
}
numAp(54, 76)


//Create a function that sums the values in between two numbers.
function calcFunc(n1, n2) {
  let arr = [];
  for (let i = n1; i <= n2; i++) {
    // console.log(i)
    arr.push(i)
  }
  console.log(arr)
  let sum = 0;
  for (let j = 0; j < arr.length; j++) {
    sum = sum + arr[j]
  }
  console.log(sum)
}
calcFunc(5, 10)