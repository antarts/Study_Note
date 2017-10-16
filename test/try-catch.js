// let count = 100;
// try {
//    if ( count < 100) {
//      throw "哇喔，错误了";
//   } else {
//      // work well.
//   }
// } catch (e) {
//     console.log(e);
// }

// let count = 100;
// try {
//    if ( count < 100) {
//      throw  new Error("哇喔，错误了");
//   } else {
//      // work well.
//   }
// } catch (e) {
//     console.log(e);
// }

let list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

var firstItem = list.map(item => item[0]);

console.log(firstItem);