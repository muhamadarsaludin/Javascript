// --------menulis object-----
// 1. object literal
var mhs1 = {
    nama: 'arsal',
    kelas: 'E',
    npm: 1
}

// 2. function declaration
function objectmhs(nama, kelas, npm) {
    var mhs = {}
    mhs.nama = nama;
    mhs.kelas = kelas;
    mhs.npm = npm;
    return mhs;
}
var mhs2 = objectmhs('tiya', 'C', 2);

// 3. constructor
function mahasiswa(nama, kelas, npm) {
    this.nama = nama;
    this.kelas = kelas;
    this.npm = npm;
}
var mhs3 = new mahasiswa('winda', 'C', 3);