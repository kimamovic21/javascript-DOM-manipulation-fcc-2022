// Event Delegation

// It allows users to append a single event listener to a parent element that adds it to all of its present and future descendants that match a selector

document.querySelector('#sports').addEventListener('click', function(e) {
    console.log(e.target.getAttribute('id')+ ' is clicked.');

    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor = '#333';
        target.style.color = '#efefef';
    };
});

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = 'Rugby';
newSport.setAttribute('id', 'rugby');

sports.appendChild(newSport);







// document.querySelector('#football').addEventListener('click', function(e) {
//     console.log('football is clicked');
//     const target = e.target;
//     if(target.matches('li')) {
//         target.style.backgroundColor = '#333';
//         target.style.color = '#efefef';
//     };
// });

// document.querySelector('#basketball').addEventListener('click', function(e) {
//     console.log('basketball is clicked');
//     const target = e.target;
//     if(target.matches('li')) {
//         target.style.backgroundColor = '#333';
//         target.style.color = '#efefef';
//     };
// });

// document.querySelector('#boxing').addEventListener('click', function(e) {
//     console.log('boxing is clicked');
//     const target = e.target;
//     if(target.matches('li')) {
//         target.style.backgroundColor = '#333';
//         target.style.color = '#efefef';
//     };
// });

// document.querySelector('#tennis').addEventListener('click', function(e) {
//     console.log('tennis is clicked');
//     const target = e.target;
//     if(target.matches('li')) {
//         target.style.backgroundColor = '#333';
//         target.style.color = '#efefef';
//     };
// });

// document.querySelector('#golf').addEventListener('click', function(e) {
//     console.log('golf is clicked');
//     const target = e.target;
//     if(target.matches('li')) {
//         target.style.backgroundColor = '#333';
//         target.style.color = '#efefef';
//     };
// });