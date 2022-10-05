// Event Listeners

// element.addEventListener('event', funcntion);


// Click event

const buttonTwo = document.querySelector('.btn-2');

function alertBtn() {
    alert('I also love javascript');
};

buttonTwo.addEventListener('click', alertBtn);


// Mouseover event

const box3 = document.querySelector('.box-3');

function changeBgColor() {
    box3.style.backgroundColor = '#333';
    box3.style.color = '#efefef';
};
box3.addEventListener('mouseover', changeBgColor);


function resetBgColor() {
    box3.style.backgroundColor = '#efefef';
    box3.style.color = '#333';
}
box3.addEventListener('mouseleave', resetBgColor);
