const prompt = require("prompt-sync")();

// Ques1) Accept an integer and print hello world n times

// let n = Number(prompt("Enter a number to print hello world n times"));
// for(let i =1; i<=n; i++){
//     console.log("Hello World");    
// }

// Ques2) Print natural number upto n.

// let n = Number(prompt("Enter a number to print Natutal number upto"));
// for(let i = 1; i<= n; i++){
//     console.log(i);

// }

// Ques3) Reverse for loop. Print n to 1

// let n = Number(prompt("Enter a number to reverse print it till 1 "));
// for(let i = n; i >= 1; i--){
//     console.log(i);

// }


// Take a number as input and print its table
// n = Number(prompt("Enter a number to print its table "));
// // example
// // 5 * 1 = 5
// // 5 * 2 = 10
// // 5 * 3 = 15
// // n * i = (res) 

// for(let i = 1; i <= 10; i++ ){
//     console.log(n, "*",  i ,"=" , n*i);
// }

// Ques Sum up to n terms // 
// // n=5 , sum = 1+2+3+4+5
// //       sum = i i++   
// n = Number(prompt("Enter a number to sum them "));
// let sum = 0;
// for(let i = 1; i <= n; i++){
//     sum = sum + i;
// }
// console.log(sum);


// Ques Print the sum of all even and odd numbers in a range separately
// // psuedo code
// // range = 10
// // i = 1 to 10 (i.e range)
// // even = 2+4+6+8+10
// // odd = 1+3+5+7+9 
// // if(i%2 == 0) print even
// //else print odd

// let range = Number(prompt("Enter a number range to print sum of even and odd number separately "));
// let evenNum = 0;
// let oddNum = 0;
// for(let i = 1; i <= range; i++){
//     if(i % 2 == 0) evenNum = evenNum + i;
//     else oddNum = oddNum + i;
// }
// console.log(evenNum);
// console.log(oddNum);


//  Ques Factorial of a number 
// // factorial 5*4*3*2*1
// // n = 5,    i i i i i   
// // i = 5 to 1

// let n = Number(prompt("Enter a number to get its factorial "));
// let factorial = 1;
// for(let i = n; i >= 1; i--){
//     factorial = factorial * i;
// }
// console.log(factorial);

// Ques) Print all the factor of a number 
// // factors of 25 are 1, 5, 25
// // 25 = 1, 5, 25
// // n = 25, 
// i = 2 to 25/2(i.e n) because we know 1 and number itself is always a factor and factors are always are in between its half number
// // if(25/i == 0) print i are factors
// // else print i are not factors

// let n = Number(prompt("Enter a number to print its factors "));
// console.log(1, " factor");
// for (let i = 2; i <= n / 2; i++) {
//     if (n % i === 0) console.log(i, " factor")

//     // else console.log(i, " not factor")
// }
// console.log(n, " factor");

// Ques) Check number is Prime or not // 13 is prime only divisible by 1 and itself
// 13 = 1, 13
// n = 13
// isPrime = true
// i = 1 to 13/2
// if(n % i == 0) print isPrime = false
// else print isPrime = true

// let n = Number(prompt("Enter a number "));
// let isPrime = true;
// for(let i = 2; i <= n/2; i++){
//     if(n % i == 0 ) {
//         isPrime = false;
//         break;
//     }
//     else isPrime = true
// }

// if(isPrime) console.log("it is a prime number");
// else console.log("it is not a prime number");

// 2nd approach

// let n = Number(prompt("Enter a number "));
// let count = 0;
// for(let i = 1; i <= n; i++){
//     if(n % i == 0) count++;

// }
// if(count == 2) console.log("prime");
// else console.log(" not prime");

// 3rd approach 
// let n = Number(prompt("Enter a number "));
// let isPrime = isPrimeNumber(n);
// if(isPrime) console.log("prime");
// else console.log("not prime");

// function isPrimeNumber(n){
//     if(n == 1) return false;
//     if(n == 2) return true;
//     if(n % 2 == 0) return false;
//     for(let i = 3; i <= Math.sqrt(n); i = i + 1){
//         if(n % i == 0) return false;
//     }
//     return true;
// }


// ques sum of digit //
// //  234 = 2+3+4
// // n = 234
// // sum = 0
// // while(n > 0)
// // rem = rem % 10
// // sum = sum + rem
// // n = Math.floor(n / 10)
// // print sum
// // console.log(231 % 10);
// // console.log(Math.floor(231 / 1000));

// let n = Number(prompt("Enter a number to find sum of its digits "));
// let sum = 0;
// while(n > 0){
//     let rem = n % 10;
//     sum = sum + rem;
//     n = Math.floor(n / 10);
// }
// console.log(sum);


// Reverse of number   // 123 -> 321
// // n = 123
// // rev = 321
// // while(n > 0)
// // rem = n % 10
// // rev = rev * 10 + rem
// // n = n/10

// let n = Number(prompt("Enter a number to reverse its digits "));
// let rev = 0;
// while(n > 0){
//     let rem = n % 10;
//     rev = rev * 10 + rem;
//     n = Math.floor(n / 10);
// }
// console.log(rev);

