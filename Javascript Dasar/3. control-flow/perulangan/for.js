var jmlAngkot = 10;
var angkotBeroprasi = 6;
var noAngkot = 1;

while (noAngkot <= angkotBeroprasi) {
    console.log('Angkot No.' + noAngkot + ' Beroperasi dengan Baik.');
    noAngkot++;
}
for (noAngkot = angkotBeroprasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
    console.log('Angkot No.' + noAngkot + ' Tidak Beroperasi');
}