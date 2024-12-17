// object declar

let person = {
    firstName: 'Julykha',
    lastName: 'Begum',
    age: 29,
    isAdmin: true
};
// data add
person.nationality = "Bangladeshi";
// data update
person.firstName = "Rose";
// data delete
delete person.lastName;
console.log(person);
let car = {
    name: 'BMW',
    color: 'yellow',
    // nested object declar
    model: {
        model1: {  
            price: 7000000,
            color: 'red'
        },
        model2: {
            price: 8000000,
            color: 'black'
        },
        model3: {
            price: 6000000,
            color: 'orange'
        },
    }
}
// dot notation        
let userName = person.firstName;
// bracket notation
let name = person['firstName'];
// console.log(name);