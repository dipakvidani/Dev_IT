
// // sqare hollow pattern 
// // let number_of_rows = 6;

// // for (let row = 1; row <= number_of_rows; row++) {
// //     let pattern = "";
// //     for (let col = 1; col <= number_of_rows; col++) {

// //         if (row == 1 || col == 1 || col == number_of_rows || row == number_of_rows) {
// //             pattern += "* "
// //         } else {
// //             pattern += "  "
// //         }

// //     }
// //     console.log(pattern);

// // }



// // number triangular

// //  1 
// //         2 2 2 
// //       3 3 3 3 3
// //     4 4 4 4 4 4 4
// //   5 5 5 5 5 5 5 5 5
// // 6 6 6 6 6 6 6 6 6 6 6

// // let number_of_rows = 6;
// // let start = 1;

// // for (let current_row = 1; current_row <= number_of_rows; current_row++) {

// //     let space = "  ".repeat(number_of_rows - current_row);
// //     let number = (start + " ").repeat(2 * current_row - 1);

// //     console.log(space + number);

// //     start++;
// // }


// // 1 
// // 1 2 
// // 1 2 3
// // 1 2 3 4
// // 1 2 3 4 5
// // 1 2 3 4 5 6


// // let total_rows_to_print = 6;
// // let start_number=1;

// // for (let current_row = 1; current_row <= total_rows_to_print; current_row++) {
// //    let pattern="";
// // for (let current_col = 1; current_col <=current_row; current_col++) {

// //     pattern+=current_col;
// //     pattern+=" ";

// // }
// //   console.log(pattern);

// // }

// // number incresing reverse pyramid

// // 1 2 3
// // 1 2
// // 1

// // let total_rows_to_print = 3;
// // let start_number = 1;

// // for (let current_row = total_rows_to_print; current_row >=0; current_row--) {
// //     let pattern = "";
// //     start_number=1;

// //     for (let current_col = current_row; start_number<=current_row; current_col--) {

// //         pattern += start_number;
// //         pattern += " ";

// //         start_number++;

// //     }

// //     console.log(pattern);

// // }

// // 1 
// // 2 3 
// // 4 5 6
// // 7 8 9 10

// // let total_rows_to_print = 10;
// // let start_number=1;

// // for (let current_row = 1; current_row <= total_rows_to_print; current_row++) {
// //    let pattern="";

// // for (let current_col = 1; current_col <=current_row; current_col++) {

// //     pattern+=start_number;
// //     pattern+=" ";

// //     start_number++;
// // }
// //   console.log(pattern);

// // }


// // 1
// // 01
// // 101
// // 0101

// // let total_rows_to_print = 10;
// // let isOne = false;

// for (let current_row = 1; current_row <= total_rows_to_print; current_row++) {
//   let pattern = "";
//   if (current_row % 2 == 0) {
//     isOne = false;
//   }
//   else {
//     isOne = true;
//   }

//   for (let current_col = 1; current_col <= current_row; current_col++) {

//    pattern+=Number(isOne);

//    isOne= !isOne;

//   }
//   console.log(pattern);

// }

// let total_rows_to_print = 10;

// for (let current_row = 1; current_row <= total_rows_to_print; current_row++) {

//   let space = " ".repeat(total_rows_to_print - current_row);
//   let pattern=""
//   let number=""
  
//   let start_number=1;
  
//  for (let col = 1; col <=2*current_row-1; col++) {
 
//   number+=start_number;
//   start_number++;
  
//  }
//  console.log();
 

// }


"3"+3-"2"-4

33-"2"-4
31-4


array1=[1,2,3]
array2=[4,5,6]

array1+array2 //[1,2,34,5,6]



let object={
  age:25,
  name:"Dipak",
  city:"Botad",
  state:"Gujarat"
}

// object.city


