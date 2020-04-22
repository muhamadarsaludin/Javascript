function getPilihanComputer() {
    const comp = Math.random();
    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}


function getHasil(comp, player) {
    if (player == comp) return 'SERI';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if (player == 'semut') return (comp == 'gajah') ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return (comp == 'semut') ? 'MENANG!' : 'KALAH!';
}

function putar() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(() => {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;

    }, 100)
}

const pilihan = document.querySelectorAll('li img');
let menang = 0;
let kalah = 0;
const pScore = document.querySelector('.pScore');
const cScore = document.querySelector('.cScore');
pScore.innerHTML = 'Player = ' + menang;
cScore.innerHTML = 'Comp = ' + kalah;
pilihan.forEach(pil => {
    pil.addEventListener('click', () => {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putar();

        setTimeout(() => {
            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

            const info = document.querySelector('.info');
            info.innerHTML = hasil;


            if (hasil == 'MENANG!') {
                let scoreMenang = menang += 1;
                pScore.innerHTML = 'Player = ' + scoreMenang;
            }
            if (hasil == 'KALAH!') {
                let scoreKalah = kalah += 1;
                cScore.innerHTML = 'Comp = ' + scoreKalah;
            }
        }, 1000);
    });
});