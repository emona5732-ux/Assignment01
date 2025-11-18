1.What are some differences between interfaces and types in TypeScript?
Answer:Interfaces are ideal for defining object shapes and supporting extension via merging, while types are more flexible and can represent more complex constructs like unions and intersections. In practice, interfaces are great for structural contracts, and types are better for advanced type manipulation.
Example:
// Interfaces can merge
interface User {
  name: string;
}

interface User {
  age: number;
}

// Result: User = { name: string; age: number }


// Types cannot merge — this will throw an error
type Person = {
  name: string;
};

type Person = {
  age: number; //  Error: Duplicate identifier 'Person'
};

2.What is the use of the keyof keyword in TypeScript? Provide an example.

Answer:In TypeScript, the keyof keyword is used to get a union of all the property names of an object type. It allows us to write more type-safe code because we can restrict inputs to only valid keys of an object.
Example:
interface User {
  name: string;
  age: number;
}

type UserKeys = keyof User;
// Result: "name" | "age"

function getValue(obj: User, key: UserKeys) {
  return obj[key];
}

const user: User = { name: "Sam", age: 25 };
getValue(user, "name"); // valid
// getValue(user, "email"); // error: not a valid key

3.Explain the difference between any, unknown, and never types in TypeScript

Answer: In TypeScript, any disables type checking and allows any operation, so it's unsafe.unknown is more secure—it accepts any value but forces you to check the type before using it. And never represents values that can never occur, usually for functions that don't return or unreachable code.

4.What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

Answer:Enums provide a way to define a set of named constants, making code more readable and preventing magic numbers or strings. Numeric enums automatically assign values, while string enums give more descriptive values.

Example: example of numeric enum:
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

let move: Direction = Direction.Up;
console.log(move); // Output: 0

example of string enum:

enum Status {
  Success = "SUCCESS",
  Error = "ERROR",
  Pending = "PENDING"
}

let currentStatus: Status = Status.Pending;
console.log(currentStatus); // Output: "PENDING"

5.Provide an example of using union and intersection types in TypeScript.

Answer: Intersection types merge multiple types, ensuring that a value satisfies all of them, which is useful for combining object shapes or capabilities.

Example: 1.Union types
let value: string | number;

value = "Hello"; //  valid
value = 42;      //  valid
// value = true; // invalid

2.Intersection types

type Person = { name: string };
type Employee = { employeeId: number };

type Staff = Person & Employee;

const staffMember: Staff = {
  name: "Alice",
  employeeId: 123
};



