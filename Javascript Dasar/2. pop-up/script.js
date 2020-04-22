// ---------------alert-------------
// alert('Hello World!');
// alert('nama');
// alert('saya');
// alert('muhamad arsaludin');


// ---------------prompt-------------
// var nama = prompt('masukan nama :');
// alert(nama);

// ----------------confirm-----------
// var test = confirm('kamu yakin ?');
// if (test === true) {
//     alert('user menekan ok!');
// } else {
//     alert('user menekan cencel');
// }

// combinasi aplikasi sederhana


alert('Selamat Datang!');
var lagi = true;

while (lagi) {
    var nama = prompt('Masukan Nama Anda :');
    alert('halo ' + nama);

    lagi = confirm('Coba Lagi ?');
}
alert('Terima kasih :*');