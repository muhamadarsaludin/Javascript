// object literal
// var obj = {
//     a: 10,
//     nama: 'arsal'
// };
// obj.hallo = function () {
//     console.log(this);
//     console.log('hallo');
// }
// obj.hallo();
// mengembalikan object yang bersangkutan



// 2. function declaration
// function hallo() {
//     console.log(this);
//     console.log('hallo');
// }
// this.hallo();
// this mengembalikan object global


// 3. constructor
function Hallo() {
    console.log(this);
    console.log('hallo');
}
new Hallo();
// mengembalikan object yang baru dibuat