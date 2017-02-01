// Import your classes here to instantiate them and test them out
const Tenant = require('./lib/tenant');
const Apartment = require('./lib/apartment');
const Building = require('./lib/building');

// Part 1 and 2
// let p1 = new Tenant("Calvin", "Clifford", "male", "December 21, 1929" );
let p1 = new Tenant();
p1.name = 'Calvin Clifford';
p1.nickname = 'Bud';
console.log(p1.fullName);

//Part 3
let a1 = new Apartment('B', 1, 1);
a1.tenants = [];
console.log(a1.tenants.length);

//Part 4
let a2 = new Apartment('A', 2, 1);
console.log(a2.price);

//Part 5
console.log(a1.isStudio);
console.log(a2.isStudio);

//Part 6
let p2 = new Tenant('Fran', 'Kubelik', 'female', 'May 8, 1935');
a1.moveIn(p2);
console.log(a1.tenants.length);

//Part 7
let a3 = new Apartment('C', 3, 2);
console.log(a3.isEmpty);
a3.moveIn(p2);
console.log('I am empty: ' + a3.isEmpty);

let a4 = new Apartment('D', 2, 1);
console.log(a4.isEmpty);
console.log(a4.isFull);
a4.moveIn(p2);
console.log(a4.isFull);
a4.moveIn(p1);
console.log(a4.isFull);

//Part 8
let p3 = new Tenant('Justin', 'Samuels', 'male', 'May 8, 1945');
let p4 = new Tenant('Jason', 'Sims', 'male', 'May 8, 1245');

console.log(a4.moveIn(p3));
console.log(a4.tenants.length);

//Part 9
let b1 = new Building('208 Leonard St', 3);
console.log(b1.apartments);

b1.add(1, a1);
b1.add(1, a2);
b1.add(2, a3);

console.log(b1.floor(1));

console.log(b1.floor(1)[0].price);
console.log(b1.floor(1)[1].price);
console.log(b1.floor(2)[0].price);

console.log('Collective rent is: ' + b1.collectRents());
console.log('This apartment is full: ' + a2.isFull);
console.log(a1.moveIn(p4));
a2.moveIn(p1);
a2.moveIn(p4);
a3.moveIn(p1);
a3.moveIn(p3);
console.log('This apartment is full: ' + a3.isFull);
console.log('We have vacancies: ' + b1.hasVacancies);






