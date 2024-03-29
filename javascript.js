document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelector('.containerww');
    const jumbos = document.querySelector('.jumbo');
    const thumbs = document.querySelectorAll('.thumb');

    containers.addEventListener('click', function (el) {
        if (el.target.classList.contains('thumb')) {
            jumbos.src = el.target.src;
            jumbos.classList.add('fade');

            setTimeout(function () {
                jumbos.classList.remove('fade')
            }, 500);

            thumbs.forEach(function (thumb) {
                if (thumb.classList.contains('active')){
                    thumb.classList.remove('active')
                }


            });
    
            el.target.classList.add('active')
        }
    });
});


// const containers = document.querySelector('.containerww');
// const jumbos = document.querySelector('.jumbo');
// const thumbs = document.querySelectorAll('.thumb');

// containers.addEventListener('click', function (el) {
//     if (el.target.className == 'thumb') {
//         jumbos.src = el.target.src;
//         jumbos.classList.add('fade');
//     }
// });




// const containers = document.querySelector('.containerww');
// const jumbos = document.querySelector('.jumbo');
// const thumbs = document.querySelectorAll('.thumb');

// containers.addEventListener('click', function (el) {
//     if (el.target.className == 'thumb') {
//         jumbos.src = el.target.src;
//     }
// })




// containers.addEventListener('click', function (e) {
    
//     // cek  yang di click yang di tap
//     if (e.className == 'thumb') {
//         jumbos.src = e.target.src;
//     }

// })