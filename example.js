class SuperArray extends Array {
  constructor() {
    super();
  }
  pop() {
    // super.pop();
    console.log('aw snap, crackle');
    return 'pop';
  }
  push(number) {
    if ( this.includes(number) ) {
      return false;
    }
    super.push(number);
  }
}

const list = new SuperArray();
list.push(1);
list.push(1);
list.push(1);
list.push(1);
list.pop();
console.log(list.length);

//

// function Hamster() {}

// typeof Hamster //'function'

// Hamster.prototype // {};

// h = new Hamster() // Hamster {}

// h.constructor // function Hamster() {}

// h.constructor.prototype // {}

// h.constructor.prototype.name = 'Dewey' //'Dewey'

// h.name // 'Dewey'

// Hamster.prototype.roll = function(){console.log('rolling ball')};

// h.roll() //rolling ball

// Hamster.prototype.sayName = function() {
//   console.log(this.name + ' says hi');
// }

// h.sayName() //Dewey says hi




