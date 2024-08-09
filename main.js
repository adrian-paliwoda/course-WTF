const firstName = 'Adrian';
const age = 30;


const header = document.querySelector('.page-header__heading--js');
console.log(header.innerHTML);

header.innerHTML = `Nazywam się <span class="special">${firstName}</span> i mam ${age} lat`;

const emptyElement = document.querySelector('#empty-element');
emptyElement.innerHTML = '<p>Pusty element</p>'