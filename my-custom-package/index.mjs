import { upperCase } from "upper-case";
export function greet(name) {
  const greetUser = upperCase(`Hello ${name}, welcome to my tutorial`);
  console.log(greetUser);
  return greetUser;
}
greet("hari");
