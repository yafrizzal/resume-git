function minAndMax (x) {
    let new_arr = []
    for (let i = 0; i < x.length; i++){
        total = 0
        for (let j = 0; j < x.length; j++) {
            total += x[j]
        }
        total -= x[i]
        new_arr.push(total)
    }
    let min = Math.min(...new_arr)
    let max = Math.max(...new_arr)
    hasil = `( ${min}, ${max} )`
    return hasil
}
let print=minAndMax([1,2,3,4,5])
console.log(print)


function bilanganprima(bilangan){
    let prima = true;


    if (bilangan === 1) {
        console.log("1 bukan bilangan prima");
    }

    
    else if (bilangan > 1) {

        
        for (let i = 2; i < bilangan; i++) {
            if (bilangan % i == 0) {
                prima = false;
                break;
            }
        }

        if (prima) {
            console.log(`${bilangan} adalah bilangan prima`);
        } else {
            console.log(`${bilangan} bukan bilangan prima`);
        }
    }

    
    else {
        console.log("adalah bukan bilangan prima");
    }
}
bilanganprima(6)
//contoh