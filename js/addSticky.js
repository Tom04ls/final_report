document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('.header');
    var siteMenu = document.querySelector('.site-menu');
    var logoHeight = document.querySelector('.header-logo').offsetHeight;
    var stickyPoint = logoHeight;

    window.addEventListener('scroll', function () {
        if (window.scrollY > stickyPoint) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
});
