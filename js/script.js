$(document).ready(function () {

    // sidebar
    // add a class
    $(".hamburger>i").click(function () {
        $(".sidebar").addClass("sidebar-active");
    });
    // Remove a class
    $(".close").click(function () {
        $(".sidebar").removeClass("sidebar-active");
    });

    // Add a class
    $(".navigation li:first").addClass("menu-active");

    $(".navigation li").click(function () {
        $(".navigation li").removeClass("menu-active");
        $(this).toggleClass("menu-active");
    });

});

window.addEventListener('load', () => {
    const input = document.getElementById('name-input');
    input.focus({ preventScroll: true });
});

