// # Review - Arrays and Objects

// NOTE! Pay close attention to creating code with good and consistent code style.

// 1. Create an array that contains three strings.
let arrayOfString = ["string 1", "string 2", `string3 `];

// 2. Create an array that contains one string, one number and one boolean.
let arrayOfSomePrimitive = ["string", 01, true];

// 3. Create an array that contains three empty arrays.
const emptyArrays = [[], [], []];

// 4. Create an empty object.
// const emptyObject = new Object();
const emptyObject = {};

// 5. Create an object with three properties: id, email, password.
let user = {
    id: 548,
    email: "me@gm.co.uk",
    password: 00001,
};

// 6. Create an array that contains three objects. All objects should have a width and a height property.
let arrayOfObjects = [
    { height: "px", width: "px" },
    { height: "px", width: "px" },
    { height: "px", width: "px" },
];

// 7. Create an object that contains three properties: a string, an array and an object. Invent your own property names and values.
let threePropObject = {
  name: "Unknown",
  addresses: [street = "", city = ""],
  Obj: {}
}

// 8. Print the `type` of a variable that has an array value.
let showArray = [1,2];
console.log(typeof showArray);

// 9. Print the `type` of a variable that has an object value.
const showObject = {}
console.log(typeof showObject);

// 10. Create an array with five random values.
let arrayOfDataType = ['number', "BigInt", "string", "boolean", "symbol"];

// 10.1. Add one value to the end of the array.
arrayOfDataType.push("null")

// 10.2. Add one thing to the beginning of the array.
arrayOfDataType.unshift('undefined')

// 10.3. Take out one thing from the end of the array.
arrayOfDataType.pop()

// 10.4. Print the length of the array.
console.log(arrayOfDataType.length);

// 10.5. Take out one thing from the START of the array.
arrayOfDataType.shift();


// 10.6. Take out one the 2nd thing from the array.
arrayOfDataType.splice(1, 1)