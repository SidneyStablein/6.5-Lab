// Add JavaScript below
window.onload = function() {
    ScrollReveal().reveal('.first', {delay: 1000});
    ScrollReveal().reveal('.second', { origin: 'right'});
    ScrollReveal().reveal('.third', { easing: 'cubic-bezier(0.5, 0, 0, 1)' });
    ScrollReveal().reveal('.fourth', { rotate: {x:0, y:0, z:20}});
    ScrollReveal().reveal('.fifth');
    ScrollReveal().reveal('.sixth');
    ScrollReveal().reveal('.seventh', { rotate: {x:0, y:0, z:-20}});
    ScrollReveal().reveal('.eighth');
    ScrollReveal().reveal('.ninth');
};