// Ques Strong-Number // 145 == (1! + 4! + 5!) == (1 + 24 + 120) == 145
// // outer while loop for digit separation remainder
// // sum = 0;
// // while(n > 0){
// // let rem = n % 10;
// // inner for loop for factorial
// // m = rem
// // factorial = 1
// // 5*4*3*2*1 
// // i i i i i
// // i from 5 to 1{
// // factorial = factorial * i
// // }
// // log(factorial)
// // sum = sum + factorial;
// // n = Math.floor(n/10)
// // 
// // 
// let n = Number(prompt("Enter a number to find sum of its digits "));
// let copy = n;
// let sum = 0;
// while (n > 0) {
//     let rem = n % 10;

//     let factorial = 1;
//     for (let i = rem; i >= 1; i--) {
//         factorial = factorial * i;
//     }

//     sum = sum + factorial;
//     n = Math.floor(n / 10);
// }
// if(sum == copy) console.log(`${copy} It is a strong number`);
// else console.log(`${copy} It is not a strong number`);


// Ques ) Repeat hello using do while loop

// let userInput;
// do{
//     console.log("hello ");
//     userInput = prompt("Will you continue ? yes / no ").toLowerCase()
// }while(userInput === "yes")

// ques Guess the number

// let n;
// let num = Math.floor(Math.random()*100 + 1)
// console.log(num);
// do{
//     n = Number(prompt("Enter a guess number between 1 to 100 "));
//     if(n < 0 || n > 100 || isNaN(n) ){
//         console.log("Please enter a valid number. Try again !");
//         continue;
//     }

//     if(n > num ) console.log(`you are too high, keep trying`);
//     else if(n < num) console.log(`you are too low, keep trying`);
//     else {
//         console.log(`you guessed it right ${num} was the number`);
//         break;
//     }

// }while(n != num)

// ques  Sasta calculator

// let userInput;
// do{
//     let num1 = Number(prompt("Enter a first number"));
//     let num2 = Number(prompt("Enter a Second number"));
//     let operator = prompt("Enter valid operator (+, -, *, /)");

//     switch(operator){
//         case '+' :
//             console.log("result =" + (num1+num2));
//             break

//         case '-' :
//             console.log("result =" + (num1-num2));
//             break

//         case '*' :
//             console.log("result =" + (num1*num2));
//             break

//         case '/' :
//             if (num2 != 0) console.log("result =" + (num1/num2));
//             else console.log("second number cannot be 0 undefined error");
//             break

//         default :
//             console.log("Please Enter a valid operator");
//             break
//     }
//     userInput = prompt("kya aap dubara chalana chahate hai? yes/no").toLowerCase()

// }while(userInput === "yes")


// ques) project restaurant 

let userInput;
do {
    console.log("For starter press 1");
    console.log("For maincourse press 2");
    console.log("For desert press 3");
    console.log("For exit press 4");

    let menu = Number(prompt("select any 1,2,3,4"));

    switch (menu) {

        case 1:
            console.log("Here your starter list");
            console.log("for water press 1");
            console.log("for Tea press 2");
            console.log("for Coffee press 3");
            console.log("for menu press 4");
            let starter = Number(prompt("Please select any 1,2,3,4 "));

            switch (starter) {
                case 1:
                    console.log("your Water will be served to you soon");
                    break;

                case 2:
                    console.log("your Tea will be served to you soon");
                    break;

                case 3:
                    console.log("your Coffee will be served to you soon");
                    break;

                case 4:
                    console.log("redirecting to previous menu");
                    break;

                default:
                    console.log("Please Enter a valid order number");
                    break;

            }
            break;

        case 2:
            console.log("Here your Maincourse list");
            console.log("for Naan press 1");
            console.log("for Butter chicken press 2");
            console.log("for Biriyani press 3");
            console.log("for menu press 4");
            let maincourse = Number(prompt("for Naan press 1, for Butter chicken press 2, for Biriyani press 3, for menu press 4 "));

            switch (maincourse) {
                case 1:
                    console.log("your Naan will be served to you soon");
                    break;

                case 2:
                    console.log("your Butter Chicken will be served to you soon");
                    break;

                case 3:
                    console.log("your Biriyani will be served to you soon");
                    break;

                case 4:
                    console.log("redirecting to previous menu");
                    break;

                default:
                    console.log("Please Enter a valid order number");
                    break;
            }
            break;

        case 3:
            console.log("Here your Desert list");
            console.log("for Barfi press 1");
            console.log("for Gulab Jamun press 2");
            console.log("for Laddu press 3");
            console.log("for menu press 4");
            let desert = Number(prompt("Please select any 1,2,3,4 "));

            switch (desert) {
                case 1:
                    console.log("your Barfi will be served to you soon");
                    break;

                case 2:
                    console.log("your Gulab Jamun will be served to you soon");
                    break;

                case 3:
                    console.log("your Laddu will be served to you soon");
                    break;

                case 4:
                    console.log("redirecting to previous menu");
                    break;

                default:
                    console.log("Please Enter a valid order number");
                    break;
            }
            break;

        case 4:
            console.log("Thankyou for your order");
            break;

        default:
            console.log("Please Enter a valid order number");
            break;

    }
    userInput = prompt("Re-order again ? yes/no ").toLowerCase()
} while (userInput === "yes")











