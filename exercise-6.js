function digitPerkalianMinimum(angka) {
    var simpan = []
    for (var i = 1; i <= angka; i++) {
        if (angka % i === 0) {
            simpan.push(i)
        }
    }
    var hasil = []
    for (var y = 0; y < simpan.length / 2; y++) {
        for (var r = 0; r < simpan.length; r++) {
            if (simpan[y] * simpan[r] === angka) {
                hasil.push(String(simpan[y]) + String(simpan[r]))
            }
        }
    }
    console.log(hasil)
    var result = hasil[0].length
    for (var d = 0; d < hasil.length; d++) {
        if (hasil[d].length < result) {
            result = hasil[d].length
        }
    }
    return result
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2