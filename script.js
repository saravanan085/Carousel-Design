let slideposition = 0;
let sliders = document.querySelectorAll('.slider-item');
let totalsliders = sliders.length;

const prevbtn = document.getElementById('prev');
const nextbtn = document.getElementById('next');



prevbtn.addEventListener('click', function () {
    previous();
    updateslider();

});

nextbtn.addEventListener('click', function () {
    forward();
    updateslider();
});
function updateslider() {
    sliders.forEach(slide => {
        slide.classList.add('hide');
        slide.classList.remove('active');
    });
    sliders[slideposition].classList.add('active');
}

function forward() {
    if (slideposition == totalsliders - 1) {
        slideposition = 0;
    } else {
        slideposition++;
    }
}

function previous() {
    if (slideposition == 0) {
        slideposition = totalsliders - 1;
    } else {
        slideposition--;
    }
}

setInterval(() => {
    forward();
    updateslider();

}, 4000);

