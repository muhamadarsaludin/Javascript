var jmlAngkot = 10;
var angkotBeroprasi = 6;

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroprasi && noAngkot !== 5) {
        console.log('Angkot No.' + noAngkot + ' Beroperasi dengan Baik.');
    } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
        console.log('Angkot No. ' + noAngkot + ' Sedang Lembur');
    } else {
        console.log('Angkot No.' + noAngkot + ' Tidak Beroperasi');
    }
}