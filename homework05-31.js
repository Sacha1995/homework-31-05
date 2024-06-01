// Write out the following
// A ternary
const price = 30;

const buy =
  price < 10
    ? "the quality must be bad."
    : price < 20
    ? "What a deal!"
    : price < 40
    ? "Let's buy it."
    : "It is too expensive";

console.log(buy);

// A short circuit
const name = "Bob Ross";
const isTreated = true;
const state = "healthy";

const patientName = name || "name unknow";
console.log(patientName);

const information =
  isTreated && state === "healthy" && `${patientName} has finished treatment`;
console.log(information);

// trying another ternary
let information2 = `${patientName} `;
information2 += isTreated ? "has been treated" : "has not been treated";
information2 +=
  state === "healthy" ? " and is healthy." : " and is not healthy.";

console.log(information2);

// A function with default params
// A fat arrow function
export let add = (x = 1, y = 1) => x + y;

console.log(add(5, 3));
console.log(add());

// Export a function from a file
import { times } from "../JavaScript/homework05-31import.js";

console.log(times(2, 4));
// Import the function above to another file
