const container = document.querySelector('.container');
const jumbotron = document.querySelector('.jumbotron');
const thumbs = document.querySelectorAll('.thumb');


container.addEventListener('click', function (e) {

    // cek yang diklik apakah thumb
    if (e.target.className == 'thumb') {
        jumbotron.src = e.target.src;
        jumbotron.classList.add('fade');
        setTimeout(function () {
            jumbotron.classList.remove('fade');
        }, 500);

        thumbs.forEach(function (thumb) {
            // cara 1
            // if (thumb.classList.contains('active')) {
            //     thumb.classList.remove('active');
            // }

            // cara 2 paksa 
            thumb.className = 'thumb';
        });

        e.target.classList.add('active');
    }

});