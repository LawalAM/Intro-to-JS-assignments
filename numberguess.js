//Develop a program that generates a random number between 1 and 100. Allow the user to guess the number
// and provide feedback on whether the guess is too high, too low, or correct

function guessNumber(y){
  let x = Math.floor(Math.random() * 100 + 1);
  console.log(x)
  if( y == x){
    return(`Congratulations, you got the number right`)
  }
  else if(y > x){
    return(`${y} is greater than the desired number`)
  }
  else{
    return(`${y} is less than the desired number`)
  }
}

console.log(guessNumber(35))

//Another method using the html document to get input from the user (More detailed game)
// let x = Math.floor(Math.random() * 100 + 1);
// console.log(x)
// let no_of_guess = 1;
// let remainingGuess = 4;
// document.getElementById("submit_your_guess").onclick = function guessNumber(){
//   let y = document.getElementById("guessNum").value;
//   if (y == x){
//     alert(`Congratulations!, you guessed the number right in ${no_of_guess} guess(es)`)
//   }
//   else if (y > x){
//     no_of_guess++
//     remainingGuess = 5 - no_of_guess;
//     alert(`${y} is greater than the desired number. Try a smaller number!!!You have ${remainingGuess} guess(es) remaining`)
//   }
//   else{
//     no_of_guess++
//     remainingGuess = 5 - no_of_guess;
//     alert(`${y} is less than the desired number. Try a larger number!!! You have ${remainingGuess} guess(es) remaining`)
//   }
//   if (remainingGuess == 0){
//     alert(`You lose`)
//   }
//   else{
//     alert(`Keep guessing`)
//   }
// }