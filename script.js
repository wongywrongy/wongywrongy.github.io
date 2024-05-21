let lastScrollTop = 0;
const header = document.querySelector('.header');
let didScroll;
let delta = 5;
let navbarHeight = header.offsetHeight;

window.addEventListener('scroll', function() {
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    let st = window.pageYOffset;

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If scrolled down and past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        header.style.transform = "translateY(-100%)";
    } else {
        // Scroll Up
        if(st + window.innerHeight < document.body.scrollHeight) {
            header.style.transform = "translateY(0)";
        }
    }

    lastScrollTop = st;
}
