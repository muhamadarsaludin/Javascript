function jumlahDuaVolumeKubus(a, b) {
    var volumA;
    var volumB;
    var total;
    volumA = a * a * a;
    volumB = b * b * b;
    total = volumA + volumB;
    // total = a * a * a + b * b * b;
    return total;
    // return a * a * a + b * b * b;
}
alert(jumlahDuaVolumeKubus(8, 3));
alert(jumlahDuaVolumeKubus(2, 5));