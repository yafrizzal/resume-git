const cekharikerja = (day) => {
    return new promise ((resolve, reject) => {
        setTimeout(() => {
            const dataday = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            return item === day
        })
            if (cek){
                resolve(cek)
            }else {
                reject(new error ('hari ini bukan hari kerja'))
            }
    },3000)
}





















const getmonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = [ 'januari', 'februari', 'maret', 'april', 
                        'mei', 'juni', ' juli', 'agustus', 'september',
                    'oktober', 'november', 'desember']
        if (!error) {
            callback (null,month)
        }else {
            callback(new error('sorry data not found'), [])
        }
    }, 40000)

}