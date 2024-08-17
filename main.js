// const firstName = 'Adrian';
// const age = 30;

// const header = document.querySelector('.page-header__heading--js');
// console.log(header.innerHTML);

// header.innerHTML = `Nazywam się <span class="special">${firstName}</span> i mam ${age} lat`;

// const emptyElement = document.querySelector('#empty-element');
// emptyElement.innerHTML = '<p>Pusty element</p>'
const calculateFat = (number) => {
    return number * 8;
}

hello();
const result = calculate(5);
console.log(result);
console.log(calculateFat(6));

function calculate(myNumber) {
  console.log("Passed parameter: " + myNumber);
  myNumber = +3;

  return myNumber * 7;
}

function hello() {
    console.log("Hello World!");    
}


