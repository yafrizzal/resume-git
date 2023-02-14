const janjian = new Promise((resolve,reject) => {
    setTimeout(() => {
        let succes = false;
        if (succes) {
            resolve("berhasil");
        } else {
            reject(new error("gagal"));
        }
    }, 1000);
});

const onresolve = (result) => {
    console.log(result);
};

janjian
.then(onresolve)
.catch(function (error){
    console.log(error.message);
})