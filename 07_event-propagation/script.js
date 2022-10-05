// Event propagation

window.addEventListener('click', function() {
    console.log('Window');
}, false);

document.addEventListener('click', function() {
    console.log('Document');
}, false);

document.querySelector('.div2').addEventListener('click', function(e) {
    e.stopPropagation();
    console.log('Div 2');
}, false);

document.querySelector('.div1').addEventListener('click', function() {
    console.log('Div 1');
}, false);

// (e) -> event object 
document.querySelector('button').addEventListener('click', function(e) {
    console.log(e.target.innerText = 'Clicked');
}, false);
