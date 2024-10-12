const greatings = 'Cześć'
console.log(greatings);

const person = {
    name: 'Adrian',
    age: 30
}

const {name, age} = person;

console.log(person);
console.log(name);
console.log(age);


const address = {
    city: 'Kraków',
    ...person
}

console.log(address);
