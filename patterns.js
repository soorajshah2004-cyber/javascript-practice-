const prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number"));
// // ques 35) Right Angle Triangle
// remember i is always the outer loop and j is inner loop. below eg i is row and j is column. pattern always print like writing in page left to right and then next line

// column 
// 1 2 3 4 5
// | | | | |
// 1 2 3 4 5
// *           <- row 1  - 1st row (1st col - 1star )
// * *         <- row 2  - 2nd row (1st & 2nd col - 2 star)
// * * *        <- row 3  - 3rd row (1st,2nd & 3rd col - 3star)
// * * * *      <- row 4  - 4th row (1st,2nd,3rd & 4th col - 4star)
// * * * * *    <- row 5  - 5th row (1st,2nd,3rd,4th & 5th col - 5star)
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("* ");
//     }
//     console.log();
// }

// // ques 36) 
// // 1 
// // 1 2
// // 1 2 3
// // 1 2 3 4
// // 1 2 3 4 5

// for(let i = 1; i<=n; i++){
//     for(let j= 1; j<= i ; j++){
//         process.stdout.write(j + " ");
//     }
//     console.log();

// }

// // ques 37) 
// // A 
// // A B
// // A B C
// // A B C D
// // A B C D E

// for(let i = 1; i<=n; i++){
//     let temp = 65;
//     for(let j= 1; j<= i ; j++){
//         process.stdout.write( String.fromCharCode(temp) + " ");
//         temp++
//     }
//     console.log();

// }

// // ques 38) Inverted Right Angle Triangle
// // * * * * * 
// // * * * *
// // * * *
// // * *
// // *

// 1st approach 

// for(let i =1; i <= n; i++){
//     for(let j = 1; j <= n -i +1; j++ ){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

// // 2nd approach by me it is not recommended because acc to chatgpt When you start solving more advanced pattern problems, you'll notice almost every pattern follows the structure:
// for(let i = 1; i<=n; i++){
//     for(let j =n; j>=i; j--){
//         process.stdout.write("* ");
//     }
//     console.log();
// }


// // Ques 39) Mirror Right Angle Traingle = combination of Inverted Right Angle Triangle + Inverted traingle
// //         *
// //       * *
// //     * * *
// //   * * * *
// // * * * * *

// // - - - - *
// // - - - * *
// // - - * * *
// // - * * * *
// // * * * * *

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n - i; j++) {
//         process.stdout.write("  ");
//     }
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("* ");
//     }
//     console.log();
// }

// // Ques 40) 
// //        *
// //       * *
// //      * * *
// //     * * * *
// //    * * * * *


// for (let i = 1; i <= n; i++) {
//     for (let j = n - 1; j >= i; j--) {
//         process.stdout.write(" ");
//     }
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("* ");
//     }
//     console.log();
// }

// // Ques 41) 
// // *       *
// //   *   * 
// //     *
// //   *   *
// // *       * 
// // make pure square and then add condition
// // i == j
// // i+j == n+1
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//         if (i == j || i + j == n + 1) {
//             process.stdout.write("* ");
//         } else process.stdout.write(" ");
//     }
//     console.log();

// }

// Ques 42)

// *                          *
//    *                   *
//       *            *
//          *     *
//             * 


// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= (n * 2) - 1; j++) {
//         if ((i == j) || (i + j == n * 2)) {
//             process.stdout.write("* ")
//         } else process.stdout.write("  ")
//     }
//     console.log();
// }
