// const firstName = 'Adrian';
// const age = 30;

// const header = document.querySelector('.page-header__heading--js');
// console.log(header.innerHTML);

// header.innerHTML = `Nazywam się <span class="special">${firstName}</span> i mam ${age} lat`;

// const emptyElement = document.querySelector('#empty-element');
// emptyElement.innerHTML = '<p>Pusty element</p>'

function calculate(myNumber) {
  console.log("Passed parameter: " + myNumber);
  myNumber = +3;

  return myNumber * 7;
}

function hello() {
    console.log("Hello World!");    
}

const calculateFat = (number) => {
    return number * 8;
}

const deathStar = {
  diameter: 12000,
  fire: (target) => {
    console.log(`${target} destroyed`);
  },
  isOperating: true,
  levels: 357,
  name: 'Death Star',
  population: 10000,
  commander: {
    name: 'darth vader'
  }
}

const humanOne = {
  name: 'Maciek',
  age: 32,
  address: {
    street: 'Warszawska',
    city: 'Białystok'
  },
  toString() {
    return `Name: ${this.name}, Age: ${this.age}`
  }
}

const humanTwo = {
  name: 'Stefan',
  age: 32,  
  toString() {
    return `Name: ${this. name}, Age: ${this.age}`
  }
}

const humanFour = {
  name: 'Adrian',
  age: humanOne.age,
  toString() {
    return `Name: ${this. name}, Age: ${this.age}`
  }
}
humanFour.age = humanFour.age + 9;
humanFour.address = humanOne.address;
humanFour.address.city = 'Kraków';

hello();
const result = calculate(5);
console.log(result);
console.log(calculateFat(6));

console.log(deathStar);
console.log(deathStar.name);
console.log(deathStar["name"]);
console.log(deathStar["commander"]['name']);

deathStar.fire('Alderaan');


humanTwo.age = 35;
console.log(humanOne.toString());
console.log(humanTwo.toString());

const humanThree = humanOne;
humanThree.age = 50;
console.log(humanOne.toString());
console.log(humanTwo.toString());
console.log(humanThree.toString());
console.log(humanOne.address.city);
console.log(humanFour.address.city);

