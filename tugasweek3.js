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

const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desemeber']
        if (!error){
            callback(null,month)
        } else {
            callback(new Error ('Sorry Data Not Found'), [])
        }
    }, 4000)
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

async function getData(){
    res = await fetch('https://jsonplaceholder.typicode.com/users');
    data = await res.json();
    console.log(data.map(index => {return index.name}));
}

getData();
