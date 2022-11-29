function show() {
    document.querySelector('.hamburger').classList.toggle('open')
    document.querySelector('.navigation').classList.toggle('active')
}

const navLinks = document.getElementById('navLinks');

window.addEventListener("scroll", () => {
    var y = window.scrollY;
    if (y >= 130) {
        navLinks.classList.add('disappear');
        return;
    }
    else {
        navLinks.classList.remove('disappear');
    }
});