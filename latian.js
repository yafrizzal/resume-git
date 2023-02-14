function compareNumbers(a, b) {
    return a - b;
  }
  
function SeleksiNilai (x,y,z){
    let nilai = []
    if( x>y ){
        return console.log("Nilai akhir harus lebih besar dari nilai awal")
    } else if (z.length<5) {
        return console.log("Jumlah angka dalam dataArray harus lebih dari 5")
    } else {    
        z.forEach(element => {
            if (x < element && y > element){
                nilai.push(element)
            }
        })
        let hasilsort = nilai.sort(compareNumbers)
        if (nilai.length<1){
            return console.log("Nilai tidak ditemukan")

        }
        return console.log(hasilsort)
    }

}

SeleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])

SeleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])

SeleksiNilai(4, 17 , [2, 25, 4])

SeleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18])

