export function calculate(myNumber) {
  console.log("Passed parameter: " + myNumber);
  myNumber = +3;

  return myNumber * 7;
}

export const calculateFat = (number) => {
  return number * 8;
};

export const substractNumber = (a, b) => {
  return a - b;
}

const tax = "23%"

export default tax;