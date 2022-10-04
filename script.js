// Traverse the DOM

// Parent Node Traversal

// let ul = document.querySelector('ul');
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;
// console.log(html.parentNode);
// console.log(html.parentElement);



// Child Node Traversal

// let ul = document.querySelector('ul');
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor =  '#333';
// ul.childNodes[1].style.color =  '#efefef';

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);



// Sibling Node Traversal

// let ul = document.querySelector('ul');
// const div = document.querySelector('div');

// console.log(div.childNodes);

// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);


// 37:50 video








// Creating elements

// const ul = document.querySelector('ul');
// const li = document.createElement('li');


// Adding elements
// ul.append(li);


// Modifying the text
// li.innerText = 'X-men';


// Modifying attributes and classes
// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');

// const title = document.querySelector('#main-heading');
// console.log(title.getAttribute('id'));

// li.classList.add('list-items');
// li.classList.remove('list-items');

// console.log(li.classList.contains('list-items'));

// Remove elements 
// li.remove();


// const firstListItem = document.querySelector('.list-items');
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);










// Styling elements

// const title = document.querySelector('#main-heading');

// title.style.color = '#efefef';
// title.style.backgroundColor = '#333';
// title.style.padding = '7px';
// title.style.borderRadius = '10px'

// console.log(title);



// const listItems = document.querySelectorAll('.list-items');

// 1. nacin
// for ( i = 0; i < listItems.length; i++) {
//     listItems[i].style.fontSize = '1.5rem';
// }

// 2. nacin
// for (let listItem of listItems) {
//     listItem.style.fontSize = '1.5rem';
//     console.log(listItem);
// }

// console.log(listItems);
















// DOM Manipulation

// GetElementById()
// let title = document.getElementById('main-heading');
// console.log(title);

// GetElementByClassName()
// let liClassName = document.getElementsByClassName('list-items');
// console.log(liClassName);

// getElementByTagName()
// let liTagName= document.getElementsByTagName('li');
// console.log(liTagName);

// querySelector()
// let singleContainer = document.querySelector('div');
// console.log(singleContainer);

// querySelectorAll()
// let containerAll = document.querySelectorAll('div');
// console.log(containerAll);

