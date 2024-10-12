import { calculate, calculateFat, substractNumber } from "./calculate";
import { differenceInDays } from "date-fns";

// const firstName = 'Adrian';
// const age = 30;

// const header = document.querySelector('.page-header__heading--js');
// console.log(header.innerHTML);

// header.innerHTML = `Nazywam się <span class="special">${firstName}</span> i mam ${age} lat`;

// const emptyElement = document.querySelector('#empty-element');
// emptyElement.innerHTML = '<p>Pusty element</p>'

document.getElementById('audio').play()

const repositoriesContainer = document.querySelector('.repositories--js');
const userName = 'maciekwtf';
const url = `https://api.github.com/users/${userName}/repos`;
const response = fetch(url)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    for(let repository of response) {
      const {name, html_url} = repository;
      const element = `<li><a href="${html_url}" />${name}</a></li>`;
      repositoriesContainer.insertAdjacentHTML('beforeend', element);
    }
  })
  .catch(() => {
    console.log("Error: " + response);
  })
  .finally(() => {
    console.log("Done fetch");
  });

function sumArray(array){
  let suma = 0;
  for (let value of array){
    suma += value;
    
  }
  return suma;
}

const sumaOfDigit = sumArray([1,2,3,5]);
console.log(sumaOfDigit);


document.cookie = 'cistko = mniam';
document.cookie = 'drugiecistko = takieO';

window.sessionStorage.setItem('hello', "world");
window.localStorage.setItem('hello', '{"fist": "world"}');

const firstStorage = window.localStorage.getItem('hello', '{"fist": "world"}');
console.log(firstStorage);
console.log(JSON.parse(firstStorage));

window.localStorage.setItem('toRemove', '{"fist": "world"}');
window.localStorage.removeItem('toRemove');


const button = document.querySelector(".page-header__button--js");
if (button) {
  button.addEventListener("click", () => {
    const header = document.querySelector(".page-header__heading--js h1");
    header.textContent = "Inny text nagłówka";
    console.log("Clicked");
  });
}
const hamburger = document.querySelector(".hamburger--js");
hamburger.addEventListener("click", () => {
  console.log("hamburger");
  const navigation = document.querySelector(".navigation--js");
  navigation.classList.toggle("navigation__open");
});
// function onClick() {
//   const header = document.querySelector('main header h1');
//   header.textContent = "Inny text nagłówka";
//   console.log('Clicked');
// }

if ("JavaScript" != "Java") {
  console.log("JavaScript to nie jest Java");
}

if ("2" == 2 && typeof "2" == typeof 2) {
  console.log("2 == 2");
}

if ("2" === 2) {
  console.log("2 == 2");
}

function hello() {
  console.log("Hello World!");
}

function hello(name, age) {
  console.log("Hello " + name + ". Masz " + age + "lat");
}

const deathStar = {
  diameter: 12000,
  fire: (target) => {
    console.log(`${target} destroyed`);
  },
  isOperating: true,
  levels: 357,
  name: "Death Star",
  population: 10000,
  commander: {
    name: "darth vader",
  },
};

const humanOne = {
  name: "Maciek",
  age: 32,
  address: {
    street: "Warszawska",
    city: "Białystok",
  },
  toString() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};

const humanTwo = {
  name: "Stefan",
  age: 32,
  toString() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};

const humanFour = {
  name: "Adrian",
  age: humanOne.age,
  toString() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};
humanFour.age = humanFour.age + 9;
humanFour.address = humanOne.address;
humanFour.address.city = "Kraków";

hello();
const result = calculate(5);
console.log(result);
console.log(calculateFat(6));

console.log(deathStar);
console.log(deathStar.name);
console.log(deathStar["name"]);
console.log(deathStar["commander"]["name"]);

deathStar.fire("Alderaan");

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

console.log(hello("Adrian", 32));

try {
  console.log(
    differenceInDays(new Date(2021, 5, 5, 5, 0), new Date(2011, 6, 2, 23, 0))
  );
} catch (error) {
  console.log(error);
}

console.log(substractNumber(5, 2));
const array0 = ["kawa", "kavka", "herbata", "matcha", "napoje"];
array0.shift();
const element = array0.pop();
const indexHerbata = array0.indexOf("herbata");

console.log(element + " " + element[3]);
console.log(indexHerbata);

array0.push("kawa", "kavka", "herbata", "matcha", "napoje");
const resultSplice = array0.splice("matcha", 1);
const resultSlice = array0.slice();

console.log(array0);
console.log(resultSplice);
console.log(resultSlice);

for (let i = 0; i < array0.length; i++) {
  console.log(`${i}: ${array0[i]}`);
}

let n = 0;
while (n < array0.length) {
  console.log(`${n}: ${array0[n]}`);
  n++;
}

n = 0;
do {
  console.log(`${n}: ${array0[n]}`);
  n++;
} while (n < array0.length);


for (property in deathStar) {
  console.log(`${property}: ${deathStar[property] }`);
  
}

for (let element of array0) {
  console.log(element);
}