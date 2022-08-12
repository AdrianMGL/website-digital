window.onload = function digital_fn() {

    // toggle button
    let toggle = document.querySelector("#nav .toggle-btn");
    let collapse = document.querySelector("#nav .collapse");

    toggle.addEventListener('click', function (event) {
        collapse.classList.toggle('active')
        // console.log(toggle)
    });

    // mansonry js
    let grid = document.querySelector("#site-main .recent-work-area .images-flex");

    let msnry = new Masonry(grid, {
        itemSelector: '.flex-item',
        gutter: 100,
        fitWidth: true,
    })

}
// Rellax 
let rellax = new Rellax('.rellax', {
    center: true
});

// 
/**
 *  sticky navigation
 */

let navbar = $(".navbar");

$(window).scroll(function () {
    // get the complete hight of window
    let oTop = $(".agency-area").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
        navbar.addClass("sticky");
    } else {
        navbar.removeClass("sticky");
    }
});
