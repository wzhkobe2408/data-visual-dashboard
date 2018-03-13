var nav = document.querySelector('.top-nav .my-container')


var topOffset = nav.offsetTop

window.onscroll = function() {
    if (window.pageYOffset > topOffset) {
        nav.classList.add('sticky')
    } else {
        nav.classList.remove('sticky')
    }
}
