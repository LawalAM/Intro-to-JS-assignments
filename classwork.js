//Create a script that prints a number pyramid pattern, where each row contains numbers in ascending number

// function numPyramid(n){
//   for (let i = 1; i <= n; i++){
//     let str = '';
//     let count = 1;
//     for (let j = 1; j <= 2 * n; j++){
//       if (i + j >= n + 1 && (i >= j - n + 1)) { 
//         // Add a space after each number 
//         str += count.toString() + ' '; 
//         count++;
//       }
//       else{
//         str += '  ';
//       }
//     }
//     console.log(str);
//   }
// }

// numPyramid(7)


function numPyramid(n){
  for (let i = 1; i <= n; i++){
    let str = '';
    for(let j = n - i; j > 0; j--){
      str += '  '
    }
    for (k = 1; k <= i; k++){
      str += k + '   '
    }
    console.log(str)
  }
}

numPyramid(7)

//