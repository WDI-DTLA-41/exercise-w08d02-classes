// Import your classes here to instantiate them and test them out
const Tenant = require('./lib/tenant');
const Apartment = require('./lib/apartment');
const Building = require('./lib/building');

let p1 = new Tenant("Calvin", "Clifford", "male", "December 21st, 1929");

// p1.occupation = 'Doctor';
// p1.name = 'David Blaine';
// p1.nickname = 'Bud';
// console.log(p1.full_name);
// console.log(p1);

let a1 = new Apartment('A', 1, 1);
let a2 = new Apartment('B', 2, 1);

console.log(a1, a1.tenants.length, a1.price);
console.log( a2.isStudio() )

a1.moveIn(p1);
console.log(a1);
// console.log(Array.isArray(a1.tenants));
// console.log(a1.tenants[0].constructor);

console.log( a1.isEmpty() );
console.log( a1.isFull() );

let ap1 = new Tenant("Mildred", "Dreyfuss", "female", "July 18, 1942")
let ap2 = new Tenant("Jeff", "Sheldrake", "male", "November 18, 1941")
let ap3 = new Tenant("Joe", "Dobisch", "male", "May 17, 1939")
let a3 = new Apartment("F", 2, 1)

a3.moveIn(ap1)
a3.moveIn(ap2)
console.log(a3);
console.log(a3.isFull());
try {
  a3.moveIn(ap3);
} catch (err) {
  // console.log(err)
  // console.log('2');
}
// console.log(a3.isFull());

let b1 = new Building("208 Leonard St", 3);
b1.apartments
// console.log(b1);
// console.log(b1.apartments) // {}

let ab1 = new Apartment("B", 2, 1)
let ab2 = new Apartment("A", 1, 1)
let ab3 = new Apartment("A", 1, 1)

b1.add(1, ab1);
b1.add(1, ab2);
b1.add(2, ab3);


// console.log(b1.floor(1));
// console.log(b1.floor(2));

console.log(b1.collectRents());

let p71 = new Tenant("Al", "Kirkeby", "male", "January 23, 1949")
ab2.moveIn(p71)

// console.log(ab1);
// console.log(ab1.isFull());
console.log(b1.apartments);
console.log( b1.hasVacancies() );



