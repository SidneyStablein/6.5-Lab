// Add JavaScript below
window.onload = function() {
    ScrollReveal().reveal('.first', { rotate: {x:0, y:0, z:-50}});
    ScrollReveal().reveal('.second', { origin: 'right'});
    ScrollReveal().reveal('.third', { easing: 'ease-in' });
    ScrollReveal().reveal('.fourth', { rotate: {x:0, y:0, z:20}});
    ScrollReveal().reveal('.fifth', { easing: 'steps(5)' });
    ScrollReveal().reveal('.sixth', { scale: 0.85 });
    ScrollReveal().reveal('.seventh', { rotate: {x:0, y:0, z:-20}});
    ScrollReveal().reveal('.eighth', { scale: 0.75 });
    ScrollReveal().reveal('.ninth', {delay: 1000});
};