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


// function numPyramid(n){
//   for (let i = 1; i <= n; i++){
//     let str = '';
//     for(let j = n - i; j > 0; j--){
//       str += '  '
//     }
//     for (k = 1; k <= i; k++){
//       str += k + '   '
//     }
//     console.log(str)
//   }
// }

// numPyramid(7)

//Currency Converter

// function convertCurrency(){
//   let currency1 = prompt('Enter the currency you want to convert from')
//   let amount = prompt('Enter the amount you want to convert')
//   let exchangeRate = prompt('Enter the exchange rate for the conversion')
//   // let calculatedAmount;
//   if (currency1 == 'NGN' || currency1 == 'ngn'){
//     calculatedAmount = amount / exchangeRate
//     return (`${amount}NGN to USD is $${calculatedAmount} using 1USD to ${exchangeRate}NGN`)
//   }
//   else if (currency1 == 'USD' || currency1 == 'usd'){
//     calculatedAmount = amount * exchangeRate
//     return (`${amount}USD to NGN is #${calculatedAmount} using 1USD to ${exchangeRate}NGN`)
//   }
  
// }

// // var newAmount = console.log(convertCurrency());
// console.log(convertCurrency())

//CHARACTER FREQUENCY COUNTER

