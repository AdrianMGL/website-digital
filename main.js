window.onload = function digital_fn() {

    // toggle button
    let toggle = document.querySelector("#nav .toggle-btn");
    let collapse = document.querySelector("#nav .collapse");

    toggle.addEventListener('click', function (event) {
        collapse.classList.toggle('active')
        // console.log(toggle)
    });

}