function factorialFunc(n){
  let factorial = 1;
  if (n == 0 || n == 1){
    factorial = 1
  }
  else if (n > 1){
    for (let i = n; i > 1; i--){
    factorial = factorial * i
  }
  }
  console.log(`${n}! is ${factorial}`)
  return factorial
}

factorialFunc(10)
factorialFunc(0)
factorialFunc(1)