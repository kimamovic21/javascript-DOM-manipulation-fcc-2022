// Styling elements

// Stiliziranje naslova
const title = document.querySelector('#main-heading');

title.style.color = '#efefef';
title.style.backgroundColor = '#333';
title.style.padding = '7px';
title.style.borderRadius = '10px'

console.log(title);


// Stiliziranje li elemenata
const listItems = document.querySelectorAll('.list-items');

// 1. nacin
for ( i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '1.5rem';
}

// 2. nacin
for (let listItem of listItems) {
    listItem.style.fontSize = '1.5rem';
    console.log(listItem);
}

console.log(listItems);