function changeMe(arr) {
    for (var i = 0; i < arr.length; i++) {

        var me = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: 'Invalid Birth Year'
        }

        if (arr[i][3] < 2019) {
            me.age = 2019 - arr[i][3]
        }

        console.log(i + 1 + '.', me.firstName + ' ' + me.lastName + ':' + '\n', me)



    }


}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""