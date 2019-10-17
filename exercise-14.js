function naikAngkot(arrPenumpang) {
    let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    let result = []
    if (arrPenumpang.length === 0) {
        return result
    }
    else {

        for (let i = 0; i < arrPenumpang.length; i++) {
            let objek =
            {
                penumpang: arrPenumpang[i][0],
                naikDari: arrPenumpang[i][1],
                tujuan: arrPenumpang[i][2],
                bayar: 0,
            }
            let indexAwal = 0
            let indexAkhir = 0
            for (let i = 0; i < rute.length; i++) {
                if (rute[i] === objek.tujuan) {
                    indexAkhir = i
                }
                else if (rute[i] === objek.naikDari) {
                    indexAwal = i
                }
            }
            objek.bayar = (indexAkhir - indexAwal) * 2000

            result.push(objek)


        }
        return result
    }
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]

