var person = {
    name: "Manoj",
    age: 22,
    email: "palyammanojkumar@gmail.com",
    hobbies: ["Dancing", "Singing", "Reading"]
    };
 console.log(person)

 //dot notation to add a new property called "location"
 person.location="Nikhee"
person["email"]="nikhee@gmail.com"


//create a nested object called "family" with the following properties
var family = {
    mother:{
    name:"haneesha",
    age : 12
    },
    father:{
    name:"dg",
    age: 43
    },
    siblings:[{name:"irfgszgfan",age:26},{name:"fggzasd",age:18}]
    }
    console.log(family);
    greet("sadhana");

 //create a deep clone of the "person" object using the JSON.parse() and JSON.stringify() methods.
var sClone = Object.assign({}, person);
console.log("Shallow clone:", sClone);
var dClone = JSON.parse(JSON.stringify(person))
console.log("Deep clone:", dClone);

//Display the keys, values, and key-value pairs of the "person" object

console.log("Object keys:", Object.keys(person));
console.log("Object values:", Object.values(person));
console.log("Object entries:", Object.entries(person));