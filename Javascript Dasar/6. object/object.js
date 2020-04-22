var mhs = {
    // properti
    nama: 'arsal',
    umur: 14,
    ip: [3.89, 3.4, 3.2],
    // metode
    ipk: function () {
        var total = 0;
        var ips = this.ip;
        for (var i = 0; i < ips.length; i++) {
            total += ips[i];
        }
        return total / ips.length;

    }
}

console.log(mhs.ipk());