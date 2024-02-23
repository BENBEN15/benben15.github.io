import $ from "jquery";
$(document).ready(function() {

    //Entry header
    const target = document.querySelector('#home-entry-element')
    const body = document.querySelector('body')

    //Args
    const args = {
        root: null,
        rootMargin: "-100px 0px -100px 0px",
        threshold: 1
    }

    function handleCallback(entries, observer){
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                body.classList.add('open')
            } else {
                body.classList.remove('open')
            }
        });
    }

    const observer = new IntersectionObserver(handleCallback, args);

    observer.observe(target);
});