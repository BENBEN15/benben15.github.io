$(document).ready(function() {

    //Target
    const targets = document.querySelectorAll('.on-view-anim')

    //Args
    const args = {
        root: null,
        rootMargin: "-100px 0px -100px 0px",
        threshold: 0
    }

    function handleCallback(entries, observer){
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view')
                observer.unobserve(entry.target)
            }
        });
    }

    const observer = new IntersectionObserver(handleCallback, args);

    targets.forEach(target => {
        observer.observe(target);
    });
});