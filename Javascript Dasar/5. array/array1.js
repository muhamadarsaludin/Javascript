// manipulasi array

// 1. menambah isi array
// var arr = [];
// arr[0] = 'nama';
// arr[1] = 'muhamad';
// arr[2] = 'arsal';

// console.log(arr);


//  2. menghapus isi array
// var nama = ['muhamad', 'arsal', 'udin'];
// nama[2] = undefined;
// console.log(nama);


// 3. menampilkan isi array
// var nama = ['muhamad', 'arsal', 'tiya', 'fatmalia'];
// for (var i = 0; i < nama.length; i++) {
//     console.log('Mahasiswa ke-' + (i + 1) + ' ' + nama[i]);
// }

// method pada array
// 1. join
// var kunci !!!!
// var arr = ['muhamad', 'arsal', 'udin'];
// console.log(arr.join(' - '));

// 2. push(menambah data array di belakang) & pop(menghapus data di belakang array) 

// arr.push('tiya');
// arr.pop();
// console.log(arr.join(' - '));

// 3. shift(menghapus depan pada array) & unshift(menambah didepan pada array)
// arr.unshift('dodi');
// arr.shift();
// console.log(arr.join(' - '));

// 4. splice
// splice(indexAwal,maudihapusberapa,elemenbaru1...n)
// arr.splice(1, 0, 'tiya');
// console.log(arr.join(' - '));

// 5. slice
// slice(awal,akhir)
// var arr2 = arr.slice(1, 3);
// console.log(arr2.join(' - '));

// 6. forEach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ['arsal', 'udin', 'abang'];
// angka.forEach(function (e) {
//     console.log(e);
// });

// nama.forEach(function (e, i) {
//     console.log('mahasiswa ke-' + i + ' adalah ' + e);
// })


// 7. map
// var angka2 = angka.map(function (e) {
//     return e * 2;
// });
// console.log(angka2.join(' - '));

// // 8.sort
// var angka3 = [1, 2, 3, 7, 8, 9, 4];
// var angka4 = [1, 2, 3, 10, 5, 20, 8, 9, 30];
// angka3.sort();
// // console.log(arr.join(' - '));
// console.log(angka3.join(' - '));

// angka4.sort();
// console.log(angka4.join(' - '));

// angka4.sort(function (a, b) {
//     return a - b;
// });
// console.log(angka4.join(' - '));

// 9 filter & find

var angka = [1, 2, 5, 6, 8, 10, 15];
var angka2 = angka.filter(function (x) {
    return x > 5;
});
console.log(angka2.join(' - '));