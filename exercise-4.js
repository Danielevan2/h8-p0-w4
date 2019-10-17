
function cariModus(arr) {
  let count = 0
  let number = 0
  for (let i = 0; i < arr.length; i++) {
    let temp = 0
    for (let y = 0; y < arr.length; y++) {
      if (arr[i] === arr[y]) {
        temp += 1
      }
    }
    if (temp > count) {
      count = temp
      number = arr[i]
    }
  }


  if (count === 1 || count === arr.length) {
    return -1
  }
  else {
    return number
  }

}

// function cariModus(arr) {
//   let result = [[arr[0]]]
//   for (let i = 1; i < arr.length; i++) {
//     let flag = false
//     for (let y = 0; y < result.length; y++) {
//       if (result[y][0] === arr[i]) {
//         result[y].push(arr[i])
//         flag = true
//       }
//     }
//     if (flag === false) {
//       result.push([arr[i]])
//     }
//   }

//   let highLength = 0
//   for (let i = 0; i < result.length; i++) {
//     if (result[i].length > highLength) {
//       highLength = result[i].length
//     }
//   }

//   if (result.length === 1 || highLength === 1) {
//     return -1
//   }
//   else {
//     for (let i = 0; i < result.length; i++) {
//       if (result[i].length === highLength) {
//         return result[i][0]
//       }
//     }
//   }

// }


// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1

