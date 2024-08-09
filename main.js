const firstName = 'Adrian';
const age = 30;

console.log(`Nazywam się ${firstName} i mam ${age} lat`);

const header = document.querySelector('.page-header__heading--js');
console.log(header.innerHTML);

// header.innerHTML = "Hi"

const emptyElement = document.querySelector('#empty-element');
emptyElement.innerHTML = '<p>Pusty element</p>'