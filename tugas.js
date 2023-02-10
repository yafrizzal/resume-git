//soal nomer 1
// math.max statis mengembalikan angka terbesar yang diberikan sebagai parameter input
console.log(Math.max(5, 1, 6));
//math.min() mengembalikan angka terkecil yang diberikan sebagai parameter masukan
console.log(Math.min(5, 1, 6));
// lenght untuk menghitung jumlah karakter yang ada
const motors = [];
motors.push("beat", "supra", "mio", "shogun");
console.log(motors.length);
// concat digunakan untuk menggabungkan dua atau lebih array
const ninja1 = ['naruto', 'sasuke', 'sakura'];
const ninja2 = ['sino', 'kiba', 'hinata'];
const ninja3 = ninja1.concat(ninja2);
console.log(ninja3);
// filter melakukan filter kepada sebagian array
const words = ['naruto', 'sasuke','tsubasa','misaki'];
const result = words.filter(word => word.length > 6);
console.log(result);
//flat membuat array baru dengan semua elemen
const ninja = [1, 3, ["naruto", "sasuke"]];
console.log(ninja.flat());
//every untuk menguji semua elemen dalam array
const suhu = (derajat) => derajat < 21;
const nilai = [5, 6, 15, 20, 19, 1];
console.log(nilai.every(suhu));
//foreach digunakan untuk mengexcuse pada setiap elemen
const tim7 = ['naruto', 'sasuke', 'sakura'];
tim7.forEach(element => console.log(element));
//indexof digunakan untuk mengembalikan index pertama
const konoha = ['naruto', 'sasuke', 'kakashi', 'hinata', 'boruto'];
console.log(konoha.indexOf('kakashi'));
//lastindexof digunakan untuk mengembalikan index terakhir
const hewan = ['kucing', 'Tomcat', 'nyamuk', 'kucing'];
console.log(hewan.lastIndexOf('kucing'));

//soal nomer 2
const nama = [ 
    "Abigail", "Alexandra", "Alison", "Amanda",
    "Angela", "Bella", "Carol", "Caroline",
    "Carolyn", "Deirdre", "Diana", "Elizabeth",  
    "Ella", "Faith", "Olivia", "Penelope" 
]


function callback (x) {
    let re = new RegExp("^.*"+this+".*$")    
    return re.test(x);
}

function searching(word, listName) {
    let result = listName.filter(callback, word)
    if (result.length < 1) {
        return "Not Found"
    } else {
        return result
    }    
}

console.log(searching("an", nama))

//soal nomer 3

const seleksinilai = [(5, 20 , [2, 25, 4, 14, 17, 30, 8])
]

function eliminasi (x,y,z) {
    let a = x 
    let b = 14
    let c = 17
    return [a,b,c]
}

console.log(eliminasi(8,14,17))

const seleksinilai1 = [(5, 20 , [2, 25, 4, 14, 17, 30, 8])
]
function compareNumbers(a, b) {
    return a - b;
  }
  
function seleksinilai001 (x,y,z){
    let nilai = []
    if( x>y ){
        return "Nilai akhir harus lebih besar dari nilai awal"
    } else {
        z.forEach(element => {
            if (x < element && y > element){
                nilai.push(element)
            }
        })
        let hasilsort = nilai.sort(compareNumbers)
        return hasilsort
    }
   
}
console.log(seleksinilai001(15, 3 , [2, 25, 4, 14, 17, 30, 8]))