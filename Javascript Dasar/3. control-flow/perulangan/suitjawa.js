var lagi = true;
while (lagi) {
    //menangkap pilihan player
    var p = prompt('pilih : gajah, semut, manusia');
    // menangkap pilihan komputer
    var comp = Math.random();
    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'manusia';
    } else {
        comp = 'semut';
    }
    // rules
    var hasil = '';

    if (p == comp) {
        hasil = 'SERI!';
    } else if (p == 'gajah') {
        // if (comp == 'semut') {
        //     alert('KALAH!');
        // } else {
        //     alert('MENANG!');
        // }
        hasil = (comp == 'manusia') ? 'MENANG!' : 'KALAH!';
    } else if (p == 'manusia') {
        hasil = (comp == 'semut') ? 'MENANG!' : 'KALAH!';
    } else if (p == 'semut') {
        hasil = (comp == 'gajah') ? 'MENANG!' : 'KALAH!';
    } else {
        hasil = 'pilihan salah!!!';
    }
    // tampilkan hasil

    alert('kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\nmaka hasilnya : ' + hasil);

    lagi = confirm('Main Lagi ?');
}
alert('Terimakasih Sudah Bermain :*');