function factorialFunc(n){
  let factorial = 1;
  for (let i = n; i > 0; i--){
    factorial = factorial * i
  }
  console.log(`${n}! is ${factorial}`)
  return factorial
}

factorialFunc(7)
factorialFunc(10)
factorialFunc(6)