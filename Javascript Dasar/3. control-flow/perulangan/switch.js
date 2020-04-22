var item = prompt('masukan nama makanan/minuman : \n contoh : nasi, susu, daging, hamburger, softdrink.');

switch (item) {
    case 'nasi':
        alert('makanan sehat!');
        break
    case 'susu':
        alert('makanan sehat!');
        break
    case 'daging':
        alert('makanan sehat!');
        break
    case 'hamburger':
    case 'softdrink':
        alert('makanan tidak sehat!');
        break
    default:
        alert('makanan/minuman salah');
        break
}