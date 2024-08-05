
module.exports = function towelSort(matrix) {

  const rez = []

  if (!matrix) { return rez }

  matrix.map((el, i) => {
    if (i % 2) {
      el.reverse().forEach(elem => {
        rez.push(elem)
      })
    } else {
      el.forEach(elem => {
        rez.push(elem)
      })
    }
  })

  return rez

}

// const testArray = [
//   [1, 2, 4],
//   [5, 6, 7, 8],
//   [9, 12],
// ]

// function towel(arr) {
//   const rez = []

//   arr.map((el, i) => {
//     if (i % 2) {
//       el.reverse().forEach(elem => {
//         rez.push(elem)
//       })
//     } else {
//       el.forEach(elem => {
//         rez.push(elem)
//       })
//     }
//   })

//   return rez
// }

// console.log(towel(testArray)); //[1, 2, 4, 8, 7, 6, 5, 9, 12]