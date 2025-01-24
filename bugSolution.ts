function greeter(person: string): string {
  return "Hello, " + person;
}

function greeter(person: string[]): string {
  return "Hello, " + person.join(" ");
}

let user = ["Jane", "Doe"];

console.log(greeter(user)); // Works now

let user2 = "Jane Doe";

console.log(greeter(user2)); //Works Now