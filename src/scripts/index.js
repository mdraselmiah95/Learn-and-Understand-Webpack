import { ABC } from "./test";

const fn = () => {
  console.log("I am learning webpack.");
};
fn();

console.log(ABC);

const info = (a, b) => {
  const name = a;
  const age = b;
  const fullInfo = name + " " + age;
  return fullInfo;
};

const person1 = info("Rasel mia", 26);
console.log(person1);
