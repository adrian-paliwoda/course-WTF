const counter = document.getElementById("counter");
checkIfAlreadySet();

const myPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Czas minął");
      // resolve("ok");
      reject("No ok");
    });
  });

console.log(myPromise);

myPromise()
  .then((value) => {
    console.log("Then:" + value);
  })
  .catch((reject) => {
    console.log("Catch: " + reject);
  })
  .finally(() => {
    console.log("Done");
  });

const test = async () => {
  try {
    const myObject = await myPromise();
    console.log("Log from async " + myObject);
  } catch (error) {
    console.log("Log from async " + error);
  } finally {
    console.log("Done from async");
  }
};

test();
const userName = 'maciekwtf';
const url = `https://api.github.com/users/${userName}/repos`;
const result = fetch(url)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  })
  .catch(() => {
    console.log("Error: " + response);
  })
  .finally(() => {
    console.log("Done fetch");
  });

// try {
//   const response = await fetch("https://api.github.com/users/maciekwtf/repos");
//   if (!response.ok) {
//     throw new Error(`Response status: ${response.status}`);
//   }
//   const json = await response.json();
//   console.log("Response: " + json);
// } catch (error) {
//   console.log("Error: " + error);
// }

const intervalId = setInterval(() => {
  const key = getDate();
  const alreadyInStorage = window.localStorage.getItem(key);
  if (!alreadyInStorage) {
    numberCounter = 0;
    window.localStorage.setItem(key, numberCounter);
  }
}, 1000 * 60);

// const timeoutId = setTimeout(() => {
//   console.log("Timeout");
//   clearInterval(intervalId);
// }, 5000);

document.getElementById("addGlass").addEventListener("click", () => {
  let numberCounter = parseInt(counter.textContent);
  numberCounter += 1;
  if (numberCounter && numberCounter >= 0) {
    const key = getDate();
    const alreadyInStorage = window.localStorage.getItem(key);
    if (!alreadyInStorage) {
      numberCounter = 0;
    }
    window.localStorage.setItem(key, numberCounter);
    counter.textContent = numberCounter;
  }
});

document.getElementById("removeGlass").addEventListener("click", () => {
  let numberCounter = parseInt(counter.textContent);
  numberCounter -= 1;
  if (numberCounter && numberCounter >= 0) {
    const key = getDate();
    const alreadyInStorage = window.localStorage.getItem(key);
    if (!alreadyInStorage) {
      numberCounter = 0;
    }
    window.localStorage.setItem(key, numberCounter);
    counter.textContent = numberCounter;
  }
});

function getDate() {
  return new Date().toLocaleString().split(",")[0];
}

function checkIfAlreadySet() {
  const key = getDate();
  const value = window.localStorage.getItem(key);
  if (value) {
    counter.textContent = value;
  }
}
