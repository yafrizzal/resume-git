//nomer 1
const cekharikerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek){
                resolve(cek)
            }else {
                reject(new Error ('hari ini bukan hari kerja'))
            }
        },3000)
    })
}

const hasil = cekharikerja('minggu')
    .then(result => console.log(result))
    .catch(error => console.log(error.message))
    
async function harikerja(x) {
    try {
      const result = await cekharikerja(x);
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
}
  
harikerja('senin');
// thencatch digunakan untuk promise (resolve, reject)
// trycatch digunakan untuk kode error dan untuk tetap dijalankan

//nomer 2
const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desemeber']
        if (!error){
            callback(null,month)
        } else {
            callback(new Error ('Sorry Data Not Found'), [])
        }
    }, 3000)
}

function myFunction(month) {
    return console.log(month)
}

const showMonth = (x,y) => {
    if (!x){
        y.map(myFunction)
    }else {
        console.log(x.message)
    }
}

getMonth(showMonth)

//nomer3
const motormatic = (motor) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataMotor = ['beat', 'mio', 'vespa', 'nmax', 'vario']
            let cek = dataMotor.find((item) => {
                return item === motor
            })
            if (cek){
                resolve(cek)
            }else {
                reject(new Error ('bukan motor matic'))
            }
        },3000)
    })
}

const hasil1 = motormatic('supra')
    .then(result => console.log(result))
    .catch(error => console.log(error.message))
    
async function matic1(x) {
    try {
      const result = await motormatic(x);
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
}
  
matic1('beat');

const golonganmamalia = (mamalia) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataMamalia = ['sapi', 'kelinci', 'rusa', 'kambing', 'kerbau']
            let cek = dataMamalia.find((item) => {
                return item === mamalia
            })
            if (cek){
                resolve(cek)
            }else {
                reject(new Error ('bukan hewan mamalia'))
            }
        },3000)
    })
}

const muncul = golonganmamalia('elang')
    .then(result => console.log(result))
    .catch(error => console.log(error.message))
    
async function termasukmamalia(x) {
    try {
      const result = await golonganmamalia(x);
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
}
  
termasukmamalia('sapi');

//nomer 4
async function getData(){
    res = await fetch('https://jsonplaceholder.typicode.com/users');
    data = await res.json();
    console.log(data.map(index => {return index.name}));
}

getData();
