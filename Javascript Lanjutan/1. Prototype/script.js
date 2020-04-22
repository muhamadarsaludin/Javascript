// cara untuk membuat object pada javascript

// 1. Object Literal
//  PROBLEM : tidak efektif untuk object yang banyak
// let mahasiswa = {
//     nama: 'Arsal',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!`);
//     }
// }

// 2. Function Declaration

// PROBLEM : harus mendaptarkan setiap function sehingga kita harus mengelola 2 object
// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat makan!`);
//     }
// }

// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = methodMahasiswa.makan
//     return mahasiswa;
// }

// let arsal = Mahasiswa('arsal', 20);



// 3. Constructor
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat makan!`);
//     }

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Bermain!`);
//     }
// }

// let arsal = new Mahasiswa('arsal', 20);


// ===================================================


// object.create()

// let methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama}, Selamat Makan`);
//     },
//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`Hallo ${this.nama}, Selamat Bermain`);
//     }
// }


// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     return mahasiswa;
// }

// let arsal = Mahasiswa('Arsal', 100);

// ==================================================

// Prototype 

// function Mahasiswa(nama, energi) {
//     //let this = Object.create(Mahasiswa.prototype);
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `Hallo ${this.nama}, Selamat Makan`;
// }
// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `Hallo ${this.nama}, Selamat Bermain`;
// }

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     return `Hallo ${this.nama}, Selamat Tidur`;
// }

// let arsal = new Mahasiswa('arsal', 100);

// // versi class

// class Mahasiswa {
//     constructor(nama, energi) {
//         this.nama = nama;
//         this.energi = energi;
//     }

//     makan(porsi) {
//         this.energi += porsi;
//         return `Hallo ${this.nama}, Selamat Makan`;
//     }
//     main(jam) {
//         this.energi -= jam;
//         return `Hallo ${this.nama}, Selamat Bermain`;
//     }

//     tidur(jam) {
//         this.energi += jam * 2;
//         return `Hallo ${this.nama}, Selamat Tidur`;
//     }
// }
// let arsal = new Mahasiswa('arsal', 10